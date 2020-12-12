/* eslint-disable @typescript-eslint/no-empty-function */

import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
	selector: 'message-cloud',
	templateUrl: './message-cloud.component.html',
	styleUrls: ['./message-cloud.component.css']
})
export class MessageCloudComponent implements OnInit {

	@Input()
	message!: Message;
	@Input()
	inbound!: boolean;
	messageClass = '';
	
	constructor() { }

	ngOnInit(): void {
		this.messageClass = this.inbound? 'sender-message' : 'recip-message';
	}

}
