// Urrl
// @description Builds a URL from a URI resource path.
// @accepts [string] a fully qualified path, with `{...}` as parameters
// @returns [function] a curried function, that injects parameters over the `{...}`

// @example
// const POKEMON_URRL = new Urrl("http://pokeapi.co/api/v2/pokemon/{name}")
// let url = POKEMON_URRL({"name": "bulbasaur"})
// window.fetch(url)

module.exports = function Urrl(url) {
    return function(parameters) {
        for(var key in parameters) {
            url = url.replace("{" + key + "}", parameters[key])
        }
        return url
    }
}
