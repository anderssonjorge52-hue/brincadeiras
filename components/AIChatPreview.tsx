import React, { useState } from 'react';
import { Sparkles, Loader2, Send, CheckCircle2, ListChecks, PlayCircle, Settings, RefreshCw, FileWarning } from 'lucide-react';
import { generateQuickGameIdea } from '../services/geminiService';

const AIChatPreview: React.FC = () => {
  const [theme, setTheme] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'error' | 'config_error' | 'success'>('idle');
  const [result, setResult] = useState<{title: string, materials: string[], instructions: string} | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!theme || loading) return;
    
    setLoading(true);
    setStatus('idle');
    setResult(null);

    try {
      const idea = await generateQuickGameIdea(theme);
      if (idea) {
        setResult(idea);
        setStatus('success');
      }
    } catch (err: any) {
      console.error("Erro detectado:", err.message);
      // Verificação segura de variável de ambiente
      const hasKey = (() => {
        try {
          // @ts-ignore
          return typeof process !== 'undefined' && process.env && process.env.API_KEY;
        } catch { return false; }
      })();

      if (err.message.includes("MISSING_API_KEY") || !hasKey) {
        setStatus('config_error');
      } else {
        setStatus('error');
      }
    } finally {
      setLoading(false);
    }
  };

  const quickThemes = ['Papelão', 'No Escuro', 'Com Água', 'Cozinha'];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100" id="gerador">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 rounded-full text-blue-700 font-black text-xs uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4" /> Inteligência Artificial
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight italic">Criador de Brincadeiras</h2>
          <p className="text-slate-600 text-lg font-medium">Teste o poder do material criando uma ideia agora!</p>
        </div>

        <div className="bg-white rounded-[3rem] p-6 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-200">
          {status === 'config_error' && (
            <div className="mb-10 p-8 bg-amber-50 border-2 border-amber-200 rounded-[2.5rem] animate-in zoom-in-95">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Settings className="w-8 h-8 text-amber-600 animate-spin-slow" />
                </div>
                <h3 className="text-2xl font-black text-amber-900 mb-2">A IA ainda não "acordou"</h3>
                <p className="text-amber-700 font-bold">Você fez o upload, mas faltam 2 detalhes no Netlify:</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm">
                  <div className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-slate-300 shrink-0" />
                    <div>
                      <p className="font-black text-slate-900 text-sm">Passo 1: Variável</p>
                      <p className="text-xs text-slate-500 mt-1">Verifique se o nome é <code className="bg-slate-100 px-1">API_KEY</code>.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm">
                  <div className="flex gap-4 items-start">
                    <RefreshCw className="w-6 h-6 text-blue-500 animate-spin shrink-0" />
                    <div>
                      <p className="font-black text-slate-900 text-sm">Passo 2: Re-Upload</p>
                      <p className="text-xs text-slate-500 mt-1">Vá em <strong>Deploys</strong> e arraste a pasta de novo para ler a chave.</p>
                    </div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => window.location.reload()}
                className="mt-6 w-full py-4 bg-amber-500 text-white font-black rounded-xl hover:bg-amber-600 transition-all text-sm uppercase tracking-widest"
              >
                Já fiz isso, tentar de novo!
              </button>
            </div>
          )}

          <form onSubmit={handleGenerate} className="flex flex-col md:flex-row gap-4 mb-8">
            <input 
              type="text"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              placeholder="Ex: No sofá, Com colheres..."
              className="flex-grow px-6 py-5 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-orange-500 focus:bg-white focus:outline-none text-lg transition-all font-bold"
            />
            <button 
              disabled={loading || !theme}
              className="px-10 py-5 bg-orange-600 text-white font-black rounded-2xl hover:bg-orange-700 transition-all shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 min-w-[160px]"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <><Send className="w-5 h-5" /> CRIAR</>}
            </button>
          </form>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {quickThemes.map(t => (
              <button 
                key={t}
                type="button"
                onClick={() => setTheme(t)}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all border-2 ${theme === t ? 'bg-orange-600 text-white border-orange-600' : 'bg-white text-slate-400 border-slate-200 hover:border-orange-400 hover:text-orange-600'}`}
              >
                {t}
              </button>
            ))}
          </div>

          {result && (
            <div className="p-8 md:p-12 bg-blue-50/50 rounded-[3rem] border-2 border-blue-100 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-2xl md:text-4xl font-black text-slate-950 mb-8 leading-tight">{result.title}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h4 className="flex items-center gap-2 text-slate-900 font-black text-sm uppercase tracking-wider">
                    <ListChecks className="w-5 h-5 text-orange-600" /> Materiais
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {result.materials.map((m, i) => (
                      <li key={i} className="px-5 py-3 bg-white rounded-xl border border-slate-100 text-slate-700 font-bold text-sm shadow-sm flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full" /> {m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="flex items-center gap-2 text-slate-900 font-black text-sm uppercase tracking-wider">
                    <PlayCircle className="w-5 h-5 text-orange-600" /> Como Brincar
                  </h4>
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-slate-800 leading-relaxed font-medium italic">{result.instructions}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {status === 'idle' && !loading && (
            <div className="py-20 text-center text-slate-200 border-4 border-dashed border-slate-50 rounded-[3rem]">
              <Sparkles className="w-16 h-16 mb-4 opacity-10 mx-auto" />
              <p className="text-2xl font-black opacity-10 italic">O que vamos criar agora?</p>
            </div>
          )}

          {status === 'error' && (
            <div className="p-8 bg-red-50 border-2 border-red-200 rounded-[2.5rem] text-center">
              <FileWarning className="w-10 h-10 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-black text-red-900 mb-2">Ops! Algo deu errado.</h3>
              <p className="text-red-700 text-sm font-bold">Tente atualizar a página ou verificar sua conexão.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIChatPreview;