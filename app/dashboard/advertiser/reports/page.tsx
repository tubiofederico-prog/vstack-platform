'use client';

import { Download, Share2, Calendar, FileText } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/Button';
import { mockUsers } from '@/data/mock';

const advertiser = mockUsers.advertiser_1;

const reports = [
  {
    id: 1,
    name: 'Nike Summer Campaign - Reporte Completo',
    date: '2024-12-31',
    period: 'Diciembre 2024',
    metrics: { impressions: '456K', clicks: '15.6K', conversions: '2.3K', roi: '245%' },
    size: '3.2 MB',
  },
  {
    id: 2,
    name: 'Spotify Premium Push - Análisis',
    date: '2024-12-15',
    period: 'Diciembre 2024',
    metrics: { impressions: '234K', clicks: '6.7K', ctr: '2.87%', roi: '156%' },
    size: '2.1 MB',
  },
  {
    id: 3,
    name: 'LinkedIn Learning - Reporte Final Q4',
    date: '2024-11-30',
    period: 'Noviembre 2024',
    metrics: { impressions: '567K', clicks: '23.4K', conversions: '5.2K', roi: '312%' },
    size: '4.5 MB',
  },
  {
    id: 4,
    name: 'Comparativa de Campañas - 2024',
    date: '2024-10-31',
    period: 'Trimestral',
    metrics: { campaigns: '12', totalSpend: '$85K', avgROI: '234%' },
    size: '5.8 MB',
  },
];

export default function AdvertiserReportsPage() {
  return (
    <DashboardLayout userRole="advertiser" userName={advertiser.name}>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">Reportes y Análisis</h1>
        <Button variant="primary" size="lg" className="gap-2">
          <FileText className="w-5 h-5" /> Generar Nuevo Reporte
        </Button>
      </div>

      {/* Filters */}
      <div className="glass p-6 rounded-xl mb-8 flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1">
          <label className="text-sm font-medium text-white mb-2 block">Período</label>
          <input
            type="month"
            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-red-500"
          />
        </div>
        <div className="flex-1">
          <label className="text-sm font-medium text-white mb-2 block">Campaña</label>
          <select className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-red-500">
            <option>Todas las campañas</option>
            <option>Nike Summer Campaign</option>
            <option>Spotify Premium Push</option>
            <option>LinkedIn Learning</option>
          </select>
        </div>
        <Button variant="secondary" size="md">
          Filtrar
        </Button>
      </div>

      {/* Reports List */}
      <div className="space-y-4 mb-12">
        {reports.map((report) => (
          <div key={report.id} className="glass p-6 rounded-xl hover:glass-dark transition-all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">{report.name}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {report.date}
                  </div>
                  <div>{report.period}</div>
                  <div>{report.size}</div>
                </div>
                <div className="flex flex-wrap gap-4">
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
                  <Download className="w-5 h-5" /> PDF
                </Button>
                <Button variant="ghost" size="md" className="gap-2">
                  <Share2 className="w-5 h-5" /> Compartir
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Report */}
      <div className="glass p-8 rounded-xl bg-gradient-to-r from-red-500/10 to-accent/10 border border-red-500/20">
        <h3 className="text-xl font-bold text-white mb-4">¿Necesitas un Reporte Personalizado?</h3>
        <p className="text-white/70 mb-6">Crea reportes personalizados con las métricas que más te importan</p>
        <Button variant="primary" size="lg">
          Crear Reporte Personalizado
        </Button>
      </div>
    </DashboardLayout>
  );
}
