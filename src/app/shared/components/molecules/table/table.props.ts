import { Component, Input } from '@angular/core';

export type Rows = {
	name: string;
	url: string;
};

@Component({
	template: '',
})
class TableProps {
	@Input('headers') headers: string[] = [];
	@Input('rows') rows: Rows[] = [];
	@Input('test-id') testId = 'tableComponent';
}

export default TableProps;
