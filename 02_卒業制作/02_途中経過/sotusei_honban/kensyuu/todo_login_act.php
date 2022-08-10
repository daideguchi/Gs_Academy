<?php
// データ受け取り
// var_dump($_POST);
// exit();
session_start();

// DB接続
// var_dump($_POST);
// exit();

include("functions.php");
$pdo = connect_to_db(); //接続に成功したらpdpにデータが入る
$username = $_POST["username"];
$password = $_POST["password"];

// var_dump($username);
// var_dump($password);
// exit();
// var_dump("あ");
// exit();

// SQL実行
$sql = "SELECT * FROM users_table WHERE username=:username AND password=:password AND is_deleted=0";

$stmt = $pdo->prepare($sql);
$stmt->bindValue(':username', $username, PDO::PARAM_STR);
$stmt->bindValue(':password', $password, PDO::PARAM_STR);

// var_dump($sql);
// exit();




try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}
// ユーザ有無で条件分岐
$val = $stmt->fetch(PDO::FETCH_ASSOC);
// var_dump($val);
// exit();
if(!$val){
    echo"<p>ログイン情報に誤りがあります</p>";
    echo"<a href='index.php'>ログイン画面へ</a>";
    exit();
}else{
    $_SESSION = array();
    $_SESSION["session_id"] = session_id();
    $_SESSION["is_admin"] = $val["is_admin"];
    $_SESSION["username"] = $val["username"];


    header("Location: mypage.php");
    exit();
}