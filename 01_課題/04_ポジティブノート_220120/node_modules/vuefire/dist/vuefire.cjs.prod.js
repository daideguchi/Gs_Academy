/*!
  * vuefire v3.0.0-alpha.1
  * (c) 2020 Eduardo San Martin Morote
  * @license MIT
  */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vueDemi = require('vue-demi');

/**
 * Walks a path inside an object
 * walkGet({ a: { b: true }}), 'a.b') -> true
 * @param obj
 * @param path
 */
function walkGet(obj, path) {
    // TODO: development warning when target[key] does not exist
    return path.split('.').reduce((target, key) => target[key], obj);
}
/**
 * Deeply set a property in an object with a string path
 * walkSet({ a: { b: true }}, 'a.b', false)
 * @param obj
 * @param path
 * @param value
 * @returns an array with the element that was replaced or the value that was set
 */
function walkSet(obj, path, value) {
    // path can be a number
    const keys = ('' + path).split('.');
    const key = keys.pop(); // split will produce at least one element array
    const target = keys.reduce((target, key) => 
    // TODO: dev errors
    target[key], obj);
    return Array.isArray(target)
        ? target.splice(Number(key), 1, value)
        : (target[key] = value);
}
/**
 * Checks if a variable is an object
 * @param o
 */
function isObject(o) {
    return o && typeof o === 'object';
}
/**
 * Checks if a variable is a Date
 * @param o
 */
function isTimestamp(o) {
    return o.toDate;
}
/**
 * Checks if a variable is a Firestore Document Reference
 * @param o
 */
function isDocumentRef(o) {
    return o && o.onSnapshot;
}
/**
 * Wraps a function so it gets called only once
 * @param fn Function to be called once
 * @param argFn Function to compute the argument passed to fn
 */
function callOnceWithArg(fn, argFn) {
    /** @type {boolean | undefined} */
    let called = false;
    return () => {
        if (!called) {
            called = true;
            return fn(argFn());
        }
    };
}

/**
 * Convert firebase RTDB snapshot into a bindable data record.
 *
 * @param snapshot
 * @return
 */
function createRecordFromRTDBSnapshot(snapshot) {
    const value = snapshot.val();
    const res = isObject(value)
        ? value
        : Object.defineProperty({}, '.value', { value });
    // if (isObject(value)) {
    //   res = value
    // } else {
    //   res = {}
    //   Object.defineProperty(res, '.value', { value })
    // }
    Object.defineProperty(res, '.key', { value: snapshot.key });
    return res;
}
/**
 * Find the index for an object with given key.
 *
 * @param array
 * @param key
 * @return the index where the key was found
 */
function indexForKey(array, key) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]['.key'] === key)
            return i;
    }
    return -1;
}

const DEFAULT_OPTIONS = {
    reset: true,
    serialize: createRecordFromRTDBSnapshot,
    wait: false,
};
/**
 * Binds a RTDB reference as an object
 * @param param0
 * @param options
 * @returns a function to be called to stop listeninng for changes
 */
function rtdbBindAsObject({ target, document, resolve, reject, ops }, extraOptions = DEFAULT_OPTIONS) {
    const key = 'value';
    const options = Object.assign({}, DEFAULT_OPTIONS, extraOptions);
    const listener = document.on('value', (snapshot) => {
        ops.set(target, key, options.serialize(snapshot));
    }
    // TODO: allow passing a cancel callback
    // cancelCallback
    );
    document.once('value', resolve, reject);
    return (reset) => {
        document.off('value', listener);
        if (reset !== false) {
            const value = typeof reset === 'function' ? reset() : null;
            ops.set(target, key, value);
        }
    };
}
/**
 * Binds a RTDB reference or query as an array
 * @param param0
 * @param options
 * @returns a function to be called to stop listeninng for changes
 */
function rtdbBindAsArray({ target, collection, resolve, reject, ops }, extraOptions = DEFAULT_OPTIONS) {
    const options = Object.assign({}, DEFAULT_OPTIONS, extraOptions);
    const key = 'value';
    if (!options.wait)
        ops.set(target, key, []);
    let arrayRef = vueDemi.ref(options.wait ? [] : target[key]);
    const childAdded = collection.on('child_added', (snapshot, prevKey) => {
        const array = vueDemi.unref(arrayRef);
        const index = prevKey ? indexForKey(array, prevKey) + 1 : 0;
        ops.add(array, index, options.serialize(snapshot));
    }
    // TODO: cancelcallback
    );
    const childRemoved = collection.on('child_removed', (snapshot) => {
        const array = vueDemi.unref(arrayRef);
        ops.remove(array, indexForKey(array, snapshot.key));
    }
    // TODO: cancelcallback
    );
    const childChanged = collection.on('child_changed', (snapshot) => {
        const array = vueDemi.unref(arrayRef);
        ops.set(array, indexForKey(array, snapshot.key), options.serialize(snapshot));
    }
    // TODO: cancelcallback
    );
    const childMoved = collection.on('child_moved', (snapshot, prevKey) => {
        const array = vueDemi.unref(arrayRef);
        const index = indexForKey(array, snapshot.key);
        const oldRecord = ops.remove(array, index)[0];
        const newIndex = prevKey ? indexForKey(array, prevKey) + 1 : 0;
        ops.add(array, newIndex, oldRecord);
    }
    // TODO: cancelcallback
    );
    collection.once('value', (data) => {
        const array = vueDemi.unref(arrayRef);
        if (options.wait)
            ops.set(target, key, array);
        resolve(data);
    }, reject);
    return (reset) => {
        collection.off('child_added', childAdded);
        collection.off('child_changed', childChanged);
        collection.off('child_removed', childRemoved);
        collection.off('child_moved', childMoved);
        if (reset !== false) {
            const value = typeof reset === 'function' ? reset() : [];
            ops.set(target, key, value);
        }
    };
}

// TODO: fix type not to be any
function createSnapshot(doc) {
    // TODO: it should create a deep copy instead because otherwise we will modify internal data
    // defaults everything to false, so no need to set
    return Object.defineProperty(doc.data() || {}, 'id', { value: doc.id });
}
function extractRefs(doc, oldDoc, subs) {
    const dataAndRefs = [{}, {}];
    const subsByPath = Object.keys(subs).reduce((resultSubs, subKey) => {
        const sub = subs[subKey];
        resultSubs[sub.path] = sub.data();
        return resultSubs;
    }, {});
    function recursiveExtract(doc, oldDoc, path, result) {
        // make it easier to later on access the value
        oldDoc = oldDoc || {};
        const [data, refs] = result;
        // Add all properties that are not enumerable (not visible in the for loop)
        // getOwnPropertyDescriptors does not exist on IE
        Object.getOwnPropertyNames(doc).forEach((propertyName) => {
            const descriptor = Object.getOwnPropertyDescriptor(doc, propertyName);
            if (descriptor && !descriptor.enumerable) {
                Object.defineProperty(data, propertyName, descriptor);
            }
        });
        // recursively traverse doc to copy values and extract references
        for (const key in doc) {
            const ref = doc[key];
            if (
            // primitives
            ref == null ||
                // Firestore < 4.13
                ref instanceof Date ||
                isTimestamp(ref) ||
                (ref.longitude && ref.latitude) // GeoPoint
            ) {
                data[key] = ref;
            }
            else if (isDocumentRef(ref)) {
                // allow values to be null (like non-existant refs)
                // TODO: better typing since this isObject shouldn't be necessary but it doesn't work
                data[key] =
                    typeof oldDoc === 'object' &&
                        key in oldDoc &&
                        // only copy refs if they were refs before
                        // https://github.com/vuejs/vuefire/issues/831
                        typeof oldDoc[key] != 'string'
                        ? oldDoc[key]
                        : ref.path;
                // TODO: handle subpathes?
                refs[path + key] = ref;
            }
            else if (Array.isArray(ref)) {
                data[key] = Array(ref.length);
                // fill existing refs into data but leave the rest empty
                for (let i = 0; i < ref.length; i++) {
                    const newRef = ref[i];
                    // TODO: this only works with array of primitives but not with nested properties like objects with References
                    if (newRef && newRef.path in subsByPath)
                        data[key][i] = subsByPath[newRef.path];
                }
                // the oldArray is in this case the same array with holes unless the array already existed
                recursiveExtract(ref, oldDoc[key] || data[key], path + key + '.', [
                    data[key],
                    refs,
                ]);
            }
            else if (isObject(ref)) {
                data[key] = {};
                recursiveExtract(ref, oldDoc[key], path + key + '.', [data[key], refs]);
            }
            else {
                data[key] = ref;
            }
        }
    }
    recursiveExtract(doc, oldDoc, '', dataAndRefs);
    return dataAndRefs;
}

const DEFAULT_OPTIONS$1 = {
    maxRefDepth: 2,
    reset: true,
    serialize: createSnapshot,
    wait: false,
};
function unsubscribeAll(subs) {
    for (const sub in subs) {
        subs[sub].unsub();
    }
}
function updateDataFromDocumentSnapshot(options, target, path, snapshot, subs, ops, depth, resolve) {
    const [data, refs] = extractRefs(options.serialize(snapshot), walkGet(target, path), subs);
    ops.set(target, path, data);
    subscribeToRefs(options, target, path, subs, refs, ops, depth, resolve);
}
function subscribeToDocument({ ref, target, path, depth, resolve, ops }, options) {
    const subs = Object.create(null);
    const unbind = ref.onSnapshot((snapshot) => {
        if (snapshot.exists) {
            updateDataFromDocumentSnapshot(options, target, path, snapshot, subs, ops, depth, resolve);
        }
        else {
            ops.set(target, path, null);
            resolve();
        }
    });
    return () => {
        unbind();
        unsubscribeAll(subs);
    };
}
// interface SubscribeToRefsParameter {
//   subs: Record<string, FirestoreSubscription>
//   target: CommonBindOptionsParameter['vm']
//   refs: Record<string, firestore.DocumentReference>
//   path: string | number
//   depth: number
//   resolve: CommonBindOptionsParameter['resolve']
//   ops: CommonBindOptionsParameter['ops']
// }
// NOTE: not convinced by the naming of subscribeToRefs and subscribeToDocument
// first one is calling the other on every ref and subscribeToDocument may call
// updateDataFromDocumentSnapshot which may call subscribeToRefs as well
function subscribeToRefs(options, target, path, subs, refs, ops, depth, resolve) {
    const refKeys = Object.keys(refs);
    const missingKeys = Object.keys(subs).filter((refKey) => refKeys.indexOf(refKey) < 0);
    // unbind keys that are no longer there
    missingKeys.forEach((refKey) => {
        subs[refKey].unsub();
        delete subs[refKey];
    });
    if (!refKeys.length || ++depth > options.maxRefDepth)
        return resolve(path);
    let resolvedCount = 0;
    const totalToResolve = refKeys.length;
    const validResolves = Object.create(null);
    function deepResolve(key) {
        if (key in validResolves) {
            if (++resolvedCount >= totalToResolve)
                resolve(path);
        }
    }
    refKeys.forEach((refKey) => {
        const sub = subs[refKey];
        const ref = refs[refKey];
        const docPath = `${path}.${refKey}`;
        validResolves[docPath] = true;
        // unsubscribe if bound to a different ref
        if (sub) {
            if (sub.path !== ref.path)
                sub.unsub();
            // if has already be bound and as we always walk the objects, it will work
            else
                return;
        }
        subs[refKey] = {
            data: () => walkGet(target, docPath),
            unsub: subscribeToDocument({
                ref,
                target,
                path: docPath,
                depth,
                ops,
                resolve: deepResolve.bind(null, docPath),
            }, options),
            path: ref.path,
        };
    });
}
// TODO: refactor without using an object to improve size like the other functions
function bindCollection(target, collection, ops, resolve, reject, extraOptions = DEFAULT_OPTIONS$1) {
    const options = Object.assign({}, DEFAULT_OPTIONS$1, extraOptions); // fill default values
    const key = 'value';
    if (!options.wait)
        ops.set(target, key, []);
    let arrayRef = vueDemi.ref(options.wait ? [] : target[key]);
    const originalResolve = resolve;
    let isResolved;
    // contain ref subscriptions of objects
    // arraySubs is a mirror of array
    const arraySubs = [];
    const change = {
        added: ({ newIndex, doc }) => {
            arraySubs.splice(newIndex, 0, Object.create(null));
            const subs = arraySubs[newIndex];
            const [data, refs] = extractRefs(options.serialize(doc), undefined, subs);
            ops.add(vueDemi.unref(arrayRef), newIndex, data);
            subscribeToRefs(options, arrayRef, `${key}.${newIndex}`, subs, refs, ops, 0, resolve.bind(null, doc));
        },
        modified: ({ oldIndex, newIndex, doc }) => {
            const array = vueDemi.unref(arrayRef);
            const subs = arraySubs[oldIndex];
            const oldData = array[oldIndex];
            const [data, refs] = extractRefs(options.serialize(doc), oldData, subs);
            // only move things around after extracting refs
            // only move things around after extracting refs
            arraySubs.splice(newIndex, 0, subs);
            ops.remove(array, oldIndex);
            ops.add(array, newIndex, data);
            subscribeToRefs(options, arrayRef, `${key}.${newIndex}`, subs, refs, ops, 0, resolve);
        },
        removed: ({ oldIndex }) => {
            const array = vueDemi.unref(arrayRef);
            ops.remove(array, oldIndex);
            unsubscribeAll(arraySubs.splice(oldIndex, 1)[0]);
        },
    };
    const unbind = collection.onSnapshot((snapshot) => {
        // console.log('pending', metadata.hasPendingWrites)
        // docs.forEach(d => console.log('doc', d, '\n', 'data', d.data()))
        // NOTE: this will only be triggered once and it will be with all the documents
        // from the query appearing as added
        // (https://firebase.google.com/docs/firestore/query-data/listen#view_changes_between_snapshots)
        const docChanges = 
        /* istanbul ignore next */
        typeof snapshot.docChanges === 'function'
            ? snapshot.docChanges()
            : /* istanbul ignore next to support firebase < 5*/
                snapshot.docChanges;
        if (!isResolved && docChanges.length) {
            // isResolved is only meant to make sure we do the check only once
            isResolved = true;
            let count = 0;
            const expectedItems = docChanges.length;
            const validDocs = Object.create(null);
            for (let i = 0; i < expectedItems; i++) {
                validDocs[docChanges[i].doc.id] = true;
            }
            resolve = ({ id }) => {
                if (id in validDocs) {
                    if (++count >= expectedItems) {
                        // if wait is true, finally set the array
                        if (options.wait) {
                            ops.set(target, key, vueDemi.unref(arrayRef));
                            // use the proxy object
                            // arrayRef = target.value
                        }
                        originalResolve(vueDemi.unref(arrayRef));
                        // reset resolve to noop
                        resolve = () => { };
                    }
                }
            };
        }
        docChanges.forEach((c) => {
            change[c.type](c);
        });
        // resolves when array is empty
        // since this can only happen once, there is no need to guard against it
        // being called multiple times
        if (!docChanges.length) {
            if (options.wait) {
                ops.set(target, key, vueDemi.unref(arrayRef));
                // use the proxy object
                // arrayRef = target.value
            }
            resolve(vueDemi.unref(arrayRef));
        }
    }, reject);
    return (reset) => {
        unbind();
        if (reset !== false) {
            const value = typeof reset === 'function' ? reset() : [];
            ops.set(target, key, value);
        }
        arraySubs.forEach(unsubscribeAll);
    };
}
/**
 * Binds a Document to a property of vm
 * @param param0
 * @param extraOptions
 */
function bindDocument(target, document, ops, resolve, reject, extraOptions = DEFAULT_OPTIONS$1) {
    const options = Object.assign({}, DEFAULT_OPTIONS$1, extraOptions); // fill default values
    const key = 'value';
    // TODO: warning check if key exists?
    // const boundRefs = Object.create(null)
    const subs = Object.create(null);
    // bind here the function so it can be resolved anywhere
    // this is specially useful for refs
    resolve = callOnceWithArg(resolve, () => walkGet(target, key));
    const unbind = document.onSnapshot((snapshot) => {
        if (snapshot.exists) {
            updateDataFromDocumentSnapshot(options, target, key, snapshot, subs, ops, 0, resolve);
        }
        else {
            ops.set(target, key, null);
            resolve(null);
        }
    }, reject);
    return (reset) => {
        unbind();
        if (reset !== false) {
            const value = typeof reset === 'function' ? reset() : null;
            ops.set(target, key, value);
        }
        unsubscribeAll(subs);
    };
}

/**
 * Returns the original reference of a Firebase reference or query across SDK versions.
 *
 * @param {firebase.database.Reference|firebase.database.Query} refOrQuery
 * @return {firebase.database.Reference}
 */
function getRef(refOrQuery) {
    return refOrQuery.ref;
}
const ops = {
    set: (target, key, value) => walkSet(target, key, value),
    add: (array, index, data) => array.splice(index, 0, data),
    remove: (array, index) => array.splice(index, 1),
};
function internalBind(target, key, source, unbinds, options) {
    return new Promise((resolve, reject) => {
        let unbind;
        if (Array.isArray(target.value)) {
            unbind = rtdbBindAsArray({
                target,
                collection: source,
                resolve,
                reject,
                ops,
            }, options);
        }
        else {
            unbind = rtdbBindAsObject({
                target,
                document: source,
                resolve,
                reject,
                ops,
            }, options);
        }
        unbinds[key] = unbind;
    });
}
function internalUnbind(key, unbinds, reset) {
    if (unbinds && unbinds[key]) {
        unbinds[key](reset);
        delete unbinds[key];
    }
    // TODO: move to $unbind
    // delete vm._firebaseSources[key]
    // delete vm._firebaseUnbinds[key]
}
const defaultOptions = {
    bindName: '$rtdbBind',
    unbindName: '$rtdbUnbind',
    serialize: DEFAULT_OPTIONS.serialize,
    reset: DEFAULT_OPTIONS.reset,
    wait: DEFAULT_OPTIONS.wait,
};
const rtdbUnbinds = new WeakMap();
/**
 * Install this plugin if you want to add `$bind` and `$unbind` functions. Note
 * this plugin is not necessary if you exclusively use the Composition API.
 *
 * @param app
 * @param pluginOptions
 */
const rtdbPlugin = function rtdbPlugin(app, pluginOptions = defaultOptions) {
    // TODO: implement
    // const strategies = Vue.config.optionMergeStrategies
    // strategies.firebase = strategies.provide
    const globalOptions = Object.assign({}, defaultOptions, pluginOptions);
    const { bindName, unbindName } = globalOptions;
    const GlobalTarget = vueDemi.isVue3
        ? app.config.globalProperties
        : app.prototype;
    GlobalTarget[unbindName] = function rtdbUnbind(key, reset) {
        internalUnbind(key, rtdbUnbinds.get(this), reset);
        delete this.$firebaseRefs[key];
    };
    // add $rtdbBind and $rtdbUnbind methods
    GlobalTarget[bindName] = function rtdbBind(key, source, userOptions) {
        const options = Object.assign({}, globalOptions, userOptions);
        const target = vueDemi.toRef(this.$data, key);
        let unbinds = rtdbUnbinds.get(this);
        if (unbinds) {
            if (unbinds[key]) {
                unbinds[key](
                // if wait, allow overriding with a function or reset, otherwise, force reset to false
                // else pass the reset option
                options.wait
                    ? typeof options.reset === 'function'
                        ? options.reset
                        : false
                    : options.reset);
            }
        }
        else {
            rtdbUnbinds.set(this, (unbinds = {}));
        }
        const promise = internalBind(target, key, source, unbinds, options);
        // TODO:
        // @ts-ignore
        // this._firebaseSources[key] = source
        this.$firebaseRefs[key] = getRef(source);
        return promise;
    };
    // handle firebase option
    app.mixin({
        beforeCreate() {
            this.$firebaseRefs = Object.create(null);
        },
        created() {
            let bindings = this.$options.firebase;
            if (typeof bindings === 'function')
                bindings =
                    // @ts-ignore
                    bindings.call(this);
            if (!bindings)
                return;
            for (const key in bindings) {
                // @ts-ignore
                this[bindName](key, bindings[key], globalOptions);
            }
        },
        beforeUnmount() {
            const unbinds = rtdbUnbinds.get(this);
            if (unbinds) {
                for (const key in unbinds) {
                    unbinds[key]();
                }
            }
            // @ts-ignore
            this.$firebaseRefs = null;
        },
    });
};
function bind(target, reference, options) {
    const unbinds = {};
    rtdbUnbinds.set(target, unbinds);
    const promise = internalBind(target, '', reference, unbinds, options);
    // TODO: SSR serialize the values for Nuxt to expose them later and use them
    // as initial values while specifying a wait: true to only swap objects once
    // Firebase has done its initial sync. Also, on server, you don't need to
    // create sync, you can read only once the whole thing so maybe internalBind
    // should take an option like once: true to not setting up any listener
    if (vueDemi.getCurrentInstance()) {
        vueDemi.onBeforeUnmount(() => {
            unbind(target, options && options.reset);
        });
    }
    return promise;
}
const unbind = (target, reset) => internalUnbind('', rtdbUnbinds.get(target), reset);

const ops$1 = {
    set: (target, key, value) => walkSet(target, key, value),
    add: (array, index, data) => array.splice(index, 0, data),
    remove: (array, index) => array.splice(index, 1),
};
function internalBind$1(target, docOrCollectionRef, options) {
    let unbind;
    const promise = new Promise((resolve, reject) => {
        unbind = ('where' in docOrCollectionRef ? bindCollection : bindDocument)(target, 
        // the type is good because of the ternary
        docOrCollectionRef, ops$1, resolve, reject, options);
    });
    return [promise, unbind];
}
function internalUnbind$1(key, unbinds, reset) {
    if (unbinds && unbinds[key]) {
        unbinds[key](reset);
        delete unbinds[key];
    }
}
const defaultOptions$1 = {
    bindName: '$bind',
    unbindName: '$unbind',
    serialize: DEFAULT_OPTIONS$1.serialize,
    reset: DEFAULT_OPTIONS$1.reset,
    wait: DEFAULT_OPTIONS$1.wait,
};
const firestoreUnbinds = new WeakMap();
/**
 * Install this plugin to add `$bind` and `$unbind` functions. Note this plugin
 * is not necessary if you exclusively use the Composition API
 *
 * @param app
 * @param pluginOptions
 */
const firestorePlugin = function firestorePlugin(app, pluginOptions = defaultOptions$1) {
    // const strategies = app.config.optionMergeStrategies
    // TODO: implement
    // strategies.firestore =
    const globalOptions = Object.assign({}, defaultOptions$1, pluginOptions);
    const { bindName, unbindName } = globalOptions;
    const GlobalTarget = vueDemi.isVue3
        ? app.config.globalProperties
        : app.prototype;
    GlobalTarget[unbindName] = function firestoreUnbind(key, reset) {
        internalUnbind$1(key, firestoreUnbinds.get(this), reset);
        delete this.$firestoreRefs[key];
    };
    GlobalTarget[bindName] = function firestoreBind(key, docOrCollectionRef, userOptions) {
        const options = Object.assign({}, globalOptions, userOptions);
        const target = vueDemi.toRef(this.$data, key);
        let unbinds = firestoreUnbinds.get(this);
        if (unbinds) {
            if (unbinds[key]) {
                unbinds[key](
                // if wait, allow overriding with a function or reset, otherwise, force reset to false
                // else pass the reset option
                options.wait
                    ? typeof options.reset === 'function'
                        ? options.reset
                        : false
                    : options.reset);
            }
        }
        else {
            firestoreUnbinds.set(this, (unbinds = {}));
        }
        const [promise, unbind] = internalBind$1(target, docOrCollectionRef, options);
        unbinds[key] = unbind;
        // @ts-ignore we are allowed to write it
        this.$firestoreRefs[key] = docOrCollectionRef;
        return promise;
    };
    app.mixin({
        beforeCreate() {
            this.$firestoreRefs = Object.create(null);
        },
        created() {
            const { firestore } = this.$options;
            const refs = typeof firestore === 'function' ? firestore.call(this) : firestore;
            if (!refs)
                return;
            for (const key in refs) {
                this[bindName](key, 
                // @ts-ignore: FIXME: there is probably a wrong type in global properties
                refs[key], globalOptions);
            }
        },
        beforeUnmount() {
            const unbinds = firestoreUnbinds.get(this);
            if (unbinds) {
                for (const subKey in unbinds) {
                    unbinds[subKey]();
                }
            }
            // @ts-ignore we are allowed to write it
            this.$firestoreRefs = null;
        },
    });
};
// TODO: allow binding a key of a reactive object?
function bind$1(target, docOrCollectionRef, options) {
    const unbinds = {};
    firestoreUnbinds.set(target, unbinds);
    const [promise, unbind] = internalBind$1(target, docOrCollectionRef, options);
    // TODO: SSR serialize the values for Nuxt to expose them later and use them
    // as initial values while specifying a wait: true to only swap objects once
    // Firebase has done its initial sync. Also, on server, you don't need to
    // create sync, you can read only once the whole thing so maybe internalBind
    // should take an option like once: true to not setting up any listener
    if (vueDemi.getCurrentInstance()) {
        vueDemi.onBeforeUnmount(() => {
            unbind(options && options.reset);
        });
    }
    return promise;
}
const unbind$1 = (target, reset) => internalUnbind$1('', firestoreUnbinds.get(target), reset);

exports.firestoreBind = bind$1;
exports.firestorePlugin = firestorePlugin;
exports.firestoreUnbind = unbind$1;
exports.rtdbBind = bind;
exports.rtdbPlugin = rtdbPlugin;
exports.rtdbUnbind = unbind;
