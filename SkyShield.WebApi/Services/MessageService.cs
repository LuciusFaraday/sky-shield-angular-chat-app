using System;
using System.Collections.Generic;
using MongoDB.Driver;
using SkyShield.WebApi.Models;

namespace SkyShield.WebApi.Services
{
	public class MessageService
	{
		private readonly IMongoCollection<Message> _messages;

		public MessageService(IChatDatabaseSettings settings)
		{
			MongoClient client = new MongoClient(settings.ConnectionString);
			IMongoDatabase database = client.GetDatabase(settings.DatabaseName);

			_messages = database.GetCollection<Message>(settings.MessagesCollectionName);
		}

		public List<Message> Get() =>
			_messages.Find(message => true).ToList<Message>();
		
		public List<Message> Get(string id)
		{
			List<Message> messages = _messages
				.Find(message => message.SenderUserId == id || message.RecipientUserId == id)
				.ToList<Message>();
			
			return messages;
		}
		
		public Message Add(Message message)
		{
			message.Uploaded = DateTime.Now;
			_messages.InsertOne(message);
			return message;
		}

		public void Update(string id, Message newMessage) =>
			_messages.ReplaceOne(message => message.Id == id, newMessage);
		
	}
}