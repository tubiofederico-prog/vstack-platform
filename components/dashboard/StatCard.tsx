import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  change?: number;
  status?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  change,
  status,
  icon,
}) => {
  return (
    <div className="glass p-6 rounded-xl hover:glass-dark transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-white/60 text-sm font-medium">{label}</p>
          <p className="text-2xl md:text-3xl font-bold text-white mt-2">{value}</p>
          {change !== undefined && (
            <div className="flex items-center gap-1 mt-3">
              {status === 'up' && <TrendingUp className="w-4 h-4 text-green-500" />}
              {status === 'down' && <TrendingDown className="w-4 h-4 text-red-500" />}
              <span
                className={`text-sm font-medium ${
                  status === 'up' ? 'text-green-500' : status === 'down' ? 'text-red-500' : 'text-white/60'
                }`}
              >
                {status === 'down' ? '-' : '+'}{change}%
              </span>
            </div>
          )}
        </div>
        {icon && <div className="text-primary-400 ml-4">{icon}</div>}
      </div>
    </div>
  );
};
