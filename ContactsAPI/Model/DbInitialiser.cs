namespace ContactsAPI.Model;

public static class DbInitialiser
{
    private static IEnumerable<string> _firstNames = [
      "Nolan", "Elise", "Jonah", "Talia", "Damon", "Mira", "Wade", "Celine", "Griffin", "Leona",
      "Alec", "Giselle", "Troy", "Sabrina", "Dante", "Bianca", "Reid", "Camille", "Devin", "Alina",
      "Marcus", "Ivy", "Bennett", "Noelle", "Felix", "Liana", "Ellis", "Malia", "Theo", "Vivian",
      "Clark", "Juliette", "Colby", "Dahlia", "Mitchell", "Eliza", "Ronin", "Celeste", "Porter", "Amira",
      "Elias", "Maisie", "Zane", "Sabrina", "Julian", "Kira", "Tyson", "Selah", "Everett", "Lana"
    ];

    private static IEnumerable<string> _lastNames = [
      "Mercer", "Callahan", "Whitaker", "Sloan", "Vance", "Grayson", "Harlow", "Maddox", "Easton", "Carrington",
      "Drummond", "Winslow", "Sterling", "Hawthorne", "Carver", "Landry", "Barron", "Ellington", "Prescott", "Hollis",
      "Monroe", "Dalrymple", "Ashford", "Waverly", "Beckett", "Langston", "Corbin", "Aldridge", "Merrick", "Fenwick",
      "Radcliffe", "Tatum", "Camden", "Thatcher", "Blaine", "Sutter", "Kenyon", "Bowden", "Rourke", "Templeton",
      "Ellery", "Stratton", "Harlan", "Blackwell", "Fenner", "Worthington", "Calloway", "Holliday", "Lawton", "Briar"
    ];

    private static IEnumerable<string> _postCodes = [
      "BN3 5QT", "SW1A 1AA", "L4 3RT", "EH12 5XZ", "BS8 2AB", "G12 8QQ", "CF14 3BH", "LS6 1DP", "M20 2RN", "B15 2TT",
      "W1U 4BW", "NE3 1YP", "S1 2GH", "AB10 6RN", "PL4 7AA", "RG1 8BT", "OX4 2JP", "NG7 1AA", "ME14 5LB", "GL50 3LN",
      "YO1 6LP", "CT20 1AA", "CV5 8FT", "SS1 2DA", "DE1 3BZ", "NR4 7TJ", "PR1 8PQ", "PO5 3LT", "LE2 7QE", "BT7 1NN",
      "SN1 3TL", "GU2 7XH", "TR1 2PH", "RH10 9PY", "DY8 2EE", "WD18 7PA", "LU1 2DW", "DH1 3LE", "KA1 1RR", "HX1 2LB",
      "TW9 1DH", "CW1 2DD", "HR4 0XH", "SA1 4PY", "SR2 7DN", "BL1 4AP", "BB2 3DY", "AL1 3RA", "TN1 2AB", "WA1 1BL"
    ];


    public static void Seed(IApplicationBuilder applicationBuilder)
    {
        ContactsDbContext dbContext = applicationBuilder.ApplicationServices.CreateScope().ServiceProvider.GetRequiredService<ContactsDbContext>();

        Random rnd = new Random();
        DateTime start = new DateTime(1900, 1, 1);
        int range = (DateTime.Today - start).Days;

        if (!dbContext.Contacts.Any())
        {
            foreach (string firstName in _firstNames)
            {
                foreach(string lastName in _lastNames)
                {
                    foreach(string postCode in _postCodes)
                    {
                        dbContext.Contacts.Add(new Contact
                        {
                            FirstName = firstName,
                            LastName = lastName,
                            PostCode = postCode,
                            DateOfBirth = start.AddDays(rnd.Next(range))
                        });
                    }
                }
            }
            dbContext.SaveChanges();
        }
    }
}
