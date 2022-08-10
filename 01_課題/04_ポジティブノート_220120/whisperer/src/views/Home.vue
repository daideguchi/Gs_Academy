<template>
  <div class="home">
    <div class="list">
      <li v-for="whisper in orderBy(whispers,'date',-1)" :key="whisper.id" class="item"> <!-- 'v-for'の中身を変更-->
        {{ whisper.content }}
        {{ whisper.uid }}
      </li>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { db } from "../main";
import Vue2Filters from 'vue2-filters' 


export default {
  name: "Home",
  components: {},
  data() {
    return {
      whispers: [],
    };
  },
  firestore() {
    return {
      whispers: db.collection("chat"),
    };
  },
  components:{
  },
    mixins: [Vue2Filters.mixin] 

}
</script>
