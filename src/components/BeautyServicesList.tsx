import { ArrowLeft, Star } from 'lucide-react';
import { useState } from 'react';

interface BeautyService {
  id: number;
  name: string;
  category: string;
  price: string;
  duration: string;
  rating: number;
  reviews: number;
}

interface BeautyServicesListProps {
  providerName: string;
  onBack: () => void;
  onSelectService: (service: BeautyService) => void;
}

export function BeautyServicesList({
  providerName,
  onBack,
  onSelectService
}: BeautyServicesListProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const services: BeautyService[] = [
    {
      id: 1,
      name: 'Professional Makeup',
      category: 'Makeup',
      price: '$80.00',
      duration: '90 min',
      rating: 4.9,
      reviews: 342
    },
    {
      id: 2,
      name: 'Bridal Makeup',
      category: 'Makeup',
      price: '$200.00',
      duration: '180 min',
      rating: 4.9,
      reviews: 289
    },
    {
      id: 3,
      name: 'Hair Styling',
      category: 'Hair',
      price: '$60.00',
      duration: '60 min',
      rating: 4.8,
      reviews: 425
    },
    {
      id: 4,
      name: 'Hair Coloring',
      category: 'Hair',
      price: '$120.00',
      duration: '120 min',
      rating: 4.7,
      reviews: 198
    },
    {
      id: 5,
      name: 'Facial Treatment',
      category: 'Skincare',
      price: '$70.00',
      duration: '75 min',
      rating: 4.8,
      reviews: 267
    },
    {
      id: 6,
      name: 'Deep Cleansing Facial',
      category: 'Skincare',
      price: '$90.00',
      duration: '90 min',
      rating: 4.9,
      reviews: 312
    },
    {
      id: 7,
      name: 'Manicure',
      category: 'Nails',
      price: '$35.00',
      duration: '45 min',
      rating: 4.7,
      reviews: 453
    },
    {
      id: 8,
      name: 'Pedicure',
      category: 'Nails',
      price: '$40.00',
      duration: '60 min',
      rating: 4.8,
      reviews: 389
    },
    {
      id: 9,
      name: 'Gel Nail Extensions',
      category: 'Nails',
      price: '$65.00',
      duration: '90 min',
      rating: 4.9,
      reviews: 276
    },
    {
      id: 10,
      name: 'Full Body Massage',
      category: 'Spa',
      price: '$100.00',
      duration: '90 min',
      rating: 4.9,
      reviews: 521
    }
  ];

  // Generic categories for all beauty service providers
  const categories = ['All', 'Makeup', 'Hair', 'Skincare', 'Nails', 'Spa'];

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(s => s.category === selectedCategory);

  return (
    <div className="h-full flex flex-col relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />

      {/* Header */}
      <div className="px-6 py-4 glass relative z-10" style={{ borderBottom: '1px solid rgba(46, 122, 217, 0.1)' }}>
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 rounded-xl transition-all duration-300 hover:shadow-card"
            style={{ backgroundColor: 'var(--card)' }}
          >
            <ArrowLeft className="w-5 h-5" style={{ color: 'var(--foreground)' }} strokeWidth={2} />
          </button>
          <div className="flex-1">
            <h1 className="font-semibold" style={{ color: 'var(--foreground)' }}>{providerName}</h1>
            <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Browse services</p>
          </div>
        </div>
      </div>

      {/* Horizontal Category Tabs */}
      <div className="px-6 py-3 overflow-x-auto relative z-10 glass" style={{ borderBottom: '1px solid rgba(46, 122, 217, 0.1)' }}>
        <div className="flex gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300"
              style={{
                background: selectedCategory === category ? 'var(--primary-gradient)' : 'var(--muted)',
                color: selectedCategory === category ? 'white' : 'var(--muted-foreground)',
                boxShadow: selectedCategory === category ? '0 4px 12px rgba(46, 122, 217, 0.3)' : 'none'
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Services List */}
      <div className="flex-1 overflow-y-auto px-6 py-6 relative z-10">
        <div className="space-y-3">
          {filteredServices.map((service, index) => (
            <button
              key={service.id}
              onClick={() => onSelectService(service)}
              className="w-full rounded-xl p-4 shadow-card transition-all duration-300 hover:shadow-premium-sm hover:scale-[1.01] active:scale-[0.99] text-left animate-fade-in-up"
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                animationDelay: `${index * 0.03}s`
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex-1">
                  <h4 className="font-medium mb-1" style={{ color: 'var(--foreground)' }}>{service.name}</h4>
                  <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{service.duration}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold" style={{ color: 'var(--primary)' }}>{service.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" style={{ color: 'rgb(250, 204, 21)', fill: 'rgb(250, 204, 21)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>{service.rating}</span>
                </div>
                <span className="text-sm" style={{ color: 'var(--muted-foreground)' }}>({service.reviews} reviews)</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
