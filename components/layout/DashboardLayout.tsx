import React from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole: 'user' | 'admin' | 'advertiser';
  userName?: string;
  userAvatar?: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  userRole,
  userName = 'Usuario',
  userAvatar = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
}) => {
  return (
    <div className="flex h-screen bg-[#0a0a0a]">
      <Sidebar userRole={userRole} />
      <div className="flex-1 flex flex-col ml-64">
        <Topbar userName={userName} userAvatar={userAvatar} />
        <main className="flex-1 overflow-auto pt-20 pb-8">
          <div className="px-8 max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
