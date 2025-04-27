namespace ContactsAPI.Model;
public record Contact
{
    public int? Id { get; set; }
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public required string PostCode { get; set; }
    public required DateTime DateOfBirth { get; set; }
}
