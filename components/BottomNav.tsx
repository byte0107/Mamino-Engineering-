
import React from 'react';
import { Screen } from '../types';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 dark:border-slate-800 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-lg pb-safe">
      <div className="flex h-16 items-center justify-around px-2 max-w-lg mx-auto">
        <button 
          onClick={() => onNavigate(Screen.DASHBOARD)}
          className={`flex flex-1 flex-col items-center justify-center gap-1 transition-colors ${currentScreen === Screen.DASHBOARD ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`}
        >
          <span className={`material-symbols-outlined ${currentScreen === Screen.DASHBOARD ? 'fill-1' : ''}`}>dashboard</span>
          <span className="text-[10px] font-medium">Dashboard</span>
        </button>
        <button 
          onClick={() => onNavigate(Screen.TENDER_LIST)}
          className={`flex flex-1 flex-col items-center justify-center gap-1 transition-colors ${currentScreen === Screen.TENDER_LIST ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`}
        >
          <span className={`material-symbols-outlined ${currentScreen === Screen.TENDER_LIST ? 'fill-1' : ''}`}>search</span>
          <span className="text-[10px] font-medium">Pipeline</span>
        </button>
        <button 
          onClick={() => onNavigate(Screen.COMPANY_PROFILE)}
          className={`flex flex-1 flex-col items-center justify-center gap-1 transition-colors ${currentScreen === Screen.COMPANY_PROFILE ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`}
        >
          <span className={`material-symbols-outlined ${currentScreen === Screen.COMPANY_PROFILE ? 'fill-1' : ''}`}>assignment</span>
          <span className="text-[10px] font-medium">Documents</span>
        </button>
        <button 
          onClick={() => onNavigate(Screen.SETTINGS)}
          className={`flex flex-1 flex-col items-center justify-center gap-1 transition-colors ${currentScreen === Screen.SETTINGS ? 'text-primary' : 'text-slate-400 dark:text-slate-500'}`}
        >
          <span className={`material-symbols-outlined ${currentScreen === Screen.SETTINGS ? 'fill-1' : ''}`}>settings</span>
          <span className="text-[10px] font-medium">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
