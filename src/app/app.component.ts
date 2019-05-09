import { Component, EventEmitter, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'SpaceTrip: Amplifier';
	constructor(private snackBar: MatSnackBar) { }

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 2000
		});
	}
}


