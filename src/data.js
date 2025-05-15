import northbeach1 from './assets/Images/North1.jpeg';
import northbeach2 from './assets/Images/North2.jpeg';
import northbeach3 from './assets/Images/North3.jpeg';
import northbeach4 from './assets/Images/North4.jpeg';
import northresort1 from './assets/Images/NorthResort1.jpeg';
import northresort2 from './assets/Images/NorthResort2.jpeg';
import northresort3 from './assets/Images/NorthResort3.jpeg';
import northresort4 from './assets/Images/NorthResort4.jpeg';

import southbeach1 from './assets/Images/South1.jpeg';
import southbeach2 from './assets/Images/South2.jpeg';
import southbeach3 from './assets/Images/South3.jpeg';
import southbeach4 from './assets/Images/South4.jpeg';
import southresort1 from './assets/Images/SouthResort1.jpeg';
import southresort2 from './assets/Images/SouthResort2.jpeg';
import southresort3 from './assets/Images/SouthResort3.jpeg';
import southresort4 from './assets/Images/SouthResort4.jpeg';

import eastbeach1 from './assets/Images/East1.jpeg';
import eastbeach2 from './assets/Images/East2.jpeg';
import eastbeach3 from './assets/Images/East3.jpeg';
import eastbeach4 from './assets/Images/East4.jpeg';
import eastresort1 from './assets/Images/EastResort1.jpeg';
import eastresort2 from './assets/Images/EastResort2.jpeg';
import eastresort3 from './assets/Images/EastResort3.jpeg';
import eastresort4 from './assets/Images/EastResort4.jpeg';

import westbeach1 from './assets/Images/West1.jpeg';
import westbeach2 from './assets/Images/West2.jpeg';
import westbeach3 from './assets/Images/West3.jpeg';
import westbeach4 from './assets/Images/West4.jpeg';
import westresort1 from './assets/Images/WestResort1.jpeg';
import westresort2 from './assets/Images/WestResort2.jpeg';
import westresort3 from './assets/Images/WestResort3.jpeg';
import westresort4 from './assets/Images/WestResort4.jpeg';


export const data = {
  north: {
    beach: [
      {
        id: "1",
        name: "Navagio Beach",
        location: "Zakynthos, Greece",
        ratings: 4.8,
        weather: "Mediterranean – warm, dry summers",
        activities: ["Sightseeing", "Photography", "Cliff diving", "Boat tours"],
        description: "Also known as Shipwreck Beach, this iconic cove is surrounded by steep limestone cliffs and features the rusted remains of a shipwreck on white pebbled sand, accessible only by boat.",
        howToGetThere: "Fly to Zakynthos International Airport, take a car or shuttle to Porto Vromi, then a boat tour to Navagio Beach.",
        image: northbeach1,
        resortId: "1", // optional, link to a resort
        link: '/details/north/beach/1' 
      },
      {
        id: "2",
        name: "Grace Bay Beach",
        location: "Providenciales, Turks and Caicos",
        ratings: 4.9,
        weather: "Tropical – warm year-round, dry season from November to May",
        activities: ["Snorkeling", "Swimming", "Sunbathing", "Sailing"],
        description: "Famous for its powdery white sand and calm turquoise waters protected by a barrier reef, Grace Bay is often ranked the world’s best beach.",
        howToGetThere: "Fly into Providenciales International Airport, beach is a short drive away.",
        image: northbeach2,
        resortId: "2",
        link: '/details/north/beach/2' 
      },
      {
        id: "3",
        name: "Playa Norte",
        location: "Isla Mujeres, Mexico",
        ratings: 4.7,
        weather: "Tropical – sunny, with warm sea temperatures year-round",
        activities: ["Swimming", "Paddleboarding", "Sunset watching", "Beach bars"],
        description: "A serene beach known for its shallow, clear waters and relaxed vibe. Popular with families and couples alike, with great walkability and nearby eateries.",
        howToGetThere: "Fly into Cancun International Airport, take a ferry from Puerto Juarez to Isla Mujeres, then a taxi or walk to Playa Norte.",
        image: northbeach3,
        resortId: "3",
        link: '/details/north/beach/3' 
      },
      {
        id: "4",
        name: "Nacpan Beach (El Nido)",
        location: "Palawan, Philippines",
        ratings: 4.8,
        weather: "Tropical – dry from November to May",
        activities: ["Island hopping", "Kayaking", "Snorkeling", "Beach camping"],
        description: "El Nido is home to secluded beaches and lagoons with dramatic limestone formations. Nacpan Beach stretches 4 kilometers with fine sand and minimal crowds.",
        howToGetThere: "Fly into Puerto Princesa or El Nido Airport, then travel by van or tricycle to the beach.",
        image: northbeach4,
        resortId: "4",
        link: '/details/north/beach/4' 
      }
    ],
     resort: [
      {
        id: "1",
        name: "Lesante Blu Exclusive Beach Resort",
        location: "Zakynthos, Greece",
        description:
          "An adults-only 5-star luxury resort near Navagio Beach offering breathtaking Ionian Sea views, infinity pools, fine dining, and spa services.",
        image: northresort1,
        menu: ["Greek Salad", "Grilled Octopus", "Lamb Kleftiko", "Baklava"],
        activities: ["Spa", "Sailing", "Private Beach", "Hiking"],
        howToGetThere:
          "Fly to Zakynthos Airport, then drive about 30 minutes north to the resort near Tragaki."
      },
      {
        id: "2",
        name: "The Palms Turks and Caicos",
        location: "Grace Bay, Providenciales",
        description:
          "A luxurious Caribbean resort on Grace Bay Beach featuring spacious suites, award-winning spa, and fine beachfront dining.",
        image: northresort2,
        menu: ["Conch Fritters", "Jerk Chicken", "Grilled Lobster", "Coconut Tart"],
        activities: ["Snorkeling", "Yoga", "Spa", "Sunset Cruises"],
        howToGetThere:
          "Fly to Providenciales International Airport; the resort is a 15-minute drive away."
      },
      {
        id: "3",
        name: "Ixchel Beach Hotel",
        location: "Isla Mujeres, Mexico",
        description:
          "A beachfront boutique hotel just steps from Playa Norte, offering modern amenities, ocean views, and direct beach access.",
        image: northresort3,
        menu: ["Fish Tacos", "Ceviche", "Guacamole", "Margaritas"],
        activities: ["Snorkeling", "Beach Volleyball", "Golf Cart Tours", "Massage"],
        howToGetThere:
          "From Cancun Airport, ferry to Isla Mujeres, then walk or drive a few minutes to Playa Norte."
      },
      {
        id: "4",
        name: "Nacpan Beach Glamping",
        location: "El Nido, Palawan, Philippines",
        description:
          "A beachfront glamping resort at Nacpan Beach offering a unique mix of nature and comfort with ocean-view tents and local Filipino cuisine.",
        image: northresort4,
        menu: ["Adobo", "Grilled Prawns", "Halo-Halo", "Fruit Smoothies"],
        activities: ["Kayaking", "Island Hopping", "Beach Bonfires", "Snorkeling"],
        howToGetThere:
          "Fly to El Nido Airport, then take a 45-minute ride to Nacpan Beach."
      }
    ]
  },
south: {
    beach: [
      {
        id: "1",
        name: "Whitehaven Beach",
        location: "Whitsunday Islands, Australia",
        description:
          "Known for its brilliant white silica sand and crystal-clear water, Whitehaven Beach is a tropical paradise that stretches over 7 km along Whitsunday Island.",
        image: southbeach1,
        weather: "Tropical, warm year-round",
        ratings: 5,
        activities: ["Swimming", "Snorkeling", "Walking", "Island Hopping"],
        howToGetThere:
          "Fly into Hamilton Island or Airlie Beach and take a boat or helicopter to Whitehaven Beach.",
        resortId: "1",
        link: '/details/south/beach/1'
      },
      {
        id: "2",
        name: "Anse Source d’Argent",
        location: "La Digue, Seychelles",
        description:
          "Anse Source d’Argent is one of the most photographed beaches in the world, known for its unique granite boulders, powdery white sand, and crystal-clear turquoise water.",
        image: southbeach2,
        weather: "Tropical, warm year-round",
        ratings: 5,
        activities: ["Swimming", "Sunbathing", "Photography", "Kayaking"],
        howToGetThere:
          "Fly to Seychelles International Airport, take a ferry to La Digue, and then cycle or take a taxi to Anse Source d'Argent.",
        resortId: "2",
        link: '/details/south/beach/2'
      },
      {
        id: "3",
        name: "Matira Beach",
        location: "Bora Bora, French Polynesia",
        description:
          "Matira Beach offers stunning views of Bora Bora’s lagoon, featuring soft sand, shallow waters, and vibrant coral reefs. It’s perfect for a relaxing swim or a romantic sunset walk.",
        image: southbeach3,
        weather: "Tropical, warm year-round",
        ratings: 5,
        activities: ["Snorkeling", "Swimming", "Sunbathing", "Photography"],
        howToGetThere:
          "Fly into Bora Bora Airport, take a boat to the resort or directly to Matira Beach.",
        resortId: "3",
        link: '/details/south/beach/3'
      },
      {
        id: "4",
        name: "Camps Bay Beach",
        location: "Cape Town, South Africa",
        description:
          "Located in the heart of Cape Town, Camps Bay Beach offers golden sand with clear blue waters, all with the spectacular backdrop of the Twelve Apostles mountain range.",
        image: southbeach4,
        weather: "Mediterranean, warm summers and mild winters",
        ratings: 4.5,
        activities: ["Surfing", "Sunbathing", "Volleyball", "Sightseeing"],
        howToGetThere:
          "Fly into Cape Town International Airport and take a short drive to Camps Bay Beach.",
        resortId: "4",
        link: '/details/south/beach/4'
      }
    ],
    resort: [
      {
        id: "1",
        name: "Qualia Resort",
        location: "Hamilton Island, Australia",
        description:
          "A luxury resort nestled in the Whitsundays, near Whitehaven Beach, offering private pavilions, infinity pools, fine dining, and panoramic sea views.",
        image: southresort1,
        menu: ["Coral Trout", "Lobster Ravioli", "Pavlova", "Aussie BBQ"],
        activities: ["Yachting", "Snorkeling", "Helicopter Tours", "Spa"],
        howToGetThere:
          "Fly to Hamilton Island Airport, then take a short drive to the resort on the northern tip of the island."
      },
      {
        id: "2",
        name: "Le Domaine de L'Orangeraie",
        location: "La Digue, Seychelles",
        description:
          "A tropical haven surrounded by palm trees and granite boulders, this eco-luxury resort is near Anse Source d’Argent with villas built into the lush hillside.",
        image: southresort2,
        menu: ["Creole Curry", "Grilled Red Snapper", "Tropical Fruit Salad"],
        activities: ["Cycling", "Kayaking", "Spa", "Snorkeling"],
        howToGetThere:
          "Fly to Mahé, ferry to La Digue, then cycle or take a taxi to the resort."
      },
      {
        id: "3",
        name: "InterContinental Bora Bora Thalasso Spa",
        location: "Bora Bora, French Polynesia",
        description:
          "A luxury overwater resort located near Matira Beach, famous for turquoise lagoons, world-class spas, and breathtaking sunsets.",
        image: southresort3,
        menu: ["Poisson Cru", "Mahi Mahi", "Tropical Sorbet"],
        activities: ["Scuba Diving", "Jet Skiing", "Couples Spa", "Lagoon Tours"],
        howToGetThere:
          "Fly to Bora Bora Airport, then take a boat to the resort on Motu Piti Aau."
      },
      {
        id: "4",
        name: "The Bay Hotel",
        location: "Cape Town, South Africa",
        description:
          "An upscale beachfront hotel in Camps Bay with views of the Atlantic Ocean and Table Mountain, offering stylish rooms, fine dining, and wellness services.",
        image: southresort4,
        menu: ["Cape Malay Curry", "Beef Fillet", "Malva Pudding"],
        activities: ["Surfing", "Paragliding", "Winery Tours", "Spa"],
        howToGetThere:
          "Fly to Cape Town International Airport, then drive 30 minutes to Camps Bay."
      }
    ]
  },
  east: {
    beach: [
      {
        id: "1",
        name: "White Beach",
        location: "Boracay, Philippines",
        description:
          "Known for its powdery white sand and crystal-clear water, White Beach is one of the most famous beaches in the world, offering a paradise-like setting for travelers.",
        image: eastbeach1,
        weather: "Tropical, warm year-round",
        ratings: 5,
        activities: ["Swimming", "Sunbathing", "Water Sports", "Beach Volleyball"],
        howToGetThere:
          "Fly to Caticlan Airport or Kalibo International Airport, then take a boat to Boracay Island.",
        resortId: "1",
        link: '/details/east/beach/1'
      },
      {
        id: "2",
        name: "Maya Bay",
        location: "Koh Phi Phi Leh, Thailand",
        description:
          "Famous for its role in the movie 'The Beach', Maya Bay features stunning limestone cliffs surrounding a pristine beach with crystal-clear water, ideal for snorkeling.",
        image: eastbeach2,
        weather: "Tropical, hot and humid",
        ratings: 4.5,
        activities: ["Snorkeling", "Swimming", "Boating", "Photography"],
        howToGetThere:
          "Fly to Krabi or Phuket, take a ferry or speedboat to Phi Phi Islands, and then take a boat to Maya Bay.",
        resortId: "2",
        link: '/details/east/beach/2'
      },
      {
        id: "3",
        name: "Nha Trang Beach",
        location: "Nha Trang, Vietnam",
        description:
          "A popular beach destination with a vibrant city atmosphere, Nha Trang Beach offers golden sands, calm waters, and plenty of beachfront resorts and bars.",
        image: eastbeach3,
        weather: "Tropical, hot with a rainy season",
        ratings: 4,
        activities: ["Jet Skiing", "Parasailing", "Snorkeling", "Beach Volleyball"],
        howToGetThere:
          "Fly to Cam Ranh International Airport, then take a short drive to Nha Trang Beach.",
        resortId: "3",
        link: '/details/east/beach/3'
      },
      {
        id: "4",
        name: "Kuta Beach",
        location: "Bali, Indonesia",
        description:
          "A lively beach with golden sand and powerful waves, Kuta Beach is known for its surfing opportunities, vibrant nightlife, and abundant shopping and dining options.",
        image: eastbeach4,
        weather: "Tropical, warm year-round",
        ratings: 4.5,
        activities: ["Surfing", "Shopping", "Nightlife", "Sunbathing"],
        howToGetThere:
          "Fly to Ngurah Rai International Airport and take a short drive to Kuta Beach.",
        resortId: "4",
        link: '/details/east/beach/4'
      }
    ],
    resort: [
      {
        id: "1",
        name: "Shangri-La's Boracay Resort and Spa",
        location: "Boracay, Philippines",
        description:
          "A luxury beachfront resort offering private villas, exclusive amenities, and a world-class spa, Shangri-La's Boracay Resort and Spa is a perfect retreat for those seeking tranquility.",
        image: eastresort1,
        menu: ["Adobo", "Grilled Tuna", "Sinigang", "Leche Flan"],
        activities: ["Scuba Diving", "Snorkeling", "Island Hopping", "Sunset Cruise"],
        howToGetThere:
          "Fly to Caticlan or Kalibo Airport, then take a boat to Boracay Island and head to the resort."
      },
      {
        id: "2",
        name: "The Phi Phi Island Village Beach Resort",
        location: "Phi Phi Islands, Thailand",
        description:
          "Set on a private beach, the Phi Phi Island Village Beach Resort offers luxurious bungalows, a wellness center, and easy access to Maya Bay and other nearby islands.",
        image: eastresort2,
        menu: ["Pad Thai", "Tom Yum Goong", "Massaman Curry", "Mango Sticky Rice"],
        activities: ["Scuba Diving", "Snorkeling", "Kayaking", "Island Tours"],
        howToGetThere:
          "Fly to Krabi or Phuket, then take a ferry to Phi Phi Islands and the resort."
      },
      {
        id: "3",
        name: "Vinpearl Resort Nha Trang",
        location: "Nha Trang, Vietnam",
        description:
          "An upscale resort offering ocean views, private pools, and a large water park, Vinpearl Resort is perfect for families, honeymooners, and those seeking adventure and relaxation.",
        image: eastresort3,
        menu: ["Pho", "Banh Xeo", "Grilled Fish", "Spring Rolls"],
        activities: ["Water Park", "Scuba Diving", "Golfing", "Beach Volleyball"],
        howToGetThere:
          "Fly to Cam Ranh International Airport, then take a shuttle or boat to Vinpearl Resort."
      },
      {
        id: "4",
        name: "The Legian Bali",
        location: "Bali, Indonesia",
        description:
          "A beachfront resort in Seminyak, Bali, offering luxurious suites and villas, exquisite dining, and an infinity pool overlooking the Indian Ocean.",
        image: eastresort4,
        menu: ["Nasi Goreng", "Babi Guling", "Mie Goreng", "Rendang"],
        activities: ["Surfing", "Spa Treatments", "Cooking Classes", "Cultural Tours"],
        howToGetThere:
          "Fly into Ngurah Rai International Airport, then take a short drive to The Legian Bali."
      }
    ]
  },
  west: {
    beach: [
      {
        id: "1",
        name: "Waikiki Beach",
        location: "Honolulu, Hawaii, USA",
        description:
          "Waikiki Beach is known for its iconic crescent-shaped shoreline, golden sand, and calm surf, offering a perfect blend of relaxation and water sports.",
        image: westbeach1,
        weather: "Tropical, warm year-round",
        ratings: 5,
        activities: ["Surfing", "Swimming", "Stand-Up Paddleboarding", "Beach Volleyball"],
        howToGetThere:
          "Fly to Daniel K. Inouye International Airport in Honolulu, then take a short drive to Waikiki Beach.",
        resortId: "1",
        link: '/details/west/beach/1'
      },
      {
        id: "2",
        name: "Cabo San Lucas",
        location: "Baja California Sur, Mexico",
        description:
          "Cabo San Lucas is famous for its stunning beaches, dramatic landscapes, and vibrant nightlife. The beach is perfect for both adventure and relaxation.",
        image: westbeach2,
        weather: "Desert climate, hot and dry",
        ratings: 4.5,
        activities: ["Fishing", "Snorkeling", "Whale Watching", "Jet Skiing"],
        howToGetThere:
          "Fly to Los Cabos International Airport, then take a short drive to Cabo San Lucas Beach.",
        resortId: "2",
        link: '/details/west/beach/2'
      },
      {
        id: "3",
        name: "Playa del Carmen",
        location: "Quintana Roo, Mexico",
        description:
          "Located along the Caribbean coast, Playa del Carmen offers turquoise waters and beautiful beaches surrounded by palm trees. It's known for its laid-back atmosphere and vibrant culture.",
        image: westbeach3,
        weather: "Tropical, hot and humid",
        ratings: 4.5,
        activities: ["Snorkeling", "Diving", "Cultural Tours", "Shopping"],
        howToGetThere:
          "Fly to Cancun International Airport, then take a bus or taxi to Playa del Carmen.",
        resortId: "3",
        link: '/details/west/beach/3'
      },
      {
        id: "4",
        name: "Lanikai Beach",
        location: "Oahu, Hawaii, USA",
        description:
          "Lanikai Beach is often considered one of the best beaches in the world, known for its pristine powdery sand and turquoise waters, perfect for kayaking, snorkeling, and beach lounging.",
        image: westbeach4,
        weather: "Tropical, warm year-round",
        ratings: 5,
        activities: ["Snorkeling", "Kayaking", "Swimming", "Sunbathing"],
        howToGetThere:
          "Fly to Honolulu International Airport and drive to Kailua, then head towards Lanikai Beach.",
        resortId: "4",
        link: '/details/west/beach/4'
      }
    ],
    resort: [
      {
        id: "1",
        name: "The Royal Hawaiian",
        location: "Honolulu, Hawaii, USA",
        description:
          "Known as 'The Pink Palace of the Pacific', The Royal Hawaiian offers luxurious beachfront accommodations and unparalleled service in the heart of Waikiki.",
        image: westresort1,
        menu: ["Hawaiian BBQ", "Poke Bowls", "Ahi Tuna", "Mai Tai"],
        activities: ["Snorkeling", "Surf Lessons", "Cultural Performances", "Spa Treatments"],
        howToGetThere:
          "Fly to Daniel K. Inouye International Airport in Honolulu, then take a short drive to The Royal Hawaiian."
      },
      {
        id: "2",
        name: "Grand Solmar Land's End Resort & Spa",
        location: "Cabo San Lucas, Mexico",
        description:
          "Located at the tip of the Baja Peninsula, Grand Solmar offers luxury, beachfront accommodations with stunning views of the Pacific Ocean and high-end amenities.",
        image: westresort2,
        menu: ["Tacos", "Ceviche", "Margaritas", "Churros"],
        activities: ["Whale Watching", "Fishing", "Beachfront Yoga", "Luxury Spa"],
        howToGetThere:
          "Fly to Los Cabos International Airport, then take a short drive to Grand Solmar."
      },
      {
        id: "3",
        name: "Mahekal Beach Resort",
        location: "Playa del Carmen, Mexico",
        description:
          "Mahekal Beach Resort offers a tropical retreat with beachfront bungalows, an on-site spa, and authentic Mexican cuisine. A perfect spot for both couples and families.",
        image: westresort3,
        menu: ["Tacos al Pastor", "Guacamole", "Churros", "Seafood Tacos"],
        activities: ["Scuba Diving", "Yoga", "Beach Volleyball", "Cultural Tours"],
        howToGetThere:
          "Fly to Cancun International Airport, then take a short taxi ride to Mahekal Beach Resort in Playa del Carmen."
      },
      {
        id: "4",
        name: "The Kahala Hotel & Resort",
        location: "Honolulu, Hawaii, USA",
        description:
          "A luxury resort offering spacious rooms, fine dining, and a secluded atmosphere, The Kahala is the perfect retreat away from the bustle of Waikiki, with stunning views and a dolphin lagoon.",
        image: westresort4,
        menu: ["Fresh Seafood", "Hibachi Grill", "Lobster Bisque", "Pina Colada"],
        activities: ["Snorkeling", "Dolphin Viewing", "Spa Treatments", "Golfing"],
        howToGetThere:
          "Fly to Daniel K. Inouye International Airport in Honolulu, then take a short drive to The Kahala Hotel & Resort."
      }
    ]
  },
};