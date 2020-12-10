namespace SkyShield.WebApi.Models
{

	public class ChatDatabaseSettings : IChatDatabaseSettings
	{
		public string MessagesCollectionName { get; set; }
		public string ConnectionString { get; set; }
		public string DatabaseName { get; set; }
	}

	public interface IChatDatabaseSettings
	{
		string MessagesCollectionName { get; set; }
		string ConnectionString { get; set; }
		string DatabaseName { get; set; }
	}
}