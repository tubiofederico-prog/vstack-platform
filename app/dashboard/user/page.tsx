'use client';

import Link from 'next/link';
import { Play, Star, Zap } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { ContentCard } from '@/components/dashboard/ContentCard';
import { Button } from '@/components/ui/Button';
import { mockUsers, mockSeries, mockPlans } from '@/data/mock';

const user = mockUsers.user_1;

export default function UserDashboard() {
  const featured = mockSeries.slice(0, 3);
  const recommended = mockSeries.slice(2, 8);
  const userWatchHistory = user.watchHistory || [];

  return (
    <DashboardLayout userRole="user" userName={user.name} userAvatar={user.avatar}>
      {/* Hero Banner */}
      <section className="mb-12 -mx-8 px-8">
        <div className="relative h-96 rounded-2xl overflow-hidden group">
          <img
            src={featured[0]?.banner || featured[0]?.poster}
            alt={featured[0]?.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-end">
            <div className="p-8 w-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1 bg-black/50 px-3 py-1 rounded-lg">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold">{featured[0]?.rating}</span>
                </div>
                <span className="text-sm text-white/80">{featured[0]?.genre.join(', ')}</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-2">{featured[0]?.title}</h2>
              <p className="text-white/70 max-w-2xl mb-6">{featured[0]?.description}</p>
              <div className="flex gap-4">
                <Link href={`/dashboard/user/series/${featured[0]?.id}`}>
                  <Button variant="primary" size="lg" className="gap-2">
                    <Play className="w-5 h-5 fill-white" /> Ver Ahora
                  </Button>
                </Link>
                <Button variant="secondary" size="lg">
                  + Agregar a Favoritos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue Watching */}
      {userWatchHistory.length > 0 && (
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Continuar Viendo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockSeries.slice(0, 4).map((series) => (
              <div key={series.id} className="relative group cursor-pointer">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-2">
                  <img src={series.poster} alt={series.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-2 left-2 right-2 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 w-1/3"></div>
                  </div>
                </div>
                <p className="text-sm text-white/70 font-medium">{series.title}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Trending & Featured */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-white mb-6">Tendencias Ahora</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featured.map((series) => (
            <ContentCard
              key={series.id}
              {...series}
              href={`/dashboard/user/series/${series.id}`}
            />
          ))}
        </div>
      </section>

      {/* Recommended For You */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-white mb-6">Recomendado para ti</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recommended.map((series) => (
            <ContentCard
              key={series.id}
              {...series}
              href={`/dashboard/user/series/${series.id}`}
            />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-white mb-6">Explora por Categoría</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {['Documentales', 'Educativo', 'Ciencia Ficción', 'Acción', 'Romance', 'Suspenso', 'Comedia', 'Lifestyle'].map((genre) => (
            <Link key={genre} href={`/dashboard/user/catalog?genre=${genre}`}>
              <div className="glass p-6 rounded-xl hover:bg-white/10 transition-all h-full flex items-center justify-center text-center cursor-pointer">
                <p className="font-semibold text-white">{genre}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Subscription CTA */}
      {user.subscription?.status !== 'active' && (
        <section className="glass p-8 rounded-xl mb-12 bg-gradient-to-r from-red-500/10 to-accent/10 border border-red-500/20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Actualiza a Premium</h3>
              <p className="text-white/70">Disfruta de todo el contenido sin anuncios, descargas ilimitadas y 4K.</p>
            </div>
            <Link href="/dashboard/user/subscription">
              <Button variant="primary" size="lg">
                Actualizar Ahora
              </Button>
            </Link>
          </div>
        </section>
      )}
    </DashboardLayout>
  );
}
