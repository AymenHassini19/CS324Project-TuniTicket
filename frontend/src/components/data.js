const initialProducts = [
    {
        _id: 0,
        name: 'David Vendetta Concert',
        image: 'assets/products/davidvendetta.jpg',
        description:
            'Join us for an electrifying night as David Vendetta takes the stage! Experience his dynamic beats and chart-topping hits in an unforgettable concert. Get your tickets now for a night of non-stop dancing and incredible music!',
        brand: 'David Vendetta',
        location: 'Tunis',
        date: new Date(2024, 11, 20),
        price: 85,
        countInStock: 10,
        rating: 4.5,
        numReviews: 12,
    },
    {
        _id: 1,
        name: 'Tunisia Drift Championship',
        image: 'assets/products/drift.jpg',
        description:
            'This Sunday, join us at the parking lot of the Carthage amphitheater for the Tunisia Drift Championship, organized by the Tunisian Automobile Federation and proudly sponsored by Agil Energy!',
        location: 'Tunis',
        date: new Date(2024, 11, 20),
        category: 'Sport',
        price: 30,
        countInStock: 7,
        rating: 4.0,
        numReviews: 8,
    },
    {
        _id: 2,
        name: 'Venom: The Last Dance',
        image: 'assets/products/venom.jpg',
        description:
            'Watch Eddie Brock and Venom unite against a formidable new villain threatening humanity. With intense action and dark humor, this film promises an unforgettable experience. Get your tickets now!',
        location: 'Tunis',
        date: new Date(2024, 11, 20),
        category: 'Movie',
        price: 20,
        countInStock: 5,
        rating: 3.5,
        numReviews: 12,
    },
    {
        _id: 3,
        name: 'Lellahom show',
        image: 'assets/products/lellahom.jpg',
        description:
            'Join us for a night of hilarious entertainment featuring the best Tunisian comedians! Enjoy witty observations and charming stories that will leave you in stitches. Perfect for all ages, this is a comedy celebration you won’t want to miss. Get your tickets now!',
        location: 'Tunis',
        date: new Date(2024, 11, 20),
        category: 'Comedy',
        price: 25,
        countInStock: 11,
        rating: 3,
        numReviews: 12,
    },
    {
        _id: 4,
        name: 'National Festival of Tunisian Theatre',
        image: 'assets/products/festival.jpg',
        description:
            'Experience the vibrant National Festival of Tunisian Theatre, showcasing local talent through diverse performances and workshops. Celebrate the creativity and cultural heritage of Tunisian theatre in this annual artistic event!',
        location: 'Tunis',
        date: new Date(2024, 11, 20),
        category: 'Theater',
        price: 50,
        countInStock: 7,
        rating: 4.5,
        numReviews: 10,
    },
    {
        _id: 5,
        name: 'JET XPO Exhibition Fair of Enterprises',
        image: 'assets/products/jet.jpg',
        description:
            'Join us for an exciting showcase of innovative businesses and startups. Network with entrepreneurs, discover new products, and connect with industry leaders. Don’t miss your chance to be part of this vibrant event!',
        location: 'Tunis',
        date: new Date(2024, 11, 20),
        category: 'Others',
        price: 15,
        countInStock: 0,
        rating: 3,
        numReviews: 12,
    },
];


const users = [
    {_id: 1, username: "Ahmed", password: "Ahmed", isAdmin: false},
    {_id: 2, username: "Walid", password: "Walid", isAdmin: true},

];


export {initialProducts, users};
