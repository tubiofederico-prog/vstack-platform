'use client';

import React from 'react';
import { Bell, Search, MessageSquare } from 'lucide-react';

interface TopbarProps {
  userName?: string;
  userAvatar?: string;
}

export const Topbar: React.FC<TopbarProps> = ({
  userName = 'Usuario',
  userAvatar = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
}) => {
  return (
    <div className="fixed top-0 left-64 right-0 h-16 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-transparent border-b border-white/5 flex items-center justify-between px-8 z-40">
      {/* Search */}
      <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-lg px-4 py-2 flex-1 max-w-96">
        <Search className="w-4 h-4 text-white/40" />
        <input
          type="text"
          placeholder="Buscar..."
          className="bg-transparent border-0 outline-none text-white placeholder-white/40 ml-2 flex-1 text-sm"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg hover:bg-white/5 transition-all duration-200 relative">
          <Bell className="w-5 h-5 text-white/60" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="p-2 rounded-lg hover:bg-white/5 transition-all duration-200">
          <MessageSquare className="w-5 h-5 text-white/60" />
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-white/10">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-white">{userName}</p>
            <p className="text-xs text-white/40">Premium</p>
          </div>
          <img
            src={userAvatar}
            alt={userName}
            className="w-10 h-10 rounded-full object-cover border border-red-500/30"
          />
        </div>
      </div>
    </div>
  );
};
