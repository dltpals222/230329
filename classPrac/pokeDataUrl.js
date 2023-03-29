import pokeData from './pokeData.json' assert{type:"json"}


const pokeDataUrl = [];


for (let num in pokeData.results) {
  pokeDataUrl.push(pokeData.results[num].url)
}

console.log(pokeDataUrl)

export default pokeDataUrl
