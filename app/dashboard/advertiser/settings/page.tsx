'use client';

import { Save, User, Lock, Bell, FileText } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/Button';
import { mockUsers } from '@/data/mock';

const advertiser = mockUsers.advertiser_1;

export default function AdvertiserSettingsPage() {
  return (
    <DashboardLayout userRole="advertiser" userName={advertiser.name}>
      <h1 className="text-3xl font-bold text-white mb-8">Configuración de Cuenta</h1>

      <div className="max-w-4xl space-y-8">
        {/* Profile Settings */}
        <div className="glass p-8 rounded-xl space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Información de Cuenta</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Nombre Completo</label>
              <input
                type="text"
                defaultValue="Marketing Manager"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Empresa</label>
              <input
                type="text"
                defaultValue="Brand Company"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Email</label>
              <input
                type="email"
                defaultValue="advertiser@brand.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Teléfono</label>
              <input
                type="tel"
                defaultValue="+1 (555) 123-4567"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white mb-2">Dirección</label>
              <input
                type="text"
                defaultValue="123 Marketing Street, NY 10001"
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500"
              />
            </div>
          </div>
        </div>

        {/* Payment Settings */}
        <div className="glass p-8 rounded-xl space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Método de Pago</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Visa •••• 4242</p>
                <p className="text-white/60 text-sm">Vence 12/2026</p>
              </div>
              <button className="text-red-500 hover:text-red-300 transition-colors">Editar</button>
            </div>
            <Button variant="secondary" size="md" className="w-full">
              + Agregar Método de Pago
            </Button>
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
              { label: 'Resumen Diario de Campañas', description: 'Recibe un resumen diario del rendimiento' },
              { label: 'Alertas de Presupuesto', description: 'Notificación cuando el gasto supere el 80%' },
              { label: 'Nuevas Oportunidades', description: 'Recomendaciones de nuevas campañas' },
              { label: 'Boletín Informativo', description: 'Noticias y actualizaciones de la plataforma' },
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

        {/* Billing */}
        <div className="glass p-8 rounded-xl space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Facturación</h2>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white font-medium">Saldo Actual</p>
                <p className="text-white/60 text-sm">Créditos disponibles</p>
              </div>
              <p className="text-2xl font-bold text-white">$5,240.50</p>
            </div>
            <button className="w-full bg-white/10 hover:bg-white/15 text-white font-medium py-3 rounded-lg transition-colors">
              Ver Historial de Facturas
            </button>
          </div>
        </div>

        {/* Security */}
        <div className="glass p-8 rounded-xl space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Seguridad</h2>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white font-medium">Contraseña</p>
                <p className="text-white/60 text-sm">Última actualización hace 3 meses</p>
              </div>
              <button className="text-red-500 hover:text-red-300 transition-colors">Cambiar</button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white font-medium">Autenticación de Dos Factores</p>
                <p className="text-white/60 text-sm">Estado: Activada</p>
              </div>
              <button className="text-red-500 hover:text-red-300 transition-colors">Modificar</button>
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
