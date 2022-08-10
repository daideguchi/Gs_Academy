<!-- <!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>todoリストユーザ登録画面</title>
</head>

<body>
  <form action="todo_register_act.php" method="POST">
    <fieldset>
      <legend>todoリストユーザ登録画面</legend>
      <div>
        username: <input type="text" name="username">
      </div>
      <div>
        password: <input type="text" name="password">
      </div>
      <div>
        <button>Register</button>
      </div>
      <a href="index.php">or login</a>
    </fieldset>
  </form>

</body>

</html> -->



<?php

 
//POST送信された場合
// if (!empty($_POST)) {
    /* 入力情報の不備を検知 */
    // if ($_POST['email'] === "") {
    //     $error['email'] = "blank";
    // }
    // if ($_POST['password'] === "") {
    //     $error['password'] = "blank";
    // }
    
    //SELECT COUNT(*) as cnt→レコードの件数を取得する
    /* メールアドレスの重複を検知 */
//     if (!isset($error)) {
//         $member = $db->prepare('SELECT COUNT(*) as cnt FROM members WHERE email=?');
//         $member->execute(array(
//             $_POST['email']
//         ));
//         $record = $member->fetch();
//         if ($record['cnt'] > 0) {
//             $error['email'] = 'duplicate';
//         }
//     }
 
//     /* エラーがなければ次のページへ */
//     if (!isset($error)) {
//         $_SESSION['join'] = $_POST;   // フォームの内容をセッションで保存
//         header('Location: check.php');   // check.phpへ移動
//         exit();
//     }
// }
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0">
    <title>アカウント作成</title>
    <link href="https://unpkg.com/sanitize.css" rel="stylesheet"/>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="content">
        <form action="todo_register_act.php" method="POST">
            <h1>アカウント作成</h1>
            <p>当サービスをご利用するために、次のフォームに必要事項をご記入ください。</p>
            <br>
 
            <div class="control">
                <label for="name">ユーザー名<span class="required">必須</span></label>
                <input id="name" type="text" name="username">
            </div>
 
 
            <div class="control">
                <label for="password">パスワード<span class="required">必須</span></label>
                <input id="password" type="text" name="password">
                <?php if (!empty($error["password"]) && $error['password'] === 'blank'): ?>
                    <p class="error">＊パスワードを入力してください</p>
                <?php endif ?>
            </div>
 
            <div class="control">
                <button type="submit" class="btn">登録する</button>
            </div>
        </form>
        <a href="index.php">登録済みの方はこちら</a>

    </div>
</body>
</html>