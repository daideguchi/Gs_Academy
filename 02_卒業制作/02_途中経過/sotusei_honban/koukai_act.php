<?php
session_start();
include("functions.php");
check_session_id();

// var_dump($_POST);
// exit();

$koukai = ($_POST["yes"]);
$file_path = ($_POST["save"]);



// var_dump($file_path);
// exit();

$pdo = connect_to_db();

$sql = "UPDATE file_table SET koukai=:koukai WHERE file_path=:file_path";
  // $sql = "INSERT INTO file_table (koukai) VALUE($koukai)";

$stmt = $pdo->prepare($sql);

$stmt->bindValue(':koukai', $koukai, PDO::PARAM_STR);
$stmt->bindValue(':file_path', $file_path, PDO::PARAM_STR);


try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}

header("Location:feedback1.php");
exit();

?>

