import pokeIndex from './pokeIndex.json' assert{type:"json"}


const pokeIndexUrl = [];


for (let num in pokeIndex.results) {
  pokeIndexUrl.push(pokeIndex.results[num].url)
}

console.log(pokeIndexUrl)

export default pokeIndexUrl
