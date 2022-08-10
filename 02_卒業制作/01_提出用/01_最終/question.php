<?php
session_start();
include("functions.php");
check_session_id();

$question_all = question_all();
// $comment_count = comment_count();
// $count = $comment_count->fetchColumn();

// var_dump($question_all);
// exit;

?>


<!DOCTYPE html>
<html lang="ja">

</html>
<html>

<head>
 
    <title>質問する</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <!-- <link rel="stylesheet" href="assets/css/main.css" /> -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-earthly.css" type="text/css"> -->
    <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/headers/">
    <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/album/">

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

<br>

<main>

      <!-- 質問投稿に遷移するボタン -->
    <a href="question/question_post.php" class="btn btn-secondary" style="align-items: center;">質問する</a>
			<!-- Main -->
				<section id="main" class="container">


          <br><br>

       <div class="album py-5 bg-light">
        <?php foreach($question_all as $question): ?>

          <!-- 未解決か解決済みを表示する -->
              <?php 
                if ($question["ok"] === 0) {?>
                    <p style="color: red;">未解決</p>
                  <?php } else {?>
                    <p style="color: green;">解決済み</p> 
                <?php }?>

                <!-- 質問の内容 -->
            <a href='question_article.php?id=<?php echo "{$question["ques_id"]}" ?>'>
        
            <?php echo h("{$question["ques_title"]}") ?></a>

            <br><br><br>

            <!-- 質問した人の情報 -->
            <p><img src="images/pencil.svg" width="20px"><?php echo "{$question["username"]}"  ?></a> | <?php echo "{$question["pref"]}"?> | <?php echo "{$question["city"]}"?> | <?php echo "{$question["department"]}"?><br></p>
            </b></p>
          

                  <div><p><?php echo h("{$question["question"]}")?></p></div>
                  
                  <br>
        <?php endforeach ?>
        </div>
        


			<!-- Footer -->
				<!-- <footer id="footer">

					<ul class="copyright">
						<li>&copy; welbe-ing All rights reserved.</li>
					</ul>
				</footer> -->

		

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

p{
  font-size: 20px;
}
</style>