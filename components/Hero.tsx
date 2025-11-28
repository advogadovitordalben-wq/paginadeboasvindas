import React from 'react';
import { WHATSAPP_LINK, HERO_BG_IMAGE } from '../constants';
import Button from './Button';
import { ButtonVariant } from '../types';
import { AlertCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-navy-900 text-white overflow-hidden">
      
      {/* Field for Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
            backgroundImage: `url(${HERO_BG_IMAGE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) opacity(100%)' // Darkened and grayscale for seriousness
        }}
      ></div>
      
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/90 to-navy-900 z-10"></div>

      <div className="container relative z-20 mx-auto px-4 text-center max-w-4xl py-12">
        
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 bg-alert-600/20 border border-alert-600/40 px-6 py-2 rounded-full text-alert-500 mb-8 animate-pulse backdrop-blur-sm">
            <AlertCircle className="w-5 h-5" />
            <span className="font-bold tracking-wider uppercase text-sm md:text-base">
                Defesa Urgente para Inquilinos
            </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-8 drop-shadow-lg">
          Problemas com o imóvel ou <br className="hidden md:block"/>
          <span className="text-alert-500">risco de despejo?</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Atendimento online imediato. Saída segura sem multa e defesa estratégica contra cobranças abusivas.
        </p>

        <div className="flex flex-col items-center gap-6">
          <Button 
            href={WHATSAPP_LINK} 
            variant={ButtonVariant.PRIMARY} 
            className="w-full md:w-auto px-12 py-5 text-lg md:text-xl shadow-2xl hover:shadow-green-900/50"
          >
            Falar agora no WhatsApp
          </Button>
          
          <p className="text-sm text-gray-500 italic">
            * Retorno rápido. Seu caso analisado pelo Dr. Vítor Dalben.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
