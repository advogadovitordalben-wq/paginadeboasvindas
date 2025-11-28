import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import Button from './Button';
import { ButtonVariant } from '../types';

const EmpathySection: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy-900 mb-6">
          Você não precisa enfrentar isso sozinho
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          Se o proprietário está pressionando você, o imóvel tem problemas ou há risco de despejo, 
          existe solução jurídica para proteger seus direitos e evitar prejuízos financeiros e emocionais.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm inline-block">
          <p className="font-semibold text-navy-900 mb-4">
            Converse agora diretamente com o advogado.
          </p>
          <Button href={WHATSAPP_LINK} variant={ButtonVariant.PRIMARY}>
            Atendimento Imediato no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmpathySection;