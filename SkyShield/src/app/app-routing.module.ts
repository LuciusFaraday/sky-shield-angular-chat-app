import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { ChatPageComponent } from './chats/page/chat-page/chat-page.component';

const routes: Routes = [
	{ path: '', component: ChatPageComponent },
	{ path: 'login', component: LoginPageComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
