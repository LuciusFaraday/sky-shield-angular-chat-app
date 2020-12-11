import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
	exports: [
		MatToolbarModule,
		MatMenuModule,
		MatIconModule,
		MatButtonModule,
		MatGridListModule,
		MatListModule,
		MatSidenavModule
	]
})
export class MaterialsModule { }
