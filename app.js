import fs from 'fs'

// const a = new Date();
// console.log(a.getFullYear());



// const b = {
//   year : 2023,
//   month : 3,
//   day : 29
// }

// console.log(b.year + "년도")



// function C (year, month, day) {
//   return {
//     year : year,
//     month : month,
//     day : day,
//   };
// }





function C (a, b, c) {
  this.year = a;
  this.month = b;
  this.day = c;
}


// //왜 안되지?
//   const test = C(2023,3,29);
//   console.log(test)





  function user(id, password, email) {
    this.id = id,
    this.password = password,
    this.email = email
  }

  const d = new user("leesemin","1234","leesemin222@gmail.com");
  const e = new user("daljae","1234","daljae@gmail.com")
  const f = new user("jieun","1234","jieun@gmail.com")
  // console.log(d)
  // console.log(e)
  // console.log(f)

  let names = ["leesemin","kongukjae","daljae","seongcheol"]
  let password = ["1234","1234","1234","1234"]
  let email = ["leesemin@gmail.com","kongukjae@gmail.com","daljae@gmail.com","seongcheol@gmail.com"]


  let members = [];
  for (let i = 0; i <4;i++){
    members.push(new user(names[i],password[i],email[i]));
  }

  
  fs.writeFileSync("members.Json", JSON.stringify(members,null,2),'utf8')

  console.log(members)