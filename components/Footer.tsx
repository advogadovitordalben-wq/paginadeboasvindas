import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-gray-500 py-12 text-sm">
      <div className="container mx-auto px-4 max-w-4xl text-center space-y-4">
        <p>
          A orientação é realizada conforme a legislação vigente e normas éticas da advocacia. 
          Não há promessa de resultado ou garantia de êxito em processos judiciais.
        </p>
        <div className="pt-8 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Dalben Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;