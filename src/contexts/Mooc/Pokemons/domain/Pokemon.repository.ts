import { Pokemon } from './Pokemon';
import { PokemonList } from './PokemonList';

export interface PokemonRepository {
	findAll(): Promise<PokemonList>;
	findByName(name: string): Promise<Pokemon>;
}
