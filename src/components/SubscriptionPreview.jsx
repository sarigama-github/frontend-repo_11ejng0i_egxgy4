import { useMemo, useState } from 'react';
import { CalendarDays, Minus, Plus } from 'lucide-react';

const catalog = [
  { id: 'milk-1l', name: 'A2 Cow Milk - 1L', price: 65 },
  { id: 'curd-500', name: 'Farm Curd - 500g', price: 45 },
  { id: 'ghee-250', name: 'Desi Ghee - 250g', price: 240 },
];

const freqOptions = [
  { id: 'daily', label: 'Daily' },
  { id: 'alt', label: 'Alternate' },
  { id: 'weekly', label: 'Weekly' },
];

export default function SubscriptionPreview() {
  const [items, setItems] = useState({ 'milk-1l': { morning: 1, evening: 0 }, 'curd-500': { morning: 0, evening: 1 } });
  const [frequency, setFrequency] = useState('daily');

  const total = useMemo(() => {
    let sum = 0;
    for (const id of Object.keys(items)) {
      const product = catalog.find((c) => c.id === id);
      const qty = (items[id]?.morning || 0) + (items[id]?.evening || 0);
      if (product) sum += product.price * qty;
    }
    const multiplier = frequency === 'daily' ? 30 : frequency === 'alt' ? 15 : 4;
    return sum * multiplier;
  }, [items, frequency]);

  const changeQty = (id, part, delta) => {
    setItems((prev) => ({
      ...prev,
      [id]: { ...prev[id], [part]: Math.max(0, (prev[id]?.[part] || 0) + delta) },
    }));
  };

  return (
    <section id="subscriptions" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Build a sample subscription</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Adjust morning/evening quantities and preview monthly cost.</p>
          </div>
          <CalendarDays className="h-5 w-5 text-emerald-600" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {catalog.map((p) => (
            <div key={p.id} className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{p.name}</p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400">₹{p.price}</p>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {['morning', 'evening'].map((part) => (
                  <div key={part} className="rounded-lg border border-gray-200 p-2 dark:border-gray-800">
                    <p className="text-xs text-gray-500 capitalize">{part}</p>
                    <div className="mt-1 flex items-center justify-between">
                      <button onClick={() => changeQty(p.id, part, -1)} className="rounded-md border border-gray-300 p-1 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{items[p.id]?.[part] || 0}</span>
                      <button onClick={() => changeQty(p.id, part, 1)} className="rounded-md border border-gray-300 p-1 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid items-center gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Delivery frequency</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {freqOptions.map((f) => (
                <button key={f.id} onClick={() => setFrequency(f.id)} className={`rounded-full border px-3 py-1 text-sm ${frequency === f.id ? 'border-emerald-600 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300' : 'border-gray-300 text-gray-700 dark:border-gray-700 dark:text-gray-300'}`}>
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 p-4 text-right dark:border-gray-800">
            <p className="text-xs text-gray-500">Estimated monthly</p>
            <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">₹{total.toLocaleString('en-IN')}</p>
            <p className="mt-1 text-xs text-gray-500">Vacation planner, cart, and checkout will be available after sign in.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
