import { Component, Inject, OnInit } from '@angular/core';
import { PokemonRepository } from 'src/contexts/Mooc/Pokemons/domain/Pokemon.repository';
import { PokemonsFinder } from '../contexts/Mooc/Pokemons/application/Search/PokemonFinder';
import { Rows } from './shared/components/molecules/table/table.props';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	public headers: string[] = ['Name', 'Url', 'Action'];
	public rows: Rows[] = [];

	constructor(
		@Inject('PokemonRespository')
		private pokemonRepository: PokemonRepository // eslint-disable-next-line @typescript-eslint/no-empty-function
	) {}

	ngOnInit(): void {
		this.findAll();
	}

	findAll = async () => {
		const pokemonsFinder = new PokemonsFinder(this.pokemonRepository);
		const pokemons = await pokemonsFinder.run();

		this.rows = pokemons.pokemonList.map(poke => ({
			name: poke.name,
			url: poke.url,
		}));
	};
}
