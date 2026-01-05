
import React, { useState, useEffect } from 'react';
import { Screen, Tender } from '../types';
import { MOCK_TENDERS } from '../mockData';
import BottomNav from './BottomNav';

interface TenderListProps {
  initialFilter?: string;
  onViewTender: (tender: Tender) => void;
  onNavigate: (screen: Screen) => void;
}

const TenderList: React.FC<TenderListProps> = ({ initialFilter = 'All', onViewTender, onNavigate }) => {
  const [filter, setFilter] = useState(initialFilter);
  const [displayCount, setDisplayCount] = useState(3);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  
  const filters = ['All', 'High Prob', 'Medium Prob', 'New', 'Applied', 'Won'];

  useEffect(() => {
    setFilter(initialFilter);
    setDisplayCount(3);
  }, [initialFilter]);

  const filteredTenders = MOCK_TENDERS.filter(t => {
    if (filter === 'All') return true;
    if (filter === 'High Prob') return t.probability === 'High';
    if (filter === 'Medium Prob') return t.probability === 'Medium';
    if (filter === 'New') return t.status === 'New';
    if (filter === 'Applied') return t.status === 'Applied';
    if (filter === 'Won') return t.status === 'Won';
    return true;
  });

  const handleLoadMore = () => {
    setIsMoreLoading(true);
    setTimeout(() => {
      setDisplayCount(prev => prev + 3);
      setIsMoreLoading(false);
    }, 1200);
  };

  const currentTenders = filteredTenders.slice(0, displayCount);
  const hasMore = displayCount < filteredTenders.length;

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen text-slate-900 dark:text-white pb-20">
      {/* Top App Bar */}
      <div className="sticky top-0 z-50 bg-background-light dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-white/5">
        <div className="flex items-center p-4 justify-between max-w-lg mx-auto w-full">
          <h2 className="text-xl font-bold leading-tight tracking-tight flex-1">Tender Pipeline</h2>
          <div className="flex items-center justify-end gap-3">
            <button className="relative">
              <span className="material-symbols-outlined text-slate-500 dark:text-[#9db4b9] text-2xl">notifications</span>
              <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-background-light dark:border-background-dark"></span>
            </button>
            <button className="flex items-center justify-center h-10 w-10 bg-primary/20 text-primary rounded-full">
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
        </div>
        {/* Search Bar */}
        <div className="px-4 pb-3 max-w-lg mx-auto w-full">
          <div className="flex w-full items-stretch rounded-xl h-12 bg-white dark:bg-[#192a2e] shadow-sm border border-gray-100 dark:border-white/5 overflow-hidden">
            <div className="text-slate-400 dark:text-[#9db4b9] flex items-center pl-4 pr-2">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input className="flex w-full bg-transparent border-none text-slate-900 dark:text-white placeholder:text-slate-400 px-2 text-base focus:ring-0" placeholder="Search by ID, client or project..."/>
            <button className="px-4 text-slate-400 dark:text-[#9db4b9]">
              <span className="material-symbols-outlined text-[20px]">tune</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="sticky top-[125px] z-40 bg-background-light dark:bg-background-dark pt-2 pb-2">
        <div className="flex gap-2 px-4 overflow-x-auto no-scrollbar max-w-lg mx-auto w-full pb-2">
          {filters.map((f) => (
            <button 
              key={f}
              onClick={() => { setFilter(f); setDisplayCount(3); }}
              className={`flex h-8 shrink-0 items-center justify-center px-4 rounded-full transition-all ${filter === f ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white dark:bg-[#192a2e] border border-gray-200 dark:border-white/10 text-slate-600 dark:text-[#9db4b9]'}`}
            >
              <p className="text-sm font-semibold">{f}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content List */}
      <div className="flex flex-col gap-3 px-4 mt-2 max-w-lg mx-auto w-full">
        <p className="text-xs font-bold text-slate-400 dark:text-[#9db4b9] uppercase tracking-wider mb-1">Results ({filteredTenders.length})</p>
        {currentTenders.map((tender) => (
          <div 
            key={tender.id}
            onClick={() => onViewTender(tender)}
            className="group cursor-pointer relative flex flex-col gap-3 bg-white dark:bg-[#192a2e] rounded-xl p-4 border border-gray-100 dark:border-white/5 shadow-sm active:scale-[0.99] transition-all"
          >
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${tender.probability === 'High' ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' : 'bg-amber-500/10 text-amber-600 border-amber-500/20'}`}>
                    {tender.probability} Prob
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-primary/10 text-primary border border-primary/20">{tender.status}</span>
                </div>
                <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight">{tender.title}</h3>
                <p className="text-slate-500 dark:text-[#9db4b9] text-xs font-medium">{tender.client} • ID: #{tender.id.split('-').pop()}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-xs font-semibold text-rose-500 bg-rose-500/5 px-2 py-1 rounded">Due in {tender.deadline}</span>
              </div>
            </div>
            <div className="h-px bg-gray-100 dark:bg-white/5 w-full"></div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 dark:text-slate-400">Value: <span className="text-slate-900 dark:text-white font-medium">{tender.budget}</span></span>
              </div>
              <div className="flex items-center text-primary text-sm font-semibold">
                View <span className="material-symbols-outlined text-[18px] ml-1">arrow_forward</span>
              </div>
            </div>
          </div>
        ))}

        {/* Loading / Load More state */}
        <div className="py-8 flex flex-col items-center justify-center w-full gap-4">
          {isMoreLoading ? (
            <div className="flex flex-col items-center gap-2">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
              <p className="text-xs text-slate-500 font-medium">Fetching more tenders...</p>
            </div>
          ) : hasMore ? (
            <button 
              onClick={handleLoadMore}
              className="px-6 py-2.5 bg-slate-200 dark:bg-slate-800 rounded-full text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all"
            >
              Load More Results
            </button>
          ) : (
            <p className="text-xs text-slate-500 font-medium">You've reached the end of the pipeline.</p>
          )}
        </div>
      </div>

      <BottomNav currentScreen={Screen.TENDER_LIST} onNavigate={onNavigate} />
    </div>
  );
};

export default TenderList;
