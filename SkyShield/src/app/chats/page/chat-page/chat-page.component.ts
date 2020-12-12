/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
	selector: 'chat-page',
	templateUrl: './chat-page.component.html',
	styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {
	
	selectedContact!: User;
	constructor() { }

	ngOnInit(): void {
	}

	selectContact(_contact: User): void {
		this.selectedContact = _contact;
	}

}
