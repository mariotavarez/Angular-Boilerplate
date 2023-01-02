import { Component, Input } from '@angular/core';

export enum Types {
	h1 = 'h1',
	h2 = 'h2',
	h3 = 'h3',
	h4 = 'h4',
	h5 = 'h5',
	h6 = 'h6',
	p = 'p',
	span = 'span',
}

export enum Color {
	white = 'white',
	black = 'black',
	bigStone = 'bigStone',
	cerulean = 'cerulean',
	sugarCane = 'sugarCane',
	rioGrande = 'rioGrande',
	tapestry = 'tapestry',
}

@Component({
	template: '',
})
class TypographyProps {
	@Input('text') text = '';
	@Input('type') type: keyof typeof Types = Types.h1;
	@Input('color') color: keyof typeof Color = Color.black;
	@Input('test-id') testId = 'typographyComponent';
}

export default TypographyProps;
