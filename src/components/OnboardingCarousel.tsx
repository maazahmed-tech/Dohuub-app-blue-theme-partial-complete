import { useState } from 'react';
import { Sparkles, Grid3x3, Calendar, MessageCircle, ChevronRight, ChevronLeft } from 'lucide-react';

interface OnboardingCarouselProps {
  onComplete: () => void;
}

export function OnboardingCarousel({ onComplete }: OnboardingCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: Sparkles,
      title: 'Welcome to DoHuub',
      description: 'Infinite Services - Your platform for cleaning, handyman, food, beauty, rentals, and caregiving',
      iconColor: '#2E7AD9', // Primary blue - brand welcome
      bgColor: '#DBEAFE'
    },
    {
      icon: Grid3x3,
      title: 'Everything You Need, One App',
      description: '6 service categories to simplify your daily life and help your loved ones',
      iconColor: '#8B5CF6', // Purple - variety/categories
      bgColor: '#EDE9FE'
    },
    {
      icon: Calendar,
      title: 'Easy Booking Process',
      description: 'Select, customize, pay securely, and track your services in real-time',
      iconColor: '#14B8A6', // Teal - booking/scheduling
      bgColor: '#CCFBF1'
    },
    {
      icon: MessageCircle,
      title: '24/7 AI Assistant & Secure Payments',
      description: 'Get instant help anytime. All payments processed securely through Stripe',
      iconColor: '#10B981', // Green - support/success
      bgColor: '#D1FAE5'
    }
  ];

  const CurrentIcon = slides[currentSlide].icon;
  const currentIconColor = slides[currentSlide].iconColor;
  const currentBgColor = slides[currentSlide].bgColor;

  return (
    <div className="h-full flex flex-col relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />

      <div className="flex justify-end p-6 relative z-10">
        <button onClick={onComplete} style={{ color: 'var(--primary)' }} className="hover:opacity-80 transition-all duration-200 hover:scale-105 active:scale-95">
          Skip
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8 relative z-10">
        <div
          key={currentSlide}
          className="w-48 h-48 rounded-full flex items-center justify-center mb-8 transition-all duration-500 shadow-premium-lg animate-scale-in"
          style={{ backgroundColor: currentBgColor }}
        >
          <CurrentIcon
            className="w-24 h-24 transition-all duration-300 animate-float"
            style={{ color: currentIconColor }}
            strokeWidth={1.5}
          />
        </div>

        <h2 key={`title-${currentSlide}`} className="mb-4 text-center animate-fade-in-up" style={{ color: 'var(--foreground)' }}>
          {slides[currentSlide].title}
        </h2>

        <p key={`desc-${currentSlide}`} className="text-center max-w-sm mb-12 animate-fade-in-up" style={{ color: 'var(--muted-foreground)', animationDelay: '0.1s' }}>
          {slides[currentSlide].description}
        </p>

        <div className="flex gap-2 mb-12">
          {slides.map((_, index) => (
            <div
              key={index}
              className="h-2 rounded-full transition-all duration-500"
              style={{
                width: index === currentSlide ? '2rem' : '0.5rem',
                background: index === currentSlide ? 'var(--primary-gradient)' : 'var(--border)',
                boxShadow: index === currentSlide ? '0 0 8px rgba(76, 166, 250, 0.4)' : 'none'
              }}
            />
          ))}
        </div>
      </div>

      <div className="p-6 flex gap-4 relative z-10">
        {currentSlide > 0 && (
          <button
            onClick={() => setCurrentSlide(currentSlide - 1)}
            className="flex items-center gap-2 px-6 py-4 rounded-xl shadow-premium-sm transition-all duration-300 hover:shadow-premium-md hover:scale-105 active:scale-95"
            style={{ color: 'var(--muted-foreground)', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
          >
            <ChevronLeft className="w-5 h-5" />
            Back
          </button>
        )}

        <button
          onClick={() => {
            if (currentSlide < slides.length - 1) {
              setCurrentSlide(currentSlide + 1);
            } else {
              onComplete();
            }
          }}
          className="flex-1 flex items-center justify-center gap-2 text-white py-4 rounded-xl shadow-premium-lg transition-all duration-300 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]"
          style={{ background: 'var(--primary-gradient)' }}
        >
          {currentSlide < slides.length - 1 ? (
            <>
              Next
              <ChevronRight className="w-5 h-5" />
            </>
          ) : (
            'Get Started'
          )}
        </button>
      </div>
    </div>
  );
}