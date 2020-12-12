/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit, Output } from '@angular/core';
import { Message, MessageBody } from 'src/app/models/message';
import { User } from 'src/app/models/user';
import { ChatService } from 'src/app/services/chat.service';

@Component({
	selector: 'chat-window',
	templateUrl: './chat-window.component.html',
	styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

	messages!: Message[];
	user: User;
	@Input()
	contact!: User;

	constructor(
		private chatService: ChatService
	) {
		this.user = chatService.currentUser;
		if (this.contact)
		{
			this.chatService.getMessages(this.user.id, this.contact.id).subscribe(observer => this.messages = observer);
		}

	}

	ngOnInit(): void {
	}

	onSend(text: string): void {
		const _message: MessageBody = {
			messageText: text,
			senderUserId: this.user.id,
			recipientUserId: this.contact.id
		};
		this.chatService.addMessage(_message).subscribe(observer => console.log(observer));
		this.chatService.getMessages(this.user.id, this.contact.id).subscribe(observer => this.messages = observer);
	}
}
