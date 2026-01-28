import { ArrowLeft, Star, Clock, BadgeCheck, Image as ImageIcon, Gift, Award } from 'lucide-react';

export interface GroceryVendor {
  id: number;
  name: string;
  storeType: string;
  rating: number;
  deliveryTime: string;
  isPoweredByDoHuub?: boolean;
  reviews?: number;
  categories?: string[];
  deliveryFee?: number;
  address?: string;
}

interface GroceryVendorsListScreenProps {
  onBack: () => void;
  onVendorSelect: (vendor: GroceryVendor) => void;
  onViewProfile?: (vendor: GroceryVendor) => void;
}

export function GroceryVendorsListScreen({
  onBack,
  onVendorSelect,
  onViewProfile
}: GroceryVendorsListScreenProps) {
  const vendors: GroceryVendor[] = [
    {
      id: 1,
      name: 'DoHuub Supermarket',
      storeType: 'Supermarket, Groceries',
      rating: 4.9,
      deliveryTime: '30-40 min',
      isPoweredByDoHuub: true
    },
    {
      id: 2,
      name: 'Fresh Market',
      storeType: 'Organic, Fresh Produce',
      rating: 4.7,
      deliveryTime: '35-45 min'
    },
    {
      id: 3,
      name: 'Quick Stop Grocers',
      storeType: 'Convenience Store',
      rating: 4.6,
      deliveryTime: '20-30 min'
    },
    {
      id: 4,
      name: 'Organic Valley',
      storeType: 'Organic, Health Foods',
      rating: 4.8,
      deliveryTime: '40-50 min'
    },
    {
      id: 5,
      name: 'City Supermart',
      storeType: 'Supermarket, Household',
      rating: 4.5,
      deliveryTime: '30-40 min'
    },
    {
      id: 6,
      name: 'Green Grocers',
      storeType: 'Fruits & Vegetables',
      rating: 4.7,
      deliveryTime: '25-35 min'
    }
  ];

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
          <div>
            <h1 className="font-semibold" style={{ color: 'var(--foreground)' }}>Grocery Delivery</h1>
            <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Shop from top stores</p>
          </div>
        </div>
      </div>

      {/* Vendors List */}
      <div className="flex-1 overflow-y-auto px-6 py-6 relative z-10">
        <div className="space-y-4">
          {vendors.map((vendor, index) => (
            <div
              key={vendor.id}
              className="w-full rounded-xl p-4 shadow-card animate-fade-in-up transition-all duration-300 hover:shadow-premium-sm"
              style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                animationDelay: `${index * 0.05}s`
              }}
            >
              <div className="flex gap-4 mb-3">
                {/* Vendor Image */}
                <div
                  className="w-20 h-20 rounded-lg flex items-center justify-center flex-shrink-0 shadow-premium-sm"
                  style={{ background: 'linear-gradient(135deg, rgb(34, 197, 94), rgb(22, 163, 74))' }}
                >
                  <span className="text-3xl">🛒</span>
                </div>

                {/* Vendor Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold truncate" style={{ color: 'var(--foreground)' }}>{vendor.name}</h3>
                    {vendor.isPoweredByDoHuub && (
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <div
                          className="flex items-center gap-1 px-2 py-1 rounded-full text-white shadow-premium-sm"
                          style={{ background: 'var(--primary-gradient)' }}
                        >
                          <Award className="w-3 h-3" />
                          <span className="text-xs font-medium">DoHuub</span>
                        </div>
                        <span
                          className="inline-flex items-center justify-center h-6 px-2 text-white text-xs font-bold rounded-full shadow-premium-sm"
                          style={{ background: 'linear-gradient(135deg, rgb(245, 158, 11), rgb(234, 88, 12))' }}
                        >
                          <Gift className="w-3 h-3 mr-1" />
                          pts
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm mb-2 truncate" style={{ color: 'var(--muted-foreground)' }}>{vendor.storeType}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" style={{ color: 'rgb(250, 204, 21)', fill: 'rgb(250, 204, 21)' }} />
                      <span className="font-medium" style={{ color: 'var(--foreground)' }}>{vendor.rating}</span>
                    </div>
                    <div className="flex items-center gap-1" style={{ color: 'var(--muted-foreground)' }}>
                      <Clock className="w-4 h-4" />
                      <span>{vendor.deliveryTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => onVendorSelect(vendor)}
                  className="flex-1 py-2.5 rounded-xl text-white font-medium transition-all duration-300 hover:shadow-premium-sm hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: 'linear-gradient(135deg, rgb(34, 197, 94), rgb(22, 163, 74))' }}
                >
                  Shop Now
                </button>
                {onViewProfile && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewProfile(vendor);
                    }}
                    className="flex-1 py-2.5 rounded-xl font-medium transition-all duration-300 hover:shadow-card hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      backgroundColor: 'var(--card)',
                      color: 'var(--foreground)',
                      border: '2px solid var(--border)'
                    }}
                  >
                    View Profile
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
