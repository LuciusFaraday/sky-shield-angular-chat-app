using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SkyShield.WebApi.Models
{
	public class User
	{
		[BsonId]
		[BsonRepresentation(BsonType.ObjectId)]
		public string Id { get; set; }

		[BsonElement("username")]
		public string Username { get; set; }

	}
}