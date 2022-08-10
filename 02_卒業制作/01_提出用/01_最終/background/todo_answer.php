<?php
include("../functions.php");

// var_dump($_POST);
// exit();

$user_id = $_POST["id"];
$ques_id = $_POST["ques_id"];
$username = $_POST["username"];
$answer = $_POST["answer"];

$pdo = connect_to_db();
$sql = "INSERT INTO answer_table (user_id, ques_id, username,answer, deleted_at, created_at, updated_at) 
    VALUE(:user_id, :ques_id,:username, :answer, 0, now(),now())";


    $stmt = connect_to_db()->prepare($sql);
    $stmt->bindValue(':user_id', $user_id, PDO::PARAM_STR);
    $stmt->bindValue(':ques_id', $ques_id, PDO::PARAM_STR);
    $stmt->bindValue(':username', $username, PDO::PARAM_STR);
    $stmt->bindValue(':answer', $answer, PDO::PARAM_STR);

try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}


$sql_answer = "SELECT COUNT(*) FROM question_table WHERE ques_id =$ques_id";
$answer_count = $pdo->query($sql_answer);
//  $stmt->bindValue(':ques_id', $ques_id, PDO::PARAM_STR);

$a_count = $answer_count->fetchColumn();

// var_dump($a_count);
// exit();

 $sql = 'UPDATE question_table SET answer =:a_count WHERE ques_id=:ques_id';
 $stmt = $pdo->prepare($sql);
 $stmt->bindValue(':a_count', $a_count, PDO::PARAM_INT);
 $stmt->bindValue(':ques_id', $ques_id, PDO::PARAM_STR);
 
 try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}

// var_dump($ques_id);
// exit();

?>



<h1>回答を投稿しました</h1>
    <a href='../question_article.php?id=<?php echo "{$ques_id}" ?>'>
	記事へ戻る</a>