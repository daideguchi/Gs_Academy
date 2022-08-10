

<?php
 
$token='EAAFJWfdsCt4BAOPqCu7LkzgHgP4yV0hOGJjZCNhksLZCa7DO8UmAbZAZCDYbDSBxBvOTHLS3fh4FO0ayGE36XnlFb1P8svw5uZAQOVjuiCnLKqGfGslbZATLsuLOnLyUYvhunnpi3k37a5HmLeUTNDcXb8S2nhUMZCWbFBiSA8bKLh94B1QkZAxcVZB0wMj6YwoTI97fZBLzZAeHAZDZD'; // トークン3
$businessId='17841431422293800'; // InstagramビジネスID
 
$query = [
    'fields' => 'name,media{caption,like_count,media_url,permalink,timestamp,username}',
    'access_token' => $token
];
 
$url = 'https://graph.facebook.com/v12.0/' . $businessId . '?' . http_build_query($query);
 
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$result = json_decode(curl_exec($ch));
curl_close($ch);
 
// エラーが帰ってきた場合
if (property_exists($result, 'error')) {
    echo 'エラーが発生しました';
    exit;
}

// 投稿がなかった場合
if (!property_exists($result, 'media')) {
    echo '投稿がありません';
    exit;
}

$counter = 0;

?>
 
<!DOCKTYPE html>
<html>
<head>
    <title>Instagram</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <!-- <script src="/insta.js"></script> -->

</head>
<body class="zentai"> 
    <div class="toptext">
    <h1>インスタグラム で  「一言トレーニング」</h1>
    <img class="top" src="Instagram_Glyph_Gradient_RGB.png" alt="">
    </div>
    <h2>写真を一言で説明してください！</h2>
    <h3>(ついでに評価もお願いします)</h3>
    <br /> <br /> <br /> 
    
        <?php foreach($result->media->data as $v) { 
           $counter++; ?>    
        <div id="waku">
        <div clsss="space">
            <a href="<?php echo $v->permalink; ?>">
            <img src="<?php echo $v->media_url; ?>" width="30%">
            </a>
        </div>
        <div id="rating">
            <!-- <p>↑の画像についてコメントを残す</p> -->
            
            <form action="insta_txt_create.php" method="POST">
            <p name="counter"><?php echo $counter; ?></p>
            <input type="radio" name="hannou" value="いいね" checked>いいね
            <input type="radio" name="hannou" value="うーん">うーん
            <input type="text" name="text">
            <button onclick="location.href='insta_txt_read.php'">送信</button>
                  <!-- <a href="todo_txt_read.php">一覧画面</a> -->

           
            <!-- <button type="button" onclick="location.href='insta_txt_create.php'">送信</button>  -->
            </form>
            <br />           
        </div>
    </div>
    <?php } ?>



    <style>
/* #waku{
    display: flex;
    justify-content: center;
} */

#waku{
    text-align: center;
}

.zentai{
    padding-left: auto;
    padding-right: auto;
    text-align: center;
    background-color: #ffffe0;
}

#rating{
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 50px;

}

.space{
    display: flex;
    text-align: center;
    justify-content: center;
      width:100%;

}

.space2{
    width: 15%;
}

.top{
    width: 60px;
    height: 60px;
}

.toptext{
    display: flex;
    justify-content: center;
}

    </style>



</body>
</html>