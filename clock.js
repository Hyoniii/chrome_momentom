const clockContainer = document.querySelector(".js-clock"); //클래스 js-clock의 첫번쨰 자식을 탐색하겠다는 뜻.
const clockTitle = document.querySelector("h1"); //html파일의 h1태그에 클래스 지정하고 위처럼 해도 됨.

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  //clockTitle.innerText="hours,minutes"; =>이건 틀린 문법 ,이 코드가 돌아가게 하려면 백틱 이용!!!!
  //clockTitle.innerText=`${hours}:${minutes}:${seconds}`;
  //위 문법이 1~9초가 01처럼 나오지 않아서 코드를 아레처럼 수정힌다. if문을 {}안에 쓸 수 있다.
  /*clockTitle.innerText=
  `${hours<10 ? `0${hours}`: hours }:${
    minutes<10 ? `0${minutes}`: minutes }:${
    seconds<10 ? `0${seconds}`: seconds }`; //?가 if처럼 작용, :은 else처럼 작용
} */
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`; //?가 if처럼 작용, :은 else처럼 작용
}

function init() {
  //위에서 아무리 함수를 만들어도 여기서 부르지 않으면 작동 안한다
  getTime();
  setInterval(getTime, 1000);
}

init();
