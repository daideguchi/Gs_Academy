



<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>textファイル書き込み型todoリスト（入力画面）</title>
</head>

<body>
  <!-- actionで送信先、methodで形式を指定 -->
  <form action="todo_txt_create.php" method="post">
    <fieldset>
      <legend>textファイル書き込み型todoリスト（入力画面）</legend>
      <a href="todo_txt_read.php">一覧画面</a>
      <div>
        todo: <input type="text" name="todo">
      </div>
      <div>
        deadline: <input type="date" name="deadline">
      </div>
      <div>
        <button>submit</button>
      </div>
    </fieldset>
  </form>


  <script>
// FB.api(
//   '/17841431422293800/media',
//   'GET',
//   {"fields":"id,media_url,media_type,permalink","limit":"5,thumbnail_url"},
//   function(response) {
//       console.log(response)

//   }
// );


  </script>
</body>

</html>

