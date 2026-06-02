'use client';

import { Shield, Eye, Trash2 } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { mockUsers, mockAdminUsers } from '@/data/mock';

const admin = mockUsers.admin_1;

export default function UsersPage() {
  return (
    <DashboardLayout userRole="admin" userName={admin.name}>
      <h1 className="text-3xl font-bold text-white mb-8">Gestión de Usuarios</h1>

      <div className="glass rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5 border-b border-white/10">
              <tr>
                <th className="px-6 py-4 text-left text-white font-semibold">Nombre</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Email</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Suscripción</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Monedas</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Registro</th>
                <th className="px-6 py-4 text-center text-white font-semibold">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {mockAdminUsers.map((user) => (
                <tr key={user.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-white font-medium">{user.name}</p>
                  </td>
                  <td className="px-6 py-4 text-white/60">{user.email}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.subscription?.status === 'active'
                          ? 'bg-green-500/20 text-green-300'
                          : 'bg-red-500/20 text-red-300'
                      }`}
                    >
                      {user.subscription?.status === 'active' ? 'Activa' : 'Vencida'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white/60">{user.coins}</td>
                  <td className="px-6 py-4 text-white/60">{user.createdAt}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                        <Eye className="w-4 h-4 text-white/60" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                        <Shield className="w-4 h-4 text-white/60" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
