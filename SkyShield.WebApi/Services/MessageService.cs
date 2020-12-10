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
		
		public Message Get(string id) =>
			_messages.Find(message => message.Id == id).FirstOrDefault();
		
		public Message Add(Message message)
		{
			_messages.InsertOne(message);
			return message;
		}

		public void Update(string id, Message newMessage) =>
			_messages.ReplaceOne(message => message.Id == id, newMessage);
		
	}
}