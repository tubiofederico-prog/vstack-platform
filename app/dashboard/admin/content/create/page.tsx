'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Upload } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/Button';
import { mockUsers } from '@/data/mock';

const admin = mockUsers.admin_1;

export default function CreateContentPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard/admin/content');
  };

  return (
    <DashboardLayout userRole="admin" userName={admin.name}>
      <div className="mb-8">
        <Link href="/dashboard/admin/content">
          <button className="text-red-500 hover:text-red-300 transition-colors mb-4">
            ← Volver
          </button>
        </Link>
        <h1 className="text-3xl font-bold text-white">Crear Nuevo Contenido</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl">
        {/* Basic Info */}
        <div className="glass p-8 rounded-xl space-y-6">
          <h2 className="text-xl font-bold text-white">Información Básica</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Título</label>
              <input
                type="text"
                placeholder="Título de la serie"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Duración (minutos)</label>
              <input
                type="number"
                placeholder="15"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-red-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Descripción</label>
            <textarea
              placeholder="Describe tu contenido"
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-red-500 resize-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Género</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500">
                <option>Documentales</option>
                <option>Educativo</option>
                <option>Ciencia Ficción</option>
                <option>Acción</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Tipo de Acceso</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500">
                <option>Gratis</option>
                <option>Premium</option>
                <option>Monedas</option>
              </select>
            </div>
          </div>
        </div>

        {/* Media */}
        <div className="glass p-8 rounded-xl space-y-6">
          <h2 className="text-xl font-bold text-white">Multimedia</h2>

          <div>
            <label className="block text-sm font-medium text-white mb-3">Portada (Poster)</label>
            <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-red-400 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 text-white/60 mx-auto mb-3" />
              <p className="text-white font-medium mb-1">Arrastra una imagen o haz clic</p>
              <p className="text-white/60 text-sm">JPG, PNG (1000x1500px máximo)</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-3">Video Principal</label>
            <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-red-400 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 text-white/60 mx-auto mb-3" />
              <p className="text-white font-medium mb-1">Arrastra un video o haz clic</p>
              <p className="text-white/60 text-sm">MP4, WebM (máximo 5GB)</p>
            </div>
          </div>
        </div>

        {/* Episodes */}
        <div className="glass p-8 rounded-xl space-y-6">
          <h2 className="text-xl font-bold text-white">Episodios</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Cantidad de Episodios</label>
              <input
                type="number"
                placeholder="10"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Lanzamiento</label>
              <input
                type="date"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500"
              />
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="glass p-8 rounded-xl space-y-6">
          <h2 className="text-xl font-bold text-white">Configuración</h2>

          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-white font-medium">Destacar en homepage</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span className="text-white font-medium">Permitir descargas</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span className="text-white font-medium">Contenido solo para +18</span>
            </label>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <Button type="submit" variant="primary" size="lg">
            Crear Contenido
          </Button>
          <Link href="/dashboard/admin/content">
            <Button type="button" variant="secondary" size="lg">
              Cancelar
            </Button>
          </Link>
        </div>
      </form>
    </DashboardLayout>
  );
}
