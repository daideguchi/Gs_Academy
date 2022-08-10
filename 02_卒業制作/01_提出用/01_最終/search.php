<?php
session_start();
include("functions.php");
check_session_id();
$userdata = userinfo();
$allpostData = getAllpost();

?>

<html>
  <head>
    <title>記事を探す</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <!-- <link rel="stylesheet" href="assets/css/main.css" /> -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-earthly.css" type="text/css"> -->
    <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/headers/">
    <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/album/">
   <link rel="icon" href="images/favicon.ico">

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

  </head>

  <body>

    	<!-- ヘッダー、ナビゲーションバー、選択時の色を変える -->
      <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="toppage.php" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
              <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
              <span class="fs-4"><img id="nav_l" src="images/IMG_5507.PNG" alt="アイコン" style="height:50px;">Chalk up</span>
            </a>

            <ul class="nav nav-pills">
              <!-- <a class="navbar-brand" href="toppage.php"><img id="nav_l" src="images/IMG_5507.PNG" alt="アイコン"></a> -->
              <li class="nav-item"><a href="mypage.php" class="nav-link" aria-current="page">マイページ</a></li>
              <li class="nav-item"><a href="search.php" class="nav-link">探す</a></li>
              <li class="nav-item"><a href="./post/post.php" class="nav-link">書く</a></li>
              <li class="nav-item"><a href="question.php" class="nav-link">質問する</a></li>
              <li class="nav-item"><a href="./background/todo_logout.php" class="nav-link">ログアウト</a></li>
            </ul>

            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </header>
      </div>

        
 <main> 
    

      <img src="images/japan_map.png" usemap="#ImageMap" alt="" />
        <map name="ImageMap">
          <area shape="rect" coords="327,15,503,141" href="search_index.php?id=北海道" name="北海道" alt="北海道" />
          <area shape="rect" coords="351,366,392,385" href="search_index.php?id=東京都" name= "東京" alt="東京" />
          <area shape="rect" coords="91,316,120,344" href="search_index.php?id=福岡県" name="福岡" alt="福岡" />
        </map>
      <p>※ベータ版のため、リンクは北海道・東京・福岡のみ</p>

      <br><br>

            <!-- 記事表示ゾーン -->
            <div class="album py-5 bg-light">
              <?php foreach($allpostData as $post): ?>
                  <div style="display: flex;">
                  <img src=./post/<?php echo "{$post["thumbnail"]}" ?> class="img-thumbnail" style="width: 200px;" alt="サムネイル画像"> 
                  <div style="margin-left: 20px;">
                    
                  <div><p><b>
            <a href='article.php?id=<?php echo "{$post["post_id"]}" ?>'>
            <?php echo h("{$post["title"]}") ?></a>
            </b></p></div>
                  <p><img src="images/pencil.svg" width="20px"><?php echo "{$post["username"]}"  ?></a> | <?php echo "{$post["pref"]}"?> | <?php echo "{$post["city"]}"?> | <?php echo "{$post["department"]}"?><br><br></p>
                  <div><p><?php echo h("{$post["text"]}")?></p></div>
                  </div>
                  </div>
                  <br>
              <?php endforeach ?>
            </div>

        </main>   
          <br><br>
  </body>
</html>

<style>

main{
 display: flex;
            justify-content: center;
            /* text-align: center; */
            align-items: center;
            flex-direction: column;

}

</style>


