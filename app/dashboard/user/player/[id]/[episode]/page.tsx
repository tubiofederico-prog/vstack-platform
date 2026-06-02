'use client';

import { useParams, useRouter } from 'next/navigation';
import { Play, Pause, Volume2, MoreVertical, Heart, Share2, SkipForward } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/Button';
import { mockUsers, mockSeries, mockEpisodes } from '@/data/mock';

const user = mockUsers.user_1;

export default function PlayerPage() {
  const params = useParams();
  const router = useRouter();
  const seriesId = params.id as string;
  const episodeNum = parseInt(params.episode as string);

  const series = mockSeries.find((s) => s.id === seriesId) || mockSeries[0];
  const episode = mockEpisodes.find((e) => e.seriesId === seriesId && e.episodeNumber === episodeNum) || mockEpisodes[0];

  return (
    <DashboardLayout userRole="user" userName={user.name} userAvatar={user.avatar}>
      {/* Player */}
      <div className="mb-8">
        <div className="relative bg-black rounded-2xl overflow-hidden aspect-video mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-accent/20 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-12 h-12 text-white fill-white ml-1" />
              </div>
              <p className="text-white/60 text-sm">{episode?.title}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6">
            <div className="space-y-3">
              <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 w-2/3"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="p-2 rounded-full hover:bg-white/20 transition-colors">
                    <Pause className="w-6 h-6 text-white fill-white" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-white/20 transition-colors">
                    <Volume2 className="w-6 h-6 text-white" />
                  </button>
                  <span className="text-sm text-white/60">15:34 / 45:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-full hover:bg-white/20 transition-colors">
                    <MoreVertical className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Episode Info */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-white/60 text-sm mb-2">Episodio {episode?.episodeNumber} de {series.episodeCount}</p>
            <h1 className="text-3xl font-bold text-white mb-2">{episode?.title}</h1>
            <p className="text-white/70 max-w-3xl">{episode?.description}</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-white/60">
              <span>{episode?.duration} minutos</span>
              <span>{episode?.releaseDate}</span>
              <span>{(episode?.views || 0 / 1000).toFixed(0)}K views</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="p-3 rounded-lg hover:bg-white/10 transition-colors">
              <Heart className="w-6 h-6 text-white" />
            </button>
            <button className="p-3 rounded-lg hover:bg-white/10 transition-colors">
              <Share2 className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Next Episode CTA */}
      {episodeNum < series.episodeCount && (
        <div className="glass p-8 rounded-xl mb-8 bg-gradient-to-r from-red-500/10 to-accent/10 border border-red-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm mb-1">Próximo episodio</p>
              <h3 className="text-xl font-bold text-white">Episodio {episodeNum + 1}</h3>
            </div>
            <button
              onClick={() => router.push(`/dashboard/user/player/${seriesId}/${episodeNum + 1}`)}
              className="flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors"
            >
              <SkipForward className="w-5 h-5" /> Siguiente
            </button>
          </div>
        </div>
      )}

      {/* Series Info */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Sobre {series.title}</h2>
        <div className="glass p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img src={series.poster} alt={series.title} className="w-full rounded-lg" />
            </div>
            <div>
              <p className="text-white/70 mb-6 leading-relaxed">{series.description}</p>
              <div className="space-y-4">
                <div>
                  <p className="text-white/60 text-sm mb-1">Género</p>
                  <p className="text-white font-semibold">{series.genre.join(', ')}</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Total de episodios</p>
                  <p className="text-white font-semibold">{series.episodeCount} episodios</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Calificación</p>
                  <p className="text-white font-semibold">{series.rating} / 5 ({series.reviews} reseñas)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
