'use client';

import { Check } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { mockUsers, mockPlans } from '@/data/mock';

const user = mockUsers.user_1;

export default function SubscriptionPage() {
  const currentPlan = user.subscription;

  return (
    <DashboardLayout userRole="user" userName={user.name} userAvatar={user.avatar}>
      <h1 className="text-3xl font-bold text-white mb-8">Planes de Suscripción</h1>

      {currentPlan && currentPlan.status === 'active' && (
        <div className="glass p-6 rounded-xl mb-8 bg-gradient-to-r from-green-500/10 to-red-500/10 border border-green-500/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm mb-1">Plan Actual</p>
              <h2 className="text-2xl font-bold text-white mb-1">{currentPlan.name}</h2>
              <p className="text-white/60 text-sm">Renovación el {currentPlan.expiresAt}</p>
            </div>
            <Badge variant="success">Activo</Badge>
          </div>
        </div>
      )}

      {/* Plans Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {mockPlans.map((plan) => {
          const isCurrentPlan = currentPlan?.name === plan.name && currentPlan?.status === 'active';
          return (
            <div
              key={plan.id}
              className={`glass p-6 rounded-xl border-2 transition-all ${
                plan.featured ? 'border-red-400 bg-red-500/5 transform scale-105' : isCurrentPlan ? 'border-green-500/50' : 'border-white/10'
              }`}
            >
              {plan.featured && (
                <div className="mb-3">
                  <Badge variant="primary">
                    Recomendado
                  </Badge>
                </div>
              )}
              {isCurrentPlan && (
                <div className="mb-3">
                  <Badge variant="success">
                    Tu Plan Actual
                  </Badge>
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-white/70 text-sm mb-4">{plan.description}</p>
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-white">${plan.price}</span>
                  <span className="text-white/60 text-sm">/mes</span>
                </div>
                {plan.monthlyEquivalent && plan.monthlyEquivalent < plan.price && (
                  <p className="text-green-400 text-sm">Ahorra ${(plan.price - plan.monthlyEquivalent).toFixed(2)}/mes</p>
                )}
              </div>
              <Button
                variant={isCurrentPlan ? 'secondary' : plan.featured ? 'primary' : 'secondary'}
                size="md"
                className="w-full mb-6"
              >
                {isCurrentPlan ? 'Plan Actual' : 'Suscribirse'}
              </Button>
              <div className="space-y-3">
                {plan.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* FAQ */}
      <section className="glass p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-white mb-6">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {[
            {
              q: '¿Puedo cambiar mi plan?',
              a: 'Sí, puedes cambiar entre planes en cualquier momento. Los cambios se reflejan en tu próxima renovación.',
            },
            {
              q: '¿Hay período de prueba gratuito?',
              a: 'Sí, los nuevos usuarios tienen acceso a 7 días gratis de Premium Plus. Válido una sola vez.',
            },
            {
              q: '¿Puedo compartir mi cuenta?',
              a: 'Con Premium Plus puedes usar tu cuenta en hasta 4 dispositivos simultáneamente.',
            },
            {
              q: '¿Cómo cancelo mi suscripción?',
              a: 'Puedes cancelar en cualquier momento desde tu perfil. Perderás acceso al contenido premium cuando se venza tu período.',
            },
          ].map((item, idx) => (
            <div key={idx} className="border-b border-white/10 pb-4 last:border-0">
              <h4 className="font-semibold text-white mb-2">{item.q}</h4>
              <p className="text-white/60 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
}
