<?php
session_start();
include("../functions.php");
check_session_id();

$id = $_SESSION["id"];

// var_dump($id);
// exit();

$title = $_POST["title"];
$text = $_POST["text"];
$thumbnail = $_POST["thumbnail"];

// var_dump($thumbnail);
// exit();

$pdo = connect_to_db();
$sql = "INSERT INTO posts_table (user_id, title, text, thumbnail, deleted_at, p_created_at, p_updated_at) 
    VALUE(:id, :title, :text, :thumbnail, 0, now(),now())";


    $stmt = connect_to_db()->prepare($sql);
    $stmt->bindValue(':id', $id, PDO::PARAM_STR);
    $stmt->bindValue(':title', $title, PDO::PARAM_STR);
    $stmt->bindValue(':text', $text, PDO::PARAM_STR);
    $stmt->bindValue(':thumbnail', $thumbnail, PDO::PARAM_STR);

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
<a href="../mypage.php">戻る</a>

