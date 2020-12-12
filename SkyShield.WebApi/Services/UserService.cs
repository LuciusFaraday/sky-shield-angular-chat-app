using System.Collections.Generic;
using MongoDB.Driver;
using SkyShield.WebApi.Models;

namespace SkyShield.WebApi.Services
{
	public class UserService
	{
		private readonly IMongoCollection<User> _users;

		public UserService(IUserDatabaseSettings settings)
		{
			MongoClient client = new MongoClient(settings.ConnectionString);
			IMongoDatabase database = client.GetDatabase(settings.DatabaseName);

			_users = database.GetCollection<User>(settings.UserCollectionName);
		}

		public List<User> Get() =>
			_users.Find(user => true).ToList<User>();
		
	}
}