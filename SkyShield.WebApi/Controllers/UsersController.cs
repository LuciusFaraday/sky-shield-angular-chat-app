using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using SkyShield.WebApi.Models;
using SkyShield.WebApi.Services;

namespace SkyShield.WebApi.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class UsersController : ControllerBase
	{
		private readonly UserService _userService;

		public UsersController(UserService service)
		{
			_userService = service;
		}

		[HttpGet]
		public ActionResult<List<User>> Get(string id)
		{
			List<User> users = _userService.Get();
			return users;
		}
	}
}