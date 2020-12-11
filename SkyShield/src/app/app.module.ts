import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './chats/contact-list/contact-list.component';
import { ChatWindowComponent } from './chats/chat-window/chat-window.component';
import { TopAppBarComponent } from './layout/top-app-bar/top-app-bar.component';
import { ChatCardComponent } from './chats/chat-card/chat-card.component';
import { MessageCloudComponent } from './chats/message-cloud/message-cloud.component';
import { ChatPageComponent } from './chats/page/chat-page/chat-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';


@NgModule({
	declarations: [
		AppComponent,
		ContactListComponent,
		ChatWindowComponent,
		TopAppBarComponent,
		ChatCardComponent,
		MessageCloudComponent,
		ChatPageComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
