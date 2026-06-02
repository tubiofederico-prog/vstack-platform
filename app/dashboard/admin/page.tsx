'use client';

import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, Film, TrendingUp, DollarSign, Eye } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { mockUsers, mockAnalytics, mockDashboardMetrics, monthlyData, revenueBreakdown, genreDistribution } from '@/data/mock';

const admin = mockUsers.admin_1;

export default function AdminDashboard() {
  return (
    <DashboardLayout userRole="admin" userName={admin.name}>
      <h1 className="text-3xl font-bold text-white mb-8">Dashboard Administrativo</h1>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <StatCard label="Usuarios Activos" value={`${(mockAnalytics.activeUsers / 1000).toFixed(1)}K`} change={12.5} status="up" icon={<Users className="w-6 h-6" />} />
        <StatCard label="Reproducciones Totales" value={`${(mockAnalytics.totalViews / 1000000).toFixed(1)}M`} change={8.3} status="up" icon={<Eye className="w-6 h-6" />} />
        <StatCard label="Ingresos Mensuales" value={`$${(mockAnalytics.totalRevenue / 1000).toFixed(0)}K`} change={15.8} status="up" icon={<DollarSign className="w-6 h-6" />} />
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Growth Chart */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-white mb-4">Crecimiento Mensual</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" stroke="rgba(255,255,255,0.4)" />
              <YAxis stroke="rgba(255,255,255,0.4)" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '8px', color: '#fff' }} />
              <Line type="monotone" dataKey="users" stroke="#e50914" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="views" stroke="#7c3aed" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Breakdown */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-white mb-4">Ingresos por Fuente</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueBreakdown}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.4)" />
              <YAxis stroke="rgba(255,255,255,0.4)" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '8px', color: '#fff' }} />
              <Bar dataKey="value" fill="#e50914" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Genre Distribution */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-white mb-4">Distribución por Género</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={genreDistribution} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
                {genreDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={['#e50914', '#7c3aed', '#10b981', '#f59e0b', '#ef4444'][index % 5]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '8px', color: '#fff' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Series Performance */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-white mb-4">Top Series</h3>
          <div className="space-y-3">
            {[
              { name: 'Cuánto Cuesta', views: 234567, retention: 75.3 },
              { name: 'El Arte de Cocinar', views: 198765, retention: 82.1 },
              { name: 'Viajeros del Tiempo', views: 176543, retention: 79.8 },
              { name: 'Fitness Challenge', views: 156789, retention: 71.2 },
            ].map((series, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">{series.name}</p>
                  <div className="h-1 bg-white/10 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-red-500" style={{ width: `${(series.retention / 100) * 100}%` }}></div>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="text-white font-semibold text-sm">{(series.views / 1000).toFixed(0)}K</p>
                  <p className="text-white/60 text-xs">{series.retention}% retención</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Crear Contenido', icon: Film, href: '/dashboard/admin/content/create' },
          { label: 'Gestionar Usuarios', icon: Users, href: '/dashboard/admin/users' },
          { label: 'Ver Reportes', icon: TrendingUp, href: '/dashboard/admin/reports' },
          { label: 'Configuración', icon: DollarSign, href: '/dashboard/admin/settings' },
        ].map((action, idx) => {
          const Icon = action.icon;
          return (
            <a
              key={idx}
              href={action.href}
              className="glass p-6 rounded-xl hover:glass-dark transition-all cursor-pointer text-center"
            >
              <Icon className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <p className="text-white font-semibold">{action.label}</p>
            </a>
          );
        })}
      </section>
    </DashboardLayout>
  );
}
