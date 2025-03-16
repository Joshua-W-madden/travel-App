const postingData = [
    {
        title: "Cozy Room with a Garden View in Downtown",
        hostName: "Anna",
        email: "anna.smith@example.com",
        location: "New York City, USA",
        region: "America",
        category: "accommodation",
        description:
            "Hi there! I'm Anna, and I live in a lovely apartment in the heart of Manhattan, just a 10-minute walk to Central Park. My place is cozy with lots of natural light and a beautiful garden view. You'll have your own private room with a comfortable bed and access to the living room, kitchen, and bathroom. Feel free to use my bike, and if you're a foodie, I love cooking, so we can share some meals together!",
        id: 1,
    },
    {
        title: "Beachfront Apartment in Bali, Indonesia",
        hostName: "Kaimana",
        email: "kaimana.bali@example.com",
        location: "Bali, Indonesia",
        region: "Asia",
        category: "accommodation",
        description:
            "Aloha! I live in a beachfront apartment just steps from the waves in Bali. The space is open, airy, and has an amazing view of the ocean. The room you'll be staying in has a comfy bed, air conditioning, and a small workspace. You'll have access to the kitchen and living area, and I love surfing, so you can join me for some rides if you're interested!",
        id: 2,
    },
    {
        title: "Quiet Countryside Cottage near Edinburgh",
        hostName: "James",
        email: "james.edinburgh@example.com",
        location: "Edinburgh, Scotland",
        region: "Europe",
        category: "accommodation",
        description:
            "Hello! I live in a charming countryside cottage about 20 minutes outside of Edinburgh. The area is peaceful, with lots of hiking trails and scenic views. You'll have your own private room with a fireplace and a cozy reading nook. Feel free to use the kitchen and make yourself at home. I also have a friendly dog, so be prepared for lots of cuddles!",
        id: 3,
    },
    {
        title: "Vibrant Flat in the Heart of Barcelona",
        hostName: "Maria",
        email: "maria.barcelona@example.com",
        location: "Barcelona, Spain",
        region: "Europe",
        category: "accommodation",
        description:
            "Hola! I live in a vibrant, artistic flat in the center of Barcelona. The place is filled with colorful artwork, plants, and plenty of light. You'll have your own bed in a shared room, but it's a spacious and welcoming space. I love showing visitors around, so if you want to explore the city, I'm happy to be your guide! I also love cooking traditional Spanish dishes, so let's share some meals together!",
        id: 4,
    },
    {
        title: "Cozy Mountain Cabin in the Swiss Alps",
        hostName: "Lukas",
        email: "lukas.swissalps@example.com",
        location: "Zermatt, Switzerland",
        region: "Europe",
        category: "accommodation",
        description:
            "Greetings from the Swiss Alps! My cabin is located in Zermatt, surrounded by breathtaking mountain views and fresh alpine air. The room you'll stay in has a comfy bed and a large window to enjoy the scenic surroundings. There's a fireplace to warm up after a long hike, and the kitchen is open for you to prepare your meals. I'd be happy to guide you on a mountain hike or show you the best spots for skiing.",
        id: 5,
    },
    {
        title: "Urban Oasis in Downtown Toronto",
        hostName: "Sarah",
        email: "sarah.toronto@example.com",
        location: "Toronto, Canada",
        region: "America",
        category: "accommodation",
        description:
            "Hey! I live in a modern, stylish apartment in downtown Toronto. It's a short walk to the CN Tower, museums, and a ton of great restaurants and bars. Your room is spacious with a king-size bed and lots of natural light. I also have a yoga mat and gym equipment if you're into fitness! There's a rooftop terrace where you can enjoy the skyline views. Feel free to join me for a night out exploring the city's nightlife!",
        id: 6,
    },
    {
        title: "Chill and Cozy Apartment in São Paulo",
        hostName: "Felipe",
        email: "felipe.sampa@example.com",
        location: "São Paulo, Brazil",
        region: "America",
        category: "accommodation",
        description:
            "Olá! I live in a chill, laid-back apartment in the center of São Paulo. The city is full of life, and you'll be close to many amazing markets, street art, and cultural landmarks. Your room is simple and comfy, with a fan to keep cool. You'll have access to the kitchen, and I love sharing Brazilian coffee, so we can enjoy that together in the mornings!",
        id: 7,
    },
    {
        title: "Cozy Home with a Rooftop in Rome",
        hostName: "Lucia",
        email: "lucia.rome@example.com",
        location: "Rome, Italy",
        region: "Europe",
        category: "accommodation",
        description:
            "Ciao! I live in a charming home with a rooftop terrace that overlooks the entire city of Rome. The room you'll stay in is small but cozy, and you'll have access to a shared bathroom, living room, and kitchen. I love hosting travelers and sharing insider tips on the best hidden spots in Rome. If you enjoy cooking, I'd love to show you how to make authentic pasta from scratch!",
        id: 8,
    },
    {
        title: "Sunny Loft in the Heart of Melbourne",
        hostName: "Liam",
        email: "liam@example.com",
        location: "Melbourne, Australia",
        region: "Oceania",
        category: "accommodation",
        description:
            "G'day mate! I live in a sunny loft apartment in the heart of Melbourne, just a short walk from the famous laneways and cafes. The loft is bright and airy, with a large window that lets in plenty of natural light. You'll have your own private space with a comfy bed and a small workspace. I love exploring the city, so I'm happy to show you around and share my favorite spots for coffee and live music!",
        id: 9,
    },
    {
        title: "Rustic Farmhouse in the French Countryside",
        hostName: "Julien",
        email: "julien@example.com",
        location: "Provence, France",
        region: "Europe",
        category: "accommodation",
        description:
            "Bonjour! I live in a rustic farmhouse in the beautiful countryside of Provence. The house is surrounded by vineyards, lavender fields, and olive groves, offering a peaceful retreat from the city. Your room is cozy and comfortable, with a view of the garden and rolling hills. You'll have access to the kitchen, and I love cooking traditional French meals, so we can enjoy a glass of wine and good food together!",
        id: 10,
    },
    {
        title: "Hiking in the Swiss Alps",
        hostName: "Lukas",
        email: "lukas@email.com",
        location: "Zermatt, Switzerland",
        region: "Europe",
        category: "travel companion",
        description:
            "Hello! I'm Lukas, and I'm planning a hiking trip in the Swiss Alps. The route will take us through stunning mountain landscapes, alpine meadows, and crystal-clear lakes. We'll stay in mountain huts and enjoy traditional Swiss cuisine along the way. The trip is moderate in difficulty, so some hiking experience is recommended. If you love nature and adventure, join me for an unforgettable journey!",
        id: 11,
    },
    {
        title: "Exploring Ancient Ruins in Athens",
        hostName: "Elena",
        email: "elena@email.com",
        location: "Athens, Greece",
        region: "Europe",
        category: "travel companion",
        description:
            "Kalimera! I'm Elena, and I'm planning a trip to explore the ancient ruins of Athens. We'll visit the Acropolis, Parthenon, and other historical sites that date back thousands of years. I'll share stories of Greek mythology and history as we wander through the city's streets. If you're a history buff or simply love exploring new cultures, come along for a journey through time!",
        id: 12,
    },
    {
        title: "Road Trip along the California Coast",
        hostName: "Alex",
        email: "alex@email.com",
        location: "California, USA",
        region: "America",
        category: "travel companion",
        description:
            "Hey there! I'm Alex, and I'm planning a road trip along the California coast. We'll drive from San Francisco to Los Angeles, stopping at scenic beaches, national parks, and charming coastal towns along the way. We'll hike, surf, and enjoy the laid-back California lifestyle. If you're up for an adventure filled with stunning views and good vibes, join me on this epic road trip!",
        id: 13,
    },
    {
        title: "Cultural Immersion in Tokyo",
        hostName: "Yuki",
        email: "yuki@email.com",
        location: "Tokyo, Japan",
        region: "Asia",
        category: "travel companion",
        description:
            "Konnichiwa! I'm Yuki, and I'm planning a cultural immersion trip in Tokyo. We'll explore traditional temples, vibrant neighborhoods, and bustling markets to experience the rich culture of Japan. From sushi-making classes to tea ceremonies, we'll dive deep into the local customs and traditions. If you're curious about Japanese culture and eager to try new things, come join me on this unforgettable journey!",
        id: 14,
    },
    {
        title: "Safari Adventure in South Africa",
        hostName: "Thandi",
        email: "thandi@email.com",
        location: "Kruger National Park, South Africa",
        region: "Africa",
        category: "travel companion",
        description:
            "Sawubona! I'm Thandi, and I'm planning a safari adventure in South Africa. We'll embark on game drives to spot the Big Five and other wildlife in their natural habitat. We'll stay in luxury lodges and enjoy traditional South African cuisine under the stars. If you're a nature lover and dream of exploring the African savannah, join me for an unforgettable safari experience!",
        id: 15,
    },
    {
        title: "Island Hopping in the Philippines",
        hostName: "Mateo",
        email: "mateo@email.com",
        location: "Palawan, Philippines",
        region: "Asia",
        category: "travel companion",
        description:
            "Kamusta I'm Mateo, and I'm planning an island-hopping adventure in the Philippines. We'll visit pristine beaches, turquoise lagoons, and hidden caves across the islands of Palawan. We'll snorkel, kayak, and relax on white sandy beaches surrounded by crystal-clear waters. If you're a beach lover and crave tropical paradise, join me for a sun-soaked journey through the Philippines!",
        id: 16,
    },
    {
        title: "Backpacking in Patagonia",
        hostName: "Sofia",
        email: "sofia@email.com",
        location: "Patagonia, Argentina",
        region: "America",
        category: "travel companion",
        description:
            "Hola! I'm Sofia, and I'm planning a backpacking trip in Patagonia. We'll trek through rugged mountains, glaciers, and emerald forests in one of the most remote regions of South America. We'll camp under the stars, cook over a campfire, and immerse ourselves in the wild beauty of Patagonia. If you're an outdoor enthusiast and crave adventure, join me for an epic journey through the untamed wilderness!",
        id: 17,
    },
    {
        title: "Yoga Retreat in Bali",
        hostName: "Ananda",
        email: "ananda@email.com",
        location: "Ubud, Bali",
        region: "Asia",
        category: "travel companion",
        description:
            "Om Swastiastu! I'm Ananda, and I'm hosting a yoga retreat in Bali. We'll practice yoga, meditation, and mindfulness in the tranquil setting of Ubud. We'll explore lush rice terraces, sacred temples, and rejuvenate our mind, body, and spirit. If you're seeking relaxation, inner peace, and a deeper connection to yourself, join me for a transformative retreat in the Island of the Gods!",
        id: 18,
    },
    {
        title: "Northern Lights Expedition in Iceland",
        hostName: "Einar",
        email: "einar@email.com",
        location: "Reykjavik, Iceland",
        region: "Europe",
        category: "travel companion",
        description:
            "Halló! I'm Einar, and I'm planning a Northern Lights expedition in Iceland. We'll chase the Aurora Borealis across the Icelandic wilderness, from glaciers to geysers, in search of the magical light show. We'll soak in hot springs, explore ice caves, and witness the beauty of the Arctic landscape. If you're an adventurer and dream of seeing the Northern Lights, join me for an unforgettable journey under the Arctic sky!",
        id: 19,
    },
    {
        title: "Volunteer Experience in Kenya",
        hostName: "Nuru",
        email: "nuru@email.com",
        location: "Nairobi, Kenya",
        region: "Africa",
        category: "travel companion",
        description:
            "Jambo! I'm Nuru, and I'm organizing a volunteer experience in Kenya. We'll work with local communities on sustainable projects, such as wildlife conservation, education, and healthcare. We'll immerse ourselves in Kenyan culture, visit national parks, and witness the beauty of the Maasai Mara. If you're passionate about making a positive impact and connecting with local communities, join me for a meaningful volunteer journey in Kenya!",
        id: 20,
    },
];

export default postingData;
