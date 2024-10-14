import React from 'react';
import { Edit, Trash } from 'lucide-react';

const BookingTile = ({user}) => {
  console.log("booking tile", user)
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between">
      <div className="flex-grow">
        <h2 className="text-lg font-semibold">{user.VendorName}</h2>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">{user.VendorDescription}</span>
        <div className="flex space-x-2">
          <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            <Edit size={18} />
          </button>
          <button className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
            <Trash size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingTile;