import { PokemonList, Result } from '../../domain/PokemonList';

type PokemonListAdapter = Result;

export class PokemonListResponse {
	public readonly pokemonList: PokemonListAdapter[];

	constructor(pokemon: PokemonList) {
		this.pokemonList = pokemon.results.map(poke => {
			return {
				name: poke.name,
				url: poke.url,
			};
		});
	}
}
