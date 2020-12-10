using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SkyShield.WebApi.Models
{
	public class Message
	{
		[BsonId]
		[BsonRepresentation(BsonType.ObjectId)]
		public string Id { get; set; }
		
		public string MessageText { get; set; }

		public DateTime Uploaded { get; set; }

		public int SenderUserId { get; set; }
		
		public int RecipientUserId { get; set; }

	}
}