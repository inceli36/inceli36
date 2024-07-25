var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var arena = document.getElementById("arena");
var ball = document.getElementById("ball");
var arena = document.querySelector("#arena");

var player1score = 0;
var player2score = 0;

// bunu oyunun yeniden başlaması için yazdım ama olmadı

// bir sürü yerden araştırdım hepsini teker teker denedim olmadı
// yapan bir kişi vardı ondan baktım oda arena yapmıyordu
// window değerlerini kendi arenamdan çıkararak yaptım
// takıldığım nokta ball left 0 olunca windowdan çıkmasına rağmen oyun yeniden başlamıyor
// 0 a arenaya uyacak değer verince de olmuyor
// resetBall kodumu normalde ballın durduğu değeri verdim orada bir sıkıntı yok
// aldığım kurs web tasarımı odaklı şeyler yaptığı için oyun yapmakta zorlandım
// kursta dom event konusuna çok az değiniyor bilgi konusunda orada eksiklerim olduğundan dolayı
// çok fazla projeye baktım denedim sonunda fazla yardım aldım o yüzden.

player1.style.top = window.innerHeight / 2.55 + "px";
player2.style.top = window.innerHeight / 2.55 + "px";

const resetBall = () => {
  ball.style.top = window.innerHeight / 3 + "px";
  ball.style.left = (window.innerWidth / 5) * 1.22 + "px";
};

//çubuk hareketi

function pxAdd(numb) {
  return numb + "px"; //css de string diye geçer değeri string diye eklersin
}

document.onkeydown = function (e) {
  // burayı pek anlamadım//
  switch (e.keyCode) {
    case 87:
      if (parseInt(player1.style.top) <= 0) {
        player1.style.top = player1.style.top;
      } else {
        player1.style.top = pxAdd(parseInt(player1.style.top) - 30);
      }

      break;
    case 83:
      if (parseInt(player1.style.top) + 170 >= window.innerHeight) {
        player1.style.top = player1.style.top;
      } else {
        player1.style.top = pxAdd(parseInt(player1.style.top) + 30);
      }

      break;
    //player2 kontrolleri

    case 79:
      if (parseInt(player2.style.top) <= 0) {
        player2.style.top = player2.style.top;
      } else {
        player2.style.top = pxAdd(parseInt(player2.style.top) - 30);
      }
      break;
    case 76:
      if (parseInt(player2.style.top) + 170 >= window.innerHeight) {
        player2.style.top = player2.style.top;
      } else {
        player2.style.top = pxAdd(parseInt(player2.style.top) + 30);
      }
      break;
  }
};

ball.style.top = window.innerHeight / 3 + "px";
ball.style.left = (window.innerWidth / 5) * 1.22 + "px";

var ballTop = -2;
var ballLeft = -1;
var gamespeed = 10;

function ballMovement() {
  ball.style.top = parseInt(ball.style.top) + ballTop + "px";
  ball.style.left = parseInt(ball.style.left) + ballLeft + "px";

  if (
    parseInt(ball.style.top) <= 0 ||
    parseInt(ball.style.top) + 100 >= window.innerHeight
  ) {
    ballTop *= -1;
  }

  if (parseInt(ball.style.left)) {
  }

  //rakete çarpma

  if (
    parseInt(ball.style.left) <= 0 + 16 &&
    parseInt(ball.style.top) >= parseInt(player1.style.top) &&
    parseInt(ball.style.top) <= parseInt(player1.style.top) + 85
  ) {
    ballLeft *= -1;
  } else if (
    parseInt(ball.style.left) >= window.innerWidth - 570 &&
    parseInt(ball.style.top) >= parseInt(player2.style.top) &&
    parseInt(ball.style.top) <= parseInt(player2.style.top) + 70
  ) {
    ballLeft *= -1;
  }

  if (parseInt(ball.style.left) < 0) {
    player2score++;
    document.getElementById("player2score").innerHTML = player2score;
    resetBall();
  }
  if (parseInt(ball.style.left + 16) > 700) {
    player1score++;
    document.getElementById("player1score").innerHTML = player1score;
    resetBall();
  }
}

setInterval(ballMovement, gamespeed);
