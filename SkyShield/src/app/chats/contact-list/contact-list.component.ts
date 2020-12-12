/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { User } from 'src/app/models/user';
import { ChatService } from 'src/app/services/chat.service';

@Component({
	selector: 'contact-list',
	templateUrl: './contact-list.component.html',
	styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

	contacts: User[] = [];

	@Output() selectedContactEvent = new EventEmitter<User>();
	constructor(
		private chatService: ChatService
	) {
		
	}

	ngOnInit(): void {
		this.chatService.getContacts().subscribe(observer => this.contacts = observer);
	}

	onSelect(contact: User): void {
		// this.chatService.recipientUser = contact;
		this.selectedContactEvent.emit(contact);
	}

}
