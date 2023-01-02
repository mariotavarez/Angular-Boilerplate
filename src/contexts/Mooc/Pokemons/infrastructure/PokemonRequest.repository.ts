// Domain
import { Inject, Injectable } from '@angular/core';
import Http from '../../../Shared/domain/http/http';
import { Pokemon } from '../domain/Pokemon';
import { PokemonRepository } from '../domain/Pokemon.repository';
import { PokemonList } from '../domain/PokemonList';

@Injectable()
export class PokemonRequestRepository implements PokemonRepository {
	private readonly http: Http;

	constructor(@Inject('http') http: Http) {
		this.http = http;
	}

	findAll(): Promise<PokemonList> {
		return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
	}
	findByName(name: string): Promise<Pokemon> {
		return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
	}
}
