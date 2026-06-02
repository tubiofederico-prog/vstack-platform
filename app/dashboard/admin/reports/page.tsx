'use client';

import { Download, Share2, Calendar } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/Button';
import { mockUsers } from '@/data/mock';

const admin = mockUsers.admin_1;

const reports = [
  {
    id: 1,
    name: 'Reporte Mensual - Diciembre 2024',
    date: '2024-12-01',
    metrics: { users: '125K', views: '8.9M', revenue: '$814K' },
    size: '2.4 MB',
  },
  {
    id: 2,
    name: 'Reporte Mensual - Noviembre 2024',
    date: '2024-11-01',
    metrics: { users: '123K', views: '8.1M', revenue: '$756K' },
    size: '2.3 MB',
  },
  {
    id: 3,
    name: 'Reporte Trimestral - Q4 2024',
    date: '2024-10-01',
    metrics: { users: '115K', views: '24.5M', revenue: '$2.2M' },
    size: '5.8 MB',
  },
  {
    id: 4,
    name: 'Análisis de Contenido Top - 2024',
    date: '2024-09-01',
    metrics: { series: '8', episodes: '145', avgRetention: '76%' },
    size: '3.1 MB',
  },
];

export default function ReportsPage() {
  return (
    <DashboardLayout userRole="admin" userName={admin.name}>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">Reportes</h1>
        <Button variant="primary" size="lg" className="gap-2">
          <Download className="w-5 h-5" /> Descargar Todos
        </Button>
      </div>

      {/* Filters */}
      <div className="glass p-6 rounded-xl mb-8 flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-1">
          <label className="text-sm font-medium text-white mb-2 block">Período</label>
          <input
            type="month"
            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-red-500"
          />
        </div>
        <div className="flex-1">
          <label className="text-sm font-medium text-white mb-2 block">Tipo de Reporte</label>
          <select className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-red-500">
            <option>Todos</option>
            <option>Usuarios</option>
            <option>Contenido</option>
            <option>Ingresos</option>
          </select>
        </div>
        <Button variant="secondary" size="md" className="self-end">
          Filtrar
        </Button>
      </div>

      {/* Reports List */}
      <div className="space-y-4">
        {reports.map((report) => (
          <div key={report.id} className="glass p-6 rounded-xl hover:glass-dark transition-all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">{report.name}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-white/60">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {report.date}
                  </div>
                  <div>{report.size}</div>
                </div>
                <div className="mt-3 flex flex-wrap gap-4">
                  {Object.entries(report.metrics).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-white/60 text-xs">{key}</p>
                      <p className="text-white font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="secondary" size="md" className="gap-2">
                  <Download className="w-5 h-5" /> Descargar
                </Button>
                <Button variant="ghost" size="md" className="gap-2">
                  <Share2 className="w-5 h-5" /> Compartir
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
