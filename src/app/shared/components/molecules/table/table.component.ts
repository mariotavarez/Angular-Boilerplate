import { Component } from '@angular/core';
import TableProps from './table.props';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent extends TableProps {
	eventButton = (name: string): void => {
		alert(`You catch to ${name}`);
	};
}
