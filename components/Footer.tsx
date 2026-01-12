import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black text-blue-600 mb-1">Pagamento Seguro</h3>
            <p className="text-slate-500 text-sm">Transformando tempo de tela em tempo de qualidade.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Suporte</a>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-slate-100 text-slate-400 text-xs">
          <p>© {new Date().getFullYear()} Pagamento Seguro. Todos os direitos reservados.</p>
          <p className="mt-2">Este material é para uso pessoal e intransferível. A reprodução sem autorização é proibida.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;