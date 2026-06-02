'use client';

import Link from 'next/link';
import { Zap, BarChart3, Users, Film, Shield, Smartphone, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const features = [
  {
    icon: Film,
    title: 'Contenido Vertical Premium',
    description: 'Microseries, documentales y contenido audiovisual corto en formato vertical optimizado para móvil.',
  },
  {
    icon: BarChart3,
    title: 'Monetización Avanzada',
    description: 'Suscripciones, sistema de monedas, publicidad recompensada y múltiples flujos de ingresos.',
  },
  {
    icon: Users,
    title: 'Gestión de Productores',
    description: 'Panel completo para que productores carguen contenido, analicen metrics y gestionen ingresos.',
  },
  {
    icon: Sparkles,
    title: 'Analytics Empresarial',
    description: 'Dashboards con métricas detalladas de usuarios, retención, engagement y ROI por contenido.',
  },
  {
    icon: Shield,
    title: 'Seguridad B2B',
    description: 'Infraestructura segura para manejar pagos, datos de usuarios y reportes de anunciantes.',
  },
  {
    icon: Smartphone,
    title: '100% Responsive',
    description: 'Experiencia optimizada para móvil, tablet y desktop con navegación intuitiva.',
  },
];

const roles = [
  {
    title: 'Para Usuarios',
    description: 'Plataforma de streaming con contenido premium, sistema de monedas y suscripción sin límites.',
    link: '/auth/login',
    type: 'user',
    stats: ['125K+ Usuarios', 'SIN Anuncios', '4K Premium'],
  },
  {
    title: 'Para Administradores',
    description: 'Dashboard empresarial completo: gestión de contenido, usuarios, analytics y configuración.',
    link: '/auth/login',
    type: 'admin',
    stats: ['8.9M Views', '$814K Ingresos', '68% Retención'],
  },
  {
    title: 'Para Anunciantes',
    description: 'Plataforma de publicidad: crear campañas, medir ROI, segmentar audiencia y optimizar gastos.',
    link: '/auth/login',
    type: 'advertiser',
    stats: ['567K Impresiones', '4.1% CTR', '92% Completitud'],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#080c12] via-[#1a1a1a] to-[#080c12]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#080c12]/80 backdrop-blur-md border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
            VSTACK
          </div>
          <Link href="/auth/login">
            <Button variant="primary" size="sm">
              Acceder
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center space-y-8 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            La Plataforma de Entretenimiento
            <span className="block mt-3 bg-gradient-to-r from-red-500 via-orange-400 to-red-500 bg-clip-text text-transparent">
              Vertical Premium
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Microseries, documentales y contenido audiovisual corto optimizado para móvil. Una plataforma B2B completa para usuarios, administradores y anunciantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/dashboard/user">
              <Button variant="primary" size="lg">
                Ver como Usuario <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/dashboard/admin">
              <Button variant="secondary" size="lg">
                Ver Admin Dashboard
              </Button>
            </Link>
            <Link href="/dashboard/advertiser">
              <Button variant="secondary" size="lg">
                Ver Advertiser Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Tres Plataformas Integradas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, idx) => (
            <Link key={idx} href={role.link}>
              <div className="glass p-8 rounded-xl hover:bg-white/10 transition-all duration-300 h-full cursor-pointer group">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                  {role.title}
                </h3>
                <p className="text-white/60 mb-6 leading-relaxed">{role.description}</p>
                <div className="flex flex-wrap gap-2">
                  {role.stats.map((stat, i) => (
                    <span key={i} className="text-xs bg-red-500/20 text-red-300 px-3 py-1 rounded-full border border-red-400/30">
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Características Principales</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="glass p-6 rounded-xl hover:glass-dark transition-all duration-200">
                <Icon className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Metrics */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { label: 'Usuarios Activos', value: '125K+' },
            { label: 'Reproducciones', value: '8.9M' },
            { label: 'Ingresos Mensuales', value: '$814K' },
            { label: 'Tasa Retención', value: '68%' },
          ].map((metric, idx) => (
            <div key={idx} className="text-center">
              <p className="text-4xl font-bold bg-gradient-to-r from-red-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                {metric.value}
              </p>
              <p className="text-white/60 text-sm">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center border-t border-white/5">
        <h2 className="text-4xl font-bold text-white mb-6">¿Listo para explorar?</h2>
        <p className="text-white/60 text-lg mb-8">Accede a la plataforma completa y explora todas las funcionalidades como usuario, administrador o anunciante.</p>
        <Link href="/auth/login">
          <Button variant="primary" size="lg">
            Iniciar Sesión <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center text-white/40 text-sm">
          <p>© 2024 VSTACK. Plataforma Premium de Entretenimiento Vertical.</p>
        </div>
      </footer>
    </div>
  );
}
