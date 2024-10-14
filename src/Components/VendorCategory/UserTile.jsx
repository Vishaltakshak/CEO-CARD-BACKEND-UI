import { useState } from 'react';
import { RotateCcw, Pencil, Trash2 } from 'lucide-react';
import { UpdateForm } from './UpdateForm';

export const UserTile = ({ user, onUpdate }) => {
  console.log(user._id)
  const [active, setActive] = useState(0);

  const toggleUpdateForm = () => {
    setActive(active === 1 ? 0 : 1);
  };

  const handleUpdate = (updatedUser) => {
    onUpdate(updatedUser);
    toggleUpdateForm();
  };

  return (
    <div className="flex flex-col w-full">
      {active === 0 ? (
        <div className="flex items-center px-2 py-4 bg-white border-b w-full">
          <div className="w-1/6">
            <span className="text-gray-800">{user.Name || 'no name'}</span>
          </div>
          <div className="w-1/4">
            <span className="text-gray-600">{user.Mail}</span>
          </div>
          <div className="w-1/6">
            <span className="text-gray-600">{user.MobileNumber}</span>
          </div>
          <div className="w-1/12">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <img src="/api/placeholder/48/48" alt="Profile" className="w-8 h-8" />
            </div>
          </div>
          <div className="flex w-1/4">
            <span className="text-gray-600 mr-2">{user.Role}</span>
            <span className="bg-orange-500 text-white w-24 py-1 rounded-md text-sm">
              {user.Status || 'Unapproved'}
            </span>
          </div>
          <div className="w-1/6 flex items-center gap-2">
            <div className="flex gap-2">
              <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                <RotateCcw className="w-3 h-3" />
              </button>
              <button
                className="p-2 bg-cyan-500 text-white rounded hover:bg-cyan-600"
                onClick={toggleUpdateForm}
              >
                <Pencil className="w-3 h-3" />
              </button>
              <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <UpdateForm userId={user._id} onUpdate={handleUpdate} active={active} setActive={setActive}/>
      )}
    </div>
  );
};