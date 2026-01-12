
import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Check } from 'lucide-react';

const names = [
  "Ana Júlia", "Gustavo", "Josué", "Camila", "Marcos", 
  "Beatriz", "Henrique", "Fernanda", "Luciana", "Tiago",
  "Rafael", "Mariana", "André", "Patrícia", "Cláudio",
  "Renata", "Felipe", "Letícia", "Bruno", "Sônia"
];

const SocialProof: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [currentName, setCurrentName] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    let timeoutId: number;

    const showDuration = 5000; // Tempo visível (5 segundos)
    const pauseDuration = 10000; // Intervalo entre notificações (10 segundos)

    const triggerNotification = () => {
      setCurrentName(names[indexRef.current]);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
        indexRef.current = (indexRef.current + 1) % names.length;
        // Agenda a próxima notificação 10 segundos após a atual sumir
        timeoutId = window.setTimeout(triggerNotification, pauseDuration);
      }, showDuration);
    };

    // Inicia a primeira notificação após um pequeno delay inicial
    timeoutId = window.setTimeout(triggerNotification, 4000);

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div 
      className={`fixed top-24 md:top-28 right-4 md:right-8 z-[200] transition-all duration-700 ease-out transform ${
        visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white/90 backdrop-blur-md border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.08)] rounded-xl p-1.5 flex items-center gap-2 max-w-[190px] border-l-4 border-l-green-500">
        <div className="relative flex-shrink-0">
          <div className="w-7 h-7 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
            <ShoppingBag className="w-3.5 h-3.5" />
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center text-white border border-white shadow-sm">
            <Check className="w-2 h-2" />
          </div>
        </div>
        
        <div className="text-left overflow-hidden">
          <p className="text-[9px] text-slate-500 font-medium leading-tight truncate">
            <span className="font-bold text-slate-900 text-[10px] block leading-none">{currentName}</span>
            comprou agora
          </p>
          <div className="flex items-center gap-1 mt-0.5">
            <div className="flex gap-0.5">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-0.5 h-0.5 bg-orange-400 rounded-full" />
              ))}
            </div>
            <p className="text-[8px] text-green-600 font-bold uppercase tracking-tight">Verificado</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
