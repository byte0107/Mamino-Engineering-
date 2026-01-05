
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
              <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tight">Welcome back,</p>
              <h2 className="text-lg font-bold leading-tight tracking-tight">Thabo Mokoena</h2>
            </div>
          </div>
          <button className="relative flex size-10 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-800">
            <span className="material-symbols-outlined text-slate-900 dark:text-white" style={{ fontSize: '22px' }}>notifications</span>
            <span className="absolute top-2 right-2 size-2.5 rounded-full bg-red-500 ring-2 ring-background-light dark:ring-background-dark"></span>
          </button>
        </div>
      </div>

      {/* KPI Summary Stats - Interactive Buttons */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => onNavigate(Screen.TENDER_LIST, 'New')}
            className="group flex flex-col items-start gap-3 text-left rounded-2xl p-5 bg-white dark:bg-[#1E2D30] shadow-sm border border-slate-100 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all active:scale-[0.96] hover:shadow-md"
          >
            <div className="flex items-center justify-between w-full">
              <div className="size-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>add_circle</span>
              </div>
              <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">+4 ncha</span>
            </div>
            <div>
              <p className="text-3xl font-bold tracking-tight mb-0.5">12</p>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400">New Tenders</p>
              <p className="text-[10px] text-slate-400 font-medium">Lithendara tse ncha</p>
            </div>
          </button>
          <button 
            onClick={() => onNavigate(Screen.TENDER_LIST, 'Applied')}
            className="group flex flex-col items-start gap-3 text-left rounded-2xl p-5 bg-white dark:bg-[#1E2D30] shadow-sm border border-slate-100 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all active:scale-[0.96] hover:shadow-md"
          >
            <div className="flex items-center justify-between w-full">
              <div className="size-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>folder_managed</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">Active</span>
            </div>
            <div>
              <p className="text-3xl font-bold tracking-tight mb-0.5">45</p>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400">Our Applications</p>
              <p className="text-[10px] text-slate-400 font-medium">Dikopo tsa rona</p>
            </div>
          </button>
        </div>
      </div>

      {/* Top Matches Carousel */}
      <div className="flex flex-col gap-2 pt-2 pb-6">
        <div className="flex items-center justify-between px-4">
          <div>
            <h3 className="text-lg font-bold leading-tight">Recommended Tenders</h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Lithendara tse loketseng</p>
          </div>
          <button onClick={() => onNavigate(Screen.TENDER_LIST)} className="text-sm font-bold text-primary hover:underline">View All</button>
        </div>
        <div className="flex overflow-x-auto pb-4 pt-4 px-4 gap-4 snap-x snap-mandatory no-scrollbar">
          {MOCK_TENDERS.map((tender) => (
            <div 
              key={tender.id}
              onClick={() => onViewTender(tender)}
              className="snap-start shrink-0 cursor-pointer w-[280px] flex flex-col gap-0 bg-white dark:bg-[#1E2D30] rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all"
            >
              <div className="relative w-full h-32 bg-cover bg-center" style={{ backgroundImage: `url('${tender.image}')` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <span className="bg-primary text-background-dark text-[10px] font-black px-2 py-1 rounded-md">{tender.matchScore}% AI Match</span>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <div>
                  <h4 className="text-base font-bold leading-tight truncate">{tender.title}</h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold mt-1 uppercase">{tender.location}</p>
                </div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-50 dark:border-slate-800">
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{tender.budget}</span>
                  <div className="flex items-center gap-1 text-primary">
                    <span className="text-xs font-bold">Details</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Progress */}
      <div className="px-4 pb-12">
        <div className="mb-4">
          <h3 className="text-lg font-bold leading-tight">Application Pipeline</h3>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Tsoelo-pele ea kopo</p>
        </div>
        <div className="bg-white dark:bg-[#1E2D30] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col gap-6">
            {[
              { label: 'Drafting (Ho ralo)', count: 3, width: '15%', color: 'bg-slate-400 dark:bg-slate-500' },
              { label: 'Internal Review', count: 2, width: '10%', color: 'bg-primary' },
              { label: 'Submitted (E rometsoe)', count: 15, width: '75%', color: 'bg-emerald-500' }
            ].map((p) => (
              <div key={p.label}>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-tight">{p.label}</span>
                  <span className="text-sm font-black text-slate-900 dark:text-white">{p.count}</span>
                </div>
                <div className="w-full h-3 bg-slate-100 dark:bg-slate-700/50 rounded-full overflow-hidden">
                  <div className={`h-full ${p.color} rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(0,0,0,0.1)]`} style={{ width: p.width }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav currentScreen={Screen.DASHBOARD} onNavigate={(s) => onNavigate(s)} />
    </div>
  );
};

export default Dashboard;
