'use client';

import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, Eye, TrendingUp, Clock } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { mockUsers, mockAnalytics, monthlyData, genreDistribution, mockContentMetrics } from '@/data/mock';

const admin = mockUsers.admin_1;

export default function AnalyticsPage() {
  return (
    <DashboardLayout userRole="admin" userName={admin.name}>
      <h1 className="text-3xl font-bold text-white mb-8">Analítica Detallada</h1>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard
          label="Usuarios Totales"
          value={`${(mockAnalytics.totalUsers / 1000).toFixed(0)}K`}
          change={8.2}
          status="up"
          icon={<Users className="w-6 h-6" />}
        />
        <StatCard
          label="Reproducciones"
          value={`${(mockAnalytics.totalViews / 1000000).toFixed(1)}M`}
          change={12.5}
          status="up"
          icon={<Eye className="w-6 h-6" />}
        />
        <StatCard
          label="Tiempo Promedio Sesión"
          value={`${mockAnalytics.avgSessionDuration}m`}
          change={-3.1}
          status="down"
          icon={<Clock className="w-6 h-6" />}
        />
        <StatCard
          label="Tasa de Retención"
          value={`${mockAnalytics.retentionRate}%`}
          change={2.3}
          status="up"
          icon={<TrendingUp className="w-6 h-6" />}
        />
      </div>

      {/* Detailed Charts */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* User Growth */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-white mb-4">Crecimiento de Usuarios</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" stroke="rgba(255,255,255,0.4)" />
              <YAxis stroke="rgba(255,255,255,0.4)" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '8px', color: '#fff' }} />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#e50914" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Genre Distribution */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-white mb-4">Consumo por Género</h3>
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

        {/* Views vs Revenue */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-white mb-4">Views vs Ingresos</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" stroke="rgba(255,255,255,0.4)" />
              <YAxis stroke="rgba(255,255,255,0.4)" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '8px', color: '#fff' }} />
              <Legend />
              <Bar dataKey="views" fill="#e50914" />
              <Bar dataKey="revenue" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Content Performance */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-white mb-4">Top Contenidos por Retención</h3>
          <div className="space-y-4">
            {mockContentMetrics.slice(0, 5).map((metric, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">{metric.title}</p>
                  <div className="h-1 bg-white/10 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-red-500" style={{ width: `${metric.retention}%` }}></div>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="text-white font-semibold text-sm">{metric.retention.toFixed(1)}%</p>
                  <p className="text-white/60 text-xs">{(metric.views / 1000).toFixed(0)}K views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
