import Spline from '@splinetool/react-spline';
import { MapPin, Search } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden" id="explore">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/0vZ2qkq5lLwH9S9W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Explore Indonesia’s Culinary Heritage
          </h1>
          <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">
            Discover dishes, stories, and traditions from every province. Share your favorite recipes and learn from the community.
          </p>

          <div className="mt-6 flex w-full max-w-xl items-center gap-2 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/70 backdrop-blur p-2 shadow-sm">
            <Search className="text-zinc-500" size={18} />
            <input
              type="text"
              placeholder="Search dishes, provinces, or ingredients..."
              className="w-full bg-transparent outline-none placeholder:text-zinc-400 text-zinc-900 dark:text-zinc-100"
            />
            <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-orange-500 px-4 py-2 text-white font-medium shadow hover:opacity-95 transition">
              <MapPin size={16} /> Near me
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-zinc-950/90" />
    </section>
  );
}
