'use client';

import { Zap, TrendingUp, ShoppingCart } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { mockUsers, mockCoinPackages } from '@/data/mock';

const user = mockUsers.user_1;

const transactions = [
  { id: 1, type: 'purchase', amount: 100, coins: 100, date: '2024-12-15', description: 'Compra de 100 monedas' },
  { id: 2, type: 'spend', amount: -150, coins: -150, date: '2024-12-10', description: 'Desbloqueado: Crimen y Misterio' },
  { id: 3, type: 'reward', amount: 50, coins: 50, date: '2024-12-05', description: 'Bonus por ver anuncio' },
  { id: 4, type: 'spend', amount: -200, coins: -200, date: '2024-12-01', description: 'Compra individual de episodio' },
];

export default function WalletPage() {
  return (
    <DashboardLayout userRole="user" userName={user.name} userAvatar={user.avatar}>
      <h1 className="text-3xl font-bold text-white mb-8">Mi Wallet</h1>

      {/* Balance Card */}
      <div className="glass p-8 rounded-xl mb-8 bg-gradient-to-r from-red-500/10 to-accent/10 border border-red-500/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/70 text-sm mb-2">Saldo de Monedas</p>
            <h2 className="text-5xl font-bold text-white flex items-center gap-3">
              <Zap className="w-10 h-10 text-yellow-400" />
              {user.coins}
            </h2>
            <p className="text-white/60 text-sm mt-2">≈ ${(user.coins * 0.01).toFixed(2)} USD</p>
          </div>
          <Button variant="primary" size="lg" className="gap-2">
            <ShoppingCart className="w-5 h-5" /> Comprar Monedas
          </Button>
        </div>
      </div>

      {/* Coin Packages */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Paquetes de Monedas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCoinPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`glass p-6 rounded-xl hover:glass-dark transition-all border-2 ${
                pkg.featured
                  ? 'border-red-400 bg-red-500/5'
                  : 'border-white/10'
              }`}
            >
              {pkg.featured && (
                <div className="mb-3">
                  <Badge variant="primary">
                    Más Popular
                  </Badge>
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{pkg.coins}</h3>
              <p className="text-white/70 text-sm mb-3">Monedas</p>
              {pkg.bonus > 0 && (
                <p className="text-red-500 text-sm font-semibold mb-4">+ {pkg.bonus} Bonus</p>
              )}
              <p className="text-3xl font-bold text-white mb-4">${pkg.price.toFixed(2)}</p>
              <Button
                variant={pkg.featured ? 'primary' : 'secondary'}
                size="md"
                className="w-full"
              >
                Comprar Ahora
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Transactions */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Historial de Movimientos</h2>
        <div className="space-y-3">
          {transactions.map((tx) => (
            <div key={tx.id} className="glass p-4 rounded-xl flex items-center justify-between hover:glass-dark transition-all">
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-lg ${
                    tx.type === 'purchase' ? 'bg-green-500/20' : tx.type === 'reward' ? 'bg-yellow-500/20' : 'bg-red-500/20'
                  }`}
                >
                  <TrendingUp
                    className={`w-5 h-5 ${
                      tx.type === 'purchase' ? 'text-green-400' : tx.type === 'reward' ? 'text-yellow-400' : 'text-red-400'
                    }`}
                  />
                </div>
                <div>
                  <p className="text-white font-semibold">{tx.description}</p>
                  <p className="text-white/60 text-sm">{tx.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`font-bold text-lg ${
                    tx.type === 'spend' ? 'text-red-400' : 'text-green-400'
                  }`}
                >
                  {tx.type === 'spend' ? '-' : '+'}{Math.abs(tx.coins)} <Zap className="w-4 h-4 inline" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
}
