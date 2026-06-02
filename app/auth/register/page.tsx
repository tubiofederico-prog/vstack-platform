'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'user' | 'admin' | 'advertiser' | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole) {
      router.push(selectedRole === 'user' ? '/dashboard/user' : selectedRole === 'admin' ? '/dashboard/admin' : '/dashboard/advertiser');
    }
  };

  const roles = [
    { id: 'user', label: 'Usuario', description: 'Ver contenido' },
    { id: 'admin', label: 'Admin', description: 'Gestionar' },
    { id: 'advertiser', label: 'Anunciante', description: 'Publicidad' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#080c12] to-[#1a1a1a] flex flex-col items-center justify-center px-6 py-20">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-cyan-300 bg-clip-text text-transparent mb-2">
              VSTACK
            </h1>
          </Link>
          <p className="text-white/60">Crear nueva cuenta</p>
        </div>

        <div className="mb-6 space-y-2">
          <label className="text-sm font-medium text-white/80">Selecciona tu rol:</label>
          <div className="grid grid-cols-3 gap-2">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id as any)}
                className={`p-3 rounded-lg border-2 transition-all text-center text-sm ${
                  selectedRole === role.id
                    ? 'border-red-400 bg-red-500/20 text-white'
                    : 'border-white/10 bg-white/5 text-white/60 hover:border-white/20'
                }`}
              >
                <p className="font-semibold">{role.label}</p>
                <p className="text-xs text-white/40">{role.description}</p>
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass p-8 rounded-xl space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">Nombre Completo</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-red-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-red-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-10 text-white placeholder-white/40 focus:outline-none focus:border-red-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Confirmar Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 px-4 text-white placeholder-white/40 focus:outline-none focus:border-red-500"
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-white/60">
            <input type="checkbox" className="rounded" required />
            Acepto los términos y condiciones
          </label>

          <Button type="submit" variant="primary" size="lg" className="w-full" disabled={!selectedRole}>
            Crear Cuenta
          </Button>
        </form>

        <p className="text-center text-white/60 mt-6">
          ¿Ya tienes cuenta?{' '}
          <Link href="/auth/login" className="text-red-500 hover:text-red-300 font-semibold">
            Inicia Sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
