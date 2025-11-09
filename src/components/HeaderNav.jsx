import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ShoppingCart, Bell, Sun, Moon, User } from 'lucide-react';

function useTheme() {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined'
      ? (localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
      : 'light'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
}

export default function HeaderNav() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Home className="h-6 w-6 text-green-600" />
          <Link to="/" className="text-lg font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">Sathya Dairy Farms</Link>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Home</a>
          <a href="#products" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Products</a>
          <a href="#subscriptions" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Subscriptions</a>
          <a href="#login" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Login</a>
          <a href="#admin" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Admin</a>
          <a href="#agent" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Agent</a>
        </div>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </button>
          <button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition" aria-label="Cart">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <button className="ml-2 hidden sm:inline-flex items-center gap-2 h-9 px-3 rounded-md bg-green-600 text-white hover:bg-green-700 transition" aria-label="Profile">
            <User className="h-4 w-4" />
            <span>Account</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
