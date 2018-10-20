# Urrl #

Create an unfinished URL.

### Usage ###

```js
const POKEMON_URRL = new Urrl("http://pokeapi.co/api/v2/pokemon/{name}")
let url = POKEMON_URRL({"name": "bulbasaur"})
window.fetch(url)
```
