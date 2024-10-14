import React, { useState } from 'react';
import { Edit, Trash2 } from 'lucide-react';
import VendorSubCategoryUpdateForm from './VendorSubCatUpdateForm';

const SubCatTile = ({ subCat, DeleteData }) => {
  const [isEditing, setIsEditing] = useState(false);


  const handleDelete = () => {
    DeleteData(subCat._id)
    
    console.log('Delete sub-category:', subCat);
  };

  return (
    <>
      {isEditing ? (
        <VendorSubCategoryUpdateForm  subCat={subCat} onCancel={() => setIsEditing(false)} />
      ) : (
        <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold text-gray-800">{subCat.Description}</span>
            <span className="px-2 py-1 text-sm font-medium text-white bg-green-500 rounded-full">{subCat.Status}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">{subCat.MainCategory}</span>

            <button onClick={() => setIsEditing(true)} className="p-2 text-blue-500 hover:bg-blue-100 rounded-full">
              <Edit size={20} />
            </button>
            <button onClick={handleDelete} className="p-2 text-red-500 hover:bg-red-100 rounded-full">
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SubCatTile;