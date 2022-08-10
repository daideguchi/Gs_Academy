<?php
session_start();
include("../functions.php");
check_session_id();

?>


<!DOCTYPE html>
<html lang="ja">


<head>
 
    <title>設定</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-earthly.css" type="text/css">
    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
    
    <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/headers/">

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

    <body class="landing is-preload">

          <!-- ヘッダー、ナビゲーションバー、選択時の色を変える -->
      <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="toppage.php" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
            <span class="fs-4"><img id="nav_l" src="../images/IMG_5507.PNG" alt="アイコン" style="height:50px;">Chalk up</span>
          </a>

          <ul class="nav nav-pills">
            <li class="nav-item"><a href="../mypage.php" class="nav-link" aria-current="page">マイページ</a></li>
            <li class="nav-item"><a href="../search.php" class="nav-link">探す</a></li>
            <li class="nav-item"><a href="../post/post.php" class="nav-link">書く</a></li>
            <li class="nav-item"><a href="../question.php" class="nav-link">質問する</a></li>
            <li class="nav-item"><a href="../background/todo_logout.php" class="nav-link">ログアウト</a></li>
          </ul>
        </header>
      </div>

        <!-- <div id="top"> -->


    <main></main>
        <form action="mypage_set_act.php" method="POST" enctype="multipart/form-data">
        <p>自己紹介文</p>
            <textarea id="input" name="introduction"></textarea>

        <p>トップ画</p>
            <input name="prof_img" id="uploader1" type="file" accept="image/*">
            <div id="showPic1"></div>

        <p>背景画像</p>
            <input name="screen_img" id="uploader2" type="file" accept="image/*">
            <div id="showPic2"></div>

            <br>
            <div>
                <button style="background-color: #9FD9F6;">確定</button>
            </div>

            <input type="hidden" name="max" value="1048576" />
         </form>


        <script>
            $("#uploader1").change(function (evt) {
            let file = evt.target.files;
            let reader = new FileReader();
            let dataUrl = "";
            reader.readAsDataURL(file[0]);
            reader.onload = function () {
                dataUrl = reader.result;
                $("#showPic1").html("<img src='" + dataUrl + "'>");
            };
            });

            $("#uploader2").change(function (evt) {
            let file = evt.target.files;
            let reader = new FileReader();
            let dataUrl = "";
            reader.readAsDataURL(file[0]);
            reader.onload = function () {
                dataUrl = reader.result;
                $("#showPic2").html("<img src='" + dataUrl + "'>");
            };
            });
        </script>

        </main> 

<a href="../mypage.php">戻る</a>

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

        #output li {
            background-color: rgb(231, 235, 218);
            list-style-type: none

        }

        #send{
            width: 150px;
        }

        #nyuuryoku{
            margin-top: 30px;
        }

        #setumei{
            font-size: 10px;
        }

        #top{
            /* width: 100%; */
            display: flex;
          justify-content: space-between;
        }

        #top h1{
            width: 100%;
        }

        #top img{
            width: 30%;
        }

        #showPic{
            width: 200px;
        }
    </style>