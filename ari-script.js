function ucmak() {
  var ari = document.getElementById("ari");
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var randomX = Math.floor(Math.random() * (windowWidth - 50));
  var randomY = Math.floor(Math.random() * (windowHeight - 50));
  ari.style.left = randomX + "px";
  ari.style.top = randomY + "px";
}
setInterval(ucmak, 1000);
