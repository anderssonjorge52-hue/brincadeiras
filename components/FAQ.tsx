
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: "Para qual idade o material é indicado?",
      answer: "O guia foi desenvolvido com atividades para crianças de 2 a 12 anos, com seções específicas para cada fase do desenvolvimento."
    },
    {
      question: "Preciso comprar materiais caros extras?",
      answer: "Não! 95% das brincadeiras utilizam objetos que você já tem em casa (como fita crepe, caixas de papelão, colheres) ou materiais da natureza."
    },
    {
      question: "O acesso é imediato?",
      answer: "Sim! Assim que o pagamento for confirmado, você receberá um e-mail com o link de acesso para baixar seu material completo."
    },
    {
      question: "Posso imprimir as brincadeiras?",
      answer: "Com certeza! O material é um PDF de alta resolução, otimizado tanto para leitura em tablets/celulares quanto para impressão."
    },
    {
      question: "O pagamento é único?",
      answer: "Sim, o pagamento é único. Você paga uma vez e o material é seu para sempre, sem mensalidades."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Perguntas Frequentes</h2>
          <p className="text-slate-600">Tudo o que você precisa saber antes de começar.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border-2 rounded-3xl transition-all ${openIdx === idx ? 'border-blue-500 bg-blue-50/30' : 'border-slate-100'}`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-slate-900 pr-4">{faq.question}</span>
                {openIdx === idx ? <Minus className="w-5 h-5 text-blue-500 flex-shrink-0" /> : <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />}
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-slate-600 leading-relaxed animate-in slide-in-from-top-2 duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
