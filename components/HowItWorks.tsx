
import React from 'react';
import { ShoppingBag, Download, Search, Heart, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <ShoppingBag className="w-10 h-10 text-orange-600" />,
      title: "1. Garanta seu Acesso",
      description: "Clique no botão e finalize sua compra com segurança total via Pix ou Cartão de Crédito.",
      color: "bg-orange-50 border-orange-100"
    },
    {
      icon: <Download className="w-10 h-10 text-blue-600" />,
      title: "2. Receba no E-mail",
      description: "O acesso é imediato! Você recebe um e-mail com o material em PDF pronto para abrir ou imprimir.",
      color: "bg-blue-50 border-blue-100"
    },
    {
      icon: <Search className="w-10 h-10 text-green-600" />,
      title: "3. Escolha a Atividade",
      description: "Navegue pelo guia organizado por idades e temas para encontrar a brincadeira ideal para o momento.",
      color: "bg-green-50 border-green-100"
    },
    {
      icon: <Heart className="w-10 h-10 text-red-600" />,
      title: "4. Brinque e Conecte",
      description: "Guarde as telas e aproveite momentos reais de diversão e aprendizado que seu filho jamais esquecerá.",
      color: "bg-red-50 border-red-100"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 mb-4 tracking-tight">
            É muito simples começar
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Em menos de 2 minutos você terá em mãos o guia definitivo para transformar as férias dos seus filhos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Linha conectora apenas Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className={`p-10 rounded-[2.5rem] border-2 ${step.color} bg-white h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center shadow-sm`}>
                <div className={`w-20 h-20 ${step.color.split(' ')[0]} rounded-3xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                  {step.description}
                </p>
                
                {/* Seta indicativa no Mobile */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden mt-8 text-slate-200">
                    <ArrowRight className="w-6 h-6 rotate-90" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
