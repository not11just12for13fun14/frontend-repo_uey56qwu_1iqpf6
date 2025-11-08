import { useMemo } from 'react';
import { MapPin } from 'lucide-react';

const sampleData = [
  { id: 1, name: 'Rendang', province: 'Sumatera Barat', image: 'https://images.unsplash.com/photo-1677921755291-c39158477b8e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZW5kYW5nfGVufDB8MHx8fDE3NjI2MjE4NTB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 2, name: 'Gudeg', province: 'DI Yogyakarta', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Pempek', province: 'Sumatera Selatan', image: 'https://images.unsplash.com/photo-1677921755291-c39158477b8e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZW5kYW5nfGVufDB8MHx8fDE3NjI2MjE4NTB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 4, name: 'Papeda', province: 'Papua', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, name: 'Rawon', province: 'Jawa Timur', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, name: 'Coto Makassar', province: 'Sulawesi Selatan', image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=1200&auto=format&fit=crop' },
];

export default function ExploreGrid() {
  const dishes = useMemo(() => sampleData, []);

  return (
    <section id="cuisine" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">Discover iconic dishes</h2>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">A taste of Indonesia’s diversity. Click any card to learn more.</p>
        </div>
        <button className="rounded-full border border-zinc-200 dark:border-zinc-800 px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900">View map</button>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((d) => (
          <article key={d.id} className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow">
            <img src={d.image} alt={d.name} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{d.name}</h3>
              <p className="mt-1 inline-flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400">
                <MapPin size={14} /> {d.province}
              </p>
            </div>
            <button className="absolute right-3 top-3 rounded-full bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/70 dark:border-zinc-800/70 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 shadow">Details</button>
          </article>
        ))}
      </div>
    </section>
  );
}
