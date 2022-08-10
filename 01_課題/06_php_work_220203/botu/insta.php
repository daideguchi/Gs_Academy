




<!-- ボツバージョン -->





















<head>
 <script>
 if (navigator.userAgent.indexOf('iPad') > 0)
      { document.write('<meta name="viewport" content="width=1440, maximum-scale=2, user-scalable=yes">'); }
      else
      { document.write('<meta name="viewport" content="width=device-width, initial-scale=1,minimum-scale=1, maximum-scale=2, user-scalable=no">'); }
</script>
<meta name="viewport" content="width=device-width, initial-scale=1,minimum-scale=1, maximum-scale=2, user-scalable=no">
</head>

<body>
    
<div id="zentai">
<ul class="insta-list">
<?php
          $count = '18'; //画像取得数
          $id = '17841431422293800'; //InstagramビジネスアカウントID
          $token = 'EAAFJWfdsCt4BAOOLEfmhBT7Wgm3c9I6QLjcYQHwdDVqZAeOGC9ZA0MVbMsSooB3PZAtL6jx26BZBCp9kLXGV4kcWmzNMDVSeM6ZAXWOo3cEIDFQGSZCKCSpgVikJ206a8IBNay06r0Kvx4tWVePT9dVz9QIbgsQg7mxEGnFj7AW5GZAJgc1wyAK'; // アクセストークン3

$json = file_get_contents("https://graph.facebook.com/v12.0/{$id}?fields=name%2Cmedia.limit({$count})%7Bcaption%2Cmedia_url%2Cthumbnail_url%2Cpermalink%7D&access_token={$token}");

$json = mb_convert_encoding($json, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
$obj = json_decode($json, true);

$insta = [];
$counter = 0;//カウンター

foreach ($obj['media']['data'] as $k => $v) {
              if ($v['thumbnail_url']) {
                  $data = [
                      'img' => $v['thumbnail_url'], // 投稿が動画だったらサムネURLを取得
                      'caption' => $v['caption'],   // キャプション
                      'link' => $v['permalink'],    // パーマリンク
                    //   $counter => $v['counter'], //カウンター
                  ];
              } else {
                  $data = [
                      'img' => $v['media_url'],
                      'caption' => $v['caption'],
                      'link' => $v['permalink'],
                    //   $counter => $v['counter'], //カウンター

                  ];
              }
              $insta[] = $data;

          }
?>          

<?php foreach ($insta as $k => $v){ 
                $counter++; ?>
                <div id="c1">
              <!-- <div id="c1">
                  <div> -->
                      <div id="c2">
              <?php echo '<li><a href="'.$v['link'].'" target="_blank"><img src="'.$v['img'].'" alt="'.$v['caption'].'"></a></li>';?>
              <!-- </div> -->
<br />
              <div>
              <?php echo $counter;?>
          
             <input type="text">
             <button>送信</button> 
             </div>
             </div>
             </div>
             <!-- </div>   -->
     <?php } ?>

</ul>
</div>

<style>

#c1{
    /* display: flex; */
     flex-wrap: wrap;
     justify-content: center;
     /* margin-right: 300px; */
     width: 100%;
     /* padding-right: 300px; */
     /* margin-left: 199px; */
   
}

#c1 li a{
    /* display: flex; */
     flex-wrap: wrap;
     justify-content: center;
          width: 100%;

     /* margin-left: 199px; */
   
}

    .insta-list {
    width: 930px;
    padding: 0;
    margin: 0 auto;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
         width: 100%;

}

#c2{
    width: 50%;
    margin-right: 10px;
}

.insta-list li + li {
    margin: 0 0 10px 10px;
}

.insta-list li {
    width: 30%;
    height: auto;
    border: 1px solid #ccc;
}

.li {
    display: list-item;
    text-align: -webkit-match-parent;
}

.insta-list li img {
    width: 100%;
    height: auto;
}

#zentai{
    flex-wrap: wrap;
}

/* @media screen and (max-width: 767px)

.insta-list li {
    width: 28vw;
    height: 28vw;
    overflow: hidden;
} */

body {
    padding: 100px 0 0 0;
}

</style>

</body>