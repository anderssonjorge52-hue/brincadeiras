import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] w-full pointer-events-none">
      {/* Banner Urgência Superior - Mantém eventos de clique para o timer se necessário, ou apenas visual */}
      <div className="w-full bg-orange-600 text-white py-2 text-center shadow-lg border-b border-orange-500 pointer-events-auto">
        <div className="flex items-center justify-center gap-2 md:gap-4 px-4">
          <Zap className="w-3 h-3 md:w-4 h-4 text-yellow-300 animate-pulse fill-current" />
          <span className="font-black text-[9px] md:text-xs uppercase tracking-widest whitespace-nowrap">
            OFERTA DE R$ 19,90 EXPIRA EM: 
            <span className="ml-2 font-mono bg-white/20 px-2 py-0.5 rounded">
              {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </span>
        </div>
      </div>

      {/* Header simplificado sem o ponto e sem o botão de carrinho */}
      <header className={`transition-all duration-300 pointer-events-auto ${isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-lg border-b border-slate-100' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Logo removida conforme solicitado (ponto retirado) */}
            <div className="w-8 h-8 opacity-0"></div> 
          </div>
          
          <div className="flex items-center gap-4">
            {/* Botão de carrinho e preços removidos conforme solicitado */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;