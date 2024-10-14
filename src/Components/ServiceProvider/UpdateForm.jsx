import React, { useState } from 'react';

const CompleteVendorDetailsForm = () => {
  const [bannerImages, setBannerImages] = useState([]);
  const [serviceImages, setServiceImages] = useState([]);

  const handleBannerImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setBannerImages(prevImages => [...prevImages, ...files]);
  };

  const handleServiceImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setServiceImages(prevImages => [...prevImages, ...files]);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Enter Vendor Details</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="serviceName" className="block text-sm font-medium text-gray-700 mb-1">Service Provider Name</label>
            <input type="text" id="serviceName" name="serviceName" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="Hotel ASHOKA" />
          </div>
          <div>
            <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
            <input type="email" id="contactEmail" name="contactEmail" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="ashokacontact@gmail.com" />
          </div>
          <div>
            <label htmlFor="websiteURL" className="block text-sm font-medium text-gray-700 mb-1">Provider website URL</label>
            <input type="url" id="websiteURL" name="websiteURL" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="https://thenagpurashok.com/" />
          </div>
          <div>
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
            <input type="tel" id="contactNumber" name="contactNumber" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="7897878787" />
          </div>
          <div>
            <label htmlFor="serviceCategory" className="block text-sm font-medium text-gray-700 mb-1">Service category</label>
            <select id="serviceCategory" name="serviceCategory" className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option>HOTELS</option>
            </select>
          </div>
          <div>
            <label htmlFor="subCategory" className="block text-sm font-medium text-gray-700 mb-1">Sub Category:</label>
            <select id="subCategory" name="subCategory" className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option>PREMIER PARTNERS</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="contentTitle" className="block text-sm font-medium text-gray-700 mb-1">Content Title</label>
          <input type="text" id="contentTitle" name="contentTitle" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="WELCOME TO HOTEL ASHOK" />
        </div>
        
        <div>
          <label htmlFor="contentDescription" className="block text-sm font-medium text-gray-700 mb-1">Content Description</label>
          <div className="border border-gray-300 rounded-md p-2">
            <div className="flex space-x-2 mb-2">
              <button className="px-2 py-1 border border-gray-300 rounded">B</button>
              <button className="px-2 py-1 border border-gray-300 rounded">I</button>
              <button className="px-2 py-1 border border-gray-300 rounded">U</button>
            </div>
            <textarea
              id="contentDescription"
              name="contentDescription"
              rows="4"
              className="w-full px-3 py-2 border-0 focus:ring-0"
              defaultValue="Hotel Ashok, a hotel in Nagpur located in the heart of the city is known for its warm hospitality and service. Persistently striving to be the best and vouching for best service in hospitality in Nagpur, we have come a long way since our inception in February 2011.

Hotel Ashok brings you the flavor and charm of nobility with suites designed specially to make our esteemed guests feel royal and grand about their stay. Family rooms to Honeymoon Suites, we have a variety of rooms under our sleeves. With multiple facilities and modern amenities at disposal, we provide a stay truly comfortable and worth cherishing.

More About Us"
            ></textarea>
          </div>
        </div>
        
        <div>
          <label htmlFor="cardTitle" className="block text-sm font-medium text-gray-700 mb-1">Card Title</label>
          <input type="text" id="cardTitle" name="cardTitle" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="FC EXCLUSIVE BENEFIT" />
        </div>
        
        <div>
          <label htmlFor="cardDescription" className="block text-sm font-medium text-gray-700 mb-1">Card Description</label>
          <div className="border border-gray-300 rounded-md p-2">
            <div className="flex space-x-2 mb-2">
              <button className="px-2 py-1 border border-gray-300 rounded">B</button>
              <button className="px-2 py-1 border border-gray-300 rounded">I</button>
              <button className="px-2 py-1 border border-gray-300 rounded">U</button>
            </div>
            <textarea
              id="cardDescription"
              name="cardDescription"
              rows="4"
              className="w-full px-3 py-2 border-0 focus:ring-0"
              defaultValue="Hotel Ashok, a hotel in Nagpur located in the heart of the city is known for its warm hospitality and service. Persistently striving to be the best and vouching for best service in hospitality in Nagpur, we have come a long way since our inception in February 2011.

Hotel Ashok brings you the flavor and charm of nobility with suites designed specially to make our esteemed guests feel royal and grand about their stay. Family rooms to Honeymoon Suites, we have a variety of rooms under our sleeves. With multiple facilities and modern amenities at disposal, we provide a stay truly comfortable and worth cherishing."
            ></textarea>
          </div>
        </div>
        
        <div>
          <label htmlFor="offer" className="block text-sm font-medium text-gray-700 mb-1">Offer</label>
          <input type="text" id="offer" name="offer" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="15% OFF ON FIRST BOOKING" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="latitude" className="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
            <input type="text" id="latitude" name="latitude" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="18.5452" />
          </div>
          <div>
            <label htmlFor="longitude" className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
            <input type="text" id="longitude" name="longitude" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="73.9357" />
          </div>
        </div>
        
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select id="status" name="status" className="w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Banner Images/Videos</label>
          <input
            type="file"
            onChange={handleBannerImageUpload}
            multiple
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
          <div className="mt-2 flex space-x-2">
            {bannerImages.map((file, index) => (
              <img key={index} src="/api/placeholder/100/75" alt={`Banner ${index + 1}`} className="w-24 h-18 object-cover rounded" />
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Service Images</label>
          <input
            type="file"
            onChange={handleServiceImageUpload}
            multiple
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
          <div className="mt-2 flex space-x-2">
            {serviceImages.map((file, index) => (
              <img key={index} src="/api/placeholder/100/75" alt={`Service ${index + 1}`} className="w-24 h-18 object-cover rounded" />
            ))}
          </div>
        </div>
        
        <div className="flex justify-end space-x-2">
          
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CompleteVendorDetailsForm;