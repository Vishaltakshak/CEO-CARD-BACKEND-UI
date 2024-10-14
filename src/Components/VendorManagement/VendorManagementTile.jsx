import React from 'react';
import { Edit, Trash } from 'lucide-react';

const VendorManagementTile = ({user}) => {
  const isActive=()=>{
    const status= user.VendorStatus
    if(status==="Active"){
      return true
    }
    else{
      return false;
    }
  }
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-start space-x-4">
      <div className="flex-grow">
        <h2 className="text-xl font-bold">{user.ContactName}</h2>
        <div className="mt-2 flex space-x-4">
          <img 
            src={user.VendorImages} 
            className="w-1/3 h-auto rounded-md object-cover"
          />
          <div className="space-y-2">
            <p className="text-gray-600">{user.VendorAddress}</p>
            <p className="text-blue-500">{user.VendorWebsite}</p>
            <span className="bg-green-100 text-white px-2 py-1 rounded-full text-sm">
            
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {isActive ? 'Active' : 'InActive'}
            </span>
      
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <button className="p-2 bg-blue-500 text-white rounded-md">
          <Edit size={20} />
        </button>
        <button className="p-2 bg-red-500 text-white rounded-md">
          <Trash size={20} />
        </button>
      </div>
    </div>
  );
};

export default VendorManagementTile;