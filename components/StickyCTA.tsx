import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK } from '../constants';
import { MessageCircle } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-whatsapp hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-2xl font-bold transition-colors hover:scale-105"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden md:inline">Falar no WhatsApp</span>
      </a>
    </div>
  );
};

export default StickyCTA;