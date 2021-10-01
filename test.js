import Chai from "chai"
import Urrl from "./index.js"

describe("Urrl", function() {
    it("Urrl template can be used multiple times.", function() {
        const POKEMON_URRL = new Urrl("http://pokeapi.co/api/v2/pokemon/{name}")
        Chai.expect(POKEMON_URRL({"name": "bulbasaur"})).to.equal("http://pokeapi.co/api/v2/pokemon/bulbasaur")
        Chai.expect(POKEMON_URRL({"name": "squirtle"})).to.equal("http://pokeapi.co/api/v2/pokemon/squirtle")
        Chai.expect(POKEMON_URRL({"name": "charmander"})).to.equal("http://pokeapi.co/api/v2/pokemon/charmander")
    })
})
