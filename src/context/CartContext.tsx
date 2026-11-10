import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export interface NFT {
  id: string;
  name: string;
  description: string;
  priceEth: string;
  imageUrl: string;
  category: string;
  tokenId?: string;
}

interface CartContextType {
  cart: NFT[];
  addToCart: (nft: NFT) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  totalEth: string;
  walletAddress: string | null;
  isLoggedIn: boolean;
  loginUser: (email?: string) => void;
  disconnectWallet: () => void;
  activeModal: 'login' | 'register' | 'confirmation' | null;
  setActiveModal: (modal: 'login' | 'register' | 'confirmation' | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<NFT[]>([]);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState<'login' | 'register' | 'confirmation' | null>(null);

  const addToCart = (nft: NFT) => {
    if (!cart.some((item) => item.id === nft.id)) {
      setCart([...cart, nft]);
    }
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const loginUser = (_email?: string) => {
    setIsLoggedIn(true);
    setWalletAddress('0x71C...39a2');
    setActiveModal(null);
  };

  const disconnectWallet = () => {
    setIsLoggedIn(false);
    setWalletAddress(null);
  };

  const totalEth = cart
    .reduce((sum, item) => sum + parseFloat(item.priceEth), 0)
    .toFixed(3);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalEth,
        walletAddress,
        isLoggedIn,
        loginUser,
        disconnectWallet,
        activeModal,
        setActiveModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
}