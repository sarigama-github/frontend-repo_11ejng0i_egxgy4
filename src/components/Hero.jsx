import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[60vh] w-full overflow-hidden rounded-b-3xl border-b border-gray-200 dark:border-gray-800">
        <Spline scene="https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-black dark:via-black/40"></div>
      </div>
      <div className="mx-auto -mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/90 p-6 shadow-xl ring-1 ring-gray-900/5 backdrop-blur dark:bg-gray-900/80">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl">
            Fresh. Local. Transparent.
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-gray-600 dark:text-gray-300">
            Sathya Dairy Farms delivers farm-fresh milk and dairy to your doorstep. Build flexible subscriptions, track orders, and trace your milk batches.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#login" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
              Get Started
            </a>
            <a href="#products" className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800">
              Browse Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
