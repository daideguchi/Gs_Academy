<?php
$str ="";
$file= fopen("data/data.csv", "r");
flock($file, LOCK_EX);

if($file){
  while($line=fgets($file)){
    $str .= "<rt?><td>{$line}</td></tr>";
  }
}
flock($file, LOCK_UN);
fclose($file);
?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.js"></script>

  <title>結果発表＆入力ログ</title>
</head>

<body>
  <fieldset>
    <legend>結果発表＆入力ログ</legend>
    <a href="insta2.php">入力画面へ戻る</a>
    <table>
      <thead>
        <tr>
          <th>評価＆入力ログ</th>
          <br />
        </tr>
      </thead>
      <tbody>
        <?= $str ?>
      </tbody>
    </table>
  </fieldset>


  <script>


  //CSVファイルを読み込む関数getCSV()の定義
function getCSV(){
    let req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", "data/data.csv", true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行
	
    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
    req.onload = function(){
	convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
    }
}
 
// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
    let result = []; // 最終的な二次元配列を入れるための配列
    let tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
    let result2=[]
    let iine = 0
    let uun = 0

    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for(var i=0;i<tmp.length; ++i){
        result[i] = tmp[i].split(',');
        result2[i] = result[i][0];
    }

     for(var i=0;i<tmp.length; ++i){
        if(result2[i] === "いいね"){
        iine = iine + 1
        }else if(result2[i] === "うーん"){
        uun = uun + 1
        }
    }

        result3 = [iine,uun]


   let ctx = document.getElementById("myChart");
  let myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["いいね", "うーん"],
      datasets: [{
          backgroundColor: [
            //   "#BB5179",
            //   "#FAFF67",
              "#3C00FF",
              "#808080",
              
          ],
          data: result3
      }]
    },
    options: {
      title: {
        display: true,
        text: '評価の結果'
      }
    }
  });
    console.log(result); // 300yen
}
 
getCSV(); //最初に実行される

</script>

    <br /><br /><br />
    <div class="chart">
        <canvas id="myChart"></canvas>
    </div>


    <style>
body{
    background: #f0fff0;
}

tbody{
    font-size: 20px;
    /* text-align: center; */
}

thead{
    font-size: 30px;
    color: red;
}

table{
    margin: auto;
}


.chart {
    text-align: center;
    margin: auto;
    height: 417px;
    width: 834px;
}

    </style>
</body>

</html>