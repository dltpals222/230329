import pokeIName from "./pokeINameModule.js";
import pokeDName from "./pokeDNameModule.js";
import pokeDataUrl from "./pokeDataUrl.js";
import pokeIndexUrl from "./pokeIndexUrl.js";


// console.log(pokeDName)

class pokemonName {
  constructor(order, name, url){
    this.order = order
    this.name = name
    this.url = url
  }
  set order(order) {
    if(typeof(order) === 'number'){
      this._order = order
    }
  }
}

let pokeDataName = [];

pokeDName.forEach((name, index) => {
  pokeDataName.push(new pokemonDName(index, name))
})

console.log(pokeDataName)
