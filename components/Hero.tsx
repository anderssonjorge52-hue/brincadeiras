import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const checkoutUrl = "https://pay.kiwify.com.br/ciJHiR4";

  const handlePurchaseClick = () => {
    if ((window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-28 overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 text-center relative z-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-slate-100 border border-slate-200 text-slate-600 rounded-full font-black text-[10px] uppercase tracking-widest">
          <Star className="w-3 h-3 text-orange-500 fill-current" /> GUIA MAIS VENDIDO DE 2025
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-slate-950 leading-[0.9] mb-8 tracking-tighter italic">
          CHEGA DE FILHOS <br className="hidden md:block" />
          <span className="text-orange-600 drop-shadow-sm">ESCRAVOS DA TELA.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
          Tire o celular da mão deles com <span className="text-slate-900 font-bold">100+ brincadeiras práticas</span> que estimulam a criatividade e a conexão real em família.
        </p>

        <div className="flex flex-col items-center gap-4 mb-16">
          <a 
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handlePurchaseClick}
            className="btn-dynamic animate-breathe relative inline-flex items-center justify-center px-12 py-7 text-2xl md:text-3xl font-black text-white bg-orange-600 rounded-2xl shadow-[0_20px_50px_rgba(234,88,12,0.3)] transition-all hover:bg-orange-700 hover:scale-105 active:scale-95 cursor-pointer"
          >
            QUERO O ACESSO POR R$ 19,90
            <ArrowRight className="ml-3 w-8 h-8" />
          </a>
        </div>

        <div className="relative mx-auto max-w-4xl mt-4 group">
          <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full scale-110 -z-10"></div>
          <img 
            src="https://i.ibb.co/0pj2fk48/Chat-GPT-Image-6-de-jan-de-2026-18-04-26.png" 
            alt="Preview do Guia" 
            className="w-full max-w-2xl mx-auto drop-shadow-[0_45px_65px_rgba(0,0,0,0.12)] transform group-hover:-translate-y-2 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;