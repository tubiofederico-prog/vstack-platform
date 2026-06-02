'use client';

import React from 'react';
import Link from 'next/link';
import { Play, Star, Lock } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface ContentCardProps {
  id: string;
  title: string;
  poster: string;
  rating: number;
  genre?: string | string[];
  duration?: number;
  episodeCount?: number;
  accessLevel?: 'free' | 'premium' | 'coins';
  views?: number;
  href?: string;
  onPlay?: () => void;
  showPlayButton?: boolean;
}

export const ContentCard: React.FC<ContentCardProps> = ({
  id,
  title,
  poster,
  rating,
  genre,
  duration,
  episodeCount,
  accessLevel = 'free',
  views,
  href = `/dashboard/user/series/${id}`,
  onPlay,
  showPlayButton = true,
}) => {
  const accessBadges = {
    free: { label: 'Gratis', variant: 'success' as const },
    premium: { label: 'Premium', variant: 'primary' as const },
    coins: { label: 'Desbloqueables', variant: 'warning' as const },
  };

  const badge = accessBadges[accessLevel];

  return (
    <Link href={href}>
      <div className="group relative overflow-hidden rounded-xl h-full flex flex-col cursor-pointer">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary-500/20 to-accent/20 aspect-video md:aspect-[3/4]">
          <img
            src={poster}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            {showPlayButton && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onPlay?.();
                }}
                className="w-16 h-16 rounded-full bg-primary-500 hover:bg-primary-600 flex items-center justify-center transition-all duration-200 transform scale-75 group-hover:scale-100"
              >
                <Play className="w-8 h-8 text-white fill-white" />
              </button>
            )}
          </div>

          {/* Badge */}
          <div className="absolute top-3 right-3">
            <Badge variant={badge.variant}>{badge.label}</Badge>
          </div>

          {/* Rating */}
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/50 px-2 py-1 rounded-lg">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold text-white">{rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 bg-gradient-to-b from-[#0f1419]/50 to-[#0a0e14] flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-white line-clamp-2 text-sm md:text-base group-hover:text-primary-400 transition-colors duration-200">
              {title}
            </h3>
            {genre && <p className="text-xs text-white/50 mt-1">{typeof genre === 'string' ? genre : genre.join(', ')}</p>}
          </div>

          <div className="flex items-center justify-between text-xs text-white/50 mt-2 pt-2 border-t border-white/5">
            {episodeCount && <span>{episodeCount} episodios</span>}
            {duration && <span>{duration} min</span>}
            {views && <span>{(views / 1000).toFixed(0)}K views</span>}
          </div>
        </div>
      </div>
    </Link>
  );
};
