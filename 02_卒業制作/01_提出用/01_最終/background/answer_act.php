<?php
// var_dump($_GET);
// exit();

include('../functions.php');

$ques_id = $_GET['id'];

// var_dump($user_id);
// var_dump($my_id);

// exit();

$pdo = connect_to_db();

$sql = 'SELECT SUM((ok)) FROM (question_table) WHERE ques_id=:ques_id';
$stmt = $pdo->prepare($sql);
 $stmt->bindValue(':ques_id', $ques_id, PDO::PARAM_INT);

try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}
// $comment_total = $stmt->fetch();
$ok = $stmt->fetch();
$ok = $ok ["SUM((ok))"];

// var_dump($ok);
// exit();

if ($ok != "0") {
    $ok = 0;
    } else {
    $ok = 1;
    }

// var_dump($ok);
// exit();

 $sql = 'UPDATE question_table SET ok =:ok WHERE ques_id=:ques_id';
 $stmt = $pdo->prepare($sql);
 $stmt->bindValue(':ques_id', $ques_id, PDO::PARAM_INT);
 $stmt->bindValue(':ok', $ok, PDO::PARAM_STR);



try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}


header("Location:../question_article.php?id={$ques_id}");
exit();
