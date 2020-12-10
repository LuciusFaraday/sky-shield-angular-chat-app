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
		public ActionResult<Message> Get(string id)
		{
			Message message = _messageService.Get(id);

			if (message == null)
			{
				return NotFound();
			}

			return message;
		}
	}
}