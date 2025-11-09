import { useEffect, useState } from 'react';
import { Home, ShoppingCart, Bell, Sun, Moon, User } from 'lucide-react';

export default function HeaderNav() {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'system';
    setTheme(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = theme === 'dark' || (theme === 'system' && systemDark);
    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-800 dark:bg-black/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <Home className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
            <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              Sathya Dairy Farms
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400" href="#products">Products</a>
            <a className="text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400" href="#subscriptions">Subscriptions</a>
            <a className="text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400" href="#login">Login</a>
          </nav>

          <div className="flex items-center gap-2">
            <button aria-label="Notifications" className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800">
              <Bell className="h-5 w-5" />
            </button>
            <button aria-label="Cart" className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <div className="h-6 w-px bg-gray-200 dark:bg-gray-800 mx-1" />
            <div className="hidden sm:flex items-center gap-1 text-xs md:text-sm">
              <User className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-300">Official Login:</span>
              <a href="#admin" className="font-medium text-emerald-600 hover:underline dark:text-emerald-400">Admin</a>
              <span className="text-gray-400">/</span>
              <a href="#agent" className="font-medium text-emerald-600 hover:underline dark:text-emerald-400">Agent</a>
            </div>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark')}
              className="ml-2 rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {theme === 'dark' ? <Moon className="h-5 w-5" /> : theme === 'light' ? <Sun className="h-5 w-5" /> : (
                <Sun className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
