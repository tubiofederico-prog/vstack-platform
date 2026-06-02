'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Film,
  BarChart3,
  Users,
  Settings,
  LogOut,
  Home,
  Zap,
  User,
  TrendingUp,
  Megaphone,
} from 'lucide-react';
import clsx from 'clsx';

interface SidebarProps {
  userRole: 'user' | 'admin' | 'advertiser';
}

export const Sidebar: React.FC<SidebarProps> = ({ userRole }) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname.startsWith(href);

  const menuItems = {
    user: [
      { label: 'Inicio', href: '/dashboard/user', icon: Home },
      { label: 'Catálogo', href: '/dashboard/user/catalog', icon: Film },
      { label: 'Mis Favoritos', href: '/dashboard/user/favorites', icon: Zap },
      { label: 'Mis Compras', href: '/dashboard/user/purchases', icon: User },
      { label: 'Wallet', href: '/dashboard/user/wallet', icon: Zap },
      { label: 'Suscripción', href: '/dashboard/user/subscription', icon: BarChart3 },
    ],
    admin: [
      { label: 'Dashboard', href: '/dashboard/admin', icon: LayoutDashboard },
      { label: 'Contenidos', href: '/dashboard/admin/content', icon: Film },
      { label: 'Usuarios', href: '/dashboard/admin/users', icon: Users },
      { label: 'Analítica', href: '/dashboard/admin/analytics', icon: BarChart3 },
      { label: 'Reportes', href: '/dashboard/admin/reports', icon: TrendingUp },
      { label: 'Configuración', href: '/dashboard/admin/settings', icon: Settings },
    ],
    advertiser: [
      { label: 'Dashboard', href: '/dashboard/advertiser', icon: LayoutDashboard },
      { label: 'Campañas', href: '/dashboard/advertiser/campaigns', icon: Megaphone },
      { label: 'Reportes', href: '/dashboard/advertiser/reports', icon: BarChart3 },
      { label: 'Configuración', href: '/dashboard/advertiser/settings', icon: Settings },
    ],
  };

  const items = menuItems[userRole];

  const handleLogout = () => {
    window.location.href = '/';
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-r border-white/5 flex flex-col z-50">
      {/* Header */}
      <div className="p-6 border-b border-white/5">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
          VSTACK
        </h2>
        <p className="text-xs text-white/40 mt-1">Premium Streaming</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group',
                active
                  ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              )}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/5 space-y-2">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium text-sm">Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
};
