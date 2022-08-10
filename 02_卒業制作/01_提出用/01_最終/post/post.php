<?php
session_start();
include("../functions.php");
check_session_id();

?>

<!DOCTYPE html>
<html lang="ja">
<head>
 
    <title>書く</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-earthly.css" type="text/css">
    <link rel="stylesheet" type="text/css" href="../editer_tool/jquery.cleditor.css" />

    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script type="text/javascript" src="../editer_tool/jquery.cleditor.min.js"></script>
    <!-- <script type="text/javascript">
      $(document).ready(function () {
        $("#input").cleditor();
      });
    </script> -->
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

</head>

<body class="landing is-preload">
		
         <!-- ヘッダー、ナビゲーションバー、選択時の色を変える -->
      <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="../toppage.php" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
            <span class="fs-4"><img id="nav_l" src="../images/IMG_5507.PNG" alt="アイコン" style="height:50px;">Chalk up</span>
          </a>

          <ul class="nav nav-pills">
            <li class="nav-item"><a href="../mypage.php" class="nav-link" aria-current="page">マイページ</a></li>
            <li class="nav-item"><a href="../search.php" class="nav-link">探す</a></li>
            <li class="nav-item"><a href="#" class="nav-link">書く</a></li>
            <li class="nav-item"><a href="../question.php" class="nav-link">質問する</a></li>
            <li class="nav-item"><a href="../background/todo_logout.php" class="nav-link">ログアウト</a></li>
          </ul>
        </header>
      </div>
    

                <!-- ページ説明 -->
        
                <div id="top">
                <h1 style="font-size: 30px;">記事投稿</h1>
                </div>
                <p>成果事例や取組事例を記入する</p>


                <!-- 投稿フォーム -->
                <form action="post.check.php" method="POST" enctype="multipart/form-data">

                    <div>タイトル: <input type="text" name="title" style="
                        width: 622px;
                        padding-left: 10px;
                        padding-right: 10px;
                    "></div>
                    <br />

                    <div>本文: </div>
                    <textarea id="input" name="text"></textarea>
                    <!-- <p>※現在、リッチテキストだとDB保存できない</p> -->
                    <br />


                    <div>サムネイル画像: </div>
                    <input name="thumbnail" id="uploader" type="file" accept="image/*">
                    <div id="showPic"></div>

                    <br>
                    <div>
                        <button style="background-color: #9FD9F6;">確認画面へ</button>
                    </div>

                    <br>
                    <br>
                    <input type="hidden" name="max" value="1048576" />
                </form>


                <script>
                    $("#uploader").change(function (evt) {
                    let file = evt.target.files;
                    let reader = new FileReader();
                    let dataUrl = "";
                    reader.readAsDataURL(file[0]);
                    reader.onload = function () {
                        dataUrl = reader.result;
                        $("#showPic").html("<img src='" + dataUrl + "'>");
                    };
                    });
                </script>

        <br><br>
    </body>

</html>


    <style>
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