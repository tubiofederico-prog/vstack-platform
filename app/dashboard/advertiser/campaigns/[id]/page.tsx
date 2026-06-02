'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Eye, MousePointer, TrendingUp, DollarSign, Edit, Pause, Download } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { mockUsers, mockCampaigns } from '@/data/mock';

const advertiser = mockUsers.advertiser_1;

const campaignPerformance = [
  { day: 'Lun', impressions: 45000, clicks: 1200, conversions: 180 },
  { day: 'Mar', impressions: 52000, clicks: 1390, conversions: 208 },
  { day: 'Mié', impressions: 48000, clicks: 1280, conversions: 192 },
  { day: 'Jue', impressions: 61000, clicks: 1620, conversions: 243 },
  { day: 'Vie', impressions: 55000, clicks: 1460, conversions: 219 },
  { day: 'Sab', impressions: 58000, clicks: 1540, conversions: 231 },
  { day: 'Dom', impressions: 40000, clicks: 1060, conversions: 159 },
];

export default function CampaignDetailPage() {
  const params = useParams();
  const campaignId = params.id as string;
  const campaign = mockCampaigns.find((c) => c.id === campaignId) || mockCampaigns[0];

  const roi = ((campaign.budget * 2.5) / campaign.spent * 100).toFixed(0);

  return (
    <DashboardLayout userRole="advertiser" userName={advertiser.name}>
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link href="/dashboard/advertiser">
            <button className="text-red-500 hover:text-red-300 transition-colors mb-4">
              ← Volver
            </button>
          </Link>
          <h1 className="text-3xl font-bold text-white">{campaign.name}</h1>
          <p className="text-white/60 mt-2">Campaña de {campaign.format}</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" size="lg" className="gap-2">
            <Edit className="w-5 h-5" /> Editar
          </Button>
          <Button variant="ghost" size="lg" className="gap-2">
            <Pause className="w-5 h-5" /> Pausar
          </Button>
        </div>
      </div>

      {/* Status */}
      <div className="glass p-6 rounded-xl mb-8 flex items-center justify-between">
        <div>
          <p className="text-white/60 text-sm mb-1">Estado de la Campaña</p>
          <p className="text-xl font-bold text-white">{campaign.status === 'active' ? 'Activa' : 'Completada'}</p>
        </div>
        <Badge variant={campaign.status === 'active' ? 'success' : 'neutral'}>
          {campaign.status === 'active' ? 'En vivo' : 'Finalizada'}
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard
          label="Impresiones"
          value={`${(campaign.impressions / 1000).toFixed(0)}K`}
          icon={<Eye className="w-6 h-6" />}
        />
        <StatCard
          label="Clicks"
          value={`${(campaign.clicks / 1000).toFixed(0)}K`}
          change={campaign.ctr}
          status="up"
          icon={<MousePointer className="w-6 h-6" />}
        />
        <StatCard
          label="Gasto Acumulado"
          value={`$${(campaign.spent / 1000).toFixed(0)}K`}
          icon={<DollarSign className="w-6 h-6" />}
        />
        <StatCard
          label="ROI"
          value={`${roi}%`}
          change={12.5}
          status="up"
          icon={<TrendingUp className="w-6 h-6" />}
        />
      </div>

      {/* Performance Chart */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-white mb-4">Rendimiento Diario</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={campaignPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="day" stroke="rgba(255,255,255,0.4)" />
              <YAxis stroke="rgba(255,255,255,0.4)" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '8px', color: '#fff' }} />
              <Line type="monotone" dataKey="impressions" stroke="#e50914" strokeWidth={2} />
              <Line type="monotone" dataKey="clicks" stroke="#7c3aed" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-white mb-4">Conversiones</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={campaignPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="day" stroke="rgba(255,255,255,0.4)" />
              <YAxis stroke="rgba(255,255,255,0.4)" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '8px', color: '#fff' }} />
              <Bar dataKey="conversions" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Details */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="glass p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-bold text-white mb-6">Detalles de la Campaña</h3>
          {[
            { label: 'Formato', value: campaign.format },
            { label: 'Duración', value: `${campaign.startDate} a ${campaign.endDate}` },
            { label: 'Presupuesto', value: `$${(campaign.budget / 1000).toFixed(0)}K` },
            { label: 'Audiencia Objetivo', value: campaign.targetAudience || 'General' },
            { label: 'CTR Promedio', value: `${campaign.ctr.toFixed(2)}%` },
            { label: 'Tasa de Completitud', value: `${campaign.completionRate.toFixed(1)}%` },
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between">
              <span className="text-white/60">{item.label}</span>
              <span className="text-white font-semibold">{item.value}</span>
            </div>
          ))}
        </div>

        <div className="glass p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-bold text-white mb-6">Análisis Financiero</h3>
          {[
            { label: 'Presupuesto Original', value: `$${(campaign.budget / 1000).toFixed(0)}K` },
            { label: 'Gastado', value: `$${(campaign.spent / 1000).toFixed(0)}K` },
            { label: 'Disponible', value: `$${((campaign.budget - campaign.spent) / 1000).toFixed(0)}K` },
            { label: 'Costo por Click', value: `$${(campaign.spent / campaign.clicks).toFixed(2)}` },
            { label: 'Costo por Impresión', value: `$${((campaign.spent / campaign.impressions) * 1000).toFixed(3)}` },
            { label: 'ROI Estimado', value: `${roi}%` },
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between">
              <span className="text-white/60">{item.label}</span>
              <span className="text-white font-semibold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <Button variant="primary" size="lg" className="gap-2">
          <Download className="w-5 h-5" /> Descargar Reporte
        </Button>
        <Link href="/dashboard/advertiser">
          <Button variant="secondary" size="lg">
            Volver al Dashboard
          </Button>
        </Link>
      </div>
    </DashboardLayout>
  );
}
