import React from "react";
import { Link } from "react-router-dom";

const RoomList = ({ searchQuery }) => {
  console.log(searchQuery);

  const data = [
    {
      MainImg: "https://via.placeholder.com/150",
      thumbnail: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
      place: "MG Road, Bangalore",
      description: "Office space for rent in MG Road",
      rent: "50,000",
      rentPer: "month",
      dimensions: "1,500 sqft (140 sqm)",
      area: "Carpet Area",
      features: ["Prime Location", "Near Metro", "Parking Available"],
      phone: "9876543210",
      id: 1,
    },
    {
      MainImg: "https://via.placeholder.com/150",
      thumbnail: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
      place: "Bandra, Mumbai",
      description: "Luxury apartment for rent in Bandra",
      rent: "1,00,000",
      rentPer: "month",
      dimensions: "2,000 sqft (186 sqm)",
      area: "Built-Up Area",
      features: ["Sea View", "Fully Furnished", "Gated Community"],
      phone: "9123456789",
      id: 2,
    },
    {
      MainImg: "https://via.placeholder.com/150",
      thumbnail: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
      place: "T Nagar, Chennai",
      description: "Shop for rent in T Nagar",
      rent: "60,000",
      rentPer: "month",
      dimensions: "1,200 sqft (111 sqm)",
      area: "Carpet Area",
      features: ["Near Market", "High Footfall", "Prime Spot"],
      phone: "9988776655",
      id: 3,
    },
    {
      MainImg: "https://via.placeholder.com/150",
      thumbnail: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
      place: "Salt Lake, Kolkata",
      description: "Office space for rent in Salt Lake",
      rent: "70,000",
      rentPer: "month",
      dimensions: "1,800 sqft (167 sqm)",
      area: "Built-Up Area",
      features: ["Modern Amenities", "Near Tech Park", "Ample Parking"],
      phone: "8765432109",
      id: 4,
    },
    {
      MainImg: "https://via.placeholder.com/150",
      thumbnail: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
      place: "Connaught Place, Delhi",
      description: "Commercial space for rent in Connaught Place",
      rent: "1,50,000",
      rentPer: "month",
      dimensions: "2,500 sqft (232 sqm)",
      area: "Carpet Area",
      features: ["Central Location", "Near Metro", "High Visibility"],
      phone: "9871234567",
      id: 5,
    },
    {
      MainImg: "https://via.placeholder.com/150",
      thumbnail: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
      place: "Viman Nagar, Pune",
      description: "2 BHK flat for rent in Viman Nagar",
      rent: "35,000",
      rentPer: "month",
      dimensions: "1,100 sqft (102 sqm)",
      area: "Built-Up Area",
      features: ["Near Airport", "Modern Interiors", "Covered Parking"],
      phone: "8761234509",
      id: 6,
    },
    {
      MainImg: "https://via.placeholder.com/150",
      thumbnail: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
      place: "Civil Lines, Jaipur",
      description: "Independent house for rent in Civil Lines",
      rent: "45,000",
      rentPer: "month",
      dimensions: "2,000 sqft (186 sqm)",
      area: "Carpet Area",
      features: ["Spacious", "Garden Area", "Near Schools"],
      phone: "9109876543",
      id: 7,
    },
    {
      MainImg: "https://via.placeholder.com/150",
      thumbnail: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
      place: "Sector 62, Noida",
      description: "Office space for rent in Sector 62",
      rent: "80,000",
      rentPer: "month",
      dimensions: "2,500 sqft (232 sqm)",
      area: "Built-Up Area",
      features: ["Near Metro", "Furnished", "IT Hub"],
      phone: "9012345678",
      id: 8,
    },
    {
      MainImg: "https://via.placeholder.com/150",
      thumbnail: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
      place: "Banjara Hills, Hyderabad",
      description: "Luxury villa for rent in Banjara Hills",
      rent: "2,50,000",
      rentPer: "month",
      dimensions: "5,000 sqft (465 sqm)",
      area: "Built-Up Area",
      features: ["Swimming Pool", "Private Garden", "Modern Architecture"],
      phone: "9009876543",
      id: 9,
    },
    {
      MainImg: "https://via.placeholder.com/150",
      thumbnail: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
      place: "Sector 14, Gurgaon",
      description: "Coworking space in Sector 14",
      rent: "20,000",
      rentPer: "month",
      dimensions: "500 sqft (46 sqm)",
      area: "Carpet Area",
      features: ["High-Speed Internet", "Modern Design", "Prime Location"],
      phone: "9901234567",
      id: 10,
    },
    {
      MainImg: "https://via.placeholder.com/150",
      thumbnail: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
      place: "South Extension, Delhi",
      description: "3 BHK flat for rent in South Extension",
      rent: "85,000",
      rentPer: "month",
      dimensions: "1,800 sqft (167 sqm)",
      area: "Built-Up Area",
      features: ["Fully Furnished", "Near Market", "Prime Location"],
      phone: "9123456700",
      id: 11,
    },
    {
      MainImg: "https://via.placeholder.com/150",
      thumbnail: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
      place: "Jayanagar, Bangalore",
      description: "Independent house for rent in Jayanagar",
      rent: "55,000",
      rentPer: "month",
      dimensions: "2,200 sqft (204 sqm)",
      area: "Carpet Area",
      features: ["Spacious", "Near Park", "Well Connected"],
      phone: "9876543210",
      id: 12,
    },
    {
      MainImg: "https://via.placeholder.com/150",
      thumbnail: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
      place: "Vashi, Navi Mumbai",
      description: "Office space for rent in Vashi",
      rent: "70,000",
      rentPer: "month",
      dimensions: "1,600 sqft (149 sqm)",
      area: "Built-Up Area",
      features: ["IT Friendly", "Near Station", "Modern Infrastructure"],
      phone: "9898765432",
      id: 13,
    },
    {
      MainImg: "https://via.placeholder.com/150",
      thumbnail: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
      place: "Sector 50, Chandigarh",
      description: "Shop for rent in Sector 50",
      rent: "40,000",
      rentPer: "month",
      dimensions: "800 sqft (74 sqm)",
      area: "Carpet Area",
      features: ["High Footfall", "Prime Spot", "Affordable"],
      phone: "9076543219",
      id: 14,
    },
    {
      MainImg: "https://via.placeholder.com/150",
      thumbnail: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
      place: "Anand Vihar, Delhi",
      description: "Warehouse for rent in Anand Vihar",
      rent: "1,20,000",
      rentPer: "month",
      dimensions: "5,000 sqft (465 sqm)",
      area: "Built-Up Area",
      features: ["Large Space", "Easy Access", "Secure"],
      phone: "9012345671",
      id: 15,
    },
    {
      MainImg: "https://via.placeholder.com/150",
      thumbnail: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
      place: "Boring Road, Patna",
      description: "Office for rent in Boring Road",
      rent: "30,000",
      rentPer: "month",
      dimensions: "1,200 sqft (111 sqm)",
      area: "Carpet Area",
      features: ["Near Market", "Spacious", "Affordable"],
      phone: "9876501234",
      id: 16,
    },
    {
      MainImg: "https://via.placeholder.com/150",
      thumbnail: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
      place: "Dadar, Mumbai",
      description: "Studio apartment for rent in Dadar",
      rent: "25,000",
      rentPer: "month",
      dimensions: "600 sqft (56 sqm)",
      area: "Carpet Area",
      features: ["Compact", "Well Maintained", "Near Station"],
      phone: "9123459876",
      id: 17,
    },
    {
      MainImg: "https://via.placeholder.com/150",
      thumbnail: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
      place: "Bistupur, Jamshedpur",
      description: "Retail shop for rent in Bistupur",
      rent: "22,000",
      rentPer: "month",
      dimensions: "750 sqft (70 sqm)",
      area: "Carpet Area",
      features: ["High Visibility", "Affordable", "Prime Location"],
      phone: "9874321098",
      id: 18,
    },
    {
      MainImg: "https://via.placeholder.com/150",
      thumbnail: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
      place: "Alkapuri, Vadodara",
      description: "4 BHK villa for rent in Alkapuri",
      rent: "1,50,000",
      rentPer: "month",
      dimensions: "4,000 sqft (372 sqm)",
      area: "Built-Up Area",
      features: ["Luxury Interiors", "Private Garden", "Swimming Pool"],
      phone: "9012789654",
      id: 19,
    },
    {
      MainImg: "https://via.placeholder.com/150",
      thumbnail: [
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
        "https://via.placeholder.com/50",
      ],
      place: "Whitefield, Bangalore",
      description: "2 BHK apartment for rent in Whitefield",
      rent: "35,000",
      rentPer: "month",
      dimensions: "1,200 sqft (111 sqm)",
      area: "Built-Up Area",
      features: ["Near IT Parks", "Fully Furnished", "Well Connected"],
      phone: "9123450123",
      id: 20,
    },
    // Add 10 more objects similarly
  ];
  

  return (
    <>
      {data
        .filter(
          (room) =>
            searchQuery === "" || // If no searchQuery, show all items
            room.place.toLowerCase().includes(searchQuery.toLowerCase()) ||
            room.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((room, i) => {
          return (
            <Link to={`/roomdetails/${room.id}`} key={i}>
              <div className="flex flex-col md:flex-row border border-gray-300 p-5 rounded-lg max-w-full md:max-w-screen-md h-auto md:h-80 mx-auto mt-5 cursor-pointer">
                <div className="flex w-full md:w-1/2 mb-5 md:mb-0 md:mr-5 justify-around">
                  <div className="w-3/4 h-full">
                    <img
                      src={room.MainImg}
                      alt="Main Room"
                      className="w-full h-full rounded-lg mb-2"
                    />
                  </div>

                  <div className="flex flex-col justify-between w-1/5 h-full space-y-2">
                    {room.thumbnail.map((thumb, index) => (
                      <img
                        src={thumb}
                        key={index}
                        alt={`Thumbnail ${index}`}
                        className="w-full h-auto md:h-imgheight rounded-md"
                      />
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <h2 className="text-xl font-semibold mb-2">{room.place}</h2>
                  <p>{room.description}</p>
                  <div className="flex flex-col mt-5">
                    <p className="font-bold text-lg">
                      ₹{room.rent} / {room.rentPer}
                    </p>
                    <p>{room.dimensions + " " + room.area}</p>
                  </div>

                  <div className="mt-5 space-x-2">
                    {room.features.slice(0, 2).map((feature, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-200 px-3 py-1 rounded-lg"
                      >
                        {feature}
                      </span>
                    ))}
                    <span className="inline-block bg-gray-200 px-3 py-1 rounded-lg">
                      +{room.features.length - 2}
                    </span>
                  </div>

                  <div className="mt-5">
                    {/* <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                    View Number
                  </button> */}
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                      onClick={() => console.log("first")}
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </>
  );
};

export default RoomList;
