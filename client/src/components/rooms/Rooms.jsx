import { useState } from "react";
import Filter from "../../utils/filter/Filter";
import RoomList from "./RoomList";
import Search from "../../utils/search/Search";

const Room = () => {
  const [inputValue, setInputValue] = useState(""); // State for the search input

  return (
    <>
      <section className="p-5 bg-gray-100">
        <Search inputValue={inputValue} setInputValue={setInputValue} />
        <div className="flex w-full flex-col md:flex-row gap-5">
          {/* Filter Section */}
          <div className="md:w-1/3 w-full mt-5">
            <Filter />
          </div>

          {/* Room Availability Section */}
          <div className="w-full md:w-3/5 overflow-auto">
            <div className="mt-5 p-5 bg-white rounded-lg shadow">
              <RoomList searchQuery={inputValue} /> {/* Pass inputValue */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Room;
