import { ArrowLeft, Star, Gift, Award } from 'lucide-react';
import type { Vendor } from './VendorsListScreen';

interface Service {
  id: string;
  name: string;
  description: string;
  rating: number;
  imageUrl: string;
  price: string;
}

interface VendorDetailScreenProps {
  vendor: Vendor;
  onBack: () => void;
  onServiceSelect: (service: Service, vendor: Vendor) => void;
  onViewProfile?: () => void;
}

const services: Service[] = [
  {
    id: '1',
    name: 'Residential Cleaning',
    description: 'Complete home cleaning service',
    rating: 4.9,
    imageUrl: '',
    price: '$150'
  },
  {
    id: '2',
    name: 'Industrial Cleaning',
    description: 'Heavy-duty industrial facility cleaning',
    rating: 4.8,
    imageUrl: '',
    price: '$500'
  },
  {
    id: '3',
    name: 'Carpet Cleaning',
    description: 'Deep carpet and upholstery cleaning',
    rating: 4.9,
    imageUrl: '',
    price: '$120'
  },
  {
    id: '4',
    name: 'Window Cleaning',
    description: 'Interior and exterior window cleaning',
    rating: 4.7,
    imageUrl: '',
    price: '$100'
  },
  {
    id: '5',
    name: 'Duct Cleaning',
    description: 'Air duct and ventilation system cleaning',
    rating: 4.8,
    imageUrl: '',
    price: '$300'
  },
  {
    id: '6',
    name: 'Office Cleaning',
    description: 'Commercial office space cleaning',
    rating: 4.9,
    imageUrl: '',
    price: '$250'
  }
];

export function VendorDetailScreen({ vendor, onBack, onServiceSelect, onViewProfile }: VendorDetailScreenProps) {
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
          <h1 className="font-semibold" style={{ color: 'var(--foreground)' }}>{vendor.name}</h1>
        </div>
      </div>

      {/* Vendor Summary */}
      <div className="px-6 py-6 glass relative z-10 animate-fade-in-up" style={{ borderBottom: '1px solid rgba(46, 122, 217, 0.1)' }}>
        <div className="flex gap-4 items-center">
          {/* Vendor Image */}
          <div
            className="w-20 h-20 rounded-full flex-shrink-0 flex items-center justify-center shadow-premium-md"
            style={{ background: 'var(--primary-gradient)' }}
          >
            <span className="text-white text-3xl">🧹</span>
          </div>

          {/* Vendor Info */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <h2 className="font-bold text-lg" style={{ color: 'var(--foreground)' }}>{vendor.name}</h2>
              {vendor.isPoweredByDoHuub && (
                <div className="flex items-center gap-2">
                  <span
                    className="px-2 py-1 text-white text-xs rounded-full flex items-center gap-1 shadow-premium-sm"
                    style={{ background: 'var(--primary-gradient)' }}
                  >
                    <Award className="w-3 h-3" />
                    DoHuub
                  </span>
                  <span
                    className="inline-flex items-center justify-center h-6 px-2 text-white text-xs font-bold rounded-full shadow-premium-sm"
                    style={{ background: 'linear-gradient(135deg, rgb(245, 158, 11), rgb(234, 88, 12))' }}
                  >
                    <Gift className="w-3 h-3 mr-1" />
                    1pt/$1
                  </span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" style={{ color: 'rgb(250, 204, 21)', fill: 'rgb(250, 204, 21)' }} />
                <span className="font-medium" style={{ color: 'var(--foreground)' }}>{vendor.rating}</span>
              </div>
              <span style={{ color: 'var(--muted-foreground)' }}>({vendor.reviewCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* View Profile Button */}
        {onViewProfile && (
          <button
            onClick={onViewProfile}
            className="w-full mt-4 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-card hover:scale-[1.02] active:scale-[0.98]"
            style={{
              backgroundColor: 'var(--card)',
              color: 'var(--foreground)',
              border: '2px solid var(--border)'
            }}
          >
            View Vendor Profile
          </button>
        )}
      </div>

      {/* Points Earning Banner for DoHuub vendors */}
      {vendor.isPoweredByDoHuub && (
        <div
          className="px-6 py-3 glass relative z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(249, 115, 22, 0.1))',
            borderBottom: '1px solid rgba(245, 158, 11, 0.3)'
          }}
        >
          <div className="flex items-center gap-2">
            <Gift className="w-5 h-5" style={{ color: 'rgb(245, 158, 11)' }} />
            <span className="font-medium" style={{ color: 'rgb(180, 83, 9)' }}>Earn 1 point per $1 spent</span>
            <span className="text-sm" style={{ color: 'rgb(217, 119, 6)' }}>• Points added after service</span>
          </div>
        </div>
      )}

      {/* Services Grid */}
      <div className="flex-1 overflow-y-auto px-6 py-6 relative z-10">
        <h3 className="font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Services Offered</h3>
        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => onServiceSelect(service, vendor)}
              className="rounded-xl overflow-hidden text-left shadow-card transition-all duration-300 hover:shadow-premium-sm hover:scale-[1.02] active:scale-[0.98] animate-fade-in-up"
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                animationDelay: `${index * 0.05}s`
              }}
            >
              {/* Service Image */}
              <div
                className="h-28 flex items-center justify-center"
                style={{ background: 'var(--primary-gradient)' }}
              >
                <span className="text-white text-4xl">🧹</span>
              </div>

              {/* Service Info */}
              <div className="p-3">
                <h4 className="font-medium mb-1" style={{ color: 'var(--foreground)' }}>{service.name}</h4>
                <div className="flex items-center gap-1 mb-1">
                  <Star className="w-3 h-3" style={{ color: 'rgb(250, 204, 21)', fill: 'rgb(250, 204, 21)' }} />
                  <span className="text-sm" style={{ color: 'var(--foreground)' }}>{service.rating}</span>
                </div>
                <p className="text-sm line-clamp-1 mb-2" style={{ color: 'var(--muted-foreground)' }}>{service.description}</p>
                <p className="font-semibold" style={{ color: 'var(--primary)' }}>{service.price}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export type { Service };
