import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { SliderComponent } from './slider/slider.component';
import { MaterialModule } from './material.module';

@NgModule({
	// tslint:disable-next-line:indent
	declarations: [ AppComponent, SliderComponent ],
	// tslint:disable-next-line:indent
	imports: [
		BrowserModule,
		MaterialModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatCheckboxModule
	],
	providers: [],
	// tslint:disable-next-line:indent
	bootstrap: [ AppComponent ]
})
export class AppModule {}
