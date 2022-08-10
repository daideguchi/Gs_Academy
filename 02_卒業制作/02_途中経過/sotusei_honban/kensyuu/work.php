<?php
session_start();
include("functions.php");
check_session_id();
$id = $_GET["id"];

$pdo = connect_to_db();

// SQL実行
//編集したい項目のIDを取得
$sql = 'SELECT * FROM file_table WHERE id=:id';

$stmt = $pdo->prepare($sql);
$stmt->bindValue(':id', $id, PDO::PARAM_STR);
try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}
$record = $stmt->fetch(PDO::FETCH_ASSOC);


?>


<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <title>positive album</title>
    <link rel="stylesheet" type="text/css" href="css/CloudVision.css">
</head>
<body>
<h3 id='title'>写真登録ワーク</h3>
<!--- 画像をアップロードさせるためのボタンのあるエリア --->
<div id="uploadArea"><l>あなたにとって楽しかった思い出写真を選択してください</div>
<!-- <div id="yubi"><img src="yubi.jpeg" alt=""></div>     -->
<form action="album_hozon.php" method="POST" enctype="multipart/form-data">

    <input type="hidden" name="id" value="<?= $record['id'] ?>">
    <input type="hidden" name="max" value="1048576" />
    <input name="img" id="uploader1" type="file" accept="image/*">

    <hr>

    <!-- </l><input type="file" id="uploader2">
    </l><input type="file" id="uploader3">
    </l><input type="file" id="uploader4"> -->

    <!--- Google Cloud Vision APIに画像ファイルを送り、得られた結果を表示するエリア --->
    <!--- 初期状態ではクラス"hidden"を付与し、CSSでhiddenクラスは表示されないよう記述します --->
    <div class="resultArea hidden">
    <!--- アップロードされた画像を表示 --->
    <div id="showPic"></div>

    <!--- ラベル検出の結果を表示 --->
    <!-- <table id="resultTable">
        <thead><tr><td><b>This picture may be about...</b></td></tr></thead>
        <tbody id="resultBox"></tbody>
    </table> -->
    </div>
    <div class="resultArea hidden">
     <!--- 人物の表情に関する結果をレーダーチャートで表示 --->
        <div id="chartArea"></div>
    <!--- テキスト解読の結果を表示 --->
    <!-- <table id="textTable">
        <thead><tr><td><b>This picture may contain following word(s)</b></td></tr></thead>
        <tbody id="textBox"></tbody> -->
     </table>
     </div>
    <div class="resultArea2 hidden">
    <!-- <form action="album_hozon.php" method="POST"> -->
    <!-- <h3>この写真のスコア</h3> -->
    <h2 id="score" name="score"></h2>
    <!-- <input type="file" name="img"> -->
    <!-- <input type="text" name="text"> -->
        <p>この写真はどんな思い出ですか？</p>
    <input type="text" name="caption">
     <button id="commit">登録する</button>

 </form>


    </div>
    <a href="mypage.php">マイページTOPへ戻る</a>

<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<!--- 表情分析の結果をレーダーチャートで表すために以下の二つを用います --->
<script src="http://code.highcharts.com/highcharts.js"></script>
<script src="http://code.highcharts.com/highcharts-more.js"></script>
<script type="text/javascript" src="CloudVision.js"></script>
</body>
</html>

