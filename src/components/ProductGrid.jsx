import { useState } from 'react';
import { Plus, ShoppingBag } from 'lucide-react';

const sampleProducts = [
  {
    id: 'milk-500',
    name: 'A2 Cow Milk - 500ml',
    price: 35,
    tag: 'Fresh Daily',
    image: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'milk-1l',
    name: 'A2 Cow Milk - 1L',
    price: 65,
    tag: 'Most Popular',
    image: 'https://images.unsplash.com/photo-1532678465554-94846274c297?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'curd-500',
    name: 'Farm Curd - 500g',
    price: 45,
    tag: 'Probiotic',
    image: 'https://images.unsplash.com/photo-1616028904447-ffd088aff0e6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGYXJtJTIwQ3VyZCUyMC0lMjA1MDBnfGVufDB8MHx8fDE3NjI2Njk1NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'ghee-250',
    name: 'Desi Ghee - 250g',
    price: 240,
    tag: 'Artisanal',
    image: 'https://images.unsplash.com/photo-1707158758017-03d2e2a8bbec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZXNpJTIwR2hlZSUyMC0lMjAyNTBnfGVufDB8MHx8fDE3NjI2Njk1NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

export default function ProductGrid() {
  const [cart, setCart] = useState({});

  const addToCart = (id) => {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  };

  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Products</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">Browse fresh dairy — add to cart or buy instantly.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <ShoppingBag className="h-4 w-4" />
          <span>Items in cart: {Object.values(cart).reduce((a, b) => a + b, 0)}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {sampleProducts.map((p) => (
          <div key={p.id} className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
            <div className="relative h-40 w-full overflow-hidden">
              <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <span className="absolute left-2 top-2 rounded-full bg-emerald-600/90 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white">
                {p.tag}
              </span>
            </div>
            <div className="p-4">
              <h3 className="line-clamp-1 text-sm font-medium text-gray-900 dark:text-gray-100">{p.name}</h3>
              <p className="mt-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400">₹{p.price}</p>
              <div className="mt-3 flex gap-2">
                <button onClick={() => addToCart(p.id)} className="inline-flex items-center gap-1 rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800">
                  <Plus className="h-4 w-4" /> Add
                </button>
                <button className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white shadow hover:bg-emerald-700">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
