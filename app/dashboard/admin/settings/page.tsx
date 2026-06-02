'use client';

import { Save, Globe, Lock, Palette, Bell, Database } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/Button';
import { mockUsers } from '@/data/mock';

const admin = mockUsers.admin_1;

export default function AdminSettingsPage() {
  return (
    <DashboardLayout userRole="admin" userName={admin.name}>
      <h1 className="text-3xl font-bold text-white mb-8">Configuración de Plataforma</h1>

      <div className="max-w-4xl space-y-8">
        {/* General Settings */}
        <div className="glass p-8 rounded-xl space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Configuración General</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Nombre de la Plataforma</label>
              <input
                type="text"
                defaultValue="VSTACK"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Email de Soporte</label>
              <input
                type="email"
                defaultValue="support@vstack.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">URL Base</label>
              <input
                type="url"
                defaultValue="https://vstack.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Idioma Predeterminado</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500">
                <option>Español</option>
                <option>Inglés</option>
                <option>Portugués</option>
              </select>
            </div>
          </div>
        </div>

        {/* Branding */}
        <div className="glass p-8 rounded-xl space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Palette className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Branding</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Color Primario</label>
              <div className="flex gap-2 items-center">
                <input
                  type="color"
                  defaultValue="#e50914"
                  className="w-16 h-10 rounded-lg cursor-pointer"
                />
                <input
                  type="text"
                  defaultValue="#e50914"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-white text-sm focus:outline-none focus:border-red-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Color Secundario</label>
              <div className="flex gap-2 items-center">
                <input
                  type="color"
                  defaultValue="#7c3aed"
                  className="w-16 h-10 rounded-lg cursor-pointer"
                />
                <input
                  type="text"
                  defaultValue="#7c3aed"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-white text-sm focus:outline-none focus:border-red-500"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Logo</label>
            <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center">
              <p className="text-white/60">Arrastra tu logo aquí o haz clic</p>
            </div>
          </div>
        </div>

        {/* Monetization */}
        <div className="glass p-8 rounded-xl space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Monetización</h2>
          </div>

          <div className="space-y-4">
            {[
              { name: 'Suscripciones', enabled: true },
              { name: 'Sistema de Monedas', enabled: true },
              { name: 'Publicidad Recompensada', enabled: true },
              { name: 'Pago por Episodio', enabled: false },
            ].map((method) => (
              <label key={method.name} className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked={method.enabled} className="rounded" />
                <span className="text-white font-medium">{method.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="glass p-8 rounded-xl space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Notificaciones</h2>
          </div>

          <div className="space-y-4">
            {[
              { label: 'Nuevos Episodios', description: 'Notificar cuando se publique contenido nuevo' },
              { label: 'Alertas de Ingresos', description: 'Alertas cuando los ingresos superen umbrales' },
              { label: 'Reportes Diarios', description: 'Resumen diario de métricas' },
              { label: 'Alertas de Errores', description: 'Notificar problemas técnicos' },
            ].map((notif) => (
              <div key={notif.label} className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">{notif.label}</p>
                  <p className="text-white/60 text-sm">{notif.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Database */}
        <div className="glass p-8 rounded-xl space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Database className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Base de Datos</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="text-white/60 text-sm mb-1">Almacenamiento Usado</p>
              <p className="text-2xl font-bold text-white">425 GB</p>
              <div className="h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-red-500" style={{ width: '68%' }}></div>
              </div>
              <p className="text-white/60 text-xs mt-1">625 GB disponible</p>
            </div>

            <div className="space-y-2">
              <button className="w-full bg-white/10 hover:bg-white/15 text-white font-medium py-2 rounded-lg transition-colors">
                Hacer Backup
              </button>
              <button className="w-full bg-white/10 hover:bg-white/15 text-white font-medium py-2 rounded-lg transition-colors">
                Optimizar Base de Datos
              </button>
            </div>
          </div>
        </div>

        {/* Save */}
        <div className="flex gap-4">
          <Button variant="primary" size="lg" className="gap-2">
            <Save className="w-5 h-5" /> Guardar Cambios
          </Button>
          <Button variant="secondary" size="lg">
            Descartar
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
