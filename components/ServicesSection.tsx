import React from 'react';
import { PROBLEMS, SOLUTIONS, WHATSAPP_LINK } from '../constants';
import Button from './Button';
import { ButtonVariant } from '../types';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-6">
            Como posso ajudar você
          </h2>
          <div className="w-16 h-1 bg-alert-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Problems Column */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-alert-600">
            <h3 className="text-2xl font-bold text-alert-600 mb-8 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6" />
              Situações de Risco
            </h3>
            <ul className="space-y-5">
              {PROBLEMS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <item.icon className="w-6 h-6 text-alert-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-navy-900">
            <h3 className="text-2xl font-bold text-navy-900 mb-8 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6" />
              Soluções Jurídicas
            </h3>
            <ul className="space-y-5">
              {SOLUTIONS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <item.icon className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button href={WHATSAPP_LINK} variant={ButtonVariant.SECONDARY} className="shadow-lg">
            Avaliar Meu Caso Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;