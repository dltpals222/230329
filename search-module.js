function searching(array, name) {
  for(let i = 0 ; i < array.length;i++){
    if(array[i] === name){
      console.log(i)
    } else {
      console.log(`해당 순서는 ${name}가 아닙니다.`)
    }
  } 
}

export default searching