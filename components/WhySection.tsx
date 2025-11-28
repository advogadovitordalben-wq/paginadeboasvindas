import React from 'react';
import { RISKS, WHATSAPP_LINK } from '../constants';
import Button from './Button';
import { ButtonVariant } from '../types';
import { X, Check } from 'lucide-react';

const WhySection: React.FC = () => {
  return (
    <section className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
          O risco de <span className="text-alert-500">não agir agora</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Risk Card */}
          <div className="bg-navy-800 p-8 rounded-lg border border-alert-700/30">
            <h3 className="text-xl font-bold text-alert-500 mb-6 uppercase tracking-wider flex items-center gap-2">
              <X className="w-6 h-6" /> Sem orientação
            </h3>
            <ul className="space-y-4">
              {RISKS.map((risk, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <X className="w-5 h-5 text-alert-500 mt-0.5 shrink-0" />
                  <span>{risk}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefit Card */}
          <div className="bg-navy-800 p-8 rounded-lg border border-green-700/30">
            <h3 className="text-xl font-bold text-green-500 mb-6 uppercase tracking-wider flex items-center gap-2">
               <Check className="w-6 h-6" /> Com Dr. Vítor
            </h3>
            <p className="text-lg leading-relaxed text-gray-200 mb-6">
              A saída ou defesa acontece com <strong className="text-white">estratégia</strong>, <strong className="text-white">documentação correta</strong> e <strong className="text-white">sem exposição desnecessária</strong>.
            </p>
            <div className="flex items-center gap-2 text-green-400 font-bold">
               <Check className="w-5 h-5" />
               <span>Segurança jurídica garantida</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button href={WHATSAPP_LINK} variant={ButtonVariant.PRIMARY} className="w-full md:w-auto px-10">
            Quero Orientação Imediata
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhySection;