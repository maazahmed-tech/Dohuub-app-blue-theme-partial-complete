import { MapPin, Search, Home, Calendar, MessageCircle, User, Sparkles, Wrench, ShoppingBag, Scissors, Building2, Heart, Bell, Gift, Flame } from 'lucide-react';
import { useState } from 'react';
import type { Screen } from '../App';
import { LocationSelectorModal, Address } from './LocationSelectorModal';
import { NotificationsPanel, Notification } from './NotificationsPanel';

interface StreakMilestone {
  weeks: number;
  points: number;
  achieved: boolean;
}

interface HomeDashboardProps {
  addresses: Address[];
  selectedAddressId: string;
  onSelectAddress: (addressId: string) => void;
  location: string;
  navigate: (screen: Screen, data?: any) => void;
  onCategorySelect: (category: string) => void;
  onLocationChange: () => void;
  onAddAddress: () => void;
  notifications: Notification[];
  onMarkNotificationAsRead: (id: string) => void;
  onClearAllNotifications: () => void;
  rewardsWallet?: {
    totalPoints: number;
    pendingPoints: number;
    expiringPoints: number;
    expiringDate: string | null;
  };
  streakData?: {
    currentStreak: number;
    longestStreak: number;
    lastActiveWeek: string;
    streakMilestones: StreakMilestone[];
  };
}

const categories = [
  { id: 'cleaning', name: 'Cleaning Services', icon: Sparkles, available: true, iconColor: '#2E7AD9', bgColor: '#DBEAFE' },
  { id: 'handyman', name: 'Handyman Services', icon: Wrench, available: true, iconColor: '#EAB308', bgColor: '#FEF9C3' },
  { id: 'groceries', name: 'Groceries & Food', icon: ShoppingBag, available: true, iconColor: '#F59E0B', bgColor: '#FEF3C7' },
  { id: 'beauty', name: 'Beauty Services and Products', icon: Scissors, available: true, iconColor: '#EC4899', bgColor: '#FCE7F3' },
  { id: 'rentals', name: 'Rental Properties', icon: Building2, available: true, iconColor: '#10B981', bgColor: '#D1FAE5' },
  { id: 'caregiving', name: 'Caregiving Services', icon: Heart, available: true, restrictedForWork: true, iconColor: '#8B5CF6', bgColor: '#EDE9FE' },
];

export function HomeDashboard({ addresses, selectedAddressId, onSelectAddress, location, navigate, onCategorySelect, onLocationChange, onAddAddress, notifications, onMarkNotificationAsRead, onClearAllNotifications, rewardsWallet, streakData }: HomeDashboardProps) {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isNotificationsPanelOpen, setIsNotificationsPanelOpen] = useState(false);

  // Get the currently selected address
  const selectedAddress = addresses.find(addr => addr.id.toString() === selectedAddressId);
  const displayLabel = selectedAddress ? selectedAddress.label : 'Location';

  // Count unread notifications
  const unreadCount = notifications.filter(n => !n.isRead).length;

  const handleLocationChange = () => {
    setIsLocationModalOpen(true);
  };

  const handleLocationModalClose = () => {
    setIsLocationModalOpen(false);
  };

  const handleNotificationsPanelToggle = () => {
    setIsNotificationsPanelOpen(!isNotificationsPanelOpen);
  };

  const handleNotificationsPanelClose = () => {
    setIsNotificationsPanelOpen(false);
  };

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: 'var(--background)' }}>
      {/* Header with subtle pattern */}
      <div className="px-6 py-4 border-b-2 relative overflow-hidden" style={{ borderColor: 'var(--border)' }}>
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none" />

        <div className="flex items-center justify-between mb-4 relative z-10">
          <button
            onClick={handleLocationChange}
            className="flex items-center gap-2 px-4 py-2 rounded-xl shadow-card transition-all duration-300 hover:shadow-card-hover hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: 'var(--card)', border: '1px solid rgba(46, 122, 217, 0.1)' }}
          >
            <MapPin className="w-5 h-5" style={{ color: 'var(--primary)' }} />
            <span style={{ color: 'var(--foreground)' }}>{displayLabel}</span>
            <span style={{ color: 'var(--muted-foreground)' }}>▼</span>
          </button>
          <div className="flex items-center gap-3">
            {/* Streak Badge */}
            {streakData && streakData.currentStreak > 0 && (
              <button
                onClick={() => navigate('rewardsWallet')}
                className="flex items-center gap-1 px-2.5 py-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-white shadow-premium-md hover:shadow-premium-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Flame className="w-4 h-4" />
                <span className="font-semibold text-sm">{streakData.currentStreak}</span>
              </button>
            )}
            {/* Points Badge */}
            {rewardsWallet && rewardsWallet.totalPoints > 0 && (
              <button
                onClick={() => navigate('rewardsWallet')}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white shadow-premium-md hover:shadow-premium-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Gift className="w-4 h-4" />
                <span className="font-semibold text-sm">{rewardsWallet.totalPoints.toLocaleString()}</span>
              </button>
            )}
            <button className="relative p-2 transition-all duration-200 hover:scale-110 active:scale-95" onClick={handleNotificationsPanelToggle}>
              <Bell className="w-6 h-6" style={{ color: 'var(--foreground)' }} strokeWidth={2} />
              {unreadCount > 0 && <span className="absolute top-1 right-1 w-2 h-2 rounded-full animate-pulse-soft" style={{ backgroundColor: 'var(--destructive)' }}></span>}
            </button>
            <button onClick={() => navigate('profile')} className="transition-all duration-200 hover:scale-110 active:scale-95">
              <User className="w-8 h-8" style={{ color: 'var(--foreground)' }} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Location Banner */}
        {selectedAddress && (
          <div className="flex items-center justify-between p-3 rounded-xl shadow-premium-sm accent-border-left relative z-10" style={{ backgroundColor: 'var(--secondary)' }}>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" style={{ color: 'var(--primary)' }} />
              <p style={{ color: 'var(--foreground)' }}>
                {selectedAddress.street}, {selectedAddress.city}, {selectedAddress.state}
              </p>
            </div>
            <button onClick={handleLocationChange} className="underline transition-all duration-200 hover:opacity-80" style={{ color: 'var(--primary)' }}>
              Change
            </button>
          </div>
        )}
        {!selectedAddress && addresses.length === 0 && (
          <div className="flex items-center justify-between p-3 rounded-xl border-2 shadow-premium-sm relative z-10" style={{ backgroundColor: '#FEF9C3', borderColor: '#FDE047' }}>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" style={{ color: '#CA8A04' }} />
              <p style={{ color: '#A16207' }}>Add an address to get started</p>
            </div>
            <button onClick={handleLocationChange} className="underline transition-all duration-200 hover:opacity-80" style={{ color: '#A16207' }}>
              Add
            </button>
          </div>
        )}
      </div>

      {/* Search Bar */}
      <div className="px-6 py-4 animate-fade-in">
        <button
          onClick={() => navigate('aiChat')}
          className="w-full flex items-center gap-3 px-4 py-4 rounded-xl shadow-card transition-all duration-300 hover:shadow-card-hover hover:scale-[1.01] active:scale-[0.99] focus-glow"
          style={{ backgroundColor: 'var(--card)', border: '1px solid rgba(46, 122, 217, 0.1)' }}
        >
          <Search className="w-5 h-5" style={{ color: 'var(--muted-foreground)' }} />
          <span style={{ color: 'var(--muted-foreground)' }}>What service do you need?</span>
        </button>
      </div>

      {/* Combined Rewards Banner */}
      {(rewardsWallet?.totalPoints > 0 || (streakData && streakData.currentStreak > 0)) && (
        <div className="px-6 pb-4 animate-fade-in-up">
          <button
            onClick={() => navigate('rewardsWallet')}
            className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl shadow-premium-sm hover:shadow-premium-md hover:from-amber-100 hover:to-orange-100 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
          >
            {rewardsWallet?.totalPoints > 0 && (
              <div className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-amber-600" />
                <span className="font-semibold" style={{ color: 'var(--foreground)' }}>{rewardsWallet.totalPoints.toLocaleString()} pts</span>
              </div>
            )}
            {streakData && streakData.currentStreak > 0 && (
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="font-semibold" style={{ color: 'var(--foreground)' }}>{streakData.currentStreak} week streak</span>
              </div>
            )}
          </button>
        </div>
      )}

      {/* Categories Grid */}
      <div className="flex-1 overflow-y-auto px-6 pb-24">
        <p className="mb-4 animate-fade-in" style={{ color: 'var(--foreground)' }}>Available Services</p>
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            // Check if caregiving service is restricted for work addresses
            const isAvailable = category.restrictedForWork
              ? selectedAddress?.type !== 'Work'
              : category.available;

            return (
              <button
                key={category.id}
                onClick={() => isAvailable && onCategorySelect(category.name)}
                disabled={!isAvailable}
                className={`p-6 rounded-xl flex flex-col items-center gap-3 transition-all duration-300 animate-fade-in-up ${isAvailable ? 'premium-card-interactive' : ''}`}
                style={{
                  backgroundColor: isAvailable ? 'var(--card)' : 'var(--muted)',
                  opacity: isAvailable ? 1 : 0.6,
                  animationDelay: `${index * 0.05}s`,
                  animationFillMode: 'backwards'
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-premium-sm"
                  style={{ backgroundColor: isAvailable ? category.bgColor : 'var(--muted)' }}
                >
                  <Icon
                    className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: isAvailable ? category.iconColor : 'var(--muted-foreground)' }}
                    strokeWidth={1.5}
                  />
                </div>
                <p className="text-center" style={{ color: isAvailable ? 'var(--foreground)' : 'var(--muted-foreground)' }}>
                  {category.name}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 px-6 py-4 glass shadow-premium-lg" style={{ borderTop: '1px solid rgba(46, 122, 217, 0.1)' }}>
        <div className="flex justify-around">
          <button className="flex flex-col items-center gap-1 nav-item-active relative">
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full" style={{ background: 'var(--primary-gradient)' }} />
            <Home className="w-6 h-6" style={{ color: 'var(--primary)' }} strokeWidth={2} />
            <span style={{ color: 'var(--primary)' }}>Home</span>
          </button>
          <button onClick={() => navigate('myBookings')} className="flex flex-col items-center gap-1 transition-all duration-200 hover:scale-110 active:scale-95">
            <Calendar className="w-6 h-6" style={{ color: 'var(--muted-foreground)' }} strokeWidth={2} />
            <span style={{ color: 'var(--muted-foreground)' }}>Bookings</span>
          </button>
          <button onClick={() => navigate('aiChat')} className="flex flex-col items-center gap-1 transition-all duration-200 hover:scale-110 active:scale-95">
            <MessageCircle className="w-6 h-6" style={{ color: 'var(--muted-foreground)' }} strokeWidth={2} />
            <span style={{ color: 'var(--muted-foreground)' }}>AI Assistant</span>
          </button>
          <button onClick={() => navigate('profile')} className="flex flex-col items-center gap-1 transition-all duration-200 hover:scale-110 active:scale-95">
            <User className="w-6 h-6" style={{ color: 'var(--muted-foreground)' }} strokeWidth={2} />
            <span style={{ color: 'var(--muted-foreground)' }}>Profile</span>
          </button>
        </div>
      </div>

      {/* Location Selector Modal */}
      <LocationSelectorModal
        isOpen={isLocationModalOpen}
        onClose={handleLocationModalClose}
        addresses={addresses}
        selectedAddressId={selectedAddressId}
        onSelectAddress={onSelectAddress}
        onAddAddress={onAddAddress}
      />

      {/* Notifications Panel */}
      <NotificationsPanel
        isOpen={isNotificationsPanelOpen}
        onClose={handleNotificationsPanelClose}
        notifications={notifications}
        onMarkNotificationAsRead={onMarkNotificationAsRead}
        onClearAllNotifications={onClearAllNotifications}
      />
    </div>
  );
}