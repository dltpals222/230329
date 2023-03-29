import pokeIndex from './pokeIndex.json' assert{type:"json"}


const pokeIName = [];


for (let num in pokeIndex.results) {
  pokeIName.push(pokeIndex.results[num].name)
}


console.log(pokeIName)

export default pokeIName