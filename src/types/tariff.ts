export interface Tariff {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  features: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
