/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ChatService } from 'src/app/services/chat.service';

@Component({
	selector: 'contact-list',
	templateUrl: './contact-list.component.html',
	styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

	contacts: User[] = [];
	constructor(
		private chatService: ChatService
	) {
		
	}

	ngOnInit(): void {
		this.contacts = this.chatService.contacts;
	}

}
