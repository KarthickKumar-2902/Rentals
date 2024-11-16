import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Search = ({ inputValue, setInputValue }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Lease"); // Default option

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update input value via prop
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className="search-container flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 bg-white rounded-lg shadow-md w-full max-w-xl mx-auto">
      {/* Dropdown */}
      <div className="relative inline-block text-left w-full sm:w-auto">
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-between items-center w-full sm:w-24 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {selectedOption}
          <MdOutlineKeyboardArrowDown className="ml-2" />
        </button>

        {/* Dropdown Content */}
        {dropdownOpen && (
          <div className="absolute mt-2 w-full sm:w-24 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
            <div
              onClick={() => handleOptionClick("Lease")}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Lease
            </div>
            <div
              onClick={() => handleOptionClick("Rent")}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Rent
            </div>
            <div
              onClick={() => handleOptionClick("Buy")}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Buy
            </div>
          </div>
        )}
      </div>

      {/* Input Field */}
      <input
        type="text"
        className="tags-input flex-grow bg-transparent outline-none text-gray-700 px-2"
        placeholder="Enter city to search"
        value={inputValue}
        onChange={handleInputChange}
      />

      {/* Search Button */}
      <button
        className="search-btn w-full sm:w-auto bg-blue-600 text-white p-3 rounded-lg shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-center items-center"
      >
        <FiSearch className="search-icon text-lg" />
      </button>
    </div>
  );
};

export default Search;
