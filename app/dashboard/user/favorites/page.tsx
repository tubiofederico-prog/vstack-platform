'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { ContentCard } from '@/components/dashboard/ContentCard';
import { mockUsers, mockSeries } from '@/data/mock';

const user = mockUsers.user_1;

export default function FavoritesPage() {
  const favorites = mockSeries.filter((s) => user.favorites?.includes(s.id));

  return (
    <DashboardLayout userRole="user" userName={user.name} userAvatar={user.avatar}>
      <h1 className="text-3xl font-bold text-white mb-8">Mis Favoritos</h1>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((series) => (
            <ContentCard
              key={series.id}
              {...series}
              href={`/dashboard/user/series/${series.id}`}
            />
          ))}
        </div>
      ) : (
        <div className="glass p-12 rounded-xl text-center">
          <p className="text-white/60 text-lg">Aún no tienes series en tus favoritos.</p>
          <p className="text-white/40 text-sm mt-2">Explora el catálogo y agrega tus series favoritas.</p>
        </div>
      )}
    </DashboardLayout>
  );
}
