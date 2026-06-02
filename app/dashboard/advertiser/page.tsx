'use client';

import Link from 'next/link';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Megaphone, DollarSign } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { Button } from '@/components/ui/Button';
import { mockUsers, mockCampaigns, monthlyData } from '@/data/mock';

const advertiser = mockUsers.advertiser_1;

const campaignPerformance = [
  { date: 'Ene', impressions: 45000, clicks: 1200, conversions: 180 },
  { date: 'Feb', impressions: 58000, clicks: 1560, conversions: 234 },
  { date: 'Mar', impressions: 72000, clicks: 1920, conversions: 288 },
  { date: 'Abr', impressions: 89000, clicks: 2360, conversions: 354 },
  { date: 'May', impressions: 115000, clicks: 3050, conversions: 457 },
  { date: 'Jun', impressions: 142000, clicks: 3760, conversions: 564 },
];

export default function AdvertiserDashboard() {
  const totalBudget = mockCampaigns.reduce((sum, c) => sum + c.budget, 0);
  const totalSpent = mockCampaigns.reduce((sum, c) => sum + c.spent, 0);
  const totalImpressions = mockCampaigns.reduce((sum, c) => sum + c.impressions, 0);
  const totalClicks = mockCampaigns.reduce((sum, c) => sum + c.clicks, 0);

  return (
    <DashboardLayout userRole="advertiser" userName={advertiser.name}>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">Dashboard de Anunciante</h1>
        <Link href="/dashboard/advertiser/campaigns/create">
          <Button variant="primary" size="lg">
            + Nueva Campaña
          </Button>
        </Link>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard label="Presupuesto Total" value={`$${(totalBudget / 1000).toFixed(0)}K`} icon={<DollarSign className="w-6 h-6" />} />
        <StatCard label="Gasto Acumulado" value={`$${(totalSpent / 1000).toFixed(0)}K`} change={Math.round((totalSpent / totalBudget) * 100)} status="neutral" icon={<TrendingUp className="w-6 h-6" />} />
        <StatCard label="Impresiones" value={`${(totalImpressions / 1000).toFixed(0)}K`} change={18.5} status="up" icon={<Users className="w-6 h-6" />} />
        <StatCard label="CTR Promedio" value="3.4%" change={5.2} status="up" icon={<Megaphone className="w-6 h-6" />} />
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Campaign Performance */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-white mb-4">Rendimiento de Campañas</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={campaignPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="date" stroke="rgba(255,255,255,0.4)" />
              <YAxis stroke="rgba(255,255,255,0.4)" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '8px', color: '#fff' }} />
              <Line type="monotone" dataKey="impressions" stroke="#e50914" strokeWidth={2} />
              <Line type="monotone" dataKey="clicks" stroke="#7c3aed" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Budget Distribution */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-white mb-4">Gasto por Campaña</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockCampaigns}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.4)" angle={-45} textAnchor="end" height={100} />
              <YAxis stroke="rgba(255,255,255,0.4)" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '8px', color: '#fff' }} />
              <Bar dataKey="spent" fill="#e50914" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Active Campaigns */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Campañas Activas</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {mockCampaigns.filter((c) => c.status === 'active').map((campaign) => (
            <div key={campaign.id} className="glass p-6 rounded-xl hover:glass-dark transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{campaign.name}</h3>
                  <p className="text-white/60 text-sm">{campaign.format}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-300">
                  Activa
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-white/60 text-sm mb-1">Impresiones</p>
                  <p className="text-lg font-semibold text-white">{(campaign.impressions / 1000).toFixed(0)}K</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">CTR</p>
                  <p className="text-lg font-semibold text-white">{campaign.ctr.toFixed(2)}%</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Presupuesto</p>
                  <p className="text-lg font-semibold text-white">${(campaign.budget / 1000).toFixed(0)}K</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Gastado</p>
                  <p className="text-lg font-semibold text-white">${(campaign.spent / 1000).toFixed(0)}K</p>
                </div>
              </div>

              <div className="w-full bg-white/10 rounded-full h-2 mb-4 overflow-hidden">
                <div className="h-full bg-red-500" style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}></div>
              </div>

              <Link href={`/dashboard/advertiser/campaigns/${campaign.id}`}>
                <Button variant="secondary" size="sm" className="w-full">
                  Ver Detalles
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Completed Campaigns */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Campañas Completadas</h2>
        <div className="glass rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-semibold">Campaña</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Impresiones</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Clicks</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">CTR</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Inversión</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">ROI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {mockCampaigns.filter((c) => c.status === 'completed').map((campaign) => (
                  <tr key={campaign.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-white font-medium">{campaign.name}</p>
                    </td>
                    <td className="px-6 py-4 text-white/60">{(campaign.impressions / 1000).toFixed(0)}K</td>
                    <td className="px-6 py-4 text-white/60">{(campaign.clicks / 1000).toFixed(0)}K</td>
                    <td className="px-6 py-4 text-white/60">{campaign.ctr.toFixed(2)}%</td>
                    <td className="px-6 py-4 text-white/60">${(campaign.budget / 1000).toFixed(0)}K</td>
                    <td className="px-6 py-4">
                      <span className="text-green-400 font-semibold">+245%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
