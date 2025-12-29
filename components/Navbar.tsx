import React from 'react';
import { Search, Users, MessageSquare, User } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'discover', label: 'Discover', icon: Search },
    { id: 'activities', label: 'Activities', icon: Users },
    { id: 'inbox', label: 'Inbox', icon: MessageSquare },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-black h-20 flex items-center justify-around z-50 pb-2">
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        const Icon = item.icon;
        
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${isActive ? 'bg-brand' : 'hover:bg-gray-100'}`}
          >
            <div className={`p-1 rounded-full ${isActive ? 'bg-black text-brand' : 'text-black'}`}>
               <Icon size={24} strokeWidth={2.5} />
            </div>
            <span className="text-[10px] font-bold uppercase mt-1 tracking-wider">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};