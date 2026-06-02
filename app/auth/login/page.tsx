'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'user' | 'admin' | 'advertiser' | null>(null);

  const roles = [
    { id: 'user', label: 'Usuario Final', description: 'Accede al streaming', href: '/dashboard/user' },
    { id: 'admin', label: 'Administrador', description: 'Gestiona la plataforma', href: '/dashboard/admin' },
    { id: 'advertiser', label: 'Anunciante', description: 'Crea campañas', href: '/dashboard/advertiser' },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole) {
      const roleHref = roles.find((r) => r.id === selectedRole)?.href;
      if (roleHref) router.push(roleHref);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#080c12] to-[#1a1a1a] flex flex-col items-center justify-center px-6 py-20">
      {/* Background Decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-cyan-300 bg-clip-text text-transparent mb-2">
              VSTACK
            </h1>
          </Link>
          <p className="text-white/60">Plataforma de Entretenimiento Vertical Premium</p>
        </div>

        {/* Role Selection */}
        <div className="mb-8 space-y-3">
          <label className="text-sm font-medium text-white/80">Selecciona tu rol:</label>
          <div className="grid grid-cols-3 gap-3">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id as 'user' | 'admin' | 'advertiser')}
                className={`p-4 rounded-lg border-2 transition-all duration-200 text-center ${
                  selectedRole === role.id
                    ? 'border-red-400 bg-red-500/20 text-white'
                    : 'border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-white/20'
                }`}
              >
                <p className="font-semibold text-sm">{role.label}</p>
                <p className="text-xs text-white/40 mt-1">{role.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="glass p-8 rounded-xl space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-red-500 focus:bg-white/10 transition-colors"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-10 text-white placeholder-white/40 focus:outline-none focus:border-red-500 focus:bg-white/10 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer">
              <input type="checkbox" className="rounded" />
              Recuérdame
            </label>
            <Link href="/auth/recover-password" className="text-red-500 hover:text-red-300 transition-colors">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={!selectedRole}
          >
            Iniciar Sesión
          </Button>

          {/* Divider */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gradient-to-b from-[#1a1a1a] to-transparent text-white/40">O continúa con</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-3 gap-3">
            {['Google', 'GitHub', 'Apple'].map((provider) => (
              <button
                key={provider}
                type="button"
                onClick={() => selectedRole && handleLogin({ preventDefault: () => {} } as any)}
                className="bg-white/5 border border-white/10 hover:bg-white/10 transition-colors rounded-lg py-2.5 text-white text-sm font-medium"
              >
                {provider}
              </button>
            ))}
          </div>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-white/60 mt-6">
          ¿No tienes cuenta?{' '}
          <Link href="/auth/register" className="text-red-500 hover:text-red-300 font-semibold transition-colors">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}
