const toDoform = document.querySelector(".js-toDoForm");
const toDoinput = toDoform.querySelector("input");
const toDolist = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function deleteToDo(event) {
  const delbtn = event.target; //이벤트.타겟은 이벤트가 일어나느 지점을 알려줌
  const delli = delbtn.parentNode; //여기선<button>이다.
  toDolist.removeChild(delli); //변수 delli의 자식을 지우겠다.
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseint(li.id);
  });
  toDos = cleanToDos; //12,13ㅇㅔ서 cleanToDos은 업뎃이 됐지만 toDos는 아직 초기값 그대로라서 변경해주는 작업
  saveToDo();
}

function saveToDo(text) {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  //console.log(text);  디버깅 체크용
  const li = document.createElement("li"); //"li" 요소를 만든다 <li></li>
  const delbtn = document.createElement("button");
  delbtn.addEventListener("click", deleteToDo);
  delbtn.innerText = "👋🏾";
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delbtn);
  li.id = newId;
  toDolist.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDo();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoinput.value;
  paintToDo(currentValue);
  toDoinput.value = "";
}

function loadToDos() {
  const loadedtoDos = localStorage.getItem(TODOS_LS);
  if (loadedtoDos !== null) {
    //console.log(loadedtoDos);  //JASON과 비교하기 위해 짠 코드
    const parshedToDo = JSON.parse(loadedtoDos); //localStorage는 스트링만 보여줌.오브젝트화 시켜주는 코드
    //console.log(parshedToDo);
    parshedToDo.forEach(function(todo) {
      paintToDo(todo.text);
    }); //foreach는 기본적으로 함수를 실행.array에 담겨있것들 각각 함수 실행함.
  }
}

function init() {
  loadToDos();
  toDoform.addEventListener("submit", handleSubmit); //여기서 로드하는건 로컬스토리지에서 온거다.
}
init();
