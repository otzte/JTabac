const location = {
    user: "admin@example.com", // evtl. als 1-zu-1-Beziehung
    name: "",
    street: "",
    houseNo: "",
    zipCode: "",
    city: "",
    lat: 50.1112,
    lon: 8.6743,

    type: "bakery",
    description: "Brot & Brezeln",
    openingHoursText: "Montag-Freitag, 8-16 Uhr",
    offerTimeText: "1 Stunde vor Ladenschluss",

    // Ausbaustufe
    openingHours: {
        monday: {
            from: 8,
            to: 16,
        },
        tuesday: {
            from: 8,
            to: 16,
        },
        wednesday: {
            from: 8,
            to: 16,
        },
        thursday: {
            from: 8,
            to: 16,
        },
        friday: {
            from: 8,
            to: 16,
        },
    },
    offerTime: {
        tuesday: {
            from: 15,
            to: 16,
        },
        wednesday: {
            from: 15,
            to: 16,
        },
        thursday: {
            from: 15,
            to: 16,
        },
        friday: {
            from: 15,
            to: 16,
        },
    },
    filters: ["accessible", "food-vegetarian", "food-italian", "food-burger", "music-metal", "music-jazz", "music-rock", "coffee-lactose-free"],
}

const product = {
    name: "Brezel",
    price: 1.99,

    // Ausbaustufe
    priceDonor: 2.99,
    quantityToday: 15, // Reste, die vergüstigt nur beschränkt vorhanden sind
    offerTime: {
        tuesday: {
            from: 15,
            to: 16,
        },
        wednesday: {
            from: 15,
            to: 16,
        },
        thursday: {
            from: 15,
            to: 16,
        },
        friday: {
            from: 15,
            to: 16,
        },
    },
}

const order = {
    product: {}, // fk
    donor: {}, // fk zu User
    receiver: {}, // bei Reservierung, in Ausbaustufe als separate Tabelle
    // Workflow 1: Donor bezahlt für Receiver bei Organizer
    // 1. Donor fragt Produkt bei Organizer an
    // 2. Donor bezahlt bei Organizer. Organizer bestätigt die Bezahlung
    // 3. Receiver reserviert
       // 4. Organizer bestätigt Ankunft
       // 5. Receiver bewertet/bedankt sich
    // 4. Receiver lässt Reservierung ablaufen

    // Workflow 2: Organizer spendiert für Receiver
    // 1. System erstellt leere Order automatisch, weil Preis 0 Euro
    // 2. wie Workflow 1, Schritt 3

    // TODO: unklar, ob eine Order pro Ticket oder Pro Zahlungsabwicklung
    // Workflow 3: Zahlungsabwicklung bei uns für eigenes und gespendetes Ticket
    // 1. Donor bezahlt Produkt für Donor und Receiver bei uns
    // 2. Wir zahlen das bezahlte Produkt von Donor an Location
    // 3. Receiver reserviert
       // 4. Organizer bestätigt Ankunft
       // 5. Receiver bewertet/bedankt sich
       // 6. Wir zahlen das gespendete Produkt von Donor an Location
    // 4. Receiver lässt Reservierung ablaufen
    // 5. Rückabwicklung nicht genutzer Tickets an Donor

    // Workflow 4: Nur eigenes Ticket wird bei uns abgerechnet
    // 1. Donor bezahlt nur Produkt für sich bei uns
    // 2. Wir rechnen das bezahlte Produkt von Donor gut

    status: "", // "created" | "paid" | "reserved" | "booked" | "reversed" | "pending" | "finished",
    workflow: "w1", // "w1" | "w2" | "w3" | "w4"

    // Ausbaustufe
    history: "", // Wer hat welche Statusänderung wann angestoßen?
    reservation: {}, // foreign key
}

// Ausbaustufe
const reservation = {
    receiver: {}, // fk zu User-Tabelle
    orders: [], // Reservierung für mehrere Personen
}

const user = {
    email: "admin@example.com",
    password: "secret",
    type: "receiver" // "organizer" | "donor" | "receiver"
}
