'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Play, Star, Share2, Heart, Download, Lock, Zap } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { mockUsers, mockSeries, mockEpisodes } from '@/data/mock';

const user = mockUsers.user_1;

export default function SeriesPage() {
  const params = useParams();
  const seriesId = params.id as string;
  const series = mockSeries.find((s) => s.id === seriesId) || mockSeries[0];
  const episodes = mockEpisodes.filter((e) => e.seriesId === seriesId);

  const accessBadge = {
    free: { label: 'Gratis', variant: 'success' as const },
    premium: { label: 'Premium', variant: 'primary' as const },
    coins: { label: 'Con Monedas', variant: 'warning' as const },
  };

  const canWatch = series.accessLevel === 'free' || user.subscription?.status === 'active' || user.coins >= (series.coinPrice || 0);

  return (
    <DashboardLayout userRole="user" userName={user.name} userAvatar={user.avatar}>
      {/* Hero Section */}
      <section className="mb-12 -mx-8 px-8">
        <div className="relative h-96 rounded-2xl overflow-hidden">
          <img src={series.banner || series.poster} alt={series.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent flex items-end">
            <div className="p-8 w-full">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="primary">{accessBadge[series.accessLevel].label}</Badge>
                <div className="flex items-center gap-1 bg-black/50 px-3 py-1 rounded-lg">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-white">{series.rating}</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-white mb-3">{series.title}</h1>
              <p className="text-white/70 max-w-2xl mb-6">{series.description}</p>
              <div className="flex gap-4">
                <Link href={`/dashboard/user/player/${series.id}/1`}>
                  <Button variant="primary" size="lg" disabled={!canWatch} className="gap-2">
                    <Play className="w-5 h-5 fill-white" /> {canWatch ? 'Reproducir' : 'Bloqueado'}
                  </Button>
                </Link>
                <Button variant="secondary" size="lg" className="gap-2">
                  <Heart className="w-5 h-5" /> Agregar a Favoritos
                </Button>
                <Button variant="ghost" size="lg" className="gap-2">
                  <Share2 className="w-5 h-5" /> Compartir
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="glass p-6 rounded-xl">
          <p className="text-white/60 text-sm mb-2">Género</p>
          <p className="text-white font-semibold">{series.genre.join(', ')}</p>
        </div>
        <div className="glass p-6 rounded-xl">
          <p className="text-white/60 text-sm mb-2">Episodios</p>
          <p className="text-white font-semibold">{series.episodeCount} episodios • {series.duration} min c/u</p>
        </div>
        <div className="glass p-6 rounded-xl">
          <p className="text-white/60 text-sm mb-2">Audiencia</p>
          <p className="text-white font-semibold">{(series.views / 1000).toFixed(0)}K reproducciones • {series.reviews} reseñas</p>
        </div>
      </section>

      {/* Episodes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Episodios</h2>
        <div className="space-y-4">
          {episodes.length > 0 ? (
            episodes.map((episode) => (
              <Link key={episode.id} href={`/dashboard/user/player/${series.id}/${episode.episodeNumber}`}>
                <div className="glass p-6 rounded-xl hover:bg-white/10 transition-all group cursor-pointer">
                  <div className="flex gap-4 items-start">
                    <img src={episode.thumbnail} alt={episode.title} className="w-32 h-20 rounded-lg object-cover group-hover:scale-105 transition-transform" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-white/60">Ep. {episode.episodeNumber}</span>
                        <Badge variant="neutral">{episode.status}</Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-red-500 transition-colors">{episode.title}</h3>
                      <p className="text-white/60 text-sm mt-1">{episode.description}</p>
                      <div className="flex items-center gap-4 mt-3">
                        <span className="text-xs text-white/40">{episode.duration} min</span>
                        <span className="text-xs text-white/40">{(episode.views / 1000).toFixed(0)}K views</span>
                      </div>
                    </div>
                    <Play className="w-8 h-8 text-red-500 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="glass p-12 rounded-xl text-center">
              <p className="text-white/60">No hay episodios disponibles aún.</p>
            </div>
          )}
        </div>
      </section>

      {/* Access Section */}
      {!canWatch && (
        <section className="glass p-8 rounded-xl border-2 border-yellow-500/30 bg-yellow-500/5 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Lock className="w-6 h-6 text-yellow-400" />
            <h3 className="text-xl font-bold text-white">Contenido Bloqueado</h3>
          </div>
          {series.accessLevel === 'coins' && (
            <div className="space-y-4">
              <p className="text-white/70">Este contenido requiere {series.coinPrice} monedas para desbloquear.</p>
              <div className="flex gap-4">
                <Link href="/dashboard/user/wallet">
                  <Button variant="primary" size="lg" className="gap-2">
                    <Zap className="w-5 h-5" /> Comprar Monedas
                  </Button>
                </Link>
                <Button variant="secondary" size="lg" className="gap-2">
                  <Play className="w-5 h-5 fill-white" /> Ver Anuncio Gratis
                </Button>
              </div>
            </div>
          )}
          {series.accessLevel === 'premium' && (
            <div className="space-y-4">
              <p className="text-white/70">Este contenido solo está disponible para suscriptores Premium.</p>
              <Link href="/dashboard/user/subscription">
                <Button variant="primary" size="lg">
                  Suscribirse Ahora
                </Button>
              </Link>
            </div>
          )}
        </section>
      )}

      {/* Producer Info */}
      {series.producer && (
        <section className="glass p-8 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-4">Productor</h3>
          <div className="flex items-center gap-4">
            <img src={series.producer.avatar} alt={series.producer.name} className="w-16 h-16 rounded-full object-cover" />
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-white">{series.producer.name}</h4>
              <p className="text-white/60">Productor de contenido</p>
            </div>
            <Button variant="secondary" size="md">
              Seguir
            </Button>
          </div>
        </section>
      )}
    </DashboardLayout>
  );
}
