import { PokemonRepository } from '../../domain/Pokemon.repository';
import { PokemonListResponse } from './PokemonListResponse';

export class PokemonsFinder {
	constructor(private repository: PokemonRepository) {}

	async run() {
		const pokemons = await this.repository.findAll();
		return new PokemonListResponse(pokemons);
	}
}
