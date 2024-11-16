// import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const rooms = [
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

  const room = rooms.find(r => r.id === parseInt(id)); 

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
      
      <button
        onClick={() => navigate("/rooms")}
        className="mb-6 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
      >
        &larr; Back
      </button>

      <div className="flex flex-col md:flex-row md:space-x-6 mb-8">
        
        <div className="flex-1">
          <img
            src={room.MainImg}
            alt="Room"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
        
        
        <div className="flex flex-col space-y-4 md:w-1/4 mt-6 md:mt-0">
          {room.thumbnail.map((thumb, index) => (
            <img
              key={index}
              src={thumb}
              alt={`Thumbnail ${index}`}
              className="w-full h-20 object-cover rounded-md border"
            />
          ))}
        </div>
      </div>

      <div className="space-y-6 mb-6">
        <h2 className="text-3xl font-bold text-gray-800">{room.place}</h2>
        <p className="text-lg text-gray-600">{room.description}</p>

        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="text-lg font-semibold text-gray-800">
            <p className="mb-2">₹{room.rent} / {room.rentPer}</p>
            <p className="text-md text-gray-600">{room.dimensions}</p>
            <p className="text-md text-gray-600">{room.area}</p>
          </div>
        </div>

        
        <div className="space-y-4 mb-6">
          <h3 className="text-2xl font-semibold text-gray-800">Features:</h3>
          <div className="flex flex-wrap space-x-3">
            {room.features.map((feature, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
        <div className="flex-1">
          <p className="text-lg font-semibold">Contact Information</p>
          <p className="text-md text-gray-700">Phone: {room.phone}</p>
        </div>
        <div className="flex space-x-4">
          
          <button className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-700" onClick={() => window.location.href = `tel:${room.phone}`} >
            Contact Owner
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
