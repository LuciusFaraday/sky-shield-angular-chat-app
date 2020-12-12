export interface Message {
	id: string | undefined ,
	messageText: string,
	uploaded: Date | undefined,
	senderUserId: string,
	recipientUserId: string
}

export interface MessageBody {
	messageText: string,
	senderUserId: string,
	recipientUserId: string
}