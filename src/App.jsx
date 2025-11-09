import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import SubscriptionPreview from './components/SubscriptionPreview';
import AuthPanels from './components/AuthPanels';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased dark:bg-black dark:text-gray-100">
      <HeaderNav />
      <main>
        <Hero />
        <ProductGrid />
        <SubscriptionPreview />
        <AuthPanels />
      </main>
      <footer className="border-t border-gray-200 py-10 text-center text-sm text-gray-600 dark:border-gray-800 dark:text-gray-300">
        <p>
          © {new Date().getFullYear()} Sathya Dairy Farms. Freshness, transparency, and convenience — from farm to doorstep.
        </p>
      </footer>
    </div>
  );
}

export default App;
