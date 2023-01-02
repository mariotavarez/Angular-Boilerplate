import { Inject, Injectable } from '@angular/core';
import { PokemonRepository } from '../contexts/Mooc/Pokemons/domain/Pokemon.repository';

@Injectable({
	providedIn: 'root',
})
export class PokemonsService {
	constructor(
		@Inject('PokemonRespository')
		private pokemonRepository: PokemonRepository
	) {}

	findAll = async () => {
		const pokemons = await this.pokemonRepository.findAll();

		console.log(pokemons);
	};
}
