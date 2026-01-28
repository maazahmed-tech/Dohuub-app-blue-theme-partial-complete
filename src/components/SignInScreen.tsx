import { Package, Mail, ArrowLeft } from 'lucide-react';

interface SignInScreenProps {
  onEmail: () => void;
  onGoogle: () => void;
  onBack: () => void;
}

export function SignInScreen({ onEmail, onGoogle, onBack }: SignInScreenProps) {
  return (
    <div className="h-full flex flex-col relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />

      <div className="p-6 relative z-10">
        <button onClick={onBack} className="flex items-center gap-2 transition-all duration-200 hover:opacity-80 hover:scale-105 active:scale-95" style={{ color: 'var(--muted-foreground)' }}>
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8 relative z-10">
        <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-premium-lg animate-scale-in" style={{ backgroundColor: 'var(--icon-surface)' }}>
          <Package className="w-12 h-12 animate-float" style={{ color: 'var(--primary)' }} strokeWidth={1.5} />
        </div>

        <h1 className="mb-2 animate-fade-in-up" style={{ color: 'var(--foreground)' }}>DoHuub</h1>
        <p className="mb-2 animate-fade-in-up" style={{ color: 'var(--primary)', animationDelay: '0.05s' }}>Infinite Services</p>
        <h2 className="mb-12 animate-fade-in-up" style={{ color: 'var(--muted-foreground)', animationDelay: '0.1s' }}>Sign In to Your Account</h2>

        <div className="w-full max-w-sm space-y-4">
          <button
            onClick={onGoogle}
            className="w-full py-4 rounded-xl flex items-center justify-center gap-3 shadow-card transition-all duration-300 hover:shadow-card-hover hover:scale-[1.02] active:scale-[0.98] animate-fade-in-up"
            style={{ backgroundColor: 'var(--card)', color: 'var(--foreground)', border: '1px solid rgba(46, 122, 217, 0.1)', animationDelay: '0.15s' }}
          >
            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: 'var(--icon-surface)' }}></div>
            Sign In with Google
          </button>

          <button
            onClick={onEmail}
            className="w-full text-white py-4 rounded-xl flex items-center justify-center gap-3 shadow-premium-lg transition-all duration-300 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] animate-fade-in-up"
            style={{ background: 'var(--primary-gradient)', animationDelay: '0.2s' }}
          >
            <Mail className="w-6 h-6" />
            Sign In with Email
          </button>
        </div>

        <div className="mt-8 flex items-center gap-2 animate-fade-in" style={{ animationDelay: '0.25s' }}>
          <span style={{ color: 'var(--muted-foreground)' }}>Don't have an account?</span>
          <button
            onClick={onBack}
            className="underline transition-all duration-200 hover:opacity-80"
            style={{ color: 'var(--primary)' }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
