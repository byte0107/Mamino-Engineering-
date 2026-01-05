
import React, { useState } from 'react';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [role, setRole] = useState<'ADMIN' | 'PA'>('ADMIN');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate authentication process
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1200);
  };

  const handleForgotPassword = () => {
    alert("Re rometse molaetsa oa ho seta lekunutu hape ho e-mail ea hau.");
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display">
      <div className="flex items-center px-4 py-4 justify-between sticky top-0 z-10">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 className="text-lg font-bold flex-1 text-center pr-10 truncate">Mamino Engineering</h2>
      </div>

      <div className="flex-1 flex flex-col items-center w-full max-w-md mx-auto px-4 pb-8">
        <div className="w-full py-6 flex flex-col items-center justify-center">
          <div className="size-20 bg-gradient-to-br from-primary to-[#0e9bb6] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20 animate-bounce-slow">
            <span className="material-symbols-outlined text-white" style={{ fontSize: '40px' }}>engineering</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold leading-tight text-center mb-2 tracking-tight">
          Kena ho tsoela pele
        </h1>
        <p className="text-gray-500 dark:text-[#9db4b9] text-center mb-8 text-sm">
          Kgetha mofuta oa akhaonto ea hau ho kena
        </p>

        <div className="w-full mb-8">
          <div className="flex h-12 w-full items-center justify-center rounded-xl bg-gray-200 dark:bg-[#283639] p-1">
            <button 
              onClick={() => setRole('ADMIN')}
              className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-bold transition-all ${role === 'ADMIN' ? 'bg-white dark:bg-background-dark shadow-sm text-primary' : 'text-gray-500'}`}
            >
              Molaodi (Admin)
            </button>
            <button 
              onClick={() => setRole('PA')}
              className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-bold transition-all ${role === 'PA' ? 'bg-white dark:bg-background-dark shadow-sm text-primary' : 'text-gray-500'}`}
            >
              Mothusi (PA)
            </button>
          </div>
        </div>

        <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium ml-1">Lebitso la mosebelisi</label>
            <div className="relative flex items-center">
              <input 
                required
                className="flex w-full rounded-xl border border-gray-300 dark:border-[#3b4f54] bg-white dark:bg-[#1c2527] px-4 py-3.5 pl-11 text-base focus:border-primary focus:ring-primary transition-colors" 
                placeholder={role === 'ADMIN' ? "Lebitso la molaodi" : "Lebitso la mothusi"} 
                type="text" 
              />
              <span className="material-symbols-outlined absolute left-3.5 text-gray-400" style={{ fontSize: '20px' }}>person</span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium ml-1">Lekunutu (Password)</label>
            <div className="relative flex items-center">
              <input 
                required
                className="flex w-full rounded-xl border border-gray-300 dark:border-[#3b4f54] bg-white dark:bg-[#1c2527] px-4 py-3.5 pl-11 pr-11 text-base focus:border-primary focus:ring-primary transition-colors" 
                placeholder="Kenya lekunutu" 
                type="password" 
              />
              <span className="material-symbols-outlined absolute left-3.5 text-gray-400" style={{ fontSize: '20px' }}>lock</span>
              <button className="absolute right-3.5 flex items-center justify-center text-gray-400" type="button">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>visibility_off</span>
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button type="button" onClick={handleForgotPassword} className="text-sm font-medium text-primary cursor-pointer hover:underline">
              Na u lebetse lekunutu?
            </button>
          </div>

          <button 
            disabled={isLoading}
            type="submit" 
            className="w-full rounded-xl bg-primary py-3.5 text-white font-bold text-base shadow-md hover:bg-[#0ea5c2] active:scale-[0.98] transition-all duration-200 mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading && <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
            <span>Kena joaloka {role === 'ADMIN' ? 'Molaodi' : 'Mothusi'}</span>
          </button>
        </form>

        <div className="relative flex py-8 items-center w-full">
          <div className="flex-grow border-t border-gray-300 dark:border-[#3b4f54]"></div>
          <span className="mx-4 text-gray-400 text-sm">Kapa ka akhaonto e 'ngoe</span>
          <div className="flex-grow border-t border-gray-300 dark:border-[#3b4f54]"></div>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">
          <button onClick={onLogin} className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 dark:border-[#3b4f54] bg-white dark:bg-[#1c2527] py-2.5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyWULc7L-nEHXuMtx04olbb2A9gCCCEXA9hdZuXIRAbq29kQY42M2QSlEMqUqES7H9OoGghjYoaMWhBz9WILbPPf6WfKyGPtE1pYquzbTgqm-aD8PQCfUDBiq_tacPXpLvL4jEz-kfVl2_Eel1-_gy-AYgo4BlK4B_2QwrCebtiSCRJkaL8Lrrj2Wt4AH46z-8knnkc_2StJq3Gh-JXVxLXCAloAjqeXd7LW3n9sx1IvDF7QQep6Vw3ge8boSpdv0rCt2zpGqhKuU" className="size-5" alt="Google" />
            <span className="text-sm font-medium">Google</span>
          </button>
          <button onClick={onLogin} className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 dark:border-[#3b4f54] bg-white dark:bg-[#1c2527] py-2.5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined">ios</span>
            <span className="text-sm font-medium">Apple</span>
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Ha u na akhaonto? 
          <button 
            className="text-primary font-bold hover:underline ml-1 cursor-pointer"
          >
            Ngolisa Mona
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
