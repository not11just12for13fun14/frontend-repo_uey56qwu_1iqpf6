import { useEffect, useState } from 'react';
import { Map, Utensils, Users, Bot, Sun, Moon } from 'lucide-react';

function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setDark((d) => !d)}
      className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-white dark:hover:bg-zinc-900 backdrop-blur transition"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden sm:inline">{dark ? 'Light' : 'Dark'} mode</span>
    </button>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/60 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 via-orange-500 to-amber-400 text-white shadow">
              🍛
            </span>
            <span className="text-lg">Cakranesia</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700 dark:text-zinc-300">
            <a href="#explore" className="hover:text-rose-600 dark:hover:text-rose-400 inline-flex items-center gap-2"><Map size={16}/> Explore</a>
            <a href="#cuisine" className="hover:text-rose-600 dark:hover:text-rose-400 inline-flex items-center gap-2"><Utensils size={16}/> Cuisines</a>
            <a href="#community" className="hover:text-rose-600 dark:hover:text-rose-400 inline-flex items-center gap-2"><Users size={16}/> Community</a>
            <a href="#ai" className="hover:text-rose-600 dark:hover:text-rose-400 inline-flex items-center gap-2"><Bot size={16}/> AI Guide</a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button className="rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 text-sm font-medium shadow hover:shadow-md transition">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
