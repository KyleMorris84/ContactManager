# Contact Management Tool Specification

Web application to manage a set of contacts in a database.

3 Layers

1. Data layer (MS SQL)
2. API Layer (C# ASP.NET Core API)
3. UI Layer (React)

## Data Layer

Database contains a table of contacts.
Each record is a contact with 4 fields:

-   First name
-   Last name
-   Postcode
-   Date of birth

When the application starts we need to load 125,000 records into the database.

## API Layer

RESTful API that allows you to:

-   Fetch records by paginating 1000 at a time.
-   Edit a single record in the database.

## UI Layer

Essentially a fancy Excel doc. Should display a column for each of the fields in the contacts table.
Display 1000 records at a time with paging options at the bottom.

Need to be able to sort the displayed records by column. This includes Ascending/Descending.
Could also implement filtering based on a search.

Also need to be able to edit the records inline and save within the UI which calls the API to write to the DB.
