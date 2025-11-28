import React from 'react';
import { LAWYER_INFO, WHATSAPP_LINK, LAWYER_IMAGE_URL } from '../constants';
import Button from './Button';
import { ButtonVariant } from '../types';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            
            {/* Image Side - Simple & Clean */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[3/4] md:aspect-square w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-xl bg-gray-100">
                <img 
                  src={LAWYER_IMAGE_URL} 
                  alt={LAWYER_INFO.name} 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-sm font-bold text-alert-600 uppercase tracking-widest mb-2">
                Quem atende você
              </h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">
                {LAWYER_INFO.name}
              </h3>
              <p className="text-navy-800 font-semibold mb-8 flex items-center justify-center md:justify-start gap-2">
                <span className="w-12 h-0.5 bg-navy-800"></span>
                {LAWYER_INFO.oab}
              </p>
              
              <div className="space-y-6 text-gray-600 mb-10 text-lg leading-relaxed">
                <p>
                  Advogado especialista com foco em <strong className="text-navy-900">soluções rápidas e eficientes</strong> para inquilinos.
                </p>
                <p>
                  Entendemos que em casos de pressão imobiliária ou risco de despejo, o <strong className="text-alert-600">tempo é o fator mais crítico</strong>. Por isso, oferecemos um atendimento direto e sem burocracia.
                </p>
                <p className="italic text-gray-500">
                  "Você fala diretamente comigo, sem triagem de atendentes, para garantir a agilidade que seu caso exige."
                </p>
              </div>

              <Button href={WHATSAPP_LINK} variant={ButtonVariant.SECONDARY} className="w-full md:w-auto bg-navy-900">
                Conversar com o Dr. Vítor
              </Button>
            </div>

        </div>
      </div>
    </section>
  );
};

export default About;