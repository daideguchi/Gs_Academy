<?php
$random_number = rand(1,5);
// echo $random_number;

// if($random_number === 1){
//     echo "大吉";
// }else if($random_number === 2){
//     echo "中吉";
// }else if($random_number === 3){
//     echo "小吉";
// }else if($random_number === 4){
//     echo "吉";
// }else if($random_number === 5){
//     echo "凶";
// }

$lucks = ["大吉","中吉","小吉","吉","凶"];

// echo $lucks[$random_number - 1];

$result = "大吉";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1{
            color: pink;
        }
    </style>
</head>
<body>
    <h1>今日の運勢は<?=$lucks[$random_number - 1] ?>です</h1>
</body>
</html>