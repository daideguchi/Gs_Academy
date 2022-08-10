<?php
session_start();
include("functions.php");
check_session_id();

// var_dump($_GET);
// exit();

$id = $_GET["id"];

$pdo = connect_to_db();

// $sql = "DELETE FROM todo_table WHERE id=:id";
//WHEREでどのレコードを消すかidで指定しないと全て消えてしまうので要注意
$sql = 'DELETE FROM file_table WHERE id=:id';
// $sql = 'UPDATE todo_table SET is_deleted = 1,cnt=0;updated_at =now() WHERE id=:id';

$stmt = $pdo->prepare($sql);
$stmt->bindValue(':id', $id, PDO::PARAM_INT);

try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}

header("Location:mypage.php");
exit();
