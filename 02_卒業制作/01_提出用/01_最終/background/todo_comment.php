<?php
include("../functions.php");

// var_dump($_POST);
// exit();

$username = $_POST["username"];
$user_id = $_POST["user_id"];
$post_id = $_POST["post_id"];
$comment = $_POST["comment"];

$pdo = connect_to_db();
$sql = "INSERT INTO comment_table (user_id, post_id, username, comment, deleted_at, created_at, updated_at) 
    VALUE(:user_id, :post_id, :username, :comment, 0, now(),now())";


    $stmt = connect_to_db()->prepare($sql);
    $stmt->bindValue(':user_id', $user_id, PDO::PARAM_STR);
    $stmt->bindValue(':post_id', $post_id, PDO::PARAM_STR);
    $stmt->bindValue(':username', $username, PDO::PARAM_STR);
    $stmt->bindValue(':comment', $comment, PDO::PARAM_STR);

try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}

// var_dump($post_id);
// exit();
$sql_comment = "SELECT COUNT(*) FROM comment_table WHERE post_id = $post_id";
$comment_count = $pdo->query($sql_comment);
$c_count = $comment_count->fetchColumn();

// var_dump($c_count);
// exit();

 $sql = 'UPDATE posts_table SET comment =:c_count WHERE post_id=:post_id';
 $stmt = $pdo->prepare($sql);
 $stmt->bindValue(':c_count', $c_count, PDO::PARAM_INT);
 $stmt->bindValue(':post_id', $post_id, PDO::PARAM_STR);
 
 try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}

?>



<h1>コメントを投稿しました</h1>
    <a href='../article.php?id=<?php echo "{$post_id}" ?>'>
	記事へ戻る</a>