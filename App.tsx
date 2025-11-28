import React from 'react';
import Hero from './components/Hero';
import EmpathySection from './components/EmpathySection';
import ServicesSection from './components/ServicesSection';
import WhySection from './components/WhySection';
import About from './components/About';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import { WHATSAPP_LINK } from './constants';
import Button from './components/Button';
import { ButtonVariant } from './types';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-gold-500 selection:text-white">
      <Hero />
      <EmpathySection />
      <ServicesSection />
      <WhySection />
      <About />
      
      {/* Final Strong Call to Action Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <Button href={WHATSAPP_LINK} variant={ButtonVariant.PRIMARY} className="text-lg md:text-xl px-8 py-5 shadow-xl w-full md:w-auto">
            Falar Agora com o Advogado pelo WhatsApp
          </Button>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;