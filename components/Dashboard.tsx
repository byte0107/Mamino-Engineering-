
import React from 'react';
import { Screen, Tender } from '../types';
import { MOCK_TENDERS } from '../mockData';
import BottomNav from './BottomNav';

interface DashboardProps {
  onViewTender: (tender: Tender) => void;
  onNavigate: (screen: Screen, filter?: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onViewTender, onNavigate }) => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24">
      {/* TopAppBar */}
      <div className="sticky top-0 z-30 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md transition-colors duration-200">
        <div className="flex items-center p-4 pb-2 justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20" 
                 style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200')` }}></div>
            <div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Re u amogetse hape,</p>
              <h2 className="text-lg font-bold leading-tight tracking-tight">Thabo</h2>
            </div>
          </div>
          <button className="relative flex size-10 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-slate-900 dark:text-white" style={{ fontSize: '24px' }}>notifications</span>
            <span className="absolute top-2 right-2 size-2 rounded-full bg-red-500 ring-2 ring-background-light dark:ring-background-dark"></span>
          </button>
        </div>
      </div>

      {/* KPI Summary Stats */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => onNavigate(Screen.TENDER_LIST, 'New')}
            className="group flex flex-col items-start gap-3 text-left rounded-xl p-5 bg-white dark:bg-[#1E2D30] shadow-sm border border-slate-100 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all active:scale-[0.98]"
          >
            <div className="flex items-center justify-between w-full">
              <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>add_circle</span>
              </div>
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">+4 ncha</span>
            </div>
            <div>
              <p className="text-3xl font-bold tracking-tight mb-1">12</p>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Lithendara tse ncha</p>
            </div>
          </button>
          <button 
            onClick={() => onNavigate(Screen.TENDER_LIST, 'Applied')}
            className="group flex flex-col items-start gap-3 text-left rounded-xl p-5 bg-white dark:bg-[#1E2D30] shadow-sm border border-slate-100 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all active:scale-[0.98]"
          >
            <div className="flex items-center justify-between w-full">
              <div className="size-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>folder_open</span>
              </div>
              <span className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">Active</span>
            </div>
            <div>
              <p className="text-3xl font-bold tracking-tight mb-1">45</p>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Dikopo tsa rona</p>
            </div>
          </button>
        </div>
      </div>

      {/* Top Matches Carousel */}
      <div className="flex flex-col gap-2 pt-2 pb-6">
        <div className="flex items-center justify-between px-4">
          <h3 className="text-lg font-bold leading-tight">Lithendara tse loketseng</h3>
          <button onClick={() => onNavigate(Screen.TENDER_LIST)} className="text-sm font-medium text-primary">Bona kaofela</button>
        </div>
        <div className="flex overflow-x-auto pb-4 pt-2 px-4 gap-4 snap-x snap-mandatory no-scrollbar">
          {MOCK_TENDERS.map((tender) => (
            <div 
              key={tender.id}
              onClick={() => onViewTender(tender)}
              className="snap-start shrink-0 cursor-pointer w-[280px] flex flex-col gap-0 bg-white dark:bg-[#1E2D30] rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <div className="relative w-full h-32 bg-cover bg-center" style={{ backgroundImage: `url('${tender.image}')` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-primary text-background-dark text-xs font-bold px-2 py-1 rounded">{tender.matchScore}% Match</span>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <div>
                  <h4 className="text-base font-bold leading-tight truncate">{tender.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{tender.location}</p>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{tender.budget} Budget</span>
                  <button className="size-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center hover:bg-primary hover:text-white transition-colors group">
                    <span className="material-symbols-outlined text-slate-600 dark:text-slate-300 group-hover:text-white" style={{ fontSize: '18px' }}>arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Progress */}
      <div className="px-4 pb-8">
        <h3 className="text-lg font-bold leading-tight mb-4">Tsoelo-pele ea kopo</h3>
        <div className="bg-white dark:bg-[#1E2D30] p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col gap-5">
            {[
              { label: 'Ho ralo (Drafting)', count: 3, width: '15%', color: 'bg-slate-400 dark:bg-slate-500' },
              { label: 'Tlhahlobo ea ka hare', count: 2, width: '10%', color: 'bg-primary' },
              { label: 'E rometsoe (Submitted)', count: 15, width: '75%', color: 'bg-emerald-500' }
            ].map((p) => (
              <div key={p.label}>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{p.label}</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{p.count}</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className={`h-full ${p.color} rounded-full transition-all duration-1000`} style={{ width: p.width }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav currentScreen={Screen.DASHBOARD} onNavigate={onNavigate} />
    </div>
  );
};

export default Dashboard;
