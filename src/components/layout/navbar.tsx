import React from 'react';
import { 
  Bell, 
  Settings, 
  Gift, 
  MessageCircle, 
  Plus,
  LucideIcon 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface NavIconProps {
  icon: LucideIcon;
  bgColor: string;
  textColor: string;
  notification?: number;
}

const NavIcon: React.FC<NavIconProps> = ({ 
  icon: Icon, 
  bgColor, 
  textColor, 
  notification 
}) => (
  <div className="relative">
    <div className={`
      flex items-center justify-center 
      p-3 rounded-full 
      ${bgColor} ${textColor} 
      cursor-pointer 
      hover:opacity-80
    `}>
      <Icon size={24} />
    </div>
    {notification && notification > 0 && (
      <Badge 
        variant="destructive" 
        className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs"
      >
        {notification}
      </Badge>
    )}
  </div>
);

export default function Navbar() {
  const navIcons = [
    { 
      icon: Bell, 
      bgColor: 'bg-blue-100', 
      textColor: 'text-blue-600',
      notification: 3 
    },
    { 
      icon: Settings, 
      bgColor: 'bg-red-100', 
      textColor: 'text-red-600' 
    },
    { 
      icon: Gift, 
      bgColor: 'bg-green-100', 
      textColor: 'text-green-600',
      notification: 1 
    },
    { 
      icon: MessageCircle, 
      bgColor: 'bg-pink-100', 
      textColor: 'text-pink-600',
      notification: 2 
    }
  ];

  return (
    <nav className="fixed top-0 left-24 right-0 flex items-center h-[73px] bg-white shadow-sm px-6 border-b">
      <div className="flex items-center justify-between w-full">
        <div className="flex space-x-4 mx-auto">
          {navIcons.map((icon, index) => (
            <NavIcon 
              key={index} 
              icon={icon.icon} 
              bgColor={icon.bgColor} 
              textColor={icon.textColor}
              notification={icon.notification}
            />
          ))}
        </div>
        <div>
          {/* Desktop Button */}
          <button className="
            hidden 
            md:flex 
            items-center 
            bg-blue-500 
            text-white 
            px-5 
            py-3 
            rounded-full 
            hover:bg-blue-600 
            text-base 
            font-medium
          ">
            <Plus size={24} className="mr-2" /> 
            Create Merchant
          </button>

          {/* Mobile Button */}
          <button className="
            md:hidden 
            flex 
            items-center 
            justify-center
            bg-blue-500 
            text-white 
            w-16 
            h-16 
            rounded-full 
            hover:bg-blue-600
            shadow-lg
            active:scale-95
            transition-all
          ">
            <Plus size={36} />
          </button>
        </div>
      </div>
    </nav>
  );
}