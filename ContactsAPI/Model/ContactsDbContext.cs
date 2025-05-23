﻿using Microsoft.EntityFrameworkCore;

namespace ContactsAPI.Model;

public class ContactsDbContext : DbContext
{
    public ContactsDbContext(DbContextOptions options) : base(options) { }

    public DbSet<Contact> Contacts { get; set; }
}