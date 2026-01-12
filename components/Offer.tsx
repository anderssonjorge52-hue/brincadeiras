import React from 'react';
import { Check, ShieldCheck, ArrowRight, Gift, Star } from 'lucide-react';

const Offer: React.FC = () => {
  const checkoutUrl = "https://pay.kiwify.com.br/ciJHiR4";
  const oldPrice = 257.00;
  const currentPrice = 19.90;
  const savings = oldPrice - currentPrice;

  const handlePurchaseClick = () => {
    if ((window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }
  };

  return (
    <section id="oferta" className="py-24 md:py-32 bg-slate-50 relative overflow-visible border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 p-8 md:p-12 lg:p-20">
              <div className="inline-block px-5 py-2 bg-blue-700 text-white rounded-full font-black text-sm uppercase mb-8 tracking-widest border border-blue-800">
                Oferta Exclusiva de Férias
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 mb-8 leading-tight">Acesso completo ao material 100 Brincadeiras Criativas</h2>

              <div className="mb-12 relative group max-w-lg mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-blue-100 blur-3xl opacity-30 rounded-[3rem] -z-10 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-white p-4 rounded-[3rem] border-4 border-slate-50 shadow-2xl overflow-hidden aspect-[4/3] flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                  <img 
                    src="https://i.ibb.co/0pj2fk48/Chat-GPT-Image-6-de-jan-de-2026-18-04-26.png" 
                    alt="Capa do Produto 100 Brincadeiras" 
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                  <div className="absolute top-6 left-6 bg-orange-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg flex items-center gap-2">
                    <Star className="w-3 h-3 fill-current" /> Material Premium
                  </div>
                </div>
              </div>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-center gap-5 text-slate-900 font-bold text-lg md:text-xl">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-green-500">
                    <Check className="w-5 h-5 text-green-700" />
                  </div>
                  Acesso imediato após a confirmação
                </li>
                <li className="flex items-center gap-5 text-slate-900 font-bold text-lg md:text-xl">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-green-500">
                    <Check className="w-5 h-5 text-green-700" />
                  </div>
                  Material 100% digital em PDF de alta qualidade
                </li>
              </ul>

              <div className="border-t-4 border-dashed border-slate-100 pt-12">
                <h3 className="text-3xl font-black text-slate-950 mb-10 flex items-center gap-4">
                  <Gift className="w-10 h-10 text-orange-600" /> Seus 3 Bônus Exclusivos:
                </h3>
                
                <div className="space-y-12">
                  <div className="p-6 md:p-10 rounded-[2.5rem] border-2 border-orange-300 bg-orange-50 relative overflow-hidden shadow-sm group">
                    <div className="absolute top-0 right-0 bg-orange-600 text-white px-6 py-1 text-xs font-black uppercase tracking-tighter rounded-bl-xl z-20">BÔNUS 1</div>
                    <div className="mb-8 w-full max-w-[280px] mx-auto aspect-[3/4] bg-white rounded-3xl shadow-xl border-4 border-white overflow-hidden transition-transform duration-500 group-hover:scale-[1.03]">
                      <img src="https://i.ibb.co/tpjKxJyJ/Chat-GPT-Image-5-de-jan-de-2026-23-05-06.png" alt="Ebook Birras" className="w-full h-full object-cover" />
                    </div>
                    <p className="font-black text-slate-950 text-xl md:text-3xl text-center leading-tight">🧠 Como lidar com as birras <br/><span className="text-orange-700 font-black italic mt-2 inline-block">GRÁTIS</span></p>
                  </div>

                  <div className="p-6 md:p-10 rounded-[2.5rem] border-2 border-green-300 bg-green-50 relative overflow-hidden shadow-sm group">
                    <div className="absolute top-0 right-0 bg-green-600 text-white px-6 py-1 text-xs font-black uppercase tracking-tighter rounded-bl-xl z-20">BÔNUS 2</div>
                    <div className="mb-8 w-full max-w-[280px] mx-auto aspect-[3/4] bg-white rounded-3xl shadow-xl border-4 border-white overflow-hidden transition-transform duration-500 group-hover:scale-[1.03]">
                      <img src="https://i.ibb.co/XfFRQZGV/f08b0e23-fa37-4e47-88ef-416a5360f7e9.png" alt="Checklist" className="w-full h-full object-cover" />
                    </div>
                    <p className="font-black text-slate-950 text-xl md:text-3xl text-center leading-tight">📋 Checklist de rotina infantil <br/><span className="text-green-700 font-black italic mt-2 inline-block">GRÁTIS</span></p>
                  </div>

                  <div className="p-6 md:p-10 rounded-[2.5rem] border-2 border-indigo-300 bg-indigo-50 relative overflow-hidden shadow-sm group">
                    <div className="absolute top-0 right-0 bg-indigo-600 text-white px-6 py-1 text-xs font-black uppercase tracking-tighter rounded-bl-xl z-20">BÔNUS 3</div>
                    <div className="mb-8 w-full max-w-[280px] mx-auto aspect-[3/4] bg-white rounded-3xl shadow-xl border-4 border-white overflow-hidden transition-transform duration-500 group-hover:scale-[1.03]">
                      <img src="https://i.ibb.co/JwxhJGhr/0714ecb7-0e43-4523-bca8-fc7378b558bb.png" alt="Hábitos" className="w-full h-full object-cover" />
                    </div>
                    <p className="font-black text-slate-950 text-xl md:text-3xl text-center leading-tight">🌱 Novos hábitos nos filhos <br/><span className="text-indigo-700 font-black italic mt-2 inline-block">GRÁTIS</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-slate-100/50 p-10 md:p-16 lg:p-20 flex flex-col justify-center text-center border-l border-slate-200 relative z-20">
              <p className="text-slate-900 font-black text-sm uppercase mb-8 tracking-widest">Total do Investimento</p>
              
              <div className="mb-12">
                <p className="text-red-500 line-through text-3xl font-black mb-2 opacity-80">R$ {oldPrice.toFixed(2).replace('.', ',')}</p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-5xl font-black text-slate-950">R$</span>
                  <span className="text-8xl md:text-9xl font-black text-blue-700 tracking-tighter">19,90</span>
                </div>
                <div className="mt-12 p-6 bg-green-200 text-green-900 rounded-[2rem] border-4 border-green-500 shadow-xl">
                   <p className="font-black text-2xl uppercase tracking-tighter">Economia de R$ {savings.toFixed(2).replace('.', ',')}!</p>
                </div>
              </div>

              <a 
                href={checkoutUrl}
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handlePurchaseClick}
                className="btn-dynamic animate-breathe group w-full py-8 px-8 bg-[#16a34a] text-white rounded-3xl shadow-xl shadow-green-200/50 flex items-center justify-between transition-all hover:bg-green-700 hover:scale-[1.02] cursor-pointer relative z-50"
                style={{ display: 'flex' }}
              >
                <div className="flex flex-col items-start leading-tight pointer-events-none">
                  <span className="text-xl md:text-2xl font-black uppercase tracking-tighter">SIM, QUERO</span>
                  <span className="text-xl md:text-2xl font-black uppercase tracking-tighter">TUDO</span>
                </div>
                <ArrowRight className="w-10 h-10 group-hover:translate-x-2 transition-transform pointer-events-none" />
              </a>

              <div className="mt-12 flex flex-col gap-8 text-base text-slate-900 font-black">
                <div className="flex items-center justify-center gap-3 text-green-700 bg-white py-3 rounded-full border-2 border-green-200">
                  <ShieldCheck className="w-8 h-8" /> Pagamento 100% Seguro
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;