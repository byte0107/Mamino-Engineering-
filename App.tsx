
import React, { useState } from 'react';
import { Screen, Tender } from './types';
import LoginScreen from './components/LoginScreen';
import Dashboard from './components/Dashboard';
import TenderList from './components/TenderList';
import TenderDetail from './components/TenderDetail';
import CompanyProfile from './components/CompanyProfile';
import AIAssistant from './components/AIAssistant';
import Settings from './components/Settings';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.LOGIN);
  const [selectedTender, setSelectedTender] = useState<Tender | null>(null);
  const [listFilter, setListFilter] = useState<string>('All');

  const navigateTo = (screen: Screen, options?: { tender?: Tender; filter?: string }) => {
    if (options?.tender) setSelectedTender(options.tender);
    if (options?.filter) setListFilter(options.filter);
    else if (screen !== Screen.TENDER_LIST) setListFilter('All');
    
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.LOGIN:
        return <LoginScreen onLogin={() => navigateTo(Screen.DASHBOARD)} />;
      case Screen.DASHBOARD:
        return (
          <Dashboard 
            onViewTender={(t) => navigateTo(Screen.TENDER_DETAIL, { tender: t })} 
            onNavigate={(s, filter) => navigateTo(s, { filter })} 
          />
        );
      case Screen.TENDER_LIST:
        return (
          <TenderList 
            initialFilter={listFilter}
            onViewTender={(t) => navigateTo(Screen.TENDER_DETAIL, { tender: t })} 
            onNavigate={(s) => navigateTo(s)} 
          />
        );
      case Screen.TENDER_DETAIL:
        return selectedTender ? (
          <TenderDetail 
            tender={selectedTender} 
            onBack={() => navigateTo(Screen.DASHBOARD)} 
            onApply={() => navigateTo(Screen.AI_ASSISTANT, { tender: selectedTender })}
          />
        ) : <Dashboard onViewTender={(t) => navigateTo(Screen.TENDER_DETAIL, { tender: t })} onNavigate={(s) => navigateTo(s)} />;
      case Screen.AI_ASSISTANT:
        return selectedTender ? (
          <AIAssistant 
            tender={selectedTender} 
            onClose={() => navigateTo(Screen.TENDER_DETAIL, { tender: selectedTender })} 
          />
        ) : <Dashboard onViewTender={(t) => navigateTo(Screen.TENDER_DETAIL, { tender: t })} onNavigate={(s) => navigateTo(s)} />;
      case Screen.COMPANY_PROFILE:
        return <CompanyProfile onBack={() => navigateTo(Screen.DASHBOARD)} onNavigate={(s) => navigateTo(s)} />;
      case Screen.SETTINGS:
        return <Settings onBack={() => navigateTo(Screen.DASHBOARD)} onNavigate={(s) => navigateTo(s)} />;
      default:
        return <Dashboard onViewTender={(t) => navigateTo(Screen.TENDER_DETAIL, { tender: t })} onNavigate={(s) => navigateTo(s)} />;
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-200">
      {renderScreen()}
    </div>
  );
};

export default App;
