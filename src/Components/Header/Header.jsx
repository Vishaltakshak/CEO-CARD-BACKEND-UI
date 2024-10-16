import React, { useEffect, useState } from 'react';
import { Menu, RotateCcw, User, Phone, Mail, LogOut, Lock } from 'lucide-react';
import useApi from '../../useApi/useApi';

export const Header = () => {
  const [showForm, setShowForm] = useState(false);
  const[User, setUser]=useState([]);
  const{fetchData}=useApi();
  useEffect(()=>{
    getUser()
  },[])
  const getUser=async()=>{
    try {
      const UserData= await fetchData('user/view')
      setUser(UserData.data.User)
      
    } catch (error) {
      console.log(error)
      
    }
  }

  const toggleForm = () => setShowForm(!showForm);

  const handleSignOut = () => {
    // Implement sign out logic here
    console.log('Signing out...');
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-[#3088B1] text-white w-full absolute">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold">CEO Card</h1>
        <Menu className="w-6 h-6 cursor-pointer" />
      </div>
      
      <div className="flex items-center gap-4 relative">
        <RotateCcw className="w-6 h-6 cursor-pointer" />
        <div className="flex items-center gap-2 cursor-pointer" onClick={toggleForm}>
        <User className="w-5 h-5 text-gray-400 mr-2" />
          <span className="font-medium">Subadmin</span>
        </div>
        
        {showForm && (
          <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-10">
            <form className="p-4 space-y-4">
              <div className="flex items-center border-b border-gray-200 pb-2">
                <User className="w-5 h-5 text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  defaultValue="Subadmin"
                  className="w-full text-gray-700 focus:outline-none"
                />
              </div>
              <div className="flex items-center border-b border-gray-200 pb-2">
                <Phone className="w-5 h-5 text-gray-400 mr-2" />
                <input 
                  type="tel" 
                  placeholder="Mobile Number" 
                  defaultValue="8888888888"
                  className="w-full text-gray-700 focus:outline-none"
                />
              </div>
              <div className="flex items-center border-b border-gray-200 pb-2">
                <Mail className="w-5 h-5 text-gray-400 mr-2" />
                <input 
                  type="email" 
                  placeholder="Email" 
                  defaultValue="subadmin@ceocard.com"
                  className="w-full text-gray-700 focus:outline-none"
                />
              </div>
              
              <hr className="border-t border-gray-200" />
              
              <div className="text-gray-700 font-medium">Change Password</div>
              
              <div className="flex items-center border-b border-gray-200 pb-2">
                <Lock className="w-5 h-5 text-gray-400 mr-2" />
                <input 
                  type="password" 
                  placeholder="New Password" 
                  className="w-full text-gray-700 focus:outline-none"
                />
              </div>
              <div className="flex items-center border-b border-gray-200 pb-2">
                <Lock className="w-5 h-5 text-gray-400 mr-2" />
                <input 
                  type="password" 
                  placeholder="Confirm Password" 
                  className="w-full text-gray-700 focus:outline-none"
                />
              </div>
              
              <div className="flex justify-between">
                <button 
                  type="submit" 
                  className="px-2 py-2 bg-[#3088B1] text-white rounded hover:bg-[#2a7a9d] transition-colors"
                >
                  Submit
                </button>
                <button 
                  type="button" 
                  onClick={handleSignOut}
                  className="px-2 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors flex items-center"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}