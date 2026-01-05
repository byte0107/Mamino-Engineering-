
import React, { useState } from 'react';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate authentication process
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1200);
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display">
      <div className="flex items-center px-4 py-4 justify-between sticky top-0 z-10">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 className="text-lg font-bold flex-1 text-center pr-10 truncate text-primary">Mamino Engineering</h2>
      </div>

      <div className="flex-1 flex flex-col items-center w-full max-w-md mx-auto px-6 pb-12">
        <div className="w-full py-8 flex flex-col items-center justify-center">
          <div className="size-20 bg-gradient-to-br from-primary to-[#0e9bb6] rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-primary/20">
            <span className="material-symbols-outlined text-white" style={{ fontSize: '40px' }}>shield_lock</span>
          </div>
          <h1 className="text-3xl font-bold leading-tight text-center mb-2 tracking-tight">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p className="text-gray-500 dark:text-[#9db4b9] text-center mb-0 text-sm">
            {isSignUp ? 'Join Mamino Engineering platform' : 'Log in to manage your tender pipeline'}
          </p>
        </div>

        <div className="w-full mb-8">
          <div className="flex h-12 w-full items-center justify-center rounded-xl bg-gray-200 dark:bg-[#283639] p-1">
            <button 
              onClick={() => setIsSignUp(false)}
              className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-bold transition-all ${!isSignUp ? 'bg-white dark:bg-background-dark shadow-sm text-primary' : 'text-gray-500'}`}
            >
              Log In
            </button>
            <button 
              onClick={() => setIsSignUp(true)}
              className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-bold transition-all ${isSignUp ? 'bg-white dark:bg-background-dark shadow-sm text-primary' : 'text-gray-500'}`}
            >
              Sign Up
            </button>
          </div>
        </div>

        <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold ml-1 text-slate-700 dark:text-slate-300">Email Address</label>
            <div className="relative flex items-center">
              <input 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex w-full rounded-xl border border-gray-300 dark:border-[#3b4f54] bg-white dark:bg-[#1c2527] px-4 py-3.5 pl-11 text-base focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" 
                placeholder="name@company.com" 
                type="email" 
              />
              <span className="material-symbols-outlined absolute left-3.5 text-gray-400" style={{ fontSize: '20px' }}>mail</span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold ml-1 text-slate-700 dark:text-slate-300">Password</label>
            <div className="relative flex items-center">
              <input 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex w-full rounded-xl border border-gray-300 dark:border-[#3b4f54] bg-white dark:bg-[#1c2527] px-4 py-3.5 pl-11 pr-11 text-base focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" 
                placeholder="Enter your password" 
                type="password" 
              />
              <span className="material-symbols-outlined absolute left-3.5 text-gray-400" style={{ fontSize: '20px' }}>lock</span>
              <button className="absolute right-3.5 flex items-center justify-center text-gray-400" type="button">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>visibility_off</span>
              </button>
            </div>
          </div>

          {!isSignUp && (
            <div className="flex justify-end">
              <button type="button" className="text-sm font-semibold text-primary cursor-pointer hover:underline">
                Forgot password?
              </button>
            </div>
          )}

          <button 
            disabled={isLoading}
            type="submit" 
            className="w-full rounded-xl bg-primary py-4 text-white font-bold text-base shadow-lg shadow-primary/20 hover:bg-[#0ea5c2] active:scale-[0.98] transition-all duration-200 mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading && <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
            <span>{isSignUp ? 'Create Account' : 'Secure Login'}</span>
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          {isSignUp ? 'Already have an account?' : 'Don\'t have an account?'}
          <button 
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-primary font-bold hover:underline ml-1 cursor-pointer"
          >
            {isSignUp ? 'Log in instead' : 'Create one now'}
          </button>
        </p>

        <div className="mt-12 text-center">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
            Powered by Mamino Intelligence (Sesotho Secondary)
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
