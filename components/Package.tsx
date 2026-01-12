import React from 'react';
import { BookOpen, FolderTree, Zap } from 'lucide-react';

const Package: React.FC = () => {
  const items = [
    {
      icon: <BookOpen className="w-12 h-12 text-blue-600" />,
      title: "Ebook Digital",
      text: "Manual completo com as 100 brincadeiras explicadas passo a passo."
    },
    {
      icon: <FolderTree className="w-12 h-12 text-green-600" />,
      title: "Brincadeiras por Idade",
      text: "Atividades organizadas por tipo e idade para facilitar sua escolha."
    },
    {
      icon: <Zap className="w-12 h-12 text-orange-600" />,
      title: "Atividades Rápidas",
      text: "Ideias fáceis de aplicar em qualquer lugar: casa, viagem ou quintal."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">O que você vai receber</h2>
        <p className="text-slate-600 mb-16 max-w-2xl mx-auto">
          Tudo pensado para facilitar sua rotina e garantir diversão sem estresse para você e seus filhos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="dynamic-border-wrapper h-full hover:-translate-y-2 transition-transform">
              <div className="dynamic-border-bg"></div>
              <div className="dynamic-border-inner p-1 h-full">
                <div className="flex flex-col items-center p-10 bg-white rounded-[2.3rem] h-full shadow-sm">
                  <div className="mb-6 p-4 bg-slate-50 rounded-2xl shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Package;