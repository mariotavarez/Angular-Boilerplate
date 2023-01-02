export interface Result {
	name: string;
	url: string;
}

export class PokemonList {
	readonly count: number;
	readonly next: string;
	readonly previous?: any;
	readonly results: Result[];

	constructor(count: number, next: string, previous: any, results: Result[]) {
		this.count = count;
		this.next = next;
		this.previous = previous;
		this.results = results;
	}
}
