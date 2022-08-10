<?php
session_start();
include("functions.php");
check_session_id();

var_dump($_POST);
exit();

$user_id = $_POST["user_id"];
$post_id = $_POST["post_id"];

$pdo = connect_to_db();

// var_dump($pdo);
// exit();

$sql = 'INSERT INTO users_table(id, username, email, password, is_admin, pref, city, department, is_deleted, created_at, updated_at) VALUES(NULL, :username, :email, :password, 0, :pref, :city, :department, 0, now(), now())';

$stmt = $pdo->prepare($sql);
$stmt->bindValue(':username', $username, PDO::PARAM_STR);
$stmt->bindValue(':email', $email, PDO::PARAM_STR);
$stmt->bindValue(':password', $password, PDO::PARAM_STR);
$stmt->bindValue(':pref', $pref, PDO::PARAM_STR);
$stmt->bindValue(':city', $city, PDO::PARAM_STR);
$stmt->bindValue(':department', $department, PDO::PARAM_STR);

try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}