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

class User {
  constructor(order, name) {
    this.order = order;
    this.name =name;
  }
  set order(order) {
    if(typeof(order)==='number'){
      this._order = order;
    }
  }
}
//_order에서 언더바는 안해도 되지만 표시(검사가 끝났다)를 위해 넣어둔 것이다.
//constructor은 저렇게 사용하는게 약속되어있다.

let test = [];
studentList.forEach((student, index) => {
  test.push(new User(index, student));
})

console.log(test)
//객체를 여러개 다뤄야 돼서 힘들때