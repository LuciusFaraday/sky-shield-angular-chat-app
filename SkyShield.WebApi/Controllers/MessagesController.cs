using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using SkyShield.WebApi.Models;
using SkyShield.WebApi.Services;

namespace SkyShield.WebApi.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class MessagesController : ControllerBase
	{
		private readonly MessageService _messageService;

		public MessagesController(MessageService service)
		{
			_messageService = service;
		}

		[HttpGet]
		public ActionResult<List<Message>> Get() =>
			_messageService.Get();

		[HttpGet("{id:length(24)}")]
		public ActionResult<List<Message>> Get(string id1, string id2)
		{
			List<Message> messages = _messageService.Get(id1, id2);
			return messages;
		}

		[HttpPost]
		public ActionResult<Message> Post(Message message)
		{
			return _messageService.Add(message);
		}
	}
}