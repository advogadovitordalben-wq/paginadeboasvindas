import { MessageCircle, ShieldAlert, Home, Ban, Gavel, Scale, FileCheck, ShieldCheck } from 'lucide-react';

// ==================================================================================
// GUIA RÁPIDO PARA NÃO-PROGRAMADORES
// ==================================================================================
// 1. NÃO apague as aspas "" que ficam em volta dos textos.
// 2. Para as imagens, você precisa de um link da internet (URL).
//    Se a foto está no seu computador, suba ela em sites como "Postimages.org" 
//    e copie o "Link Direto" (que termina em .jpg ou .png).
// ==================================================================================


// --- 1. CONFIGURAÇÃO DO WHATSAPP ---
// Digite apenas os números. O site cria o link do botão sozinho.
// Exemplo: "55" (Brasil) + "11" (DDD) + "999999999" (Seu número)
export const WHATSAPP_NUMBER = "5511999999999"; 

// Esta é a mensagem automática que aparece quando o cliente clica. Pode alterar o texto dentro das aspas.
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá Dr. Vítor, gostaria de uma orientação jurídica sobre meu imóvel com urgência.`;


// --- 2. CONFIGURAÇÃO DAS IMAGENS ---

// IMAGEM DE FUNDO (Topo do site)
// Cole o Link Direto da sua imagem dentro das aspas abaixo.
export const HERO_BG_IMAGE = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=2000";

// FOTO DO ADVOGADO (Final do site)
// Cole o Link Direto da sua foto dentro das aspas abaixo.
export const LAWYER_IMAGE_URL = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"; 


// --- 3. INFORMAÇÕES DO ADVOGADO ---

export const LAWYER_INFO = {
  name: "Dr. Vítor Dalben",
  oab: "OAB/SP 423.363",
  role: "Advogado Especialista em Direito Imobiliário"
};


// --- 4. TEXTOS DO SITE (Avançado) ---
// Altere os textos abaixo apenas se quiser mudar os itens das listas.

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
