
import React from 'react';
import { Screen } from '../types';
import { MOCK_DOCS, MOCK_PERSONNEL } from '../mockData';
import BottomNav from './BottomNav';

interface CompanyProfileProps {
  onBack: () => void;
  onNavigate: (screen: Screen) => void;
}

const CompanyProfile: React.FC<CompanyProfileProps> = ({ onBack, onNavigate }) => {
  return (
    <div className="relative flex h-full w-full max-w-md mx-auto flex-col overflow-x-hidden pb-24 bg-white dark:bg-background-dark min-h-screen">
      <header className="flex items-center sticky top-0 z-10 bg-white/90 dark:bg-background-dark/95 backdrop-blur-sm p-4 border-b border-gray-200 dark:border-white/10">
        <button onClick={onBack} className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold flex-1 text-center">Company Documents</h1>
        <button className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>

      <div className="px-4 py-6">
        <div className="bg-slate-100 dark:bg-[#1a2c30] rounded-xl p-5 border border-gray-200 dark:border-white/5 shadow-sm">
          <div className="flex justify-between items-end mb-2">
            <div>
              <p className="font-bold">Profile Completeness</p>
              <p className="text-slate-500 text-xs mt-1">Required for AI Tender matching</p>
            </div>
            <span className="text-primary font-bold text-lg">85%</span>
          </div>
          <div className="h-2 w-full bg-gray-200 dark:bg-black/40 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm">smart_toy</span>
            <p className="text-primary text-xs font-semibold uppercase tracking-wider">AI Ready for most tenders</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between px-4 pb-2">
          <h3 className="text-base font-bold">Corporate Identity</h3>
          <button className="text-primary text-sm font-medium">Manage</button>
        </div>
        <div className="flex flex-col gap-1">
          {MOCK_DOCS.slice(0, 2).map((doc) => (
            <div key={doc.id} className="group flex items-center gap-4 px-4 py-3 hover:bg-slate-50 dark:hover:bg-white/5 border-b border-gray-100 dark:border-white/5 cursor-pointer">
              <div className="flex items-center justify-center rounded-lg bg-red-100 dark:bg-[#283639] text-red-600 dark:text-white shrink-0 size-12">
                <span className="material-symbols-outlined">description</span>
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{doc.name}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs text-slate-500">{doc.type} • {doc.size}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="text-xs text-emerald-600 font-medium">{doc.status}</span>
                </div>
              </div>
              <button className="text-slate-400 p-2"><span className="material-symbols-outlined">more_vert</span></button>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between px-4 pb-3">
          <h3 className="text-base font-bold">Key Personnel (CVs)</h3>
          <button className="text-primary text-sm font-medium">View All</button>
        </div>
        <div className="flex overflow-x-auto gap-3 px-4 pb-4 no-scrollbar">
          {MOCK_PERSONNEL.map((p) => (
            <div key={p.id} className="shrink-0 w-36 p-3 rounded-xl bg-white dark:bg-[#1a2c30] border border-gray-200 dark:border-white/5 flex flex-col items-center text-center shadow-sm">
              <div className="relative mb-2">
                <div className="size-14 rounded-full bg-gray-200 overflow-hidden">
                  <img src={p.image} className="w-full h-full object-cover" alt={p.name} />
                </div>
                <div className="absolute bottom-0 right-0 size-4 bg-emerald-500 border-2 border-white dark:border-[#1a2c30] rounded-full"></div>
              </div>
              <p className="text-sm font-semibold truncate w-full">{p.name}</p>
              <p className="text-xs text-slate-500 truncate w-full mb-2">{p.role}</p>
              <button className="w-full py-1 text-xs font-medium bg-slate-100 dark:bg-white/5 rounded">Edit</button>
            </div>
          ))}
          <div className="shrink-0 w-36 p-3 rounded-xl border-2 border-dashed border-gray-300 dark:border-white/10 flex flex-col items-center justify-center text-center">
            <div className="size-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-2">
              <span className="material-symbols-outlined">add</span>
            </div>
            <p className="text-xs font-medium text-slate-500">Add Team Member</p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-full max-w-xs px-4">
        <button className="w-full shadow-lg shadow-primary/20 bg-primary hover:bg-primary-dark text-white font-bold h-12 rounded-full flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">upload_file</span>
          <span>Upload New Document</span>
        </button>
      </div>

      <BottomNav currentScreen={Screen.COMPANY_PROFILE} onNavigate={onNavigate} />
    </div>
  );
};

export default CompanyProfile;
