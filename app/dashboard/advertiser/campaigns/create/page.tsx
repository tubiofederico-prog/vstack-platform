'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/Button';
import { mockUsers } from '@/data/mock';

const advertiser = mockUsers.advertiser_1;

export default function CreateCampaignPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard/advertiser');
  };

  return (
    <DashboardLayout userRole="advertiser" userName={advertiser.name}>
      <div className="mb-8">
        <Link href="/dashboard/advertiser">
          <button className="text-red-500 hover:text-red-300 transition-colors mb-4">
            ← Volver
          </button>
        </Link>
        <h1 className="text-3xl font-bold text-white">Crear Nueva Campaña</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl">
        {/* Campaign Details */}
        <div className="glass p-8 rounded-xl space-y-6">
          <h2 className="text-xl font-bold text-white">Detalles de la Campaña</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Nombre de Campaña</label>
              <input
                type="text"
                placeholder="Ej: Verano 2024"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Formato de Anuncio</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500">
                <option>Video</option>
                <option>Banner</option>
                <option>Recompensado</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Descripción</label>
            <textarea
              placeholder="Describe tu campaña"
              rows={3}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-red-500 resize-none"
            />
          </div>
        </div>

        {/* Budget & Schedule */}
        <div className="glass p-8 rounded-xl space-y-6">
          <h2 className="text-xl font-bold text-white">Presupuesto y Cronograma</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Presupuesto Total (USD)</label>
              <input
                type="number"
                placeholder="10000"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Presupuesto Diario (USD)</label>
              <input
                type="number"
                placeholder="500"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-red-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Fecha de Inicio</label>
              <input
                type="date"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Fecha de Término</label>
              <input
                type="date"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500"
              />
            </div>
          </div>
        </div>

        {/* Targeting */}
        <div className="glass p-8 rounded-xl space-y-6">
          <h2 className="text-xl font-bold text-white">Audiencia Objetivo</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Edad Mínima</label>
              <input
                type="number"
                placeholder="18"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Edad Máxima</label>
              <input
                type="number"
                placeholder="65"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-red-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Géneros de Contenido</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Documentales', 'Educativo', 'Acción', 'Romance', 'Comedia', 'Suspenso', 'Deportes', 'Lifestyle'].map((genre) => (
                <label key={genre} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-white text-sm">{genre}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <Button type="submit" variant="primary" size="lg">
            Crear Campaña
          </Button>
          <Link href="/dashboard/advertiser">
            <Button type="button" variant="secondary" size="lg">
              Cancelar
            </Button>
          </Link>
        </div>
      </form>
    </DashboardLayout>
  );
}
