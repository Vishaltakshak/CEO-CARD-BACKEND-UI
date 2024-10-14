import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

const InventoryTile = ({user}) => {

        // Check if user object exists and has properties
        if (!user ) {
          console.error('Missing user in InventoryTile component');
          return <p>Loading...</p>; // Or display a placeholder message
        }
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 ">{user.VendorName}</p>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900 ">{user.InventoryType}</p>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900 ">{user.Availability}</p>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900 ">{user.Pricing}</p>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900 ">{user.Discount}</p>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900 ">{user.CreationDate}</p>
      </div>
      <div className="flex-shrink-0 ml-4">
        <button  className="p-1 text-blue-600 hover:bg-blue-100 rounded">
          <Pencil size={20} />
        </button>
        <button  className="p-1 text-red-600 hover:bg-red-100 rounded ml-2">
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default InventoryTile;