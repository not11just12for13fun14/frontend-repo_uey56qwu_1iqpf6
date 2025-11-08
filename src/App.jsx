import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExploreGrid from './components/ExploreGrid';
import CommunityPanel from './components/CommunityPanel';
import AIChatTeaser from './components/AIChatTeaser';

function Footer() {
  return (
    <footer className="border-t border-zinc-200/60 dark:border-zinc-800/60 py-8 mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-zinc-600 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} Cakranesia — Preserving Indonesian culinary heritage.</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-rose-600" href="#">Privacy</a>
          <a className="hover:text-rose-600" href="#">Terms</a>
          <a className="hover:text-rose-600" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar />
      <Hero />
      <ExploreGrid />
      <CommunityPanel />
      <AIChatTeaser />
      <Footer />
    </div>
  );
}
