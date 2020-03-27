const body = document.querySelector("body");

//JS에서 숫자의 랜덤값을 도출하는 함수는 Math.random()
//소수점을 없앤 값을 원하면 Math.floor()
//소수점을 올림한 값을 원하면 Math.ceil()

/*const IMG_NUM = 5;

function paintImage(imgNumber){
  const image = new Image();
  image.src = `imgs/${imgNumber+1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom(){
   const number = Math.floor(Math.random() * IMG_NUM);
   return number;
}


function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
init();*/
const IMG_NUM = 5;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `imgs/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUM);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
init();
