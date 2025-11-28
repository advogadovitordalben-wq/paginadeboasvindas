import React from 'react';
import { ButtonVariant } from '../types';
import { MessageCircle } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  href?: string;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = ButtonVariant.PRIMARY, 
  onClick, 
  href, 
  className = '',
  fullWidth = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-4 text-base font-bold transition-all duration-300 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    [ButtonVariant.PRIMARY]: "bg-whatsapp hover:bg-green-600 text-white focus:ring-green-500 border border-transparent",
    [ButtonVariant.SECONDARY]: "bg-navy-900 hover:bg-navy-800 text-white focus:ring-navy-900 border border-transparent",
    [ButtonVariant.OUTLINE]: "bg-transparent border-2 border-navy-900 text-navy-900 hover:bg-navy-50"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  const content = (
    <>
      {variant === ButtonVariant.PRIMARY && <MessageCircle className="w-5 h-5 mr-2" />}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
};

export default Button;