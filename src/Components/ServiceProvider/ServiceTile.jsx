import React from 'react';
import { Edit, Trash2 } from 'lucide-react';

const ServiceTile = ({service}) => {
 
  const isActive=()=>{
    const status= service.ProviderStatus
    if(status==="Active"){
      return true
    }
    else{
      return false;
    }
  }
  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm w-full">
      <div className="flex items-center space-x-6">
        <span className="text-lg font-semibold text-gray-800 whitespace-nowrap">{service.ProviderName}</span>
        <span className="text-sm text-gray-600 whitespace-nowrap">{service.ServiceCatergory}</span>
        <span className="text-sm text-gray-600 whitespace-nowrap">{service.SubCategory}</span>
      </div>
      
      <div className="flex items-center space-x-6">
        <img 
          src={service.BannerIMG} 
          
          className="w-18 h-18 object-cover rounded"
        />
        <a 
          href="https://thenagpurashok.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline truncate max-w-[200px]"
        >
          {service.WebsiteURl}
        </a>
        <span className="px-2 py-1 text-sm font-medium text-white bg-green-100 rounded-full whitespace-nowrap">
        <div className="flex-shrink-0 mx-2">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {isActive ? 'Active' : 'InActive'}
        </span>
      </div>
        </span>
        <button className="p-2 text-blue-500 hover:bg-blue-100 rounded-full">
          <Edit size={20} />
        </button>
        <button className="p-2 text-red-500 hover:bg-red-100 rounded-full">
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default ServiceTile;