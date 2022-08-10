// ページの読み込み完了と同時に実行されるよう指定
// おはじきの個数を10個にセット
window.onload = firstscript;
function firstscript() {
    //ボタンを10個にセット
    document.getElementById("button1").style.visibility = "visible";
    document.getElementById("button2").style.visibility = "visible";
    document.getElementById("button3").style.visibility = "visible";
    document.getElementById("button4").style.visibility = "visible";
    document.getElementById("button5").style.visibility = "visible";
    document.getElementById("button6").style.visibility = "visible";
    document.getElementById("button7").style.visibility = "visible";
    document.getElementById("button8").style.visibility = "visible";
    document.getElementById("button9").style.visibility = "visible";
    document.getElementById("button10").style.visibility = "visible";
    document.getElementById("button11").style.visibility = "hidden";
    document.getElementById("button12").style.visibility = "hidden";
    document.getElementById("button13").style.visibility = "hidden";
    document.getElementById("button14").style.visibility = "hidden";
    document.getElementById("button15").style.visibility = "hidden";
    document.getElementById("button16").style.visibility = "hidden";
    document.getElementById("button17").style.visibility = "hidden";
    document.getElementById("button18").style.visibility = "hidden";
    document.getElementById("button19").style.visibility = "hidden";

    //おはじきの残機を初期値にセット
    document.getElementById("z_lifepoint1").style.visibility = "visible";
    document.getElementById("z_lifepoint2").style.visibility = "visible";
    document.getElementById("z_lifepoint3").style.visibility = "visible";
    document.getElementById("z_lifepoint4").style.visibility = "visible";
    document.getElementById("z_lifepoint5").style.visibility = "visible";
    document.getElementById("z_lifepoint6").style.visibility = "visible";
    document.getElementById("z_lifepoint7").style.visibility = "visible";
    document.getElementById("z_lifepoint8").style.visibility = "visible";
    document.getElementById("z_lifepoint9").style.visibility = "visible";
    document.getElementById("z_lifepoint10").style.visibility = "visible";
    document.getElementById("z_lifepoint11").style.visibility = "hidden";
    document.getElementById("z_lifepoint12").style.visibility = "hidden";
    document.getElementById("z_lifepoint13").style.visibility = "hidden";
    document.getElementById("z_lifepoint14").style.visibility = "hidden";
    document.getElementById("z_lifepoint15").style.visibility = "hidden";
    document.getElementById("z_lifepoint16").style.visibility = "hidden";
    document.getElementById("z_lifepoint17").style.visibility = "hidden";
    document.getElementById("z_lifepoint18").style.visibility = "hidden";
    document.getElementById("z_lifepoint19").style.visibility = "hidden";
    document.getElementById("z_lifepoint20").style.visibility = "hidden";
    document.getElementById("a_lifepoint1").style.visibility = "visible";
    document.getElementById("a_lifepoint2").style.visibility = "visible";
    document.getElementById("a_lifepoint3").style.visibility = "visible";
    document.getElementById("a_lifepoint4").style.visibility = "visible";
    document.getElementById("a_lifepoint5").style.visibility = "visible";
    document.getElementById("a_lifepoint6").style.visibility = "visible";
    document.getElementById("a_lifepoint7").style.visibility = "visible";
    document.getElementById("a_lifepoint8").style.visibility = "visible";
    document.getElementById("a_lifepoint9").style.visibility = "visible";
    document.getElementById("a_lifepoint10").style.visibility = "visible";
    document.getElementById("a_lifepoint11").style.visibility = "hidden";
    document.getElementById("a_lifepoint12").style.visibility = "hidden";
    document.getElementById("a_lifepoint13").style.visibility = "hidden";
    document.getElementById("a_lifepoint14").style.visibility = "hidden";
    document.getElementById("a_lifepoint15").style.visibility = "hidden";
    document.getElementById("a_lifepoint16").style.visibility = "hidden";
    document.getElementById("a_lifepoint17").style.visibility = "hidden";
    document.getElementById("a_lifepoint18").style.visibility = "hidden";
    document.getElementById("a_lifepoint19").style.visibility = "hidden";
    document.getElementById("a_lifepoint20").style.visibility = "hidden";
    //ページロード時、最初に全て隠して、
    //ルーレットが終わったら表示させる
    document.getElementById("page_zentai").style.display = "none";
    document.getElementById("win").style.display = "none";
    document.getElementById("lose").style.display = "none";
    document.getElementById("gameover").style.display = "none";
    document.getElementById("roulette_kekka_button").style.display = "none";
}




//1分タイマーをセット
let timer_ID;                               //【タイマーID】
let time = 120;                              // timeの初期化

function minusTime() {
    time--;                                 // timeの更新
    dispTime();                             // timeの表示	
    if (time == 0) {
        clearInterval(timer_ID);         //【タイマーの消去】
        setTimeout(gameover, 1500)
    }
}

function dispTime() {
    document.getElementsByTagName("output")[0].innerHTML = time;
}





const m = ["先行", "後攻"];
// let timer;

let clickedStart = () => timer = setInterval(
    () => isPlace.textContent = m[Math.floor(Math.random() * m.length)],
    50
);



// document.getElementById("start")
//     .addEventLastener("click", function () {
//         isPlase.textContent = Math.floor(Math.random() * 2)
//     });


// let clickedStop = () => clearInterval(timer);
document.getElementById("stop")
    .addEventListener("click", function () {
        clearInterval(timer)
        if (isPlace.textContent === "先行") { sen_kou = 0 }
        else { sen_kou = 1 }
        let element = document.getElementById('roulette_kekka');
        element.innerHTML = `あなたは${isPlace.textContent}です。`
        document.getElementById("start").style.display = "none";
        document.getElementById("stop").style.display = "none";

        document.getElementById("roulette_kekka_button").style.display = "block";

    });

//ルーレットが終わった後、OKボタン押した時の処理
document.getElementById("roulette_kekka_button")
    .addEventListener("click", function () {
        document.getElementById("roulette1").style.display = "none";
        document.getElementById("roulette_kekka").style.display = "none";
        document.getElementById("roulette_kekka_button").style.display = "none";
        document.getElementById("page_zentai").style.display = "block";
        document.getElementById("gamestart_mozi").style.display = "none";
        document.getElementById("tuginotaisen").style.display = "none";
        document.getElementById("senkou_disp").style.display = "none";
        document.getElementById("koukou_disp").style.display = "none";
        document.getElementById("sen_setumei").style.display = "none";
        document.getElementById("kou_setumei").style.display = "none";

        dispTime();
        timer_ID = setInterval("minusTime()", 1000);    //【タイマーの設定】

        topsetumei();

        count = 1

        // if (sen_kou === 0) {
        //     document.getElementById("koukou_disp").style.display = "none";
        // } else {
        //     document.getElementById("senkou_disp").style.display = "none";

        // }
        // window.setTimeout(mozikesshi, 1000);

    });





//ゲームスタートの文字消し
function mozikeshi() {
    document.getElementById("gamestart_mozi").style.display = "none";

}



//表示・非表示の設定はここから↓
// function hidden() {
//     document.getElementById("div1").style.display = "none";
//     document.getElementById("div2").style.display = "none";
//     document.getElementById("div3").style.display = "none";
// }




//カウントダウン機能つける
//何回戦目か入れる count
//吹き出しでセリフつけたらおもしろい









//自分のパラメータを取得
let playername = "自分"
let temochi = 10
let max = "/20"

// 敵のパラメータを取得
let enemyname = "敵(CPU)"
let temochi_aite = 20 - temochi

//フィールドに値を表示→数値は操作を進めるに当たって変わる
//youtubeの戦闘アプリを作るやつ参照
//https://www.youtube.com/watch?v=Rtee7FF-rb4

function insertText(id, text) {
    document.getElementById(id)
        .textContent = text
}
insertText("playerName", playername)
insertText("currentPlayerHp", temochi)
insertText("maxPlayerHp", max)
insertText("enemyName", enemyname)
insertText("currentEnemyHp", temochi_aite)
insertText("maxEnemyHp", max)


//トップ説明の表示・非表示
let topsetumei = function () {
    if (sen_kou === 0) {
        document.getElementById("sen_setumei").style.display = "block";
        document.getElementById("senkou_bet").style.display = "block";
        document.getElementById("koukou_bet").style.display = "none";


    } else {
        document.getElementById("kou_setumei").style.display = "block";
        document.getElementById("senkou_bet").style.display = "none";
        document.getElementById("koukou_bet").style.display = "block";

    }
    document.getElementById("ikutu_bet_suru").style.display = "block";
    document.getElementById("zibunnobetsuu").style.display = "block";

}


//先行後攻のキーを表示・非表示
let senkoukoukou = function () {
    if (sen_kou === 0) {
        document.getElementById("senkou_disp").style.display = "block";
    } else {
        document.getElementById("koukou_disp").style.display = "block";

    }
}

//endGameがtrueになればゲーム終了
let endGame = false;


// 押されたボタンの個数を表示する。
//this.nameのインスタンスの中で、nameの数値を取得し、表示
function getId(value_name) {
    let ohazikinumber = value_name
    resultForm.value = aaa = `${ohazikinumber}`

    senkoukoukou();
}

/////先行//////////////////////////////////////////////////////

////偶数を押しても、奇数を押しても同じ関数処理に飛ばす
////gu_kiに、自分の選択結果を格納し、相手の手持ちと比較する

//先行で偶数選択
document.getElementById("button_guu")
    .addEventListener("click", function () {
        gu_ki = 0
        senkou_syori();
    });

document.getElementById("button_ki")
    .addEventListener("click", function () {
        gu_ki = 1
        senkou_syori();
    });

///////////先行の処理/////////////////////////////////////////
let senkou_syori = function () {

    document.getElementById("sen_setumei").style.display = "none";
    document.getElementById("ikutu_bet_suru").style.display = "none";
    document.getElementById("zibunnobetsuu").style.display = "none";
    document.getElementById("senkou_disp").style.display = "none";


    // 自分はどれだけ賭けるか（自分の手の中を決める）
    //グローバル変数内(aaa)→(選んだベット数)の賭けたおはじき数を数値に変換
    total = parseFloat(aaa) + 0
    zibun_ohaziki = total

    //相手のベット数を決める
    // let hantei = Math.floor(Math.random() * 2 + 1);

    if (temochi_aite === 4) {
        aite_ohaziki = Math.floor(Math.random() * 4 + 1);
    }
    else if (temochi_aite === 3) {
        aite_ohaziki = Math.floor(Math.random() * 3 + 1);
    }
    else if (temochi_aite === 2) {
        aite_ohaziki = Math.floor(Math.random() * 2 + 1);
    }
    else if (temochi_aite === 1) {
        aite_ohaziki = 1
        hantei = 1
    }
    else {
        aite_ohaziki = Math.floor(Math.random() * 5 + 1);
    }

    //相手の手の予想結果
    if (gu_ki === 0) {
        gu_ki_h = "偶数"
    } else {
        gu_ki_h = "奇数"
    }

    //相手のベットが偶数か奇数か判定する
    aite_gu_ki = aite_ohaziki % 2;
    if (aite_gu_ki === 1) {
        aite_gu_ki_hantei_h = "奇数";
    }
    else {
        aite_gu_ki_hantei_h = "偶数";
    }


    if (aite_gu_ki === gu_ki) {
        // 自分のベット数ゲット
        temochi += zibun_ohaziki
        temochi_aite -= zibun_ohaziki
        k_syouhaikekka1 = "勝ち"
        k_syouhaikekka2 = "自分がベットしたおはじきをもらえます。→ +"
        k_syouhaikekka3 = zibun_ohaziki
    }
    //違ったら賭けた数をマイナス
    else {
        temochi -= zibun_ohaziki
        temochi_aite += zibun_ohaziki
        k_syouhaikekka1 = "負け"
        k_syouhaikekka2 = "自分がベットしたおはじきを失います。→ -"
        k_syouhaikekka3 = zibun_ohaziki

    }

    document.getElementById("kekka").style.display = "block";

    let element = document.getElementById('kekka');
    element.innerHTML = `<p class="kekka_moji2">自分のターン勝敗結果</p>
        <p class ="kekka_moji">相手の手の中は →→→
        <b>${aite_gu_ki_hantei_h}(${aite_ohaziki}個)でした。</b></p>
        <p class="kekka_moji">あなたは<b>${gu_ki_h}</b>を予想したので、
        <b>あなたの${k_syouhaikekka1}。</b></p>
        <p>${k_syouhaikekka2}<b>${k_syouhaikekka3}</b>
        <div class="kekka_hyouzi">
        <p>自分のベット数・・・「${zibun_ohaziki}」</p>
        </div>
        `

    insertText("currentPlayerHp", temochi)
    insertText("currentEnemyHp", temochi_aite)

    //ボタンの表示を手持ち数に合わせるための関数
    button_event();


    //勝敗が決まった時の処理///////////////////////////////
    syouhaihantei();
    //終了するかどうかの判断///////////////////////////////

    //次のターンへのボタンを表示させる
    document.getElementById("tuginotaisen").style.display = "block";


    //何回戦かカウントする
    count = count + 1

}

//戦い後、結果を確認し次のターンに行く時の処理
document.getElementById("tuginotaisen")
    .addEventListener("click", function () {
        document.getElementById("ikutu_bet_suru").style.display = "block";
        document.getElementById("zibunnobetsuu").style.display = "block";
        document.getElementById("kekka").style.display = "none";
        document.getElementById("tuginotaisen").style.display = "none";

        //先行の場合sen_kouが0なので1足して後攻フラグに切り替え
        if (sen_kou === 0) {
            sen_kou = sen_kou + 1
        } else {
            sen_kou = sen_kou - 1
        }
        topsetumei();
    });



//////後攻////////
//相手のターン
//後攻 相手が自分の手の中を予想する
document.getElementById("koukou_b")
    .addEventListener("click", function () {

        document.getElementById("kou_setumei").style.display = "none";
        document.getElementById("ikutu_bet_suru").style.display = "none";
        document.getElementById("zibunnobetsuu").style.display = "none";
        document.getElementById("koukou_disp").style.display = "none";

        // 自分の手の中を決める
        //グローバル変数内(aaa)の賭けたおはじきの数を数値に変換
        total = parseFloat(aaa) + 0
        zibun_ohaziki = total

        //自分のおはじきが偶数か奇数か判定
        zibun_gu_ki = zibun_ohaziki % 2;
        if (zibun_gu_ki === 1) {
            zibun_gu_ki_hantei_h = "奇数";
        }
        else {
            zibun_gu_ki_hantei_h = "偶数";
        }

        //相手のベット数を決める
        if (temochi_aite === 4) {
            aite_ohaziki = Math.floor(Math.random() * 4 + 1);
        }
        else if (temochi_aite === 3) {
            aite_ohaziki = Math.floor(Math.random() * 3 + 1);
        }
        else if (temochi_aite === 2) {
            aite_ohaziki = Math.floor(Math.random() * 2 + 1);
        }
        else if (temochi_aite === 1) {
            aite_ohaziki = 1
        }
        else {
            aite_ohaziki = Math.floor(Math.random() * 5 + 1);
        }

        //相手の予想を決める 偶数か奇数か予想してもらう
        aite_yosou = Math.floor(Math.random() * 2);

        if (aite_yosou === 1) {
            aiteyosou_hantei_h = "奇数";
        }
        else {
            aiteyosou_hantei_h = "偶数";
        }

        if (aite_yosou === zibun_gu_ki) {
            //相手の予想が当たり→自分の負け
            //相手のベット数が取られる
            temochi -= aite_ohaziki
            temochi_aite += aite_ohaziki
            k_syouhaikekka4 = "負け"
            k_syouhaikekka5 = "相手がベットしたおはじきを失います → -"
            k_syouhaikekka6 = aite_ohaziki

        }
        //相手の予想が外れたら自分の勝ち
        //相手のベット数をもらえる
        else {
            temochi += aite_ohaziki
            temochi_aite -= aite_ohaziki
            k_syouhaikekka4 = "勝ち"
            k_syouhaikekka5 = "相手がベットしたおはじきをもらえます → +"
            k_syouhaikekka6 = aite_ohaziki
        }

        document.getElementById("kekka").style.display = "block";

        let element = document.getElementById('kekka');
        element.innerHTML = `<p class="kekka_moji2">相手のターン勝敗結果</p>
        <p class="kekka_moji">相手の予想は →→→
        <b>「${aiteyosou_hantei_h}」</b>でした。</p>
        <p class="kekka_moji">あなたは<b>${zibun_gu_ki_hantei_h}（${zibun_ohaziki}個）のおはじきを選択</b>
        しましたので、<b>あなたの${k_syouhaikekka4}</b>。</p>

        <br><p>${k_syouhaikekka5}${k_syouhaikekka6}</p>
        <div class="kekka_hyouzi">
        <p>相手のベット数・・・「${aite_ohaziki}」</p></div>
        `

        insertText("currentPlayerHp", temochi)
        insertText("currentEnemyHp", temochi_aite)

        button_event();

        syouhaihantei();


        //次のターンへのボタンを表示させる
        document.getElementById("tuginotaisen").style.display = "block";

        count = count + 1
    });


let syouhaihantei = function () {
    if (temochi_aite <= 0) {
        //勝ち
        gemeend_win_cyousei();
        temochi = 20
        temochi_aite = 0
        insertText("currentPlayerHp", temochi)
        insertText("currentEnemyHp", temochi_aite)
        endGame_();
        score = time / 2 + 40
        document.getElementById("timer").style.display = "none";
        time = 1000000
        document.getElementById("tuginotaisen").style.display = "none";
        setTimeout(win_syori, 1500)

    }
    else if (temochi <= 0) {
        //負け
        gemeend_lose_cyousei();
        temochi = 0
        temochi_aite = 20
        insertText("currentPlayerHp", temochi)
        insertText("currentEnemyHp", temochi_aite)
        endGame_();
        score = time / 2 + 40
        document.getElementById("timer").style.display = "none";
        time = 1000000
        document.getElementById("tuginotaisen").style.display = "none";
        setTimeout(lose_syori, 1500)
        insertText("score", score)


    }

}

//settimeout///少し時間おいて次のページへ


// 勝った時の処理
let win_syori = function () {
    window.location.href = 'win.html';

    // document.getElementById("win").style.display = "block";
    // document.getElementById("page_zentai").style.display = "none";
}

//負けた時の処理
let lose_syori = function () {
    window.location.href = 'lose.html';
    // document.getElementById("lose").style.display = "block";
    // document.getElementById("page_zentai").style.display = "none";
}



let endGame_ = function () {
    document.getElementById("button_guu").classList.add("deactive");
    document.getElementById("button_ki").classList.add("deactive");
}


//タイムオーバーの処理
let gameover = function () {
    window.location.href = 'timeover.html';

    // document.getElementById("gameover").style.display = "block";
    // document.getElementById("page_zentai").style.display = "none";
}















//エフェクトイベント

//全部賭けろ！（敵の手持ちが１になった時）
//先行でのみ発生
//しっかり設計すること
// function zenbu_kakero();



















//おはじきの残機をforで表現できないか？
// let lifepoint = function () {
//     for (let life = 0; life < temochi + 1; life++) {
//         document.getElementById("lifepoint"+"[life]").style.visibility = "block";
//     }
//     for (let life2 = [life]; life2 < temochi_aite + 1; life2++) {
//         document.getElementById("lifepoint[life2]").style.visibility = "none";
//     }
// }


let gemeend_win_cyousei = function () {

    document.getElementById("z_lifepoint1").style.visibility = "visible";
    document.getElementById("z_lifepoint2").style.visibility = "visible";
    document.getElementById("z_lifepoint3").style.visibility = "visible";
    document.getElementById("z_lifepoint4").style.visibility = "visible";
    document.getElementById("z_lifepoint5").style.visibility = "visible";
    document.getElementById("z_lifepoint6").style.visibility = "visible";
    document.getElementById("z_lifepoint7").style.visibility = "visible";
    document.getElementById("z_lifepoint8").style.visibility = "visible";
    document.getElementById("z_lifepoint9").style.visibility = "visible";
    document.getElementById("z_lifepoint10").style.visibility = "visible";
    document.getElementById("z_lifepoint11").style.visibility = "visible";
    document.getElementById("z_lifepoint12").style.visibility = "visible";
    document.getElementById("z_lifepoint13").style.visibility = "visible";
    document.getElementById("z_lifepoint14").style.visibility = "visible";
    document.getElementById("z_lifepoint15").style.visibility = "visible";
    document.getElementById("z_lifepoint16").style.visibility = "visible";
    document.getElementById("z_lifepoint17").style.visibility = "visible";
    document.getElementById("z_lifepoint18").style.visibility = "visible";
    document.getElementById("z_lifepoint19").style.visibility = "visible";
    document.getElementById("z_lifepoint20").style.visibility = "visible";

    document.getElementById("a_lifepoint1").style.visibility = "hidden";
    document.getElementById("a_lifepoint2").style.visibility = "hidden";
    document.getElementById("a_lifepoint3").style.visibility = "hidden";
    document.getElementById("a_lifepoint4").style.visibility = "hidden";
    document.getElementById("a_lifepoint5").style.visibility = "hidden";
    document.getElementById("a_lifepoint6").style.visibility = "hidden";
    document.getElementById("a_lifepoint7").style.visibility = "hidden";
    document.getElementById("a_lifepoint8").style.visibility = "hidden";
    document.getElementById("a_lifepoint9").style.visibility = "hidden";
    document.getElementById("a_lifepoint10").style.visibility = "hidden";
    document.getElementById("a_lifepoint11").style.visibility = "hidden";
    document.getElementById("a_lifepoint12").style.visibility = "hidden";
    document.getElementById("a_lifepoint13").style.visibility = "hidden";
    document.getElementById("a_lifepoint14").style.visibility = "hidden";
    document.getElementById("a_lifepoint15").style.visibility = "hidden";
    document.getElementById("a_lifepoint16").style.visibility = "hidden";
    document.getElementById("a_lifepoint17").style.visibility = "hidden";
    document.getElementById("a_lifepoint18").style.visibility = "hidden";
    document.getElementById("a_lifepoint19").style.visibility = "hidden";
    document.getElementById("a_lifepoint19").style.visibility = "hidden";
    document.getElementById("a_lifepoint20").style.visibility = "hidden";

}


let gemeend_lose_cyousei = function () {
    document.getElementById("z_lifepoint1").style.visibility = "hidden";
    document.getElementById("z_lifepoint2").style.visibility = "hidden";
    document.getElementById("z_lifepoint3").style.visibility = "hidden";
    document.getElementById("z_lifepoint4").style.visibility = "hidden";
    document.getElementById("z_lifepoint5").style.visibility = "hidden";
    document.getElementById("z_lifepoint6").style.visibility = "hidden";
    document.getElementById("z_lifepoint7").style.visibility = "hidden";
    document.getElementById("z_lifepoint8").style.visibility = "hidden";
    document.getElementById("z_lifepoint9").style.visibility = "hidden";
    document.getElementById("z_lifepoint10").style.visibility = "hidden";
    document.getElementById("z_lifepoint11").style.visibility = "hidden";
    document.getElementById("z_lifepoint12").style.visibility = "hidden";
    document.getElementById("z_lifepoint13").style.visibility = "hidden";
    document.getElementById("z_lifepoint14").style.visibility = "hidden";
    document.getElementById("z_lifepoint15").style.visibility = "hidden";
    document.getElementById("z_lifepoint16").style.visibility = "hidden";
    document.getElementById("z_lifepoint17").style.visibility = "hidden";
    document.getElementById("z_lifepoint18").style.visibility = "hidden";
    document.getElementById("z_lifepoint19").style.visibility = "hidden";
    document.getElementById("z_lifepoint20").style.visibility = "hidden";

    document.getElementById("a_lifepoint1").style.visibility = "visible";
    document.getElementById("a_lifepoint2").style.visibility = "visible";
    document.getElementById("a_lifepoint3").style.visibility = "visible";
    document.getElementById("a_lifepoint4").style.visibility = "visible";
    document.getElementById("a_lifepoint5").style.visibility = "visible";
    document.getElementById("a_lifepoint6").style.visibility = "visible";
    document.getElementById("a_lifepoint7").style.visibility = "visible";
    document.getElementById("a_lifepoint8").style.visibility = "visible";
    document.getElementById("a_lifepoint9").style.visibility = "visible";
    document.getElementById("a_lifepoint10").style.visibility = "visible";
    document.getElementById("a_lifepoint11").style.visibility = "visible";
    document.getElementById("a_lifepoint12").style.visibility = "visible";
    document.getElementById("a_lifepoint13").style.visibility = "visible";
    document.getElementById("a_lifepoint14").style.visibility = "visible";
    document.getElementById("a_lifepoint15").style.visibility = "visible";
    document.getElementById("a_lifepoint16").style.visibility = "visible";
    document.getElementById("a_lifepoint17").style.visibility = "visible";
    document.getElementById("a_lifepoint18").style.visibility = "visible";
    document.getElementById("a_lifepoint19").style.visibility = "visible";
    document.getElementById("a_lifepoint20").style.visibility = "visible";

}





const button_event = function () {
    //ボタンの表示を手持ち数に合わせる
    //forループとか使ってコードを短縮できないか？
    if (temochi === 19) {
        document.getElementById("button1").style.visibility = "visible";
        document.getElementById("button2").style.visibility = "visible";
        document.getElementById("button3").style.visibility = "visible";
        document.getElementById("button4").style.visibility = "visible";
        document.getElementById("button5").style.visibility = "visible";
        document.getElementById("button6").style.visibility = "visible";
        document.getElementById("button7").style.visibility = "visible";
        document.getElementById("button8").style.visibility = "visible";
        document.getElementById("button9").style.visibility = "visible";
        document.getElementById("button10").style.visibility = "visible";
        document.getElementById("button11").style.visibility = "visible";
        document.getElementById("button12").style.visibility = "visible";
        document.getElementById("button13").style.visibility = "visible";
        document.getElementById("button14").style.visibility = "visible";
        document.getElementById("button15").style.visibility = "visible";
        document.getElementById("button16").style.visibility = "visible";
        document.getElementById("button17").style.visibility = "visible";
        document.getElementById("button18").style.visibility = "visible";
        document.getElementById("button19").style.visibility = "visible";
        document.getElementById("z_lifepoint1").style.visibility = "visible";
        document.getElementById("z_lifepoint2").style.visibility = "visible";
        document.getElementById("z_lifepoint3").style.visibility = "visible";
        document.getElementById("z_lifepoint4").style.visibility = "visible";
        document.getElementById("z_lifepoint5").style.visibility = "visible";
        document.getElementById("z_lifepoint6").style.visibility = "visible";
        document.getElementById("z_lifepoint7").style.visibility = "visible";
        document.getElementById("z_lifepoint8").style.visibility = "visible";
        document.getElementById("z_lifepoint9").style.visibility = "visible";
        document.getElementById("z_lifepoint10").style.visibility = "visible";
        document.getElementById("z_lifepoint11").style.visibility = "visible";
        document.getElementById("z_lifepoint12").style.visibility = "visible";
        document.getElementById("z_lifepoint13").style.visibility = "visible";
        document.getElementById("z_lifepoint14").style.visibility = "visible";
        document.getElementById("z_lifepoint15").style.visibility = "visible";
        document.getElementById("z_lifepoint16").style.visibility = "visible";
        document.getElementById("z_lifepoint17").style.visibility = "visible";
        document.getElementById("z_lifepoint18").style.visibility = "visible";
        document.getElementById("z_lifepoint19").style.visibility = "visible";
        document.getElementById("a_lifepoint1").style.visibility = "visible";
        document.getElementById("a_lifepoint2").style.visibility = "hidden";
        document.getElementById("a_lifepoint3").style.visibility = "hidden";
        document.getElementById("a_lifepoint4").style.visibility = "hidden";
        document.getElementById("a_lifepoint5").style.visibility = "hidden";
        document.getElementById("a_lifepoint6").style.visibility = "hidden";
        document.getElementById("a_lifepoint7").style.visibility = "hidden";
        document.getElementById("a_lifepoint8").style.visibility = "hidden";
        document.getElementById("a_lifepoint9").style.visibility = "hidden";
        document.getElementById("a_lifepoint10").style.visibility = "hidden";
        document.getElementById("a_lifepoint11").style.visibility = "hidden";
        document.getElementById("a_lifepoint12").style.visibility = "hidden";
        document.getElementById("a_lifepoint13").style.visibility = "hidden";
        document.getElementById("a_lifepoint14").style.visibility = "hidden";
        document.getElementById("a_lifepoint15").style.visibility = "hidden";
        document.getElementById("a_lifepoint16").style.visibility = "hidden";
        document.getElementById("a_lifepoint17").style.visibility = "hidden";
        document.getElementById("a_lifepoint18").style.visibility = "hidden";
        document.getElementById("a_lifepoint19").style.visibility = "hidden";
    }
    else if (temochi === 18) {
        document.getElementById("button1").style.visibility = "visible";
        document.getElementById("button2").style.visibility = "visible";
        document.getElementById("button3").style.visibility = "visible";
        document.getElementById("button4").style.visibility = "visible";
        document.getElementById("button5").style.visibility = "visible";
        document.getElementById("button6").style.visibility = "visible";
        document.getElementById("button7").style.visibility = "visible";
        document.getElementById("button8").style.visibility = "visible";
        document.getElementById("button9").style.visibility = "visible";
        document.getElementById("button10").style.visibility = "visible";
        document.getElementById("button11").style.visibility = "visible";
        document.getElementById("button12").style.visibility = "visible";
        document.getElementById("button13").style.visibility = "visible";
        document.getElementById("button14").style.visibility = "visible";
        document.getElementById("button15").style.visibility = "visible";
        document.getElementById("button16").style.visibility = "visible";
        document.getElementById("button17").style.visibility = "visible";
        document.getElementById("button18").style.visibility = "visible";
        document.getElementById("button19").style.visibility = "hidden";
        document.getElementById("z_lifepoint1").style.visibility = "visible";
        document.getElementById("z_lifepoint2").style.visibility = "visible";
        document.getElementById("z_lifepoint3").style.visibility = "visible";
        document.getElementById("z_lifepoint4").style.visibility = "visible";
        document.getElementById("z_lifepoint5").style.visibility = "visible";
        document.getElementById("z_lifepoint6").style.visibility = "visible";
        document.getElementById("z_lifepoint7").style.visibility = "visible";
        document.getElementById("z_lifepoint8").style.visibility = "visible";
        document.getElementById("z_lifepoint9").style.visibility = "visible";
        document.getElementById("z_lifepoint10").style.visibility = "visible";
        document.getElementById("z_lifepoint11").style.visibility = "visible";
        document.getElementById("z_lifepoint12").style.visibility = "visible";
        document.getElementById("z_lifepoint13").style.visibility = "visible";
        document.getElementById("z_lifepoint14").style.visibility = "visible";
        document.getElementById("z_lifepoint15").style.visibility = "visible";
        document.getElementById("z_lifepoint16").style.visibility = "visible";
        document.getElementById("z_lifepoint17").style.visibility = "visible";
        document.getElementById("z_lifepoint18").style.visibility = "visible";
        document.getElementById("z_lifepoint19").style.visibility = "hidden";
        document.getElementById("a_lifepoint1").style.visibility = "visible";
        document.getElementById("a_lifepoint2").style.visibility = "visible";
        document.getElementById("a_lifepoint3").style.visibility = "hidden";
        document.getElementById("a_lifepoint4").style.visibility = "hidden";
        document.getElementById("a_lifepoint5").style.visibility = "hidden";
        document.getElementById("a_lifepoint6").style.visibility = "hidden";
        document.getElementById("a_lifepoint7").style.visibility = "hidden";
        document.getElementById("a_lifepoint8").style.visibility = "hidden";
        document.getElementById("a_lifepoint9").style.visibility = "hidden";
        document.getElementById("a_lifepoint10").style.visibility = "hidden";
        document.getElementById("a_lifepoint11").style.visibility = "hidden";
        document.getElementById("a_lifepoint12").style.visibility = "hidden";
        document.getElementById("a_lifepoint13").style.visibility = "hidden";
        document.getElementById("a_lifepoint14").style.visibility = "hidden";
        document.getElementById("a_lifepoint15").style.visibility = "hidden";
        document.getElementById("a_lifepoint16").style.visibility = "hidden";
        document.getElementById("a_lifepoint17").style.visibility = "hidden";
        document.getElementById("a_lifepoint18").style.visibility = "hidden";
        document.getElementById("a_lifepoint19").style.visibility = "hidden";
    }
    else if (temochi === 17) {
        document.getElementById("button1").style.visibility = "visible";
        document.getElementById("button2").style.visibility = "visible";
        document.getElementById("button3").style.visibility = "visible";
        document.getElementById("button4").style.visibility = "visible";
        document.getElementById("button5").style.visibility = "visible";
        document.getElementById("button6").style.visibility = "visible";
        document.getElementById("button7").style.visibility = "visible";
        document.getElementById("button8").style.visibility = "visible";
        document.getElementById("button9").style.visibility = "visible";
        document.getElementById("button10").style.visibility = "visible";
        document.getElementById("button11").style.visibility = "visible";
        document.getElementById("button12").style.visibility = "visible";
        document.getElementById("button13").style.visibility = "visible";
        document.getElementById("button14").style.visibility = "visible";
        document.getElementById("button15").style.visibility = "visible";
        document.getElementById("button16").style.visibility = "visible";
        document.getElementById("button17").style.visibility = "visible";
        document.getElementById("button18").style.visibility = "hidden";
        document.getElementById("button19").style.visibility = "hidden";
        document.getElementById("z_lifepoint1").style.visibility = "visible";
        document.getElementById("z_lifepoint2").style.visibility = "visible";
        document.getElementById("z_lifepoint3").style.visibility = "visible";
        document.getElementById("z_lifepoint4").style.visibility = "visible";
        document.getElementById("z_lifepoint5").style.visibility = "visible";
        document.getElementById("z_lifepoint6").style.visibility = "visible";
        document.getElementById("z_lifepoint7").style.visibility = "visible";
        document.getElementById("z_lifepoint8").style.visibility = "visible";
        document.getElementById("z_lifepoint9").style.visibility = "visible";
        document.getElementById("z_lifepoint10").style.visibility = "visible";
        document.getElementById("z_lifepoint11").style.visibility = "visible";
        document.getElementById("z_lifepoint12").style.visibility = "visible";
        document.getElementById("z_lifepoint13").style.visibility = "visible";
        document.getElementById("z_lifepoint14").style.visibility = "visible";
        document.getElementById("z_lifepoint15").style.visibility = "visible";
        document.getElementById("z_lifepoint16").style.visibility = "visible";
        document.getElementById("z_lifepoint17").style.visibility = "visible";
        document.getElementById("z_lifepoint18").style.visibility = "hidden";
        document.getElementById("z_lifepoint19").style.visibility = "hidden";
        document.getElementById("a_lifepoint1").style.visibility = "visible";
        document.getElementById("a_lifepoint2").style.visibility = "visible";
        document.getElementById("a_lifepoint3").style.visibility = "visible";
        document.getElementById("a_lifepoint4").style.visibility = "hidden";
        document.getElementById("a_lifepoint5").style.visibility = "hidden";
        document.getElementById("a_lifepoint6").style.visibility = "hidden";
        document.getElementById("a_lifepoint7").style.visibility = "hidden";
        document.getElementById("a_lifepoint8").style.visibility = "hidden";
        document.getElementById("a_lifepoint9").style.visibility = "hidden";
        document.getElementById("a_lifepoint10").style.visibility = "hidden";
        document.getElementById("a_lifepoint11").style.visibility = "hidden";
        document.getElementById("a_lifepoint12").style.visibility = "hidden";
        document.getElementById("a_lifepoint13").style.visibility = "hidden";
        document.getElementById("a_lifepoint14").style.visibility = "hidden";
        document.getElementById("a_lifepoint15").style.visibility = "hidden";
        document.getElementById("a_lifepoint16").style.visibility = "hidden";
        document.getElementById("a_lifepoint17").style.visibility = "hidden";
        document.getElementById("a_lifepoint18").style.visibility = "hidden";
        document.getElementById("a_lifepoint19").style.visibility = "hidden";
    }
    else if (temochi === 16) {
        document.getElementById("button1").style.visibility = "visible";
        document.getElementById("button2").style.visibility = "visible";
        document.getElementById("button3").style.visibility = "visible";
        document.getElementById("button4").style.visibility = "visible";
        document.getElementById("button5").style.visibility = "visible";
        document.getElementById("button6").style.visibility = "visible";
        document.getElementById("button7").style.visibility = "visible";
        document.getElementById("button8").style.visibility = "visible";
        document.getElementById("button9").style.visibility = "visible";
        document.getElementById("button10").style.visibility = "visible";
        document.getElementById("button11").style.visibility = "visible";
        document.getElementById("button12").style.visibility = "visible";
        document.getElementById("button13").style.visibility = "visible";
        document.getElementById("button14").style.visibility = "visible";
        document.getElementById("button15").style.visibility = "visible";
        document.getElementById("button16").style.visibility = "visible";
        document.getElementById("button17").style.visibility = "hidden";
        document.getElementById("button18").style.visibility = "hidden";
        document.getElementById("button19").style.visibility = "hidden";
        document.getElementById("z_lifepoint1").style.visibility = "visible";
        document.getElementById("z_lifepoint2").style.visibility = "visible";
        document.getElementById("z_lifepoint3").style.visibility = "visible";
        document.getElementById("z_lifepoint4").style.visibility = "visible";
        document.getElementById("z_lifepoint5").style.visibility = "visible";
        document.getElementById("z_lifepoint6").style.visibility = "visible";
        document.getElementById("z_lifepoint7").style.visibility = "visible";
        document.getElementById("z_lifepoint8").style.visibility = "visible";
        document.getElementById("z_lifepoint9").style.visibility = "visible";
        document.getElementById("z_lifepoint10").style.visibility = "visible";
        document.getElementById("z_lifepoint11").style.visibility = "visible";
        document.getElementById("z_lifepoint12").style.visibility = "visible";
        document.getElementById("z_lifepoint13").style.visibility = "visible";
        document.getElementById("z_lifepoint14").style.visibility = "visible";
        document.getElementById("z_lifepoint15").style.visibility = "visible";
        document.getElementById("z_lifepoint16").style.visibility = "visible";
        document.getElementById("z_lifepoint17").style.visibility = "hidden";
        document.getElementById("z_lifepoint18").style.visibility = "hidden";
        document.getElementById("z_lifepoint19").style.visibility = "hidden";
        document.getElementById("a_lifepoint1").style.visibility = "visible";
        document.getElementById("a_lifepoint2").style.visibility = "visible";
        document.getElementById("a_lifepoint3").style.visibility = "visible";
        document.getElementById("a_lifepoint4").style.visibility = "visible";
        document.getElementById("a_lifepoint5").style.visibility = "hidden";
        document.getElementById("a_lifepoint6").style.visibility = "hidden";
        document.getElementById("a_lifepoint7").style.visibility = "hidden";
        document.getElementById("a_lifepoint8").style.visibility = "hidden";
        document.getElementById("a_lifepoint9").style.visibility = "hidden";
        document.getElementById("a_lifepoint10").style.visibility = "hidden";
        document.getElementById("a_lifepoint11").style.visibility = "hidden";
        document.getElementById("a_lifepoint12").style.visibility = "hidden";
        document.getElementById("a_lifepoint13").style.visibility = "hidden";
        document.getElementById("a_lifepoint14").style.visibility = "hidden";
        document.getElementById("a_lifepoint15").style.visibility = "hidden";
        document.getElementById("a_lifepoint16").style.visibility = "hidden";
        document.getElementById("a_lifepoint17").style.visibility = "hidden";
        document.getElementById("a_lifepoint18").style.visibility = "hidden";
        document.getElementById("a_lifepoint19").style.visibility = "hidden";
    }

    else if (temochi === 15) {
        document.getElementById("button1").style.visibility = "visible";
        document.getElementById("button2").style.visibility = "visible";
        document.getElementById("button3").style.visibility = "visible";
        document.getElementById("button4").style.visibility = "visible";
        document.getElementById("button5").style.visibility = "visible";
        document.getElementById("button6").style.visibility = "visible";
        document.getElementById("button7").style.visibility = "visible";
        document.getElementById("button8").style.visibility = "visible";
        document.getElementById("button9").style.visibility = "visible";
        document.getElementById("button10").style.visibility = "visible";
        document.getElementById("button11").style.visibility = "visible";
        document.getElementById("button12").style.visibility = "visible";
        document.getElementById("button13").style.visibility = "visible";
        document.getElementById("button14").style.visibility = "visible";
        document.getElementById("button15").style.visibility = "visible";
        document.getElementById("button16").style.visibility = "hidden";
        document.getElementById("button17").style.visibility = "hidden";
        document.getElementById("button18").style.visibility = "hidden";
        document.getElementById("button19").style.visibility = "hidden";
        document.getElementById("z_lifepoint1").style.visibility = "visible";
        document.getElementById("z_lifepoint2").style.visibility = "visible";
        document.getElementById("z_lifepoint3").style.visibility = "visible";
        document.getElementById("z_lifepoint4").style.visibility = "visible";
        document.getElementById("z_lifepoint5").style.visibility = "visible";
        document.getElementById("z_lifepoint6").style.visibility = "visible";
        document.getElementById("z_lifepoint7").style.visibility = "visible";
        document.getElementById("z_lifepoint8").style.visibility = "visible";
        document.getElementById("z_lifepoint9").style.visibility = "visible";
        document.getElementById("z_lifepoint10").style.visibility = "visible";
        document.getElementById("z_lifepoint11").style.visibility = "visible";
        document.getElementById("z_lifepoint12").style.visibility = "visible";
        document.getElementById("z_lifepoint13").style.visibility = "visible";
        document.getElementById("z_lifepoint14").style.visibility = "visible";
        document.getElementById("z_lifepoint15").style.visibility = "visible";
        document.getElementById("z_lifepoint16").style.visibility = "hidden";
        document.getElementById("z_lifepoint17").style.visibility = "hidden";
        document.getElementById("z_lifepoint18").style.visibility = "hidden";
        document.getElementById("z_lifepoint19").style.visibility = "hidden";
        document.getElementById("a_lifepoint1").style.visibility = "visible";
        document.getElementById("a_lifepoint2").style.visibility = "visible";
        document.getElementById("a_lifepoint3").style.visibility = "visible";
        document.getElementById("a_lifepoint4").style.visibility = "visible";
        document.getElementById("a_lifepoint5").style.visibility = "visible";
        document.getElementById("a_lifepoint6").style.visibility = "hidden";
        document.getElementById("a_lifepoint7").style.visibility = "hidden";
        document.getElementById("a_lifepoint8").style.visibility = "hidden";
        document.getElementById("a_lifepoint9").style.visibility = "hidden";
        document.getElementById("a_lifepoint10").style.visibility = "hidden";
        document.getElementById("a_lifepoint11").style.visibility = "hidden";
        document.getElementById("a_lifepoint12").style.visibility = "hidden";
        document.getElementById("a_lifepoint13").style.visibility = "hidden";
        document.getElementById("a_lifepoint14").style.visibility = "hidden";
        document.getElementById("a_lifepoint15").style.visibility = "hidden";
        document.getElementById("a_lifepoint16").style.visibility = "hidden";
        document.getElementById("a_lifepoint17").style.visibility = "hidden";
        document.getElementById("a_lifepoint18").style.visibility = "hidden";
        document.getElementById("a_lifepoint19").style.visibility = "hidden";
    }
    else if (temochi === 14) {
        document.getElementById("button1").style.visibility = "visible";
        document.getElementById("button2").style.visibility = "visible";
        document.getElementById("button3").style.visibility = "visible";
        document.getElementById("button4").style.visibility = "visible";
        document.getElementById("button5").style.visibility = "visible";
        document.getElementById("button6").style.visibility = "visible";
        document.getElementById("button7").style.visibility = "visible";
        document.getElementById("button8").style.visibility = "visible";
        document.getElementById("button9").style.visibility = "visible";
        document.getElementById("button10").style.visibility = "visible";
        document.getElementById("button11").style.visibility = "visible";
        document.getElementById("button12").style.visibility = "visible";
        document.getElementById("button13").style.visibility = "visible";
        document.getElementById("button14").style.visibility = "visible";
        document.getElementById("button15").style.visibility = "hidden";
        document.getElementById("button16").style.visibility = "hidden";
        document.getElementById("button17").style.visibility = "hidden";
        document.getElementById("button18").style.visibility = "hidden";
        document.getElementById("button19").style.visibility = "hidden";
        document.getElementById("z_lifepoint1").style.visibility = "visible";
        document.getElementById("z_lifepoint2").style.visibility = "visible";
        document.getElementById("z_lifepoint3").style.visibility = "visible";
        document.getElementById("z_lifepoint4").style.visibility = "visible";
        document.getElementById("z_lifepoint5").style.visibility = "visible";
        document.getElementById("z_lifepoint6").style.visibility = "visible";
        document.getElementById("z_lifepoint7").style.visibility = "visible";
        document.getElementById("z_lifepoint8").style.visibility = "visible";
        document.getElementById("z_lifepoint9").style.visibility = "visible";
        document.getElementById("z_lifepoint10").style.visibility = "visible";
        document.getElementById("z_lifepoint11").style.visibility = "visible";
        document.getElementById("z_lifepoint12").style.visibility = "visible";
        document.getElementById("z_lifepoint13").style.visibility = "visible";
        document.getElementById("z_lifepoint14").style.visibility = "visible";
        document.getElementById("z_lifepoint15").style.visibility = "hidden";
        document.getElementById("z_lifepoint16").style.visibility = "hidden";
        document.getElementById("z_lifepoint17").style.visibility = "hidden";
        document.getElementById("z_lifepoint18").style.visibility = "hidden";
        document.getElementById("z_lifepoint19").style.visibility = "hidden";
        document.getElementById("a_lifepoint1").style.visibility = "visible";
        document.getElementById("a_lifepoint2").style.visibility = "visible";
        document.getElementById("a_lifepoint3").style.visibility = "visible";
        document.getElementById("a_lifepoint4").style.visibility = "visible";
        document.getElementById("a_lifepoint5").style.visibility = "visible";
        document.getElementById("a_lifepoint6").style.visibility = "visible";
        document.getElementById("a_lifepoint7").style.visibility = "hidden";
        document.getElementById("a_lifepoint8").style.visibility = "hidden";
        document.getElementById("a_lifepoint9").style.visibility = "hidden";
        document.getElementById("a_lifepoint10").style.visibility = "hidden";
        document.getElementById("a_lifepoint11").style.visibility = "hidden";
        document.getElementById("a_lifepoint12").style.visibility = "hidden";
        document.getElementById("a_lifepoint13").style.visibility = "hidden";
        document.getElementById("a_lifepoint14").style.visibility = "hidden";
        document.getElementById("a_lifepoint15").style.visibility = "hidden";
        document.getElementById("a_lifepoint16").style.visibility = "hidden";
        document.getElementById("a_lifepoint17").style.visibility = "hidden";
        document.getElementById("a_lifepoint18").style.visibility = "hidden";
        document.getElementById("a_lifepoint19").style.visibility = "hidden";
    }
    else if (temochi === 13) {
        document.getElementById("button1").style.visibility = "visible";
        document.getElementById("button2").style.visibility = "visible";
        document.getElementById("button3").style.visibility = "visible";
        document.getElementById("button4").style.visibility = "visible";
        document.getElementById("button5").style.visibility = "visible";
        document.getElementById("button6").style.visibility = "visible";
        document.getElementById("button7").style.visibility = "visible";
        document.getElementById("button8").style.visibility = "visible";
        document.getElementById("button9").style.visibility = "visible";
        document.getElementById("button10").style.visibility = "visible";
        document.getElementById("button11").style.visibility = "visible";
        document.getElementById("button12").style.visibility = "visible";
        document.getElementById("button13").style.visibility = "visible";
        document.getElementById("button14").style.visibility = "hidden";
        document.getElementById("button15").style.visibility = "hidden";
        document.getElementById("button16").style.visibility = "hidden";
        document.getElementById("button17").style.visibility = "hidden";
        document.getElementById("button18").style.visibility = "hidden";
        document.getElementById("button19").style.visibility = "hidden";
        document.getElementById("z_lifepoint1").style.visibility = "visible";
        document.getElementById("z_lifepoint2").style.visibility = "visible";
        document.getElementById("z_lifepoint3").style.visibility = "visible";
        document.getElementById("z_lifepoint4").style.visibility = "visible";
        document.getElementById("z_lifepoint5").style.visibility = "visible";
        document.getElementById("z_lifepoint6").style.visibility = "visible";
        document.getElementById("z_lifepoint7").style.visibility = "visible";
        document.getElementById("z_lifepoint8").style.visibility = "visible";
        document.getElementById("z_lifepoint9").style.visibility = "visible";
        document.getElementById("z_lifepoint10").style.visibility = "visible";
        document.getElementById("z_lifepoint11").style.visibility = "visible";
        document.getElementById("z_lifepoint12").style.visibility = "visible";
        document.getElementById("z_lifepoint13").style.visibility = "visible";
        document.getElementById("z_lifepoint14").style.visibility = "hidden";
        document.getElementById("z_lifepoint15").style.visibility = "hidden";
        document.getElementById("z_lifepoint16").style.visibility = "hidden";
        document.getElementById("z_lifepoint17").style.visibility = "hidden";
        document.getElementById("z_lifepoint18").style.visibility = "hidden";
        document.getElementById("z_lifepoint19").style.visibility = "hidden";
        document.getElementById("a_lifepoint1").style.visibility = "visible";
        document.getElementById("a_lifepoint2").style.visibility = "visible";
        document.getElementById("a_lifepoint3").style.visibility = "visible";
        document.getElementById("a_lifepoint4").style.visibility = "visible";
        document.getElementById("a_lifepoint5").style.visibility = "visible";
        document.getElementById("a_lifepoint6").style.visibility = "visible";
        document.getElementById("a_lifepoint7").style.visibility = "visible";
        document.getElementById("a_lifepoint8").style.visibility = "hidden";
        document.getElementById("a_lifepoint9").style.visibility = "hidden";
        document.getElementById("a_lifepoint10").style.visibility = "hidden";
        document.getElementById("a_lifepoint11").style.visibility = "hidden";
        document.getElementById("a_lifepoint12").style.visibility = "hidden";
        document.getElementById("a_lifepoint13").style.visibility = "hidden";
        document.getElementById("a_lifepoint14").style.visibility = "hidden";
        document.getElementById("a_lifepoint15").style.visibility = "hidden";
        document.getElementById("a_lifepoint16").style.visibility = "hidden";
        document.getElementById("a_lifepoint17").style.visibility = "hidden";
        document.getElementById("a_lifepoint18").style.visibility = "hidden";
        document.getElementById("a_lifepoint19").style.visibility = "hidden";
    }
    else if (temochi === 12) {
        document.getElementById("button1").style.visibility = "visible";
        document.getElementById("button2").style.visibility = "visible";
        document.getElementById("button3").style.visibility = "visible";
        document.getElementById("button4").style.visibility = "visible";
        document.getElementById("button5").style.visibility = "visible";
        document.getElementById("button6").style.visibility = "visible";
        document.getElementById("button7").style.visibility = "visible";
        document.getElementById("button8").style.visibility = "visible";
        document.getElementById("button9").style.visibility = "visible";
        document.getElementById("button10").style.visibility = "visible";
        document.getElementById("button11").style.visibility = "visible";
        document.getElementById("button12").style.visibility = "visible";
        document.getElementById("button13").style.visibility = "hidden";
        document.getElementById("button14").style.visibility = "hidden";
        document.getElementById("button15").style.visibility = "hidden";
        document.getElementById("button16").style.visibility = "hidden";
        document.getElementById("button17").style.visibility = "hidden";
        document.getElementById("button18").style.visibility = "hidden";
        document.getElementById("button19").style.visibility = "hidden";
        document.getElementById("z_lifepoint1").style.visibility = "visible";
        document.getElementById("z_lifepoint2").style.visibility = "visible";
        document.getElementById("z_lifepoint3").style.visibility = "visible";
        document.getElementById("z_lifepoint4").style.visibility = "visible";
        document.getElementById("z_lifepoint5").style.visibility = "visible";
        document.getElementById("z_lifepoint6").style.visibility = "visible";
        document.getElementById("z_lifepoint7").style.visibility = "visible";
        document.getElementById("z_lifepoint8").style.visibility = "visible";
        document.getElementById("z_lifepoint9").style.visibility = "visible";
        document.getElementById("z_lifepoint10").style.visibility = "visible";
        document.getElementById("z_lifepoint11").style.visibility = "visible";
        document.getElementById("z_lifepoint12").style.visibility = "visible";
        document.getElementById("z_lifepoint13").style.visibility = "hidden";
        document.getElementById("z_lifepoint14").style.visibility = "hidden";
        document.getElementById("z_lifepoint15").style.visibility = "hidden";
        document.getElementById("z_lifepoint16").style.visibility = "hidden";
        document.getElementById("z_lifepoint17").style.visibility = "hidden";
        document.getElementById("z_lifepoint18").style.visibility = "hidden";
        document.getElementById("z_lifepoint19").style.visibility = "hidden";
        document.getElementById("a_lifepoint1").style.visibility = "visible";
        document.getElementById("a_lifepoint2").style.visibility = "visible";
        document.getElementById("a_lifepoint3").style.visibility = "visible";
        document.getElementById("a_lifepoint4").style.visibility = "visible";
        document.getElementById("a_lifepoint5").style.visibility = "visible";
        document.getElementById("a_lifepoint6").style.visibility = "visible";
        document.getElementById("a_lifepoint7").style.visibility = "visible";
        document.getElementById("a_lifepoint8").style.visibility = "visible";
        document.getElementById("a_lifepoint9").style.visibility = "hidden";
        document.getElementById("a_lifepoint10").style.visibility = "hidden";
        document.getElementById("a_lifepoint11").style.visibility = "hidden";
        document.getElementById("a_lifepoint12").style.visibility = "hidden";
        document.getElementById("a_lifepoint13").style.visibility = "hidden";
        document.getElementById("a_lifepoint14").style.visibility = "hidden";
        document.getElementById("a_lifepoint15").style.visibility = "hidden";
        document.getElementById("a_lifepoint16").style.visibility = "hidden";
        document.getElementById("a_lifepoint17").style.visibility = "hidden";
        document.getElementById("a_lifepoint18").style.visibility = "hidden";
        document.getElementById("a_lifepoint19").style.visibility = "hidden";
    }
    else if (temochi === 11) {
        document.getElementById("button1").style.visibility = "visible";
        document.getElementById("button2").style.visibility = "visible";
        document.getElementById("button3").style.visibility = "visible";
        document.getElementById("button4").style.visibility = "visible";
        document.getElementById("button5").style.visibility = "visible";
        document.getElementById("button6").style.visibility = "visible";
        document.getElementById("button7").style.visibility = "visible";
        document.getElementById("button8").style.visibility = "visible";
        document.getElementById("button9").style.visibility = "visible";
        document.getElementById("button10").style.visibility = "visible";
        document.getElementById("button11").style.visibility = "visible";
        document.getElementById("button12").style.visibility = "hidden";
        document.getElementById("button13").style.visibility = "hidden";
        document.getElementById("button14").style.visibility = "hidden";
        document.getElementById("button15").style.visibility = "hidden";
        document.getElementById("button16").style.visibility = "hidden";
        document.getElementById("button17").style.visibility = "hidden";
        document.getElementById("button18").style.visibility = "hidden";
        document.getElementById("button19").style.visibility = "hidden";
        document.getElementById("z_lifepoint1").style.visibility = "visible";
        document.getElementById("z_lifepoint2").style.visibility = "visible";
        document.getElementById("z_lifepoint3").style.visibility = "visible";
        document.getElementById("z_lifepoint4").style.visibility = "visible";
        document.getElementById("z_lifepoint5").style.visibility = "visible";
        document.getElementById("z_lifepoint6").style.visibility = "visible";
        document.getElementById("z_lifepoint7").style.visibility = "visible";
        document.getElementById("z_lifepoint8").style.visibility = "visible";
        document.getElementById("z_lifepoint9").style.visibility = "visible";
        document.getElementById("z_lifepoint10").style.visibility = "visible";
        document.getElementById("z_lifepoint11").style.visibility = "visible";
        document.getElementById("z_lifepoint12").style.visibility = "hidden";
        document.getElementById("z_lifepoint13").style.visibility = "hidden";
        document.getElementById("z_lifepoint14").style.visibility = "hidden";
        document.getElementById("z_lifepoint15").style.visibility = "hidden";
        document.getElementById("z_lifepoint16").style.visibility = "hidden";
        document.getElementById("z_lifepoint17").style.visibility = "hidden";
        document.getElementById("z_lifepoint18").style.visibility = "hidden";
        document.getElementById("z_lifepoint19").style.visibility = "hidden";
        document.getElementById("a_lifepoint1").style.visibility = "visible";
        document.getElementById("a_lifepoint2").style.visibility = "visible";
        document.getElementById("a_lifepoint3").style.visibility = "visible";
        document.getElementById("a_lifepoint4").style.visibility = "visible";
        document.getElementById("a_lifepoint5").style.visibility = "visible";
        document.getElementById("a_lifepoint6").style.visibility = "visible";
        document.getElementById("a_lifepoint7").style.visibility = "visible";
        document.getElementById("a_lifepoint8").style.visibility = "visible";
        document.getElementById("a_lifepoint9").style.visibility = "visible";
        document.getElementById("a_lifepoint10").style.visibility = "hidden";
        document.getElementById("a_lifepoint11").style.visibility = "hidden";
        document.getElementById("a_lifepoint12").style.visibility = "hidden";
        document.getElementById("a_lifepoint13").style.visibility = "hidden";
        document.getElementById("a_lifepoint14").style.visibility = "hidden";
        document.getElementById("a_lifepoint15").style.visibility = "hidden";
        document.getElementById("a_lifepoint16").style.visibility = "hidden";
        document.getElementById("a_lifepoint17").style.visibility = "hidden";
        document.getElementById("a_lifepoint18").style.visibility = "hidden";
        document.getElementById("a_lifepoint19").style.visibility = "hidden";
    }
    else if (temochi === 10) {
        document.getElementById("button1").style.visibility = "visible";
        document.getElementById("button2").style.visibility = "visible";
        document.getElementById("button3").style.visibility = "visible";
        document.getElementById("button4").style.visibility = "visible";
        document.getElementById("button5").style.visibility = "visible";
        document.getElementById("button6").style.visibility = "visible";
        document.getElementById("button7").style.visibility = "visible";
        document.getElementById("button8").style.visibility = "visible";
        document.getElementById("button9").style.visibility = "visible";
        document.getElementById("button10").style.visibility = "visible";
        document.getElementById("button11").style.visibility = "hidden";
        document.getElementById("button12").style.visibility = "hidden";
        document.getElementById("button13").style.visibility = "hidden";
        document.getElementById("button14").style.visibility = "hidden";
        document.getElementById("button15").style.visibility = "hidden";
        document.getElementById("button16").style.visibility = "hidden";
        document.getElementById("button17").style.visibility = "hidden";
        document.getElementById("button18").style.visibility = "hidden";
        document.getElementById("button19").style.visibility = "hidden";
        document.getElementById("z_lifepoint1").style.visibility = "visible";
        document.getElementById("z_lifepoint2").style.visibility = "visible";
        document.getElementById("z_lifepoint3").style.visibility = "visible";
        document.getElementById("z_lifepoint4").style.visibility = "visible";
        document.getElementById("z_lifepoint5").style.visibility = "visible";
        document.getElementById("z_lifepoint6").style.visibility = "visible";
        document.getElementById("z_lifepoint7").style.visibility = "visible";
        document.getElementById("z_lifepoint8").style.visibility = "visible";
        document.getElementById("z_lifepoint9").style.visibility = "visible";
        document.getElementById("z_lifepoint10").style.visibility = "visible";
        document.getElementById("z_lifepoint11").style.visibility = "hidden";
        document.getElementById("z_lifepoint12").style.visibility = "hidden";
        document.getElementById("z_lifepoint13").style.visibility = "hidden";
        document.getElementById("z_lifepoint14").style.visibility = "hidden";
        document.getElementById("z_lifepoint15").style.visibility = "hidden";
        document.getElementById("z_lifepoint16").style.visibility = "hidden";
        document.getElementById("z_lifepoint17").style.visibility = "hidden";
        document.getElementById("z_lifepoint18").style.visibility = "hidden";
        document.getElementById("z_lifepoint19").style.visibility = "hidden";
        document.getElementById("a_lifepoint1").style.visibility = "visible";
        document.getElementById("a_lifepoint2").style.visibility = "visible";
        document.getElementById("a_lifepoint3").style.visibility = "visible";
        document.getElementById("a_lifepoint4").style.visibility = "visible";
        document.getElementById("a_lifepoint5").style.visibility = "visible";
        document.getElementById("a_lifepoint6").style.visibility = "visible";
        document.getElementById("a_lifepoint7").style.visibility = "visible";
        document.getElementById("a_lifepoint8").style.visibility = "visible";
        document.getElementById("a_lifepoint9").style.visibility = "visible";
        document.getElementById("a_lifepoint10").style.visibility = "visible";
        document.getElementById("a_lifepoint11").style.visibility = "hidden";
        document.getElementById("a_lifepoint12").style.visibility = "hidden";
        document.getElementById("a_lifepoint13").style.visibility = "hidden";
        document.getElementById("a_lifepoint14").style.visibility = "hidden";
        document.getElementById("a_lifepoint15").style.visibility = "hidden";
        document.getElementById("a_lifepoint16").style.visibility = "hidden";
        document.getElementById("a_lifepoint17").style.visibility = "hidden";
        document.getElementById("a_lifepoint18").style.visibility = "hidden";
        document.getElementById("a_lifepoint19").style.visibility = "hidden";
    }
    else if (temochi === 9) {
        document.getElementById("button1").style.visibility = "visible";
        document.getElementById("button2").style.visibility = "visible";
        document.getElementById("button3").style.visibility = "visible";
        document.getElementById("button4").style.visibility = "visible";
        document.getElementById("button5").style.visibility = "visible";
        document.getElementById("button6").style.visibility = "visible";
        document.getElementById("button7").style.visibility = "visible";
        document.getElementById("button8").style.visibility = "visible";
        document.getElementById("button9").style.visibility = "visible";
        document.getElementById("button10").style.visibility = "hidden";
        document.getElementById("button11").style.visibility = "hidden";
        document.getElementById("button12").style.visibility = "hidden";
        document.getElementById("button13").style.visibility = "hidden";
        document.getElementById("button14").style.visibility = "hidden";
        document.getElementById("button15").style.visibility = "hidden";
        document.getElementById("button16").style.visibility = "hidden";
        document.getElementById("button17").style.visibility = "hidden";
        document.getElementById("button18").style.visibility = "hidden";
        document.getElementById("button19").style.visibility = "hidden";
        document.getElementById("z_lifepoint1").style.visibility = "visible";
        document.getElementById("z_lifepoint2").style.visibility = "visible";
        document.getElementById("z_lifepoint3").style.visibility = "visible";
        document.getElementById("z_lifepoint4").style.visibility = "visible";
        document.getElementById("z_lifepoint5").style.visibility = "visible";
        document.getElementById("z_lifepoint6").style.visibility = "visible";
        document.getElementById("z_lifepoint7").style.visibility = "visible";
        document.getElementById("z_lifepoint8").style.visibility = "visible";
        document.getElementById("z_lifepoint9").style.visibility = "visible";
        document.getElementById("z_lifepoint10").style.visibility = "hidden";
        document.getElementById("z_lifepoint11").style.visibility = "hidden";
        document.getElementById("z_lifepoint12").style.visibility = "hidden";
        document.getElementById("z_lifepoint13").style.visibility = "hidden";
        document.getElementById("z_lifepoint14").style.visibility = "hidden";
        document.getElementById("z_lifepoint15").style.visibility = "hidden";
        document.getElementById("z_lifepoint16").style.visibility = "hidden";
        document.getElementById("z_lifepoint17").style.visibility = "hidden";
        document.getElementById("z_lifepoint18").style.visibility = "hidden";
        document.getElementById("z_lifepoint19").style.visibility = "hidden";
        document.getElementById("a_lifepoint1").style.visibility = "visible";
        document.getElementById("a_lifepoint2").style.visibility = "visible";
        document.getElementById("a_lifepoint3").style.visibility = "visible";
        document.getElementById("a_lifepoint4").style.visibility = "visible";
        document.getElementById("a_lifepoint5").style.visibility = "visible";
        document.getElementById("a_lifepoint6").style.visibility = "visible";
        document.getElementById("a_lifepoint7").style.visibility = "visible";
        document.getElementById("a_lifepoint8").style.visibility = "visible";
        document.getElementById("a_lifepoint9").style.visibility = "visible";
        document.getElementById("a_lifepoint10").style.visibility = "visible";
        document.getElementById("a_lifepoint11").style.visibility = "visible";
        document.getElementById("a_lifepoint12").style.visibility = "hidden";
        document.getElementById("a_lifepoint13").style.visibility = "hidden";
        document.getElementById("a_lifepoint14").style.visibility = "hidden";
        document.getElementById("a_lifepoint15").style.visibility = "hidden";
        document.getElementById("a_lifepoint16").style.visibility = "hidden";
        document.getElementById("a_lifepoint17").style.visibility = "hidden";
        document.getElementById("a_lifepoint18").style.visibility = "hidden";
        document.getElementById("a_lifepoint19").style.visibility = "hidden";
    }
    else if (temochi === 8) {
        document.getElementById("button1").style.visibility = "visible";
        document.getElementById("button2").style.visibility = "visible";
        document.getElementById("button3").style.visibility = "visible";
        document.getElementById("button4").style.visibility = "visible";
        document.getElementById("button5").style.visibility = "visible";
        document.getElementById("button6").style.visibility = "visible";
        document.getElementById("button7").style.visibility = "visible";
        document.getElementById("button8").style.visibility = "visible";
        document.getElementById("button9").style.visibility = "hidden";
        document.getElementById("button10").style.visibility = "hidden";
        document.getElementById("button11").style.visibility = "hidden";
        document.getElementById("button12").style.visibility = "hidden";
        document.getElementById("button13").style.visibility = "hidden";
        document.getElementById("button14").style.visibility = "hidden";
        document.getElementById("button15").style.visibility = "hidden";
        document.getElementById("button16").style.visibility = "hidden";
        document.getElementById("button17").style.visibility = "hidden";
        document.getElementById("button18").style.visibility = "hidden";
        document.getElementById("button19").style.visibility = "hidden";
        document.getElementById("z_lifepoint1").style.visibility = "visible";
        document.getElementById("z_lifepoint2").style.visibility = "visible";
        document.getElementById("z_lifepoint3").style.visibility = "visible";
        document.getElementById("z_lifepoint4").style.visibility = "visible";
        document.getElementById("z_lifepoint5").style.visibility = "visible";
        document.getElementById("z_lifepoint6").style.visibility = "visible";
        document.getElementById("z_lifepoint7").style.visibility = "visible";
        document.getElementById("z_lifepoint8").style.visibility = "visible";
        document.getElementById("z_lifepoint9").style.visibility = "hidden";
        document.getElementById("z_lifepoint10").style.visibility = "hidden";
        document.getElementById("z_lifepoint11").style.visibility = "hidden";
        document.getElementById("z_lifepoint12").style.visibility = "hidden";
        document.getElementById("z_lifepoint13").style.visibility = "hidden";
        document.getElementById("z_lifepoint14").style.visibility = "hidden";
        document.getElementById("z_lifepoint15").style.visibility = "hidden";
        document.getElementById("z_lifepoint16").style.visibility = "hidden";
        document.getElementById("z_lifepoint17").style.visibility = "hidden";
        document.getElementById("z_lifepoint18").style.visibility = "hidden";
        document.getElementById("z_lifepoint19").style.visibility = "hidden";
        document.getElementById("a_lifepoint1").style.visibility = "visible";
        document.getElementById("a_lifepoint2").style.visibility = "visible";
        document.getElementById("a_lifepoint3").style.visibility = "visible";
        document.getElementById("a_lifepoint4").style.visibility = "visible";
        document.getElementById("a_lifepoint5").style.visibility = "visible";
        document.getElementById("a_lifepoint6").style.visibility = "visible";
        document.getElementById("a_lifepoint7").style.visibility = "visible";
        document.getElementById("a_lifepoint8").style.visibility = "visible";
        document.getElementById("a_lifepoint9").style.visibility = "visible";
        document.getElementById("a_lifepoint10").style.visibility = "visible";
        document.getElementById("a_lifepoint11").style.visibility = "visible";
        document.getElementById("a_lifepoint12").style.visibility = "visible";
        document.getElementById("a_lifepoint13").style.visibility = "hidden";
        document.getElementById("a_lifepoint14").style.visibility = "hidden";
        document.getElementById("a_lifepoint15").style.visibility = "hidden";
        document.getElementById("a_lifepoint16").style.visibility = "hidden";
        document.getElementById("a_lifepoint17").style.visibility = "hidden";
        document.getElementById("a_lifepoint18").style.visibility = "hidden";
        document.getElementById("a_lifepoint19").style.visibility = "hidden";
    }
    else if (temochi === 7) {
        document.getElementById("button1").style.visibility = "visible";
        document.getElementById("button2").style.visibility = "visible";
        document.getElementById("button3").style.visibility = "visible";
        document.getElementById("button4").style.visibility = "visible";
        document.getElementById("button5").style.visibility = "visible";
        document.getElementById("button6").style.visibility = "visible";
        document.getElementById("button7").style.visibility = "visible";
        document.getElementById("button8").style.visibility = "hidden";
        document.getElementById("button9").style.visibility = "hidden";
        document.getElementById("button10").style.visibility = "hidden";
        document.getElementById("button11").style.visibility = "hidden";
        document.getElementById("button12").style.visibility = "hidden";
        document.getElementById("button13").style.visibility = "hidden";
        document.getElementById("button14").style.visibility = "hidden";
        document.getElementById("button15").style.visibility = "hidden";
        document.getElementById("button16").style.visibility = "hidden";
        document.getElementById("button17").style.visibility = "hidden";
        document.getElementById("button18").style.visibility = "hidden";
        document.getElementById("button19").style.visibility = "hidden";
        document.getElementById("z_lifepoint1").style.visibility = "visible";
        document.getElementById("z_lifepoint2").style.visibility = "visible";
        document.getElementById("z_lifepoint3").style.visibility = "visible";
        document.getElementById("z_lifepoint4").style.visibility = "visible";
        document.getElementById("z_lifepoint5").style.visibility = "visible";
        document.getElementById("z_lifepoint6").style.visibility = "visible";
        document.getElementById("z_lifepoint7").style.visibility = "visible";
        document.getElementById("z_lifepoint8").style.visibility = "hidden";
        document.getElementById("z_lifepoint9").style.visibility = "hidden";
        document.getElementById("z_lifepoint10").style.visibility = "hidden";
        document.getElementById("z_lifepoint11").style.visibility = "hidden";
        document.getElementById("z_lifepoint12").style.visibility = "hidden";
        document.getElementById("z_lifepoint13").style.visibility = "hidden";
        document.getElementById("z_lifepoint14").style.visibility = "hidden";
        document.getElementById("z_lifepoint15").style.visibility = "hidden";
        document.getElementById("z_lifepoint16").style.visibility = "hidden";
        document.getElementById("z_lifepoint17").style.visibility = "hidden";
        document.getElementById("z_lifepoint18").style.visibility = "hidden";
        document.getElementById("z_lifepoint19").style.visibility = "hidden";
        document.getElementById("a_lifepoint1").style.visibility = "visible";
        document.getElementById("a_lifepoint2").style.visibility = "visible";
        document.getElementById("a_lifepoint3").style.visibility = "visible";
        document.getElementById("a_lifepoint4").style.visibility = "visible";
        document.getElementById("a_lifepoint5").style.visibility = "visible";
        document.getElementById("a_lifepoint6").style.visibility = "visible";
        document.getElementById("a_lifepoint7").style.visibility = "visible";
        document.getElementById("a_lifepoint8").style.visibility = "visible";
        document.getElementById("a_lifepoint9").style.visibility = "visible";
        document.getElementById("a_lifepoint10").style.visibility = "visible";
        document.getElementById("a_lifepoint11").style.visibility = "visible";
        document.getElementById("a_lifepoint12").style.visibility = "visible";
        document.getElementById("a_lifepoint13").style.visibility = "visible";
        document.getElementById("a_lifepoint14").style.visibility = "hidden";
        document.getElementById("a_lifepoint15").style.visibility = "hidden";
        document.getElementById("a_lifepoint16").style.visibility = "hidden";
        document.getElementById("a_lifepoint17").style.visibility = "hidden";
        document.getElementById("a_lifepoint18").style.visibility = "hidden";
        document.getElementById("a_lifepoint19").style.visibility = "hidden";
    }
    else if (temochi === 6) {
        document.getElementById("button1").style.visibility = "visible";
        document.getElementById("button2").style.visibility = "visible";
        document.getElementById("button3").style.visibility = "visible";
        document.getElementById("button4").style.visibility = "visible";
        document.getElementById("button5").style.visibility = "visible";
        document.getElementById("button6").style.visibility = "visible";
        document.getElementById("button7").style.visibility = "hidden";
        document.getElementById("button8").style.visibility = "hidden";
        document.getElementById("button9").style.visibility = "hidden";
        document.getElementById("button10").style.visibility = "hidden";
        document.getElementById("button11").style.visibility = "hidden";
        document.getElementById("button12").style.visibility = "hidden";
        document.getElementById("button13").style.visibility = "hidden";
        document.getElementById("button14").style.visibility = "hidden";
        document.getElementById("button15").style.visibility = "hidden";
        document.getElementById("button16").style.visibility = "hidden";
        document.getElementById("button17").style.visibility = "hidden";
        document.getElementById("button18").style.visibility = "hidden";
        document.getElementById("button19").style.visibility = "hidden";
        document.getElementById("z_lifepoint1").style.visibility = "visible";
        document.getElementById("z_lifepoint2").style.visibility = "visible";
        document.getElementById("z_lifepoint3").style.visibility = "visible";
        document.getElementById("z_lifepoint4").style.visibility = "visible";
        document.getElementById("z_lifepoint5").style.visibility = "visible";
        document.getElementById("z_lifepoint6").style.visibility = "visible";
        document.getElementById("z_lifepoint7").style.visibility = "hidden";
        document.getElementById("z_lifepoint8").style.visibility = "hidden";
        document.getElementById("z_lifepoint9").style.visibility = "hidden";
        document.getElementById("z_lifepoint10").style.visibility = "hidden";
        document.getElementById("z_lifepoint11").style.visibility = "hidden";
        document.getElementById("z_lifepoint12").style.visibility = "hidden";
        document.getElementById("z_lifepoint13").style.visibility = "hidden";
        document.getElementById("z_lifepoint14").style.visibility = "hidden";
        document.getElementById("z_lifepoint15").style.visibility = "hidden";
        document.getElementById("z_lifepoint16").style.visibility = "hidden";
        document.getElementById("z_lifepoint17").style.visibility = "hidden";
        document.getElementById("z_lifepoint18").style.visibility = "hidden";
        document.getElementById("z_lifepoint19").style.visibility = "hidden";
        document.getElementById("a_lifepoint1").style.visibility = "visible";
        document.getElementById("a_lifepoint2").style.visibility = "visible";
        document.getElementById("a_lifepoint3").style.visibility = "visible";
        document.getElementById("a_lifepoint4").style.visibility = "visible";
        document.getElementById("a_lifepoint5").style.visibility = "visible";
        document.getElementById("a_lifepoint6").style.visibility = "visible";
        document.getElementById("a_lifepoint7").style.visibility = "visible";
        document.getElementById("a_lifepoint8").style.visibility = "visible";
        document.getElementById("a_lifepoint9").style.visibility = "visible";
        document.getElementById("a_lifepoint10").style.visibility = "visible";
        document.getElementById("a_lifepoint11").style.visibility = "visible";
        document.getElementById("a_lifepoint12").style.visibility = "visible";
        document.getElementById("a_lifepoint13").style.visibility = "visible";
        document.getElementById("a_lifepoint14").style.visibility = "visible";
        document.getElementById("a_lifepoint15").style.visibility = "hidden";
        document.getElementById("a_lifepoint16").style.visibility = "hidden";
        document.getElementById("a_lifepoint17").style.visibility = "hidden";
        document.getElementById("a_lifepoint18").style.visibility = "hidden";
        document.getElementById("a_lifepoint19").style.visibility = "hidden";
    }
    else if (temochi === 5) {
        document.getElementById("button1").style.visibility = "visible";
        document.getElementById("button2").style.visibility = "visible";
        document.getElementById("button3").style.visibility = "visible";
        document.getElementById("button4").style.visibility = "visible";
        document.getElementById("button5").style.visibility = "visible";
        document.getElementById("button6").style.visibility = "hidden";
        document.getElementById("button7").style.visibility = "hidden";
        document.getElementById("button8").style.visibility = "hidden";
        document.getElementById("button9").style.visibility = "hidden";
        document.getElementById("button10").style.visibility = "hidden";
        document.getElementById("button11").style.visibility = "hidden";
        document.getElementById("button12").style.visibility = "hidden";
        document.getElementById("button13").style.visibility = "hidden";
        document.getElementById("button14").style.visibility = "hidden";
        document.getElementById("button15").style.visibility = "hidden";
        document.getElementById("button16").style.visibility = "hidden";
        document.getElementById("button17").style.visibility = "hidden";
        document.getElementById("button18").style.visibility = "hidden";
        document.getElementById("button19").style.visibility = "hidden";
        document.getElementById("z_lifepoint1").style.visibility = "visible";
        document.getElementById("z_lifepoint2").style.visibility = "visible";
        document.getElementById("z_lifepoint3").style.visibility = "visible";
        document.getElementById("z_lifepoint4").style.visibility = "visible";
        document.getElementById("z_lifepoint5").style.visibility = "visible";
        document.getElementById("z_lifepoint6").style.visibility = "hidden";
        document.getElementById("z_lifepoint7").style.visibility = "hidden";
        document.getElementById("z_lifepoint8").style.visibility = "hidden";
        document.getElementById("z_lifepoint9").style.visibility = "hidden";
        document.getElementById("z_lifepoint10").style.visibility = "hidden";
        document.getElementById("z_lifepoint11").style.visibility = "hidden";
        document.getElementById("z_lifepoint12").style.visibility = "hidden";
        document.getElementById("z_lifepoint13").style.visibility = "hidden";
        document.getElementById("z_lifepoint14").style.visibility = "hidden";
        document.getElementById("z_lifepoint15").style.visibility = "hidden";
        document.getElementById("z_lifepoint16").style.visibility = "hidden";
        document.getElementById("z_lifepoint17").style.visibility = "hidden";
        document.getElementById("z_lifepoint18").style.visibility = "hidden";
        document.getElementById("z_lifepoint19").style.visibility = "hidden";
        document.getElementById("a_lifepoint1").style.visibility = "visible";
        document.getElementById("a_lifepoint2").style.visibility = "visible";
        document.getElementById("a_lifepoint3").style.visibility = "visible";
        document.getElementById("a_lifepoint4").style.visibility = "visible";
        document.getElementById("a_lifepoint5").style.visibility = "visible";
        document.getElementById("a_lifepoint6").style.visibility = "visible";
        document.getElementById("a_lifepoint7").style.visibility = "visible";
        document.getElementById("a_lifepoint8").style.visibility = "visible";
        document.getElementById("a_lifepoint9").style.visibility = "visible";
        document.getElementById("a_lifepoint10").style.visibility = "visible";
        document.getElementById("a_lifepoint11").style.visibility = "visible";
        document.getElementById("a_lifepoint12").style.visibility = "visible";
        document.getElementById("a_lifepoint13").style.visibility = "visible";
        document.getElementById("a_lifepoint14").style.visibility = "visible";
        document.getElementById("a_lifepoint15").style.visibility = "visible";
        document.getElementById("a_lifepoint16").style.visibility = "hidden";
        document.getElementById("a_lifepoint17").style.visibility = "hidden";
        document.getElementById("a_lifepoint18").style.visibility = "hidden";
        document.getElementById("a_lifepoint19").style.visibility = "hidden";
    }
    else if (temochi === 4) {
        document.getElementById("button1").style.visibility = "visible";
        document.getElementById("button2").style.visibility = "visible";
        document.getElementById("button3").style.visibility = "visible";
        document.getElementById("button4").style.visibility = "visible";
        document.getElementById("button5").style.visibility = "hidden";
        document.getElementById("button6").style.visibility = "hidden";
        document.getElementById("button7").style.visibility = "hidden";
        document.getElementById("button8").style.visibility = "hidden";
        document.getElementById("button9").style.visibility = "hidden";
        document.getElementById("button10").style.visibility = "hidden";
        document.getElementById("button11").style.visibility = "hidden";
        document.getElementById("button12").style.visibility = "hidden";
        document.getElementById("button13").style.visibility = "hidden";
        document.getElementById("button14").style.visibility = "hidden";
        document.getElementById("button15").style.visibility = "hidden";
        document.getElementById("button16").style.visibility = "hidden";
        document.getElementById("button17").style.visibility = "hidden";
        document.getElementById("button18").style.visibility = "hidden";
        document.getElementById("button19").style.visibility = "hidden";
        document.getElementById("z_lifepoint1").style.visibility = "visible";
        document.getElementById("z_lifepoint2").style.visibility = "visible";
        document.getElementById("z_lifepoint3").style.visibility = "visible";
        document.getElementById("z_lifepoint4").style.visibility = "visible";
        document.getElementById("z_lifepoint5").style.visibility = "hidden";
        document.getElementById("z_lifepoint6").style.visibility = "hidden";
        document.getElementById("z_lifepoint7").style.visibility = "hidden";
        document.getElementById("z_lifepoint8").style.visibility = "hidden";
        document.getElementById("z_lifepoint9").style.visibility = "hidden";
        document.getElementById("z_lifepoint10").style.visibility = "hidden";
        document.getElementById("z_lifepoint11").style.visibility = "hidden";
        document.getElementById("z_lifepoint12").style.visibility = "hidden";
        document.getElementById("z_lifepoint13").style.visibility = "hidden";
        document.getElementById("z_lifepoint14").style.visibility = "hidden";
        document.getElementById("z_lifepoint15").style.visibility = "hidden";
        document.getElementById("z_lifepoint16").style.visibility = "hidden";
        document.getElementById("z_lifepoint17").style.visibility = "hidden";
        document.getElementById("z_lifepoint18").style.visibility = "hidden";
        document.getElementById("z_lifepoint19").style.visibility = "hidden";
        document.getElementById("a_lifepoint1").style.visibility = "visible";
        document.getElementById("a_lifepoint2").style.visibility = "visible";
        document.getElementById("a_lifepoint3").style.visibility = "visible";
        document.getElementById("a_lifepoint4").style.visibility = "visible";
        document.getElementById("a_lifepoint5").style.visibility = "visible";
        document.getElementById("a_lifepoint6").style.visibility = "visible";
        document.getElementById("a_lifepoint7").style.visibility = "visible";
        document.getElementById("a_lifepoint8").style.visibility = "visible";
        document.getElementById("a_lifepoint9").style.visibility = "visible";
        document.getElementById("a_lifepoint10").style.visibility = "visible";
        document.getElementById("a_lifepoint11").style.visibility = "visible";
        document.getElementById("a_lifepoint12").style.visibility = "visible";
        document.getElementById("a_lifepoint13").style.visibility = "visible";
        document.getElementById("a_lifepoint14").style.visibility = "visible";
        document.getElementById("a_lifepoint15").style.visibility = "visible";
        document.getElementById("a_lifepoint16").style.visibility = "visible";
        document.getElementById("a_lifepoint17").style.visibility = "hidden";
        document.getElementById("a_lifepoint18").style.visibility = "hidden";
        document.getElementById("a_lifepoint19").style.visibility = "hidden";
    }
    else if (temochi === 3) {
        document.getElementById("button1").style.visibility = "visible";
        document.getElementById("button2").style.visibility = "visible";
        document.getElementById("button3").style.visibility = "visible";
        document.getElementById("button4").style.visibility = "hidden";
        document.getElementById("button5").style.visibility = "hidden";
        document.getElementById("button6").style.visibility = "hidden";
        document.getElementById("button7").style.visibility = "hidden";
        document.getElementById("button8").style.visibility = "hidden";
        document.getElementById("button9").style.visibility = "hidden";
        document.getElementById("button10").style.visibility = "hidden";
        document.getElementById("button11").style.visibility = "hidden";
        document.getElementById("button12").style.visibility = "hidden";
        document.getElementById("button13").style.visibility = "hidden";
        document.getElementById("button14").style.visibility = "hidden";
        document.getElementById("button15").style.visibility = "hidden";
        document.getElementById("button16").style.visibility = "hidden";
        document.getElementById("button17").style.visibility = "hidden";
        document.getElementById("button18").style.visibility = "hidden";
        document.getElementById("button19").style.visibility = "hidden";
        document.getElementById("z_lifepoint1").style.visibility = "visible";
        document.getElementById("z_lifepoint2").style.visibility = "visible";
        document.getElementById("z_lifepoint3").style.visibility = "visible";
        document.getElementById("z_lifepoint4").style.visibility = "hidden";
        document.getElementById("z_lifepoint5").style.visibility = "hidden";
        document.getElementById("z_lifepoint6").style.visibility = "hidden";
        document.getElementById("z_lifepoint7").style.visibility = "hidden";
        document.getElementById("z_lifepoint8").style.visibility = "hidden";
        document.getElementById("z_lifepoint9").style.visibility = "hidden";
        document.getElementById("z_lifepoint10").style.visibility = "hidden";
        document.getElementById("z_lifepoint11").style.visibility = "hidden";
        document.getElementById("z_lifepoint12").style.visibility = "hidden";
        document.getElementById("z_lifepoint13").style.visibility = "hidden";
        document.getElementById("z_lifepoint14").style.visibility = "hidden";
        document.getElementById("z_lifepoint15").style.visibility = "hidden";
        document.getElementById("z_lifepoint16").style.visibility = "hidden";
        document.getElementById("z_lifepoint17").style.visibility = "hidden";
        document.getElementById("z_lifepoint18").style.visibility = "hidden";
        document.getElementById("z_lifepoint19").style.visibility = "hidden";
        document.getElementById("a_lifepoint1").style.visibility = "visible";
        document.getElementById("a_lifepoint2").style.visibility = "visible";
        document.getElementById("a_lifepoint3").style.visibility = "visible";
        document.getElementById("a_lifepoint4").style.visibility = "visible";
        document.getElementById("a_lifepoint5").style.visibility = "visible";
        document.getElementById("a_lifepoint6").style.visibility = "visible";
        document.getElementById("a_lifepoint7").style.visibility = "visible";
        document.getElementById("a_lifepoint8").style.visibility = "visible";
        document.getElementById("a_lifepoint9").style.visibility = "visible";
        document.getElementById("a_lifepoint10").style.visibility = "visible";
        document.getElementById("a_lifepoint11").style.visibility = "visible";
        document.getElementById("a_lifepoint12").style.visibility = "visible";
        document.getElementById("a_lifepoint13").style.visibility = "visible";
        document.getElementById("a_lifepoint14").style.visibility = "visible";
        document.getElementById("a_lifepoint15").style.visibility = "visible";
        document.getElementById("a_lifepoint16").style.visibility = "visible";
        document.getElementById("a_lifepoint17").style.visibility = "visible";
        document.getElementById("a_lifepoint18").style.visibility = "hidden";
        document.getElementById("a_lifepoint19").style.visibility = "hidden";
    }
    else if (temochi === 2) {
        document.getElementById("button1").style.visibility = "visible";
        document.getElementById("button2").style.visibility = "visible";
        document.getElementById("button3").style.visibility = "hidden";
        document.getElementById("button4").style.visibility = "hidden";
        document.getElementById("button5").style.visibility = "hidden";
        document.getElementById("button6").style.visibility = "hidden";
        document.getElementById("button7").style.visibility = "hidden";
        document.getElementById("button8").style.visibility = "hidden";
        document.getElementById("button9").style.visibility = "hidden";
        document.getElementById("button10").style.visibility = "hidden";
        document.getElementById("button11").style.visibility = "hidden";
        document.getElementById("button12").style.visibility = "hidden";
        document.getElementById("button13").style.visibility = "hidden";
        document.getElementById("button14").style.visibility = "hidden";
        document.getElementById("button15").style.visibility = "hidden";
        document.getElementById("button16").style.visibility = "hidden";
        document.getElementById("button17").style.visibility = "hidden";
        document.getElementById("button18").style.visibility = "hidden";
        document.getElementById("button19").style.visibility = "hidden";
        document.getElementById("z_lifepoint1").style.visibility = "visible";
        document.getElementById("z_lifepoint2").style.visibility = "visible";
        document.getElementById("z_lifepoint3").style.visibility = "hidden";
        document.getElementById("z_lifepoint4").style.visibility = "hidden";
        document.getElementById("z_lifepoint5").style.visibility = "hidden";
        document.getElementById("z_lifepoint6").style.visibility = "hidden";
        document.getElementById("z_lifepoint7").style.visibility = "hidden";
        document.getElementById("z_lifepoint8").style.visibility = "hidden";
        document.getElementById("z_lifepoint9").style.visibility = "hidden";
        document.getElementById("z_lifepoint10").style.visibility = "hidden";
        document.getElementById("z_lifepoint11").style.visibility = "hidden";
        document.getElementById("z_lifepoint12").style.visibility = "hidden";
        document.getElementById("z_lifepoint13").style.visibility = "hidden";
        document.getElementById("z_lifepoint14").style.visibility = "hidden";
        document.getElementById("z_lifepoint15").style.visibility = "hidden";
        document.getElementById("z_lifepoint16").style.visibility = "hidden";
        document.getElementById("z_lifepoint17").style.visibility = "hidden";
        document.getElementById("z_lifepoint18").style.visibility = "hidden";
        document.getElementById("z_lifepoint19").style.visibility = "hidden";
        document.getElementById("a_lifepoint1").style.visibility = "visible";
        document.getElementById("a_lifepoint2").style.visibility = "visible";
        document.getElementById("a_lifepoint3").style.visibility = "visible";
        document.getElementById("a_lifepoint4").style.visibility = "visible";
        document.getElementById("a_lifepoint5").style.visibility = "visible";
        document.getElementById("a_lifepoint6").style.visibility = "visible";
        document.getElementById("a_lifepoint7").style.visibility = "visible";
        document.getElementById("a_lifepoint8").style.visibility = "visible";
        document.getElementById("a_lifepoint9").style.visibility = "visible";
        document.getElementById("a_lifepoint10").style.visibility = "visible";
        document.getElementById("a_lifepoint11").style.visibility = "visible";
        document.getElementById("a_lifepoint12").style.visibility = "visible";
        document.getElementById("a_lifepoint13").style.visibility = "visible";
        document.getElementById("a_lifepoint14").style.visibility = "visible";
        document.getElementById("a_lifepoint15").style.visibility = "visible";
        document.getElementById("a_lifepoint16").style.visibility = "visible";
        document.getElementById("a_lifepoint17").style.visibility = "visible";
        document.getElementById("a_lifepoint18").style.visibility = "visible";
        document.getElementById("a_lifepoint19").style.visibility = "hidden";
    }
    else if (temochi === 1) {
        document.getElementById("button1").style.visibility = "visible";
        document.getElementById("button2").style.visibility = "hidden";
        document.getElementById("button3").style.visibility = "hidden";
        document.getElementById("button4").style.visibility = "hidden";
        document.getElementById("button5").style.visibility = "hidden";
        document.getElementById("button6").style.visibility = "hidden";
        document.getElementById("button7").style.visibility = "hidden";
        document.getElementById("button8").style.visibility = "hidden";
        document.getElementById("button9").style.visibility = "hidden";
        document.getElementById("button10").style.visibility = "hidden";
        document.getElementById("button11").style.visibility = "hidden";
        document.getElementById("button12").style.visibility = "hidden";
        document.getElementById("button13").style.visibility = "hidden";
        document.getElementById("button14").style.visibility = "hidden";
        document.getElementById("button15").style.visibility = "hidden";
        document.getElementById("button16").style.visibility = "hidden";
        document.getElementById("button17").style.visibility = "hidden";
        document.getElementById("button18").style.visibility = "hidden";
        document.getElementById("button19").style.visibility = "hidden";
        document.getElementById("z_lifepoint1").style.visibility = "visible";
        document.getElementById("z_lifepoint2").style.visibility = "hidden";
        document.getElementById("z_lifepoint3").style.visibility = "hidden";
        document.getElementById("z_lifepoint4").style.visibility = "hidden";
        document.getElementById("z_lifepoint5").style.visibility = "hidden";
        document.getElementById("z_lifepoint6").style.visibility = "hidden";
        document.getElementById("z_lifepoint7").style.visibility = "hidden";
        document.getElementById("z_lifepoint8").style.visibility = "hidden";
        document.getElementById("z_lifepoint9").style.visibility = "hidden";
        document.getElementById("z_lifepoint10").style.visibility = "hidden";
        document.getElementById("z_lifepoint11").style.visibility = "hidden";
        document.getElementById("z_lifepoint12").style.visibility = "hidden";
        document.getElementById("z_lifepoint13").style.visibility = "hidden";
        document.getElementById("z_lifepoint14").style.visibility = "hidden";
        document.getElementById("z_lifepoint15").style.visibility = "hidden";
        document.getElementById("z_lifepoint16").style.visibility = "hidden";
        document.getElementById("z_lifepoint17").style.visibility = "hidden";
        document.getElementById("z_lifepoint18").style.visibility = "hidden";
        document.getElementById("z_lifepoint19").style.visibility = "hidden";
        document.getElementById("a_lifepoint1").style.visibility = "visible";
        document.getElementById("a_lifepoint2").style.visibility = "visible";
        document.getElementById("a_lifepoint3").style.visibility = "visible";
        document.getElementById("a_lifepoint4").style.visibility = "visible";
        document.getElementById("a_lifepoint5").style.visibility = "visible";
        document.getElementById("a_lifepoint6").style.visibility = "visible";
        document.getElementById("a_lifepoint7").style.visibility = "visible";
        document.getElementById("a_lifepoint8").style.visibility = "visible";
        document.getElementById("a_lifepoint9").style.visibility = "visible";
        document.getElementById("a_lifepoint10").style.visibility = "visible";
        document.getElementById("a_lifepoint11").style.visibility = "visible";
        document.getElementById("a_lifepoint12").style.visibility = "visible";
        document.getElementById("a_lifepoint13").style.visibility = "visible";
        document.getElementById("a_lifepoint14").style.visibility = "visible";
        document.getElementById("a_lifepoint15").style.visibility = "visible";
        document.getElementById("a_lifepoint16").style.visibility = "visible";
        document.getElementById("a_lifepoint17").style.visibility = "visible";
        document.getElementById("a_lifepoint18").style.visibility = "visible";
        document.getElementById("a_lifepoint19").style.visibility = "visible";
    }





}








