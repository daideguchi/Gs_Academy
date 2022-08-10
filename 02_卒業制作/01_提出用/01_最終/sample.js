var map;
var marker;
var infoWindow;
var center = {
  lat: 34.7019399, // 緯度
  lng: 135.51002519999997, // 経度
};
function initMap() {
  map = new google.maps.Map(document.getElementById("sample"), {
    // #sampleに地図を埋め込む
    center: center, // 地図の中心を指定
    zoom: 19, // 地図のズームを指定
  });

  marker = new google.maps.Marker({
    // マーカーの追加
    position: center, // マーカーを立てる位置を指定
    map: map, // マーカーを立てる地図を指定
  });

  infoWindow = new google.maps.InfoWindow({
    // 吹き出しの追加
    content: '<div class="sample">TAM 大阪</div>', // 吹き出しに表示する内容
  });
  marker.addListener("click", function () {
    // マーカーをクリックしたとき
    infoWindow.open(map, marker); // 吹き出しの表示
  });
}


