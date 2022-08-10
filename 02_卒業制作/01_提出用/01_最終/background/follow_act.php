<?php
// var_dump($_GET);
// exit();

include('../functions.php');

$user_id = $_GET['id'];
$my_id = $_GET['my_id'];

// var_dump($user_id);
// var_dump($my_id);

// exit();

$pdo = connect_to_db();

//私からあなたへフォロー
$sql = 'SELECT COUNT(*) FROM follow WHERE user_id_to=:user_id 
AND user_id_from=:my_id';
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':user_id', $user_id, PDO::PARAM_STR);
$stmt->bindValue(':my_id', $my_id, PDO::PARAM_STR);

// var_dump($stmt);
// exit();

try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}

//私からあなたへのフォロー数
$follow_count = $stmt->fetchColumn();
// var_dump($follow_count);
// exit();

//これからフォローする人が、どれだけフォローされているかの数
$sql_follow_to = "SELECT COUNT(*) FROM follow WHERE user_id_to = $user_id";
$follow_to = $pdo->query($sql_follow_to);
$follow_to_count = $follow_to->fetchColumn();
// var_dump($follow_to_count);
// exit();

//自分がフォローした人数
$sql_follow_from = "SELECT COUNT(*) FROM follow WHERE user_id_from = $my_id";
$follow_from= $pdo->query($sql_follow_from);
$follow_from_count = $follow_from->fetchColumn();
// var_dump($follow_from_count);
// exit();

// $sql = 'SELECT good FROM `good` WHERE post_id=:post_id';
// $stmt = $pdo->prepare($sql);
// $stmt->bindValue(':post_id', $post_id, PDO::PARAM_STR);
// $good_total = $stmt->fetchColumn();

// var_dump($follow_to_count);
// var_dump($follow_from_count);

// exit();



//重複してフォローしないようにするコマンド
//フォローしている人のフォローを解除するとき
if ($follow_count != 0) {
  $sql = 'DELETE FROM follow WHERE user_id_to=:user_id AND user_id_from=:my_id';
  $follow_to_count = $follow_to_count - 1;
  $follow_from_count = $follow_from_count - 1;


//新たにフォローするとき
} else {
  $sql = 'INSERT INTO follow (user_id_to, user_id_from) VALUES ( :user_id, :my_id)';
  $follow_to_count = $follow_to_count + 1;
  $follow_from_count = $follow_from_count + 1;

}

// var_dump($sql);
// exit();

$stmt = $pdo->prepare($sql);
$stmt->bindValue(':user_id', $user_id, PDO::PARAM_STR);
$stmt->bindValue(':my_id', $my_id, PDO::PARAM_STR);

// var_dump($stmt);
// exit();

try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}

//  var_dump($g_count);
//  exit();

//自分から相手にフォローしたとき、自分のusers_tableのfollow_toと相手のusers_tableのfollow_fromにカラムに数字を足す
 $sql = 'UPDATE users_table SET follow_to =:follow_to_count WHERE id=:my_id';
 $stmt = $pdo->prepare($sql);
 $stmt->bindValue(':follow_to_count', $follow_to_count, PDO::PARAM_INT);
 $stmt->bindValue(':my_id', $my_id, PDO::PARAM_STR);

//   var_dump($stmt);
//  exit();

try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}

 $sql = 'UPDATE users_table SET follow_from =:follow_from_count WHERE id=:user_id';
 $stmt = $pdo->prepare($sql);
 $stmt->bindValue(':follow_from_count', $follow_from_count, PDO::PARAM_INT);
 $stmt->bindValue(':user_id', $user_id, PDO::PARAM_STR);

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

header("Location:../userspage.php?id={$user_id}");
exit();
