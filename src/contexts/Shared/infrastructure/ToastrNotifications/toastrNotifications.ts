import { Injectable } from '@angular/core';
import Notifications from '../../domain/notifications/notifications';
import { ToastrService } from 'ngx-toastr';

@Injectable()
class ToastrNotificactions implements Notifications {
	constructor(private toastr: ToastrService) {}
	success(message: string): void {
		this.toastr.success(message);
	}
	error(message: string): void {
		this.toastr.error(message);
	}
	info(message: string): void {
		this.toastr.info(message);
	}
	warning(message: string): void {
		this.toastr.warning(message);
	}
}

export default ToastrNotificactions;
