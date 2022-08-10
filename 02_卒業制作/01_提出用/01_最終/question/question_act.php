<?php
session_start();
include("../functions.php");
check_session_id();

$id = $_SESSION["id"];

// var_dump($id);
// exit();

$ques_title = $_POST["ques_title"];
$question = $_POST["question"];

// var_dump($thumbnail);
// exit();

$pdo = connect_to_db();
$sql = "INSERT INTO question_table (user_id, ques_title, question, ques_created) 
    VALUE(:id, :ques_title, :question, now())";


    $stmt = connect_to_db()->prepare($sql);
    $stmt->bindValue(':id', $id, PDO::PARAM_STR);
    $stmt->bindValue(':ques_title', $ques_title, PDO::PARAM_STR);
    $stmt->bindValue(':question', $question, PDO::PARAM_STR);

try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}

?>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>file_upload</title>
      <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-earthly.css" type="text/css">

</head>


<h1>投稿が完了しました</h1>
<a href="../question.php">戻る</a>

