'use client';

import Link from 'next/link';
import { Plus, Edit, Pause, Play, Trash2 } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { mockUsers, mockCampaigns } from '@/data/mock';

const advertiser = mockUsers.advertiser_1;

export default function CampaignsPage() {
  return (
    <DashboardLayout userRole="advertiser" userName={advertiser.name}>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">Mis Campañas</h1>
        <Link href="/dashboard/advertiser/campaigns/create">
          <Button variant="primary" size="lg" className="gap-2">
            <Plus className="w-5 h-5" /> Nueva Campaña
          </Button>
        </Link>
      </div>

      {/* Campaigns Grid */}
      <div className="space-y-6">
        {mockCampaigns.map((campaign) => (
          <div key={campaign.id} className="glass p-6 rounded-xl hover:glass-dark transition-all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Campaign Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-white">{campaign.name}</h3>
                  <Badge variant={campaign.status === 'active' ? 'success' : campaign.status === 'draft' ? 'warning' : 'neutral'}>
                    {campaign.status === 'active' ? 'Activa' : campaign.status === 'draft' ? 'Borrador' : 'Completada'}
                  </Badge>
                </div>
                <p className="text-white/70 text-sm mb-4">{campaign.format} • {campaign.startDate} al {campaign.endDate}</p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div>
                    <p className="text-white/60 text-xs mb-1">Impresiones</p>
                    <p className="text-white font-semibold">{(campaign.impressions / 1000).toFixed(0)}K</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1">Clicks</p>
                    <p className="text-white font-semibold">{(campaign.clicks / 1000).toFixed(0)}K</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1">CTR</p>
                    <p className="text-white font-semibold">{campaign.ctr.toFixed(2)}%</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1">Presupuesto</p>
                    <p className="text-white font-semibold">${(campaign.budget / 1000).toFixed(0)}K</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1">Gastado</p>
                    <p className="text-white font-semibold">${(campaign.spent / 1000).toFixed(0)}K</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4 w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-red-500" style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}></div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2 min-w-max">
                <Link href={`/dashboard/advertiser/campaigns/${campaign.id}`}>
                  <Button variant="secondary" size="md" className="w-full gap-2">
                    Ver Detalles
                  </Button>
                </Link>
                <Button variant="ghost" size="md" className="w-full gap-2">
                  <Edit className="w-4 h-4" /> Editar
                </Button>
                {campaign.status === 'active' ? (
                  <Button variant="ghost" size="md" className="w-full gap-2">
                    <Pause className="w-4 h-4" /> Pausar
                  </Button>
                ) : campaign.status === 'draft' ? (
                  <Button variant="ghost" size="md" className="w-full gap-2">
                    <Play className="w-4 h-4" /> Activar
                  </Button>
                ) : null}
                <Button variant="ghost" size="md" className="w-full gap-2 text-red-400 hover:text-red-300">
                  <Trash2 className="w-4 h-4" /> Eliminar
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {mockCampaigns.length === 0 && (
        <div className="glass p-12 rounded-xl text-center">
          <p className="text-white/60 text-lg mb-4">No tienes campañas aún</p>
          <Link href="/dashboard/advertiser/campaigns/create">
            <Button variant="primary" size="lg">
              Crear tu primera campaña
            </Button>
          </Link>
        </div>
      )}
    </DashboardLayout>
  );
}
