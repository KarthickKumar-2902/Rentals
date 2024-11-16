import  { useState } from "react";

const UploadRoom = () => {
  const [roomDetails, setRoomDetails] = useState({
    room_id: "",
    room_images: [],
    place: "",
    room_desc: "",
    rent: "",
    rentPer: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    available: "",
    roomType: "",
    roomDimensions: "",
    phone: "",
    facilities: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomDetails({ ...roomDetails, [name]: value });
  };

  const handleFileChange = (e) => {
    setRoomDetails({ ...roomDetails, room_images: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log(roomDetails);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20 mb-20 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Upload Room Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Room ID */}
          <div>
            <label htmlFor="room_id" className="block text-sm font-medium">
              Room ID
            </label>
            <input
              type="number"
              name="room_id"
              id="room_id"
              value={roomDetails.room_id}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Place */}
          <div>
            <label htmlFor="place" className="block text-sm font-medium">
              Place
            </label>
            <input
              type="text"
              name="place"
              id="place"
              value={roomDetails.place}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Rent */}
          <div>
            <label htmlFor="rent" className="block text-sm font-medium">
              Rent
            </label>
            <input
              type="number"
              name="rent"
              id="rent"
              value={roomDetails.rent}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Rent Per */}
          <div>
            <label htmlFor="rentPer" className="block text-sm font-medium">
              Rent Per
            </label>
            <input
              type="text"
              name="rentPer"
              id="rentPer"
              value={roomDetails.rentPer}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* City */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              value={roomDetails.city}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* State */}
          <div>
            <label htmlFor="state" className="block text-sm font-medium">
              State
            </label>
            <input
              type="text"
              name="state"
              id="state"
              value={roomDetails.state}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Country */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium">
              Country
            </label>
            <input
              type="text"
              name="country"
              id="country"
              value={roomDetails.country}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Pincode */}
          <div>
            <label htmlFor="pincode" className="block text-sm font-medium">
              Pincode
            </label>
            <input
              type="number"
              name="pincode"
              id="pincode"
              value={roomDetails.pincode}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Room Type */}
          <div>
            <label htmlFor="roomType" className="block text-sm font-medium">
              Room Type
            </label>
            <input
              type="text"
              name="roomType"
              id="roomType"
              value={roomDetails.roomType}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Room Dimensions */}
          <div>
            <label htmlFor="roomDimensions" className="block text-sm font-medium">
              Room Dimensions
            </label>
            <input
              type="text"
              name="roomDimensions"
              id="roomDimensions"
              value={roomDetails.roomDimensions}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              value={roomDetails.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Room Description */}
        <div>
          <label htmlFor="room_desc" className="block text-sm font-medium">
            Room Description
          </label>
          <textarea
            name="room_desc"
            id="room_desc"
            value={roomDetails.room_desc}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            rows="4"
          />
        </div>

        {/* Facilities */}
        <div>
          <label htmlFor="facilities" className="block text-sm font-medium">
            Facilities (comma separated)
          </label>
          <input
            type="text"
            name="facilities"
            id="facilities"
            value={roomDetails.facilities}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Available */}
        <div>
          <label htmlFor="available" className="block text-sm font-medium">
            Available
          </label>
          <input
            type="text"
            name="available"
            id="available"
            value={roomDetails.available}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Room Images */}
        <div>
          <label htmlFor="room_images" className="block text-sm font-medium">
            Room Images
          </label>
          <input
            type="file"
            name="room_images"
            id="room_images"
            onChange={handleFileChange}
            multiple
            required
            className="mt-1 block w-full text-gray-700"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Upload Room
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadRoom;
