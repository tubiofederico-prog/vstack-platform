'use client';

import { Download, Play } from 'lucide-react';
import Link from 'next/link';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { mockUsers, mockSeries, mockEpisodes } from '@/data/mock';

const user = mockUsers.user_1;

const purchases = [
  {
    id: 1,
    type: 'series',
    title: 'Crimen y Misterio',
    description: 'Serie documental sobre casos sin resolver',
    date: '2024-12-10',
    price: 150,
    coins: true,
    seriesId: 'series_5',
    status: 'desbloqueado',
  },
  {
    id: 2,
    type: 'episode',
    title: 'Code Master - Ep. 5',
    description: 'Estructuras de Datos Avanzadas',
    date: '2024-12-05',
    price: 50,
    coins: true,
    seriesId: 'series_2',
    episodeNumber: 5,
    status: 'desbloqueado',
  },
  {
    id: 3,
    type: 'episode',
    title: 'Code Master - Ep. 3',
    description: 'Algoritmos de Ordenamiento',
    date: '2024-11-28',
    price: 50,
    coins: true,
    seriesId: 'series_2',
    episodeNumber: 3,
    status: 'desbloqueado',
  },
  {
    id: 4,
    type: 'series',
    title: 'Viajeros del Tiempo',
    description: 'Microserie de ciencia ficción premium',
    date: '2024-11-15',
    price: 0,
    coins: false,
    seriesId: 'series_3',
    status: 'incluido',
  },
];

export default function PurchasesPage() {
  const coinPurchases = purchases.filter((p) => p.coins);
  const subscriptionIncludes = purchases.filter((p) => !p.coins);

  return (
    <DashboardLayout userRole="user" userName={user.name} userAvatar={user.avatar}>
      <h1 className="text-3xl font-bold text-white mb-8">Mis Compras</h1>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="glass p-6 rounded-xl">
          <p className="text-white/60 text-sm mb-2">Total Comprado</p>
          <p className="text-3xl font-bold text-white">${(coinPurchases.reduce((sum, p) => sum + p.price, 0) / 100).toFixed(2)}</p>
          <p className="text-xs text-white/40 mt-2">{coinPurchases.length} compras con monedas</p>
        </div>
        <div className="glass p-6 rounded-xl">
          <p className="text-white/60 text-sm mb-2">Contenido Desbloqueado</p>
          <p className="text-3xl font-bold text-white">{purchases.length}</p>
          <p className="text-xs text-white/40 mt-2">Series y episodios</p>
        </div>
        <div className="glass p-6 rounded-xl">
          <p className="text-white/60 text-sm mb-2">Suscripción Activa</p>
          <p className="text-3xl font-bold text-red-500">Premium Plus</p>
          <p className="text-xs text-white/40 mt-2">Vence el 01/12/2025</p>
        </div>
      </div>

      {/* Coin Purchases */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Compras con Monedas</h2>
        {coinPurchases.length > 0 ? (
          <div className="space-y-4">
            {coinPurchases.map((purchase) => {
              const series = mockSeries.find((s) => s.id === purchase.seriesId);
              return (
                <div key={purchase.id} className="glass p-6 rounded-xl hover:glass-dark transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white">{purchase.title}</h3>
                        <Badge variant="primary">Desbloqueado</Badge>
                      </div>
                      <p className="text-white/60 text-sm mb-3">{purchase.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-white/50">
                        <span>Comprado el {purchase.date}</span>
                        <span>•</span>
                        <span className="font-semibold text-white">{purchase.price} monedas</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Link href={`/dashboard/user/series/${purchase.seriesId}`}>
                        <Button variant="primary" size="md" className="gap-2">
                          <Play className="w-5 h-5 fill-white" /> Ver
                        </Button>
                      </Link>
                      <Button variant="secondary" size="md" className="gap-2">
                        <Download className="w-5 h-5" /> Descargar
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="glass p-12 rounded-xl text-center">
            <p className="text-white/60">No tienes compras con monedas aún.</p>
          </div>
        )}
      </section>

      {/* Subscription Includes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Incluidos en tu Suscripción</h2>
        {subscriptionIncludes.length > 0 ? (
          <div className="space-y-4">
            {subscriptionIncludes.map((purchase) => (
              <div key={purchase.id} className="glass p-6 rounded-xl hover:glass-dark transition-all bg-green-500/5 border border-green-500/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-white">{purchase.title}</h3>
                      <Badge variant="success">Incluido</Badge>
                    </div>
                    <p className="text-white/60 text-sm mb-3">{purchase.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-white/50">
                      <span>Desde {purchase.date}</span>
                      <span>•</span>
                      <span className="text-green-400 font-semibold">Gratis con Premium Plus</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link href={`/dashboard/user/series/${purchase.seriesId}`}>
                      <Button variant="primary" size="md" className="gap-2">
                        <Play className="w-5 h-5 fill-white" /> Ver
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass p-12 rounded-xl text-center">
            <p className="text-white/60">Sin contenido incluido aún.</p>
          </div>
        )}
      </section>

      {/* Recommendations */}
      <section className="glass p-8 rounded-xl bg-gradient-to-r from-red-500/10 to-accent/10 border border-red-500/20">
        <h3 className="text-xl font-bold text-white mb-4">Explora Más Contenido Premium</h3>
        <p className="text-white/70 mb-6">Tenemos muchas más series y episodios desbloqueables con monedas o tu suscripción.</p>
        <Link href="/dashboard/user/catalog">
          <Button variant="primary" size="lg">
            Explorar Catálogo Completo
          </Button>
        </Link>
      </section>
    </DashboardLayout>
  );
}
