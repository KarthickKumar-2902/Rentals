import  { useRef } from "react";
import pRoom from "../../assets/roomimages/shop-2.jpeg";
import "./placeList.css";
import { Link } from "react-router-dom";

const places = [
  { city: "Coimbatore", image: pRoom, description: "Description 1" },
  { city: "Pune", image: pRoom, description: "Description 2" },
  { city: "Bangalore", image: pRoom, description: "Description 3" },
  { city: "Mumbai", image: pRoom, description: "Description 4" },
  { city: "Delhi", image: pRoom, description: "Description 5" },
  { city: "Chennai", image: pRoom, description: "Description 6" },
  { city: "Bangalore", image: pRoom, description: "Description 3" },
  { city: "Mumbai", image: pRoom, description: "Description 4" },
  { city: "Delhi", image: pRoom, description: "Description 5" },
  { city: "Chennai", image: pRoom, description: "Description 6" },  
];

const Placelist = () => {
  const scrollRef = useRef(null);

  // Function to scroll left or right
  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({
        left: -200, // Adjust based on your scroll needs
        behavior: "smooth",
      });
    } else {
      scrollRef.current.scrollBy({
        left: 200, // Adjust based on your scroll needs
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full p-4">
      {/* Left Arrow */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-400 p-2 rounded-full shadow-lg hover:bg-gray-300"
        onClick={() => scroll("left")}
      >
        &larr;
      </button>

      {/* Place list */}
      <div
        ref={scrollRef}
        className="place-list scrollbar-hide flex overflow-x-auto space-x-4 hide-scrollbar"
      >
        {places.map((place, index) => (
          <div
            key={index}
            className="places w-50 h-auto flex-shrink-0 mx-4 rounded-lg bg-white shadow-lg"
          >
            <div className="placeImg">
              <img
                src={place.image}
                alt={place.city}
                className="w-full h-40 object-cover rounded-t-lg"
              />
            </div>
            <Link to="/rooms"><div className="placeTitle mt-2 text-black text-center p-2">
              <span className="font-semibold">{place.city}</span>
            </div>
            <div className="placeDescription text-gray-600 text-center text-sm p-2">
              <span>{place.description}</span>
            </div></Link>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-400 p-2 rounded-full shadow-lg hover:bg-gray-300"
        onClick={() => scroll("right")}
      >
        &rarr;
      </button>
    </div>
  );
};

export default Placelist;
