<?php
session_start();
include("functions.php");
check_session_id();

$kanjoudata = kanjou();
?>

今後は見やすく、折れ線グラフで感情スコアが一眼見てわかるようにしたい

  <?php foreach($kanjoudata as $kanjou): ?>
    <img src="design_image/<?php echo "{$kanjou["kanjou"]}" ?>.png" class="img-thumbnail" style="width:30px ;display:flex" alt=""> 
    <p><?php echo "{$kanjou["created_at"]}" ?></p>

    <?php endforeach ?>


    <a href="mypage.php">マイページに戻る</a>