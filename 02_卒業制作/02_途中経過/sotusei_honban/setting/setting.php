<?php
session_start();
include("../functions.php");
check_session_id();

?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

<form action="setting_act.php" method="POST">
なりたい自分<input type="text" name="naritai">
<!-- <details>
    <summary>もっと細かく設定する</summary>
    1年後の自分<input type="text" name="naritai2">
    3年後の自分<input type="text" name="naritai3">
</details> -->

<br><br>

目先の目標<input type="text" name="mokuhyou">
<button>決定</button>
</form>

</body>
</html>