/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message';
import { User } from '../models/user';

@Injectable({
	providedIn: 'root'
})
export class ChatService {

	contacts: User[] = [];
	currentUser: User;
	recipientUser: User | undefined;
	
	usersUrl = 'api/users';
	messagesUrl = 'api/messages';
	private httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	constructor(
		private http: HttpClient
	) {
		this.currentUser = {
			id: '1',
			username: 'Lucfar'
		};
	}

	getContacts(): Observable<User[]> {
		return this.http.get<User[]>(this.usersUrl, this.httpOptions);
	}

	getMessages(id1: string, id2: string): Observable<Message[]> {
		const url = `${this.messagesUrl}?id1=${id1}&id2=${id2}`;
		return this.http.get<Message[]>(url, this.httpOptions);
	}

	addMessage(message: any): Observable<Message> {
		console.log(message);
		return this.http.post<Message>(this.messagesUrl, message, this.httpOptions);
	}
}
