import { Pokemon } from '../../domain/Pokemon';

interface PokemonAdapter {
	id: number;
	name: string;
	backDefault: string;
	backFemale: string;
	backShiny: string;
	backShinyFemale: string;
	frontDefault: string;
	frontFemale: string;
	frontShiny: string;
	frontShinyFemale: string;
}

export class PokemonResponse {
	public readonly pokemon: PokemonAdapter;

	constructor(pokemon: Pokemon) {
		this.pokemon = {
			id: pokemon.id,
			name: pokemon.name,
			backDefault: pokemon.sprites.back_default,
			backFemale: pokemon.sprites.back_female,
			backShiny: pokemon.sprites.back_shiny,
			backShinyFemale: pokemon.sprites.back_shiny_female,
			frontDefault: pokemon.sprites.front_default,
			frontFemale: pokemon.sprites.front_female,
			frontShiny: pokemon.sprites.front_shiny,
			frontShinyFemale: pokemon.sprites.front_shiny_female,
		};
	}
}
