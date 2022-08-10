<?php
session_start();
include("functions.php");
check_session_id();

$question_all = question_all();

$id = $_SESSION["id"];
$username = $_SESSION["username"];
$ques_id = $_GET["id"];

$pdo = connect_to_db();

//回答の件数を取得
$sql_answer = "SELECT COUNT(*) FROM answer_table WHERE ques_id = $ques_id";
$answer_count = $pdo->query($sql_answer);
$count = $answer_count->fetchColumn();


$sql = "SELECT * FROM `users_table` JOIN `question_table` 
ON users_table.id = question_table.user_id 
WHERE ques_id = $ques_id;";
$stmt = $pdo->prepare($sql);

try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}



foreach($stmt as $article): 
// //   var_dump($article);
// exit();
    $ques_title = $article['ques_title'];
    $ques_user_id = $article['user_id'];
    $question = $article['question'];
    $quesuser = $article['username'];
    $quesuser_id = $article['id'];
    $quesuser_pref = $article['pref'];
    $quesuser_city = $article['city'];
    $quesuser_department = $article['department'];
    $ok = $article['ok'];
 endforeach;

// var_dump($ok);
// exit();
// var_dump($id);

// var_dump($ques_user_id);
// exit();

//回答を表示するための準備
$sql_answer = "SELECT * FROM answer_table WHERE ques_id=$ques_id";
$stmt_answer = $pdo->prepare($sql_answer);

// var_dump($stmt_answer);
// exit();

try {
  $status_answer = $stmt_answer->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}



?>





<!DOCTYPE html>
<html lang="ja">

</html>
<html>

<head>
 
    <title>質問記事</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <!-- <link rel="stylesheet" href="assets/css/main.css" /> -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-earthly.css" type="text/css"> -->
    <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/headers/">

     <!-- Bootstrap core CSS -->
 <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet">

<style>
  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }
</style>


<!-- Custom styles for this template -->
<link href="headers.css" rel="stylesheet">
  <link rel="icon" href="images/favicon.ico">



	</head>
	<body class="landing is-preload">
    
		
        <!-- ヘッダー、ナビゲーションバー、選択時の色を変える -->
     <div class="container">
       <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
         <a href="toppage.php" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
           <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
           <span class="fs-4"><img id="nav_l" src="images/IMG_5507.PNG" alt="アイコン" style="height:50px;">Chalk up</span>
         </a>

         <ul class="nav nav-pills">
           <li class="nav-item"><a href="mypage.php" class="nav-link" aria-current="page">マイページ</a></li>
           <li class="nav-item"><a href="search.php" class="nav-link">探す</a></li>
           <li class="nav-item"><a href="./post/post.php" class="nav-link">書く</a></li>
           <li class="nav-item"><a href="question.php" class="nav-link">質問する</a></li>
           <li class="nav-item"><a href="./background/todo_logout.php" class="nav-link">ログアウト</a></li>
         </ul>
       </header>
     </div>


    <main>
            <!-- 質問ゾーン -->
            <?php if ($ok != 0) {?>
                <p style="color: green;">解決ずみ</p>
                <?php
            } else {?>
                <p style="color: red;">未解決</p>
                <?php }?>

                <!-- 質問の詳細 -->
        <?php 
        if ($id === $ques_user_id) {?>
            <?php if ($ok != 0) {?>
                <a href="./background/answer_act.php?id=<?php echo "{$ques_id}" ?>">未解決にする</a>

                <?php
            } else {?>
                <a href="./background/answer_act.php?id=<?php echo "{$ques_id}" ?>">解決済みにする</a>
            <?php }?>
        <?php }?>


            <br>
            <h1><u><?php echo h("{$ques_title}") ?></u></h1>
            <br><br>投稿者：<a href='userspage.php?id=<?php echo "{$quesuser_id}" ?>'>
            <?php echo h("{$quesuser}") ?></a> | <?php echo h("{$quesuser_pref}")?> | <?php echo h("{$quesuser_city}")?> | <?php echo h("{$quesuser_department}")?><br><br>

            <?php echo h("{$question}") ?>



            <!-- 回答ゾーン -->

            <!-- 回答された数のカウント -->
            <br><br><br>            
            <hr>
            <h3><u>回答(<?php echo "{$count}"?>)</u></h3>
            <br>

                <!-- 回答の表示 -->
                <div>
                    <?php foreach($stmt_answer as $answer): ?>
                        <div>
                        <div><p>
                        <a href='userspage.php?id=<?php echo "{$answer["user_id"]}" ?>'>
                        <?php echo h("{$answer["username"]}") ?></a>
                        </b></p></div>
                        <div><p><?php echo h("{$answer["answer"]}")?></p></div>
                        </div>
                        </div>
                        <br>
                        <hr>
                    <?php endforeach ?>
                </div>


            <!-- 回答テキスト -->
            <h3>回答する</h3>
            <form action="./background/todo_answer.php" method="POST">
            <textarea name="answer" cols="80" rows="5"></textarea>
            <br>
            <input type="hidden" name="ques_id" value="<?php echo "{$ques_id}" ?>">
            <input type="hidden" name="user_id" value="<?php echo "{$id}" ?>">
            <input type="hidden" name="username" value="<?php echo "{$username}" ?>">

            <!-- 送信ボタン -->
            <br>
            <button type="submit" class="btn btn-primary">送信</button> 
            </form>

        </main>
        <br><br>
    </body>
</html>

<style>

main{

    display: flex;
            justify-content: center;
            text-align: center;
            align-items: center;
            flex-direction: column;

}

.btn-good{
    display: inline-block;
    padding: 0 8px;
    cursor: pointer;
}
.btn-good:hover{
    color: #f44336;
}
.active{
    color: #f44336;
}
.btn-good .active{
    color: #f44336;
}


</style>