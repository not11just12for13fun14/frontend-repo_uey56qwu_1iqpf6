import { useState } from 'react';
import { Bot, Send } from 'lucide-react';

export default function AIChatTeaser() {
  const [value, setValue] = useState('Rekomendasikan makanan khas dari Jawa Barat');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');

  const onAsk = async () => {
    setLoading(true);
    setResponse('');
    // In a full app this would call the backend AI endpoint. Here we simulate a response.
    await new Promise((r) => setTimeout(r, 700));
    setResponse('Coba Nasi Timbel, Lotek, atau Batagor! Ketiganya mewakili rasa gurih, segar, dan renyah khas Sunda.');
    setLoading(false);
  };

  return (
    <section id="ai" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-gradient-to-br from-rose-50 to-amber-50 dark:from-zinc-900 dark:to-zinc-900/60 p-6 sm:p-10">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-600 text-white shadow"><Bot size={20}/></span>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">Ask Cakranesia</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Conversational recommendations and cultural Q&A.</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="flex-1 rounded-2xl border border-zinc-300/70 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 outline-none"
            placeholder="Ask about dishes, history, or provinces..."
          />
          <button onClick={onAsk} disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-rose-500 disabled:opacity-60">
            <Send size={16}/> {loading ? 'Thinking...' : 'Ask'}
          </button>
        </div>

        {response && (
          <div className="mt-4 rounded-xl border border-zinc-200/70 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 p-4 text-sm text-zinc-800 dark:text-zinc-200">
            {response}
          </div>
        )}
      </div>
    </section>
  );
}
