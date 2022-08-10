<?php
session_start();
include("../functions.php");
check_session_id();

// var_dump($_SESSION["username"]);
// exit();

$naritai = $_POST["naritai"];
$mokuhyou = $_POST["mokuhyou"];
$username = $_SESSION["username"];

$pdo = connect_to_db();


$sql = "UPDATE users_table SET naritai=:naritai, mokuhyou=:mokuhyou WHERE username=:username";


$stmt = $pdo->prepare($sql);
// var_dump($sql);
// exit();

// $stmt = $pdo->prepare($sql);
$stmt->bindValue(':naritai', $naritai, PDO::PARAM_STR);
$stmt->bindValue(':mokuhyou', $mokuhyou, PDO::PARAM_STR);
$stmt->bindValue(':username', $username, PDO::PARAM_STR);


try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}

header("Location:../mypage.php");
exit();




// $sql = 'INSERT INTO users_table(id, username, password, is_admin, is_deleted, created_at, updated_at) VALUES(NULL, :username, :password, 0, 0, now(), now())';

// $stmt = $pdo->prepare($sql);
// $stmt->bindValue(':username', $username, PDO::PARAM_STR);
// $stmt->bindValue(':password', $password, PDO::PARAM_STR);

// try {
//   $status = $stmt->execute();
// } catch (PDOException $e) {
//   echo json_encode(["sql error" => "{$e->getMessage()}"]);
//   exit();
// }

// header("Location:index.php");
// exit();








// $sql = "UPDATE todo_table SET todo=:todo, deadline=:deadline, updated_at=now() WHERE id=:id";

// $stmt = $pdo->prepare($sql);
// $stmt->bindValue(':todo', $todo, PDO::PARAM_STR);
// $stmt->bindValue(':deadline', $deadline, PDO::PARAM_STR);
// $stmt->bindValue(':id', $id, PDO::PARAM_INT);
// var_dump($sql);
// exit();
    // $stmt = connect_to_db()->prepare($sql);
    // $stmt->bindValue(':naritai', $naritai, PDO::PARAM_STR);
    // $stmt->bindValue(':mokuhyou', $mokuhyou, PDO::PARAM_STR);



//   try{
//     $stmt = connect_to_db()->prepare($sql);
//     $stmt->bindValue(':naritai', $naritai, PDO::PARAM_STR);
//     $stmt->bindValue(':mokuhyou', $mokuhyou, PDO::PARAM_STR);
    // $stmt->bindValue(1,$naritai);
    // $stmt->bindValue(2,$mokuhyou);

// var_dump($naritai);
// exit();
// var_dump($stmt);
// exit();
//     $result = $stmt->execute();

// var_dump($result);
// exit();

//     return $result;
//   }catch(\Exception $e){
//     echo ($e->getMessage());
//     return $result;


//     header("Location: setting.php");
//     exit();
//   }
