import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
	providedIn: 'root'
})
export class ChatService {

	contacts: User[] = [];
	constructor() {
		this.contacts = [
			{
				'_id': 'testId',
				'username': 'Lucfar'
			}
		];
	}
}
