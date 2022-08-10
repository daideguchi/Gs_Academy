<?php

// 変数の定義は$必須
// 行末には「;」必須
$number = 100;
$str = "はじめてのPHP";

echo $number;
var_dump($str);

// 配列
// $array[0]などで取得可能
$array1 = ["JavaScript", "PHP", "Swift", "Haskell"];
echo $array1[0];

// キー名を指定することもできる（jsのオブジェクト的な感じ）
// $array2["サーバ"]などで取得可能
$array2 = [
  "フロント" => "JavaScript",
  "サーバ" => "PHP",
  "iOS" => "Swift",
  "関数型" => "Haskell"
];
echo $array2["iOS"];

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
      const hogeArray = <?=json_encode($hoge_array)?>;
      console.log(hogeArray);
  </script>
</body>
</html>