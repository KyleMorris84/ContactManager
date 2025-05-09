using ContactsAPI.Model;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddDbContext<ContactsDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("ContactsDb") + Environment.GetEnvironmentVariable("DB_PASSWORD") + ";");
});
builder.Services.AddScoped<IContactsRepository, ContactsRepository>();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "_myAllowSpecificOrigins",
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:5173", "https://kylemorris84.github.io");
                          policy.AllowAnyHeader();
                      });
});

var app = builder.Build();

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.UseCors("_myAllowSpecificOrigins");

DbInitialiser.Seed(app);
app.Run();
