export interface User {
  id: string;
  email: string;
  name: string;
  role: "user" | "admin" | "advertiser";
  phone?: string;
  avatar?: string;
  subscription?: SubscriptionPlan;
  coins: number;
  createdAt: string;
  favorites?: string[];
  watchHistory?: ViewHistory[];
}

export interface ViewHistory {
  seriesId: string;
  episodeId: string;
  watchedAt: string;
  progress: number;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  billing: "monthly" | "yearly";
  status: "active" | "expired" | "canceled";
  expiresAt?: string;
  benefits: string[];
}

export interface Series {
  id: string;
  title: string;
  description: string;
  poster: string;
  banner?: string;
  genre: string[];
  duration: number;
  episodeCount: number;
  rating: number;
  reviews: number;
  releaseDate: string;
  status: "published" | "draft" | "scheduled" | "archived";
  accessLevel: "free" | "premium" | "coins";
  coinPrice?: number;
  views: number;
  trending: boolean;
  featured?: boolean;
  producer?: {
    id: string;
    name: string;
    avatar?: string;
  };
}

export interface Episode {
  id: string;
  seriesId: string;
  title: string;
  description: string;
  duration: number;
  episodeNumber: number;
  seasonNumber: number;
  releaseDate: string;
  thumbnail: string;
  status: "published" | "draft" | "scheduled";
  accessLevel: "free" | "premium" | "coins";
  coinPrice?: number;
  views: number;
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  billing: "monthly" | "yearly";
  description: string;
  benefits: string[];
  featured?: boolean;
  monthlyEquivalent?: number;
}

export interface CoinPackage {
  id: string;
  coins: number;
  price: number;
  bonus: number;
  featured?: boolean;
}

export interface Campaign {
  id: string;
  name: string;
  advertiserEmail: string;
  status: "draft" | "active" | "paused" | "completed";
  format: "banner" | "video" | "rewarded";
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  ctr: number;
  completionRate: number;
  startDate: string;
  endDate: string;
  targetAudience?: string;
  associatedContent?: string[];
}

export interface AnalyticsData {
  totalUsers: number;
  activeUsers: number;
  totalViews: number;
  totalWatchTime: number;
  avgSessionDuration: number;
  retentionRate: number;
  subscriptionRevenue: number;
  coinRevenue: number;
  adRevenue: number;
  totalRevenue: number;
}

export interface DashboardMetric {
  label: string;
  value: string | number;
  change?: number;
  status?: "up" | "down" | "neutral";
}

export interface ContentMetric {
  seriesId: string;
  title: string;
  views: number;
  watchTime: number;
  retention: number;
  genre: string;
}
