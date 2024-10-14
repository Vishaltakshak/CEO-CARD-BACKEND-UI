import React from 'react';
import { Menu, RotateCcw } from 'lucide-react';

export const Header=()=> {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-[#3088B1] text-white w-full "style={{position:'absolute'}}>
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold">CEO Card</h1>
        <Menu className="w-6 h-6 cursor-pointer" />
      </div>
      
      <div className="flex items-center gap-4">
        <RotateCcw className="w-6 h-6 cursor-pointer" />
        <div className="flex items-center gap-2">
          <img 
            src="/api/placeholder/32/32" 
            alt="User avatar" 
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <span className="font-medium">Subadmin</span>
        </div>
      </div>
    </header>
  );
}