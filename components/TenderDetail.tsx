
import React, { useState, useEffect } from 'react';
import { Tender } from '../types';
import { getTenderSummary } from '../geminiService';

interface TenderDetailProps {
  tender: Tender;
  onBack: () => void;
  onApply: () => void;
}

const TenderDetail: React.FC<TenderDetailProps> = ({ tender, onBack, onApply }) => {
  const [aiSummary, setAiSummary] = useState<string>("Analyzing tender documents for a simplified overview...");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      setIsLoading(true);
      const summary = await getTenderSummary(tender.title, tender.client);
      setAiSummary(summary);
      setIsLoading(false);
    };
    fetchSummary();
  }, [tender]);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen flex flex-col">
      <header className="flex-none bg-background-light dark:bg-background-dark z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 pb-2 justify-between">
          <button onClick={onBack} className="text-slate-900 dark:text-white flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex-1 text-center px-2">
            <span className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">Tender View</span>
          </div>
          <button className="text-slate-900 dark:text-white flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition">
            <span className="material-symbols-outlined">bookmark_border</span>
          </button>
        </div>
        <div className="px-4 pb-4">
          <h1 className="text-xl md:text-2xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white mb-1">{tender.title}</h1>
          <div className="flex items-center text-slate-500 dark:text-[#9db4b9] text-xs font-normal">
            <span className="material-symbols-outlined text-[16px] mr-1">business</span>
            <span className="truncate">{tender.client}</span>
            <span className="mx-2">•</span>
            <span className="uppercase">ID: {tender.id}</span>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <div className="p-4 space-y-4">
          <div className="bg-white dark:bg-card-dark rounded-xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Match Score</p>
              <div className="flex items-baseline gap-2">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white">{tender.matchScore}%</h2>
                <span className="text-[#0bda54] text-sm font-bold flex items-center">
                  <span className="material-symbols-outlined text-sm mr-0.5">trending_up</span> High
                </span>
              </div>
              <p className="text-slate-400 dark:text-slate-500 text-xs mt-2 max-w-[160px]">Based on 3 similar projects in your history.</p>
            </div>
            <div className="relative size-20 flex-shrink-0">
              <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke-current text-gray-200 dark:text-gray-700" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
                <circle className="stroke-current text-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray="100" strokeDashoffset={100 - tender.matchScore} strokeLinecap="round" strokeWidth="3"></circle>
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="material-symbols-outlined text-primary text-2xl">verified</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-card-dark rounded-xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium flex items-center">
                <span className="material-symbols-outlined text-sm mr-1">timer</span> Submission Deadline
              </p>
              <span className="text-amber-500 text-xs font-bold uppercase tracking-wide">Urgent</span>
            </div>
            <div className="flex gap-2">
              {['Days', 'Hrs', 'Min', 'Sec'].map((label, i) => (
                <div key={label} className="flex-1 flex flex-col items-center bg-gray-50 dark:bg-surface-dark rounded-lg py-2">
                  <span className="text-lg font-bold">0{2-i < 0 ? 0 : 2-i}</span>
                  <span className="text-[10px] uppercase text-slate-500">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-4 mb-4">
          <div className="rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-900/10 overflow-hidden">
            <div className="p-3 border-b border-red-100 dark:border-red-900/30 flex items-center gap-2">
              <span className="material-symbols-outlined text-red-600 dark:text-red-400">warning</span>
              <h3 className="text-red-800 dark:text-red-200 text-sm font-bold">Disqualification Risks</h3>
            </div>
            <div className="p-3 space-y-3">
              <div className="flex gap-3 items-start">
                <div className="mt-0.5 size-1.5 rounded-full bg-red-500 shrink-0"></div>
                <p className="text-sm leading-tight">Bid bond must be submitted as a <strong>physical copy</strong> before the deadline.</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="mt-0.5 size-1.5 rounded-full bg-red-500 shrink-0"></div>
                <p className="text-sm leading-tight">Safety Officer CV is currently <span className="text-red-600 dark:text-red-400 font-semibold">missing</span> from your profile.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 mb-6">
          <div className="bg-white dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="size-6 rounded bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
              </div>
              <h3 className="font-semibold text-base">AI Plain Summary</h3>
            </div>
            <div className={`text-slate-600 dark:text-slate-300 text-sm leading-relaxed ${isLoading ? 'animate-pulse' : ''}`}>
              {aiSummary}
            </div>
            <div className="mt-4 flex gap-2 flex-wrap">
              {tender.tags.map(t => (
                <span key={t} className="px-2 py-1 rounded bg-slate-100 dark:bg-surface-dark text-slate-600 dark:text-slate-400 text-xs font-medium border border-gray-200 dark:border-gray-700">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-light dark:from-background-dark pt-12 z-40">
        <button onClick={onApply} className="w-full h-14 bg-primary hover:bg-primary-dark text-white rounded-xl shadow-lg shadow-primary/25 flex items-center justify-between px-6 transition active:scale-[0.98]">
          <div className="flex flex-col items-start">
            <span className="text-xs font-medium text-white/80 uppercase tracking-wide">Ready to start?</span>
            <span className="text-base font-bold">Apply with AI</span>
          </div>
          <div className="bg-white/20 rounded-full p-2">
            <span className="material-symbols-outlined text-white">arrow_forward</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default TenderDetail;
