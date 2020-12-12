import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'; 

@NgModule({
	exports: [
		MatToolbarModule,
		MatMenuModule,
		MatIconModule,
		MatButtonModule,
		MatGridListModule,
		MatListModule,
		MatSidenavModule,
		MatFormFieldModule,
		MatCardModule,
		MatInputModule
	]
})
export class MaterialsModule { }
