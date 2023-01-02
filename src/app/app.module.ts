import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypographyComponent } from './shared/components/atoms/typography/typography.component';
import { TableComponent } from './shared/components/molecules/table/table.component';
import { PokemonRequestRepository } from 'src/contexts/Mooc/Pokemons/infrastructure/PokemonRequest.repository';
import AxiosHttp from '../contexts/Shared/infrastructure/AxiosHttp/axiosHttp';

registerLocaleData(en);

@NgModule({
	declarations: [AppComponent, TypographyComponent, TableComponent],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
	],
	providers: [
		{
			provide: 'PokemonRespository',
			useClass: PokemonRequestRepository,
		},
		{
			provide: 'http',
			useClass: AxiosHttp,
		},
	],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
