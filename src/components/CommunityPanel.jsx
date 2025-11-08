import { MessageCircle, Plus } from 'lucide-react';

const posts = [
  { id: 1, author: 'Ayu', title: 'Tips membuat rendang empuk', excerpt: 'Gunakan api kecil dan santan kental, masak lama hingga berminyak.' },
  { id: 2, author: 'Budi', title: 'Sejarah gudeg jogja', excerpt: 'Berawal dari bahan sederhana di masa peperangan, kini jadi ikon kuliner.' },
  { id: 3, author: 'Sari', title: 'Resep pempek keluarga', excerpt: 'Perbandingan ikan dan sagu 1:1, gunakan kuah cuko yang seimbang.' },
];

export default function CommunityPanel() {
  return (
    <section id="community" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">Community highlights</h2>
        <button className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-4 py-2 text-sm font-medium shadow hover:shadow-md transition"><Plus size={16}/> New post</button>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((p) => (
          <div key={p.id} className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow">
            <div className="flex items-center gap-2 text-xs text-zinc-500"><MessageCircle size={14}/> by {p.author}</div>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">{p.title}</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{p.excerpt}</p>
            <button className="mt-4 text-sm font-medium text-rose-600 hover:text-rose-500">Read more</button>
          </div>
        ))}
      </div>
    </section>
  );
}
