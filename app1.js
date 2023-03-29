const studentList = [
  "강지민",
  "곽윤호",
  "권예준",
  "김동주",
  "김은아",
  "김종윤",
  "김지섭",
  "김형진",
  "노수민",
  "류은이",
  "박달재",
  "박수연",
  "박준형",
  "성해경",
  "이경택",
  "이세민",
  "이재권",
  "임지성",
  "장루빈",
  "정성철",
  "정지은",
  "정희은",
  "최대건",
  "한유진",
  "허진",
];

const example = {
  order : 0,
  name : "강지민"
}

// ? 생성자 함수 방식
function makeConstruct(order, name) {
  this.order = order;
  this.name = name;

  function order(order) {
    if(typeof(order)==='number'){
      return this._order;
    }
  }
}
//어떤 함수에서 만들어졌는지 알 수 있다.
//영수증같은 느낌?
//자바의 은닉화


// ? 객체 리턴 방식
function makeObject (order, name) {
  if(typeof(order)==='number'){
      return {
        order: order,
        name:name
      }
    } else {
      console.log('order가 숫자타입이 아닙니다.')
    }
  }

//어떤 함수에서 만들어졌는지 알 수 없다.


let b = makeConstruct(0,st)