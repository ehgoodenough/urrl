# Urrl ![](https://github.com/ehgoodenough/urrl/workflows/Release/badge.svg) #

Create an unfinished URL.

### Usage ###

```js
const POKEMON_URRL = new Urrl("http://pokeapi.co/api/v2/pokemon/{name}")
window.fetch(POKEMON_URRL({"name": "bulbasaur"})) // http://pokeapi.co/api/v2/pokemon/bulbasaur
window.fetch(POKEMON_URRL({"name": "squirtle"})) // http://pokeapi.co/api/v2/pokemon/squirtle
window.fetch(POKEMON_URRL({"name": "charmander"})) // http://pokeapi.co/api/v2/pokemon/charmander
```
