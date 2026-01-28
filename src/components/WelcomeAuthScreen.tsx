import { Package, Mail } from 'lucide-react';

interface WelcomeAuthScreenProps {
  onEmail: () => void;
  onGoogle: () => void;
  onSignIn?: () => void;
  onTerms?: () => void;
  onPrivacy?: () => void;
}

export function WelcomeAuthScreen({ onEmail, onGoogle, onSignIn, onTerms, onPrivacy }: WelcomeAuthScreenProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8 relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />

      <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-premium-lg animate-scale-in" style={{ backgroundColor: 'var(--icon-surface)' }}>
        <Package className="w-12 h-12 animate-float" style={{ color: 'var(--primary)' }} strokeWidth={1.5} />
      </div>

      <h1 className="mb-2 animate-fade-in-up" style={{ color: 'var(--foreground)' }}>DoHuub</h1>
      <p className="mb-2 animate-fade-in-up" style={{ color: 'var(--primary)', animationDelay: '0.05s' }}>Infinite Services</p>
      <h2 className="mb-12 animate-fade-in-up" style={{ color: 'var(--muted-foreground)', animationDelay: '0.1s' }}>Create Your Account</h2>

      <div className="w-full max-w-sm space-y-4 relative z-10">
        <button
          onClick={onGoogle}
          className="w-full py-4 rounded-xl flex items-center justify-center gap-3 shadow-card transition-all duration-300 hover:shadow-card-hover hover:scale-[1.02] active:scale-[0.98] animate-fade-in-up"
          style={{ backgroundColor: 'var(--card)', color: 'var(--foreground)', border: '1px solid rgba(46, 122, 217, 0.1)', animationDelay: '0.15s' }}
        >
          <div className="w-6 h-6 rounded-full" style={{ backgroundColor: 'var(--icon-surface)' }}></div>
          Sign Up with Google
        </button>

        <button
          onClick={onEmail}
          className="w-full text-white py-4 rounded-xl flex items-center justify-center gap-3 shadow-premium-lg transition-all duration-300 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] animate-fade-in-up"
          style={{ background: 'var(--primary-gradient)', animationDelay: '0.2s' }}
        >
          <Mail className="w-6 h-6" />
          Sign Up with Email
        </button>
      </div>

      <div className="mt-8 flex items-center gap-2 animate-fade-in" style={{ animationDelay: '0.25s' }}>
        <span style={{ color: 'var(--muted-foreground)' }}>Already have an account?</span>
        <button
          onClick={onSignIn || onEmail}
          className="underline transition-all duration-200 hover:opacity-80"
          style={{ color: 'var(--primary)' }}
        >
          Sign In
        </button>
      </div>

      <p className="text-center mt-8 max-w-xs animate-fade-in" style={{ color: 'var(--muted-foreground)', animationDelay: '0.3s' }}>
        By continuing, you agree to our{' '}
        <button onClick={onTerms} className="underline transition-all duration-200 hover:opacity-80" style={{ color: 'var(--foreground)' }}>Terms of Service</button>
        {' '}and{' '}
        <button onClick={onPrivacy} className="underline transition-all duration-200 hover:opacity-80" style={{ color: 'var(--foreground)' }}>Privacy Policy</button>
      </p>
    </div>
  );
}