
import React, { useState, useEffect } from 'react';
import { Tender } from '../types';

interface AIAssistantProps {
  tender: Tender;
  onClose: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ tender, onClose }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 90 ? prev + Math.random() * 5 : prev));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col pb-24 bg-background-light dark:bg-background-dark">
      <div className="sticky top-0 z-50 flex items-center bg-background-light dark:bg-background-dark p-4 border-b border-slate-200 dark:border-slate-800/50 backdrop-blur-md">
        <div className="flex items-center gap-3 flex-1">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <span className="material-symbols-outlined text-primary">smart_toy</span>
          </div>
          <div>
            <h2 className="text-base font-bold">Mamino Assistant</h2>
            <p className="text-xs text-slate-500">Engineering Tender Bot</p>
          </div>
        </div>
        <button onClick={onClose} className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div className="px-5 pt-6 pb-2">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">Active Session</span>
          <span className="text-xs text-slate-500">ID: #TND-{tender.id.split('-').pop()}</span>
        </div>
        <h3 className="tracking-tight text-2xl font-bold leading-tight mb-4">Generating: {tender.title}</h3>
        
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-end">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Processing</p>
            <p className="text-sm font-bold text-primary">{Math.round(progress)}%</p>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <div className="h-full rounded-full bg-primary transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-xs text-slate-500 animate-pulse">Drafting technical proposal content...</p>
        </div>
      </div>

      <hr className="border-t border-slate-200 dark:border-slate-800 my-6 mx-5"/>

      <div className="px-5">
        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Live Activity</h4>
        <div className="grid grid-cols-[32px_1fr] gap-x-4">
          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-[18px]">check</span>
            </div>
            <div className="w-[2px] bg-primary/30 h-full min-h-[24px]"></div>
          </div>
          <div className="pb-6 pt-1">
            <p className="text-base font-medium leading-none mb-1">Context Analysis</p>
            <p className="text-sm text-slate-500">Analyzed RFP requirements and matched with internal portfolio.</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-[18px]">check</span>
            </div>
            <div className="w-[2px] bg-primary/30 h-full min-h-[24px]"></div>
          </div>
          <div className="pb-6 pt-1">
            <p className="text-base font-medium leading-none mb-1">Credential Verification</p>
            <p className="text-sm text-slate-500">Safety certifications and insurance docs retrieved.</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
              <span className="material-symbols-outlined text-[18px] animate-spin">sync</span>
            </div>
            <div className="w-[2px] bg-slate-200 dark:bg-slate-800 h-full min-h-[24px]"></div>
          </div>
          <div className="pb-6 pt-1">
            <p className="text-base font-bold text-primary leading-none mb-1">Drafting Content</p>
            <p className="text-sm text-slate-500">Generating initial drafts for Cover Letter and Technical Proposal.</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-assistant-surface rounded-t-3xl shadow-xl p-5 flex-1 border-t border-slate-100 dark:border-slate-800">
        <h4 className="text-lg font-bold mb-4">Generated Documents</h4>
        <div className="flex flex-col gap-3">
          {[
            { name: 'Cover Letter.pdf', status: 'Ready', icon: 'description', color: 'text-blue-500', bg: 'bg-blue-500/10' },
            { name: 'Technical Proposal.docx', status: 'Drafting', icon: 'engineering', color: 'text-purple-500', bg: 'bg-purple-500/10' }
          ].map((doc) => (
            <div key={doc.name} className="flex items-start gap-4 p-4 rounded-xl bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-700/50">
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${doc.bg} ${doc.color}`}>
                <span className="material-symbols-outlined">{doc.icon}</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h5 className="font-semibold text-sm">{doc.name}</h5>
                  <span className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${doc.status === 'Ready' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}`}>{doc.status}</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">Simulated document processing for current tender.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 z-40">
        <div className="flex gap-3 max-w-md mx-auto">
          <button onClick={onClose} className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-slate-200 dark:bg-slate-800 font-semibold py-3.5 px-4">
            <span className="material-symbols-outlined text-[20px]">pause</span>
            <span>Pause</span>
          </button>
          <button className="flex-[2] flex items-center justify-center gap-2 rounded-xl bg-primary text-white font-bold py-3.5 px-4 shadow-lg shadow-primary/40">
            <span>Export Package</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
