
using Microsoft.EntityFrameworkCore;

namespace ContactsAPI.Model;

public class ContactsRepository : IContactsRepository
{
    private readonly ContactsDbContext _contactsDbContext;

    public ContactsRepository(ContactsDbContext contactsDbContext)
    {
        _contactsDbContext = contactsDbContext;
    }

    public void AddContact(Contact contact)
    {
        _contactsDbContext.Contacts.Add(contact);
        _contactsDbContext.SaveChanges();
    }

    public void DeleteContact(int id)
    {
        _contactsDbContext.Contacts.Where(c => c.Id == id).ExecuteDelete();
        _contactsDbContext.SaveChanges();
    }

    public IEnumerable<Contact>? GetAll()
    {
        return _contactsDbContext.Contacts;
    }

    public Contact? GetContactById(int id)
    {
        return _contactsDbContext.Contacts.Where(c => c.Id == id).FirstOrDefault();
    }

    public IEnumerable<Contact>? GetContactsByPage(int pageSize, int page, Column col, Sort sort)
    {
        IEnumerable<Contact>? sortedContacts = null;
        if (sort == Sort.Ascending)
        {
            switch (col)
            {
                case Column.Id:
                    sortedContacts = _contactsDbContext.Contacts.OrderBy(contact => contact.Id);
                    break;
                case Column.FirstName:
                    sortedContacts = _contactsDbContext.Contacts.OrderBy(contact => contact.FirstName);
                    break;
                case Column.LastName:
                    sortedContacts = _contactsDbContext.Contacts.OrderBy(contact => contact.LastName);
                    break;
                case Column.PostCode:
                    sortedContacts = _contactsDbContext.Contacts.OrderBy(contact => contact.PostCode);
                    break;
                case Column.DateOfBirth:
                    sortedContacts = _contactsDbContext.Contacts.OrderBy(contact => contact.DateOfBirth);
                    break;
            }
        } else
        {
            switch (col)
            {
                case Column.Id:
                    sortedContacts = _contactsDbContext.Contacts.OrderByDescending(contact => contact.Id);
                    break;
                case Column.FirstName:
                    sortedContacts = _contactsDbContext.Contacts.OrderByDescending(contact => contact.FirstName);
                    break;
                case Column.LastName:
                    sortedContacts = _contactsDbContext.Contacts.OrderByDescending(contact => contact.LastName);
                    break;
                case Column.PostCode:
                    sortedContacts = _contactsDbContext.Contacts.OrderByDescending(contact => contact.PostCode);
                    break;
                case Column.DateOfBirth:
                    sortedContacts = _contactsDbContext.Contacts.OrderByDescending(contact => contact.DateOfBirth);
                    break;
            }
        }

        return sortedContacts?.Skip(pageSize*page).Take(pageSize);
    }

    public void UpdateContact(Contact contact)
    {
        _contactsDbContext.Contacts.Add(contact);
        _contactsDbContext.SaveChanges();
    }
}
