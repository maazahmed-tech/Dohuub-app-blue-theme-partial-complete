import { ChevronLeft, Mail, Phone, MapPin, Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import type { Screen } from '../App';

interface AboutDoHuubScreenProps {
  onBack: () => void;
}

export function AboutDoHuubScreen({ onBack }: AboutDoHuubScreenProps) {
  return (
    <div className="h-full flex flex-col relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />

      {/* Header */}
      <div
        className="px-6 py-6 relative z-10 flex items-center gap-4"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.06)',
          borderBottom: '1px solid rgba(46, 122, 217, 0.08)',
          borderRadius: '0 0 24px 24px',
        }}
      >
        <button onClick={onBack} className="p-2 -ml-2 transition-all duration-200 hover:opacity-80 hover:-translate-x-1">
          <ChevronLeft className="w-6 h-6" style={{ color: 'var(--foreground)' }} />
        </button>
        <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>About DoHuub</h3>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 relative z-10">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8 animate-scale-in">
          <div className="w-24 h-24 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-premium-lg animate-float" style={{ background: 'var(--primary-gradient)' }}>
            <span className="text-white font-bold text-lg">DoHuub</span>
          </div>
          <h3 className="mb-2" style={{ color: 'var(--foreground)' }}>DoHuub</h3>
          <p style={{ color: 'var(--primary)' }}>Infinite Services</p>
        </div>

        {/* About Section */}
        <div className="space-y-6 mb-8">
          <section className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="mb-3" style={{ color: 'var(--foreground)' }}>Our Mission</h4>
            <p style={{ color: 'var(--muted-foreground)' }}>
              DoHuub is your all-in-one lifestyle super-app, designed to simplify your daily life by connecting you with trusted service providers. From cleaning and handyman services to beauty treatments and caregiving support, we bring infinite services right to your fingertips.
            </p>
          </section>

          <section className="animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <h4 className="mb-3" style={{ color: 'var(--foreground)' }}>What We Offer</h4>
            <div className="space-y-3">
              <div className="p-4 rounded-xl shadow-card transition-all duration-300 hover:shadow-premium-sm" style={{ backgroundColor: 'var(--card)' }}>
                <p className="mb-1" style={{ color: 'var(--foreground)' }}>🧹 Cleaning Services</p>
                <p style={{ color: 'var(--muted-foreground)' }}>Professional home and office cleaning</p>
              </div>
              <div className="p-4 rounded-xl shadow-card transition-all duration-300 hover:shadow-premium-sm" style={{ backgroundColor: 'var(--card)' }}>
                <p className="mb-1" style={{ color: 'var(--foreground)' }}>🔧 Handyman Services</p>
                <p style={{ color: 'var(--muted-foreground)' }}>Expert repairs and maintenance</p>
              </div>
              <div className="p-4 rounded-xl shadow-card transition-all duration-300 hover:shadow-premium-sm" style={{ backgroundColor: 'var(--card)' }}>
                <p className="mb-1" style={{ color: 'var(--foreground)' }}>🛒 Groceries & Food</p>
                <p style={{ color: 'var(--muted-foreground)' }}>Fresh groceries and meals delivered</p>
              </div>
              <div className="p-4 rounded-xl shadow-card transition-all duration-300 hover:shadow-premium-sm" style={{ backgroundColor: 'var(--card)' }}>
                <p className="mb-1" style={{ color: 'var(--foreground)' }}>💅 Beauty on Demand</p>
                <p style={{ color: 'var(--muted-foreground)' }}>Salon services at your location</p>
              </div>
              <div className="p-4 rounded-xl shadow-card transition-all duration-300 hover:shadow-premium-sm" style={{ backgroundColor: 'var(--card)' }}>
                <p className="mb-1" style={{ color: 'var(--foreground)' }}>🏠 Rental Properties</p>
                <p style={{ color: 'var(--muted-foreground)' }}>Find your perfect home</p>
              </div>
              <div className="p-4 rounded-xl shadow-card transition-all duration-300 hover:shadow-premium-sm" style={{ backgroundColor: 'var(--card)' }}>
                <p className="mb-1" style={{ color: 'var(--foreground)' }}>❤️ Caregiving Services</p>
                <p style={{ color: 'var(--muted-foreground)' }}>Ride assistance and companionship</p>
              </div>
            </div>
          </section>

          <section className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="mb-3" style={{ color: 'var(--foreground)' }}>Why Choose DoHuub?</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary)' }}></span>
                <p style={{ color: 'var(--muted-foreground)' }}>Verified and trusted service providers</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary)' }}></span>
                <p style={{ color: 'var(--muted-foreground)' }}>Secure and seamless payment processing</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary)' }}></span>
                <p style={{ color: 'var(--muted-foreground)' }}>Real-time order tracking and updates</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary)' }}></span>
                <p style={{ color: 'var(--muted-foreground)' }}>24/7 AI-powered customer support</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary)' }}></span>
                <p style={{ color: 'var(--muted-foreground)' }}>Flexible scheduling and instant booking</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--primary)' }}></span>
                <p style={{ color: 'var(--muted-foreground)' }}>Transparent pricing with no hidden fees</p>
              </li>
            </ul>
          </section>
        </div>

        {/* Contact Information */}
        <div className="rounded-xl p-5 mb-8 shadow-card animate-fade-in-up" style={{ backgroundColor: 'var(--card)', animationDelay: '0.25s' }}>
          <h4 className="mb-4" style={{ color: 'var(--foreground)' }}>Contact Us</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-premium-sm" style={{ backgroundColor: 'var(--secondary)' }}>
                <Mail className="w-5 h-5" style={{ color: 'var(--primary)' }} />
              </div>
              <div>
                <p style={{ color: 'var(--foreground)' }}>support@dohuub.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-premium-sm" style={{ backgroundColor: 'var(--secondary)' }}>
                <Phone className="w-5 h-5" style={{ color: 'var(--primary)' }} />
              </div>
              <div>
                <p style={{ color: 'var(--foreground)' }}>1-800-DOHUUB1</p>
                <p style={{ color: 'var(--muted-foreground)' }}>(1-800-364-8821)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-premium-sm" style={{ backgroundColor: 'var(--secondary)' }}>
                <MapPin className="w-5 h-5" style={{ color: 'var(--primary)' }} />
              </div>
              <div>
                <p style={{ color: 'var(--foreground)' }}>123 Service Lane, Suite 100</p>
                <p style={{ color: 'var(--foreground)' }}>San Francisco, CA 94105</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-premium-sm" style={{ backgroundColor: 'var(--secondary)' }}>
                <Globe className="w-5 h-5" style={{ color: 'var(--primary)' }} />
              </div>
              <div>
                <p style={{ color: 'var(--foreground)' }}>www.dohuub.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h4 className="mb-4" style={{ color: 'var(--foreground)' }}>Follow Us</h4>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full flex items-center justify-center shadow-card transition-all duration-300 hover:shadow-premium-sm hover:scale-110" style={{ backgroundColor: 'var(--secondary)' }}>
              <Facebook className="w-5 h-5" style={{ color: 'var(--primary)' }} />
            </button>
            <button className="w-12 h-12 rounded-full flex items-center justify-center shadow-card transition-all duration-300 hover:shadow-premium-sm hover:scale-110" style={{ backgroundColor: 'var(--secondary)' }}>
              <Twitter className="w-5 h-5" style={{ color: 'var(--primary)' }} />
            </button>
            <button className="w-12 h-12 rounded-full flex items-center justify-center shadow-card transition-all duration-300 hover:shadow-premium-sm hover:scale-110" style={{ backgroundColor: 'var(--secondary)' }}>
              <Instagram className="w-5 h-5" style={{ color: 'var(--primary)' }} />
            </button>
            <button className="w-12 h-12 rounded-full flex items-center justify-center shadow-card transition-all duration-300 hover:shadow-premium-sm hover:scale-110" style={{ backgroundColor: 'var(--secondary)' }}>
              <Linkedin className="w-5 h-5" style={{ color: 'var(--primary)' }} />
            </button>
          </div>
        </div>

        {/* Credits */}
        <div className="text-center pb-4 animate-fade-in" style={{ animationDelay: '0.35s' }}>
          <p className="mb-2" style={{ color: 'var(--muted-foreground)' }}>Made with ❤️ for our community</p>
          <p style={{ color: 'var(--muted-foreground)', opacity: 0.7 }}>© 2025 DoHuub, Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
