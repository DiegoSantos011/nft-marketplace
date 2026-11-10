export type ETHAmount = string;

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
}

export interface Wallet {
  id: string;
  address: string;
  network: 'ethereum' | 'polygon' | 'arbitrum';
  isPrimary: boolean;
}

export interface NFT {
  id: string;
  name: string;
  description: string;
  creator: string;
  owner: string;
  imageUrl: string;
  priceEth: ETHAmount;
  priceUsd: number;
  availableQuantity: number;
  totalQuantity: number;
  category: string;
  isFavorite?: boolean;
}

export interface CartItem {
  nftId: string;
  nft: NFT;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  subtotalEth: ETHAmount;
  discountEth: ETHAmount;
  networkFeeEth: ETHAmount;
  totalEth: ETHAmount;
  appliedCoupon?: string;
}

export type OrderStatus = 'pending' | 'confirmed' | 'rejected';

export interface Order {
  id: string;
  idempotencyKey: string;
  userId: string;
  items: CartItem[];
  subtotalEth: ETHAmount;
  discountEth: ETHAmount;
  networkFeeEth: ETHAmount;
  totalEth: ETHAmount;
  status: OrderStatus;
  txHash?: string;
  walletAddress: string;
  network: string;
  createdAt: string;
}