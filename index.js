// IP取得

// 画面サイズ取得
document.getElementById("screen size").innerHTML = window.screen.width + "x" + window.screen.height;

// 画面解像度取得
document.getElementById("resolution").innerHTML = screen.width * window.devicePixelRatio + "x" + screen.height * window.devicePixelRatio + ", " + screen.colorDepth + "[bit]";

// ウィンドウサイズ取得
document.getElementById("window size").innerHTML = window.innerWidth + "x" + window.innerHeight;

// UA取得
document.getElementById("user agent").innerHTML = navigator.userAgent;

// OS取得
document.getElementById("os").innerHTML = navigator.platform;

// ブラウザ取得
var browser = "";
var ua = navigator.userAgent;
if(ua.indexOf("FireFox") > -1){
  browser = "FireFox";
}
else if(ua.indexOf("Chrome") > -1){
  browser = "Chrome";
}
else if(ua.indexOf("Safari") > -1){
  browser = "Safari";
}
else if(ua.indexOf("Edge") > -1){
  browser = "Edge";
}
else{
  browser = "???";
}
browser = navigator.appName;
document.getElementById("browser").innerHTML = browser;
