<meta http-equiv="Refresh" content="0;URL=insta_txt_read.php">


<?php
// var_dump($_POST);
// exit();

$hannou = $_POST["hannou"];
$text = $_POST["text"];


$write_data = "{$hannou},{$text}\n";
// $file = fopen('data/todo.txt', 'a');
$file = fopen('data/data.csv', 'a');

flock($file, LOCK_EX);
fwrite($file, $write_data);
flock($file, LOCK_UN);
fclose($file);

header("insta2.php");

?>






<!-- 

// データの受け取り
$todo = $_POST["todo"];
$deadline = $_POST["deadline"];

// データ1件を1行にまとめる（最後に改行を入れる）
$write_data = "{$deadline} {$todo}\n";

// ファイルを開く．引数が`a`である部分に注目！
$file = fopen('data/todo.txt', 'a');
// ファイルをロックする
flock($file, LOCK_EX);

// 指定したファイルに指定したデータを書き込む
fwrite($file, $write_data);

// ファイルのロックを解除する
flock($file, LOCK_UN);
// ファイルを閉じる
fclose($file);

// データ入力画面に移動する
header("Location:todo_txt_input.php"); -->