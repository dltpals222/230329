import pokeDate from './pokeData.json' assert{type:"json"}


const pokeDName = [];


for (let num in pokeDate.results) {
  pokeDName.push(pokeDate.results[num].name)
}


console.log(pokeDName)

export default pokeDName