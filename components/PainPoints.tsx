
import React from 'react';
import { Smartphone, Frown, Clock, HeartOff } from 'lucide-react';

const PainPoints: React.FC = () => {
  const pains = [
    {
      icon: <Smartphone className="w-12 h-12 text-orange-600" />,
      text: "Crianças entediadas pedindo celular o dia todo"
    },
    {
      icon: <Frown className="w-12 h-12 text-blue-700" />,
      text: "Pais sem ideias do que fazer em casa"
    },
    {
      icon: <Clock className="w-12 h-12 text-green-700" />,
      text: "Falta de tempo e energia para planejar brincadeiras"
    },
    {
      icon: <HeartOff className="w-12 h-12 text-red-600" />,
      text: "Poucos momentos reais de conexão em família"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 mb-4">
            As férias chegam… e junto vêm esses desafios
          </h2>
          <div className="w-24 h-2 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pains.map((pain, idx) => (
            <div key={idx} className="dynamic-border-wrapper h-full">
              <div className="dynamic-border-bg"></div>
              <div className="dynamic-border-inner p-1 h-full">
                <div className="h-full p-8 bg-white rounded-[2.3rem] flex flex-col items-center text-center group">
                  <div className="mb-6 inline-block p-5 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    {pain.icon}
                  </div>
                  <p className="text-xl font-bold text-slate-900 leading-tight">
                    {pain.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
