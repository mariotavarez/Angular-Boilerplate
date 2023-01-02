interface Sprites {
	back_default: string;
	back_female: string;
	back_shiny: string;
	back_shiny_female: string;
	front_default: string;
	front_female: string;
	front_shiny: string;
	front_shiny_female: string;
}
export class Pokemon {
	readonly id: number;
	readonly name: string;
	readonly sprites: Sprites;

	constructor(id: number, name: string, sprites: Sprites) {
		this.id = id;
		this.name = name;
		this.sprites = sprites;
	}
}
