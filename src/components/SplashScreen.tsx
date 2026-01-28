import { useEffect } from 'react';
import { Package } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="h-full flex flex-col items-center justify-center px-8 relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />

      {/* Animated Background Gradient */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(46, 122, 217, 0.2), transparent 60%)'
        }}
      />

      {/* Logo Container */}
      <div className="relative z-10 animate-scale-in">
        <div
          className="w-28 h-28 rounded-3xl flex items-center justify-center mb-8 shadow-premium-lg"
          style={{ background: 'var(--primary-gradient)' }}
        >
          <Package className="w-14 h-14 text-white" strokeWidth={1.5} />
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center animate-fade-in-up">
        <h1 className="text-3xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>DoHuub</h1>
        <p style={{ color: 'var(--muted-foreground)' }}>Infinite Services</p>
      </div>

      {/* Loading Spinner */}
      <div className="mt-16 relative z-10">
        <div
          className="w-12 h-12 rounded-full animate-spin"
          style={{
            border: '4px solid var(--muted)',
            borderTopColor: 'var(--primary)'
          }}
        />
      </div>
    </div>
  );
}
