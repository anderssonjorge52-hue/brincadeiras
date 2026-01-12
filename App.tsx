import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import Package from './components/Package';
import Offer from './components/Offer';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SocialProof from './components/SocialProof';
import { ArrowRight, ShieldCheck, Heart } from 'lucide-react';

function App() {
  const checkoutUrl = "https://pay.kiwify.com.br/ciJHiR4";

  useEffect(() => {
    const fireViewContent = () => {
      try {
        if ((window as any).fbq) {
          (window as any).fbq('track', 'ViewContent', {
            content_name: 'Guia 100 Brincadeiras',
            content_category: 'Educação Infantil',
            value: 19.90,
            currency: 'BRL'
          });
        }
      } catch (e) {
        console.warn("Pixel ViewContent falhou, tentando novamente...");
        setTimeout(fireViewContent, 2000);
      }
    };
    fireViewContent();
  }, []);

  const handlePurchaseClick = () => {
    if ((window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }
  };

  return (
    <main className="min-h-screen selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      <Header />
      <SocialProof />
      
      {/* 1. HERO */}
      <Hero />

      {/* 2. BARRA DE STATUS */}
      <div className="bg-slate-950 py-3 overflow-hidden whitespace-nowrap border-y border-white/5 relative z-10">
        <div className="animate-marquee gap-10 items-center text-white/70 font-black text-[10px] md:text-xs uppercase tracking-widest flex">
          {[...Array(15)].map((_, i) => (
            <span key={i} className="flex items-center gap-3">
              <span className="text-orange-500 text-lg">●</span> 
              PROMOÇÃO DE FÉRIAS ATIVA
              <span className="text-blue-500">●</span> 
              ACESSO IMEDIATO NO E-MAIL
            </span>
          ))}
        </div>
      </div>

      {/* 3. PROVA SOCIAL */}
      <div className="bg-slate-50 border-b border-slate-100 pb-16 pt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.3em] mb-12">Confiado por milhares de pais reais</p>
        </div>
        <Testimonials />
      </div>

      {/* 4. A AGITAÇÃO DA DOR */}
      <PainPoints />

      {/* 5. A SOLUÇÃO COMPLETA */}
      <Solution />
      
      {/* 6. O QUE ESTÁ INCLUSO */}
      <Package />

      {/* CTA DE MEIO DE PÁGINA */}
      <section className="py-24 bg-blue-700 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 italic leading-[1.1] tracking-tighter">
            Não deixe as férias do seu filho passarem em branco.
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 font-medium">
            Por menos de um lanche, você garante um ano inteiro de ideias e conexão.
          </p>
          <a 
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handlePurchaseClick}
            className="btn-dynamic bg-orange-500 hover:bg-orange-600 text-white px-12 py-7 rounded-3xl font-black text-2xl md:text-3xl shadow-[0_25px_50px_rgba(234,88,12,0.4)] inline-flex items-center gap-4 transition-all hover:scale-105"
          >
            QUERO O GUIA AGORA <ArrowRight className="w-9 h-9" />
          </a>
          <div className="mt-8 flex items-center justify-center gap-4 text-blue-200 text-sm font-bold uppercase tracking-widest">
            <ShieldCheck className="w-5 h-5" /> Garantia total de satisfação
          </div>
        </div>
      </section>

      {/* 7. OFERTA COMPLETA & BÔNUS */}
      <Offer />

      {/* 8. COMO FUNCIONA & FAQ */}
      <HowItWorks />
      
      {/* FECHAMENTO EMOCIONAL */}
      <section className="py-28 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <div className="gold-border-wrapper">
            <div className="gold-border-bg"></div>
            <div className="gold-border-inner p-12 md:p-20 bg-white">
              <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-10 ring-8 ring-orange-100/50">
                <Heart className="w-12 h-12 text-orange-600 fill-current" />
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-8 leading-tight tracking-tighter">
                Eles só são crianças <br/>
                <span className="text-orange-500 italic">uma única vez.</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                Daqui a 10 anos, eles não vão lembrar do jogo no celular, mas vão lembrar daquela tarde que brincaram juntos.
              </p>
              <a 
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handlePurchaseClick}
                className="btn-dynamic animate-breathe inline-flex items-center justify-center px-14 py-7 bg-orange-600 text-white font-black text-2xl md:text-3xl rounded-3xl shadow-2xl transition-all hover:bg-orange-700 hover:scale-105"
              >
                SIM, QUERO CRIAR ESSAS MEMÓRIAS
                <ArrowRight className="ml-4 w-9 h-9" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}

export default App;