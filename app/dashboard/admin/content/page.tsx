'use client';

import Link from 'next/link';
import { Edit, Trash2, Eye, Lock, Play } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { mockUsers, mockSeries } from '@/data/mock';

const admin = mockUsers.admin_1;

export default function ContentPage() {
  return (
    <DashboardLayout userRole="admin" userName={admin.name}>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">Gestión de Contenidos</h1>
        <Link href="/dashboard/admin/content/create">
          <Button variant="primary" size="lg">
            + Nuevo Contenido
          </Button>
        </Link>
      </div>

      {/* Content Table */}
      <div className="glass rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5 border-b border-white/10">
              <tr>
                <th className="px-6 py-4 text-left text-white font-semibold">Título</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Género</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Estado</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Acceso</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Episodios</th>
                <th className="px-6 py-4 text-left text-white font-semibold">Vistas</th>
                <th className="px-6 py-4 text-center text-white font-semibold">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {mockSeries.map((series) => (
                <tr key={series.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-white font-medium">{series.title}</p>
                  </td>
                  <td className="px-6 py-4 text-white/60">{series.genre.join(', ')}</td>
                  <td className="px-6 py-4">
                    <Badge variant={series.status === 'published' ? 'success' : 'warning'}>
                      {series.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={series.accessLevel === 'free' ? 'success' : 'primary'}>
                      {series.accessLevel}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-white/60">{series.episodeCount}</td>
                  <td className="px-6 py-4 text-white/60">{(series.views / 1000).toFixed(0)}K</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                        <Eye className="w-4 h-4 text-white/60" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                        <Edit className="w-4 h-4 text-white/60" />
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
