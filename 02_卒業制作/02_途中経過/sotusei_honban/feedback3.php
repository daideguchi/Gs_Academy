<?php
session_start();
include("functions.php");
check_session_id();

// var_dump($_POST);
// exit();

$username = $_SESSION["username"];
$feedback = $_POST["feedback"];
$id = $_POST["id"];
$kanjou = $_POST["sizeSelect"];


$pdo = connect_to_db();

$sql1 = "UPDATE file_table SET feedback=:feedback WHERE id=:id";
  // $sql = "INSERT INTO file_table (koukai) VALUE($koukai)";

//   var_dump($sql);
//   exit();
  
$stmt1 = $pdo->prepare($sql1);

$stmt1->bindValue(':feedback', $feedback, PDO::PARAM_STR);
$stmt1->bindValue(':id', $id, PDO::PARAM_STR);


try {
  $status1 = $stmt1->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}

  $sql = "INSERT INTO like_table (username, kanjou, created_at) VALUE(:username,:kanjou,now())";

//   var_dump($kanjou);
//   exit();

    $stmt = connect_to_db()->prepare($sql);
    $stmt->bindValue(':username', $username, PDO::PARAM_STR);
    $stmt->bindValue(':kanjou', $kanjou, PDO::PARAM_STR);

try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}

  
// $stmt = $pdo->prepare($sql);

//   var_dump($id);
//   exit();

// $stmt->bindValue(':kanjou', $kanjou, PDO::PARAM_STR);
// $stmt->bindValue(':username', $username, PDO::PARAM_STR);
//   exit();





// header("Location:feedback4.php");
// exit();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Document</title>
</head>
<body>
    


  <h1>お疲れ様でした！</h1>
<a href="mypage.php">戻る</a>


</body>
</html>
