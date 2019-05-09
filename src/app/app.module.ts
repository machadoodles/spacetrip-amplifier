import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';
import { DesignComponent } from './design.component';

const appRoutes: Routes = [
	{ path: '', component: AppComponent },
	{ path: 'kevin-proj', component: ProjectComponent },
	{ path: 'design-page', component: DesignComponent }
]

@NgModule({
	// tslint:disable-next-line:indent
	declarations: [AppComponent, ProjectComponent, DesignComponent],
	// tslint:disable-next-line:indent
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		MaterialModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatCheckboxModule
	],
	providers: [],
	// tslint:disable-next-line:indent
	bootstrap: [AppComponent]
})
export class AppModule { }
