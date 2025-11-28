import { MessageCircle, ShieldAlert, Home, Ban, Gavel, Scale, FileCheck, ShieldCheck } from 'lucide-react';

// Replace with the actual number provided by the user in a real scenario
export const WHATSAPP_NUMBER = "5518997088728"; 
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá Dr. Vítor, gostaria de uma orientação jurídica sobre meu imóvel com urgência.`;

// Field for the background image of the first part (Hero)
export const HERO_BG_IMAGE = "https://i.imgur.com/sBDyHFA.png";

// Lawyer profile image for the About section
export const LAWYER_IMAGE_URL = "https://i.imgur.com/Lh3eChd.png"; 

export const PROBLEMS = [
  { text: "Pressão para desocupar o imóvel", icon: Ban },
  { text: "Problemas estruturais (infiltração, risco)", icon: Home },
  { text: "Multa indevida para saída antecipada", icon: ShieldAlert },
  { text: "Cobranças abusivas", icon: FileCheck },
  { text: "Ação de despejo ou ameaça", icon: Gavel },
];

export const SOLUTIONS = [
  { text: "Saída segura sem multa", icon: ShieldCheck },
  { text: "Negociação jurídica estratégica", icon: MessageCircle },
  { text: "Defesa contra despejo", icon: ShieldAlert },
  { text: "Acompanhamento completo do caso", icon: FileCheck },
  { text: "Ação judicial quando necessário", icon: Scale },
];

export const RISKS = [
  "Pagar multas indevidas",
  "Responder judicialmente",
  "Sofrer cobrança abusiva",
  "Sair sem comprovar seus direitos"
];

export const LAWYER_INFO = {
  name: "Dr. Vítor Dalben",
  oab: "OAB/SP 423.363",
  role: "Advogado Especialista em Direito Imobiliário"
};
