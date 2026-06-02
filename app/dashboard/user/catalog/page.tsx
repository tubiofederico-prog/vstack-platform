'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { ContentCard } from '@/components/dashboard/ContentCard';
import { Button } from '@/components/ui/Button';
import { mockUsers, mockSeries } from '@/data/mock';

const user = mockUsers.user_1;

export default function CatalogPage() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const genres = ['Todos', 'Documentales', 'Educativo', 'Ciencia Ficción', 'Acción', 'Romance', 'Suspenso', 'Comedia'];

  const filteredSeries = mockSeries.filter((series) => {
    const matchesGenre = !selectedGenre || selectedGenre === 'Todos' || series.genre.includes(selectedGenre);
    const matchesSearch = series.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <DashboardLayout userRole="user" userName={user.name} userAvatar={user.avatar}>
      <h1 className="text-3xl font-bold text-white mb-8">Catálogo Completo</h1>

      {/* Search */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
          <input
            type="text"
            placeholder="Buscar series..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-red-500"
          />
        </div>
      </div>

      {/* Genre Filter */}
      <div className="mb-8 flex flex-wrap gap-3">
        {genres.map((genre) => (
          <Button
            key={genre}
            variant={selectedGenre === genre ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </Button>
        ))}
      </div>

      {/* Series Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredSeries.map((series) => (
          <ContentCard
            key={series.id}
            {...series}
            href={`/dashboard/user/series/${series.id}`}
          />
        ))}
      </div>

      {filteredSeries.length === 0 && (
        <div className="glass p-12 rounded-xl text-center">
          <p className="text-white/60">No se encontraron series con esos criterios.</p>
        </div>
      )}
    </DashboardLayout>
  );
}
