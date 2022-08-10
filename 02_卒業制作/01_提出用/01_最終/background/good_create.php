<?php
// var_dump($_GET);
// exit();
session_start();
include('../functions.php');

$user_id = $_GET['user_id'];
$user_session_id = $_SESSION["id"];
$post_id = $_GET['post_id'];

// var_dump($user_id);
// var_dump($post_id);
// var_dump($user_session_id);

// exit();

$pdo = connect_to_db();

$sql = 'SELECT COUNT(*) FROM good WHERE session_user_id=:user_id AND g_post_id=:post_id';
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':user_id', $user_session_id, PDO::PARAM_STR);
$stmt->bindValue(':post_id', $post_id, PDO::PARAM_STR);

// var_dump($sql);
// exit();

try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}



$like_count = $stmt->fetchColumn();


$sql_good = "SELECT COUNT(*) FROM good WHERE g_post_id = $post_id";
$good_count = $pdo->query($sql_good);
$g_count = $good_count->fetchColumn();

// $sql = 'SELECT good FROM `good` WHERE post_id=:post_id';
// $stmt = $pdo->prepare($sql);
// $stmt->bindValue(':post_id', $post_id, PDO::PARAM_STR);
// $good_total = $stmt->fetchColumn();

// var_dump($g_count);
// exit();



if ($like_count != 0) {
  $sql = 'DELETE FROM good WHERE session_user_id=:user_id AND g_post_id=:post_id AND g_user_id =:g_user_id' ;
  $g_count = $g_count - 1;

} else {
  $sql = 'INSERT INTO good ( g_user_id, g_post_id,session_user_id) VALUES ( :g_user_id, :post_id, :user_id)';
  $g_count = $g_count + 1;

}

// var_dump($sql);
// exit();

$stmt = $pdo->prepare($sql);
$stmt->bindValue(':g_user_id', $user_id, PDO::PARAM_STR);
$stmt->bindValue(':user_id', $user_session_id, PDO::PARAM_STR);
$stmt->bindValue(':post_id', $post_id, PDO::PARAM_STR);

try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}

//  var_dump($g_count);
//  exit();

 $sql = 'UPDATE posts_table SET good =:g_count WHERE post_id=:post_id';
 $stmt = $pdo->prepare($sql);
 $stmt->bindValue(':g_count', $g_count, PDO::PARAM_INT);
 $stmt->bindValue(':post_id', $post_id, PDO::PARAM_STR);

//   var_dump($stmt);
//  exit();

try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}
//  var_dump($sql);
//  exit();

header("Location:../article.php?id={$post_id}");
exit();
