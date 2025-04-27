namespace ContactsAPI.Model;

public interface IContactsRepository
{
    public IEnumerable<Contact>? GetAll();
    public IEnumerable<Contact>? GetContactsByPage(int pageSize, int page, Column col, Sort sort);
    public Contact? GetContactById(int id);
    public void AddContact(Contact contact);
    public void UpdateContact(Contact contact);
    public void DeleteContact(int id);
}
