export interface UserProfile {
  id: number;
  name: string;
  email: string;
  phone?: string;
  role: string;
  registeredAt: string;
  lastLogin: string;
  ordersCount: number;
  points: number;
  // Campos adicionales (CC-F08)
  altPhone?: string;
  secondaryAddress?: string;
  deliveryPrefs?: string;
}
