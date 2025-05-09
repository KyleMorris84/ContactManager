using ContactsAPI.Model;
using Microsoft.AspNetCore.Mvc;

namespace ContactsAPI.Controllers;
[Route("api")]
[ApiController]
public class ContactsController : Controller
{
    private IContactsRepository _contactsRepository;

    public ContactsController(IContactsRepository contactsRepository)
    {
        _contactsRepository = contactsRepository;
    }

    [HttpGet("all_contacts")]
    public IEnumerable<Contact>? GetAllContacts()
    {
        return _contactsRepository.GetAll();
    }

    [HttpGet("contacts")]
    public IEnumerable<Contact>? GetContactsPaginated(int pageSize, int page, Column col=Column.Id, Sort sort=Sort.Ascending)
    {
        return _contactsRepository.GetContactsByPage(pageSize, page, col, sort);
    }

    [HttpPost("contacts")]
    public ActionResult AddContacts(IEnumerable<Contact> contacts)
    {
        _contactsRepository.AddContacts(contacts);
        return Ok();
    }
}
