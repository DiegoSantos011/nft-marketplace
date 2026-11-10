import { useState } from 'react';
import { useCart } from '../context/CartContext';

import image1 from '../assets/img/image.png';
import image2 from '../assets/img/image2.jpg';
import image3 from '../assets/img/image3.jpg';

export function PaymentPage() {
  const { cart, setActiveModal } = useCart();
  const [selectedWallet, setSelectedWallet] = useState<'meta' | 'coinbase' | 'multi'>('coinbase');

  const itemsToDisplay = cart.length > 0 ? cart : [
    { id: '1', name: 'Emerald Ape #042', tokenId: '#0042', priceEth: '1.19', qty: 2, totalEth: '2.38', img: image1 },
    { id: '2', name: 'Violet Nomad #314', tokenId: '#0314', priceEth: '1.39', qty: 6, totalEth: '8.34', img: image2 },
    { id: '3', name: 'Ivory Baron #088', tokenId: '#0088', priceEth: '1.79', qty: 9, totalEth: '16.11', img: image3 },
  ];

  return (
    <div className="space-y-8">
      <div className="text-xs text-zinc-500 font-medium">
        Início / Mercado / <span className="text-white">Pagamento</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-xl font-bold text-white tracking-wider">Perfil do colecionador</h1>

          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-zinc-400 block mb-1">Nome de exibição<span className="text-[#D47A3B]">*</span></label>
                <input type="text" className="w-full px-4 py-3 bg-[#1F1410] border border-[#33221C] rounded-xl text-white focus:outline-none focus:border-[#D47A3B]" />
              </div>
              <div>
                <label className="text-zinc-400 block mb-1">Nome de usuário<span className="text-[#D47A3B]">*</span></label>
                <input type="text" className="w-full px-4 py-3 bg-[#1F1410] border border-[#33221C] rounded-xl text-white focus:outline-none focus:border-[#D47A3B]" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="flex justify-between items-center text-xs font-bold text-zinc-400 uppercase tracking-wider pb-2 border-b border-[#33221C]">
            <span>Seus NFTs</span>
          </div>

          <div className="space-y-3">
            {itemsToDisplay.map((item: any) => (
              <div key={item.id} className="flex items-center justify-between bg-[#1F1410] border border-[#33221C] p-3 rounded-2xl">
                <div className="flex items-center gap-3">
                  <img src={item.imageUrl || item.img} alt={item.name} className="w-12 h-12 rounded-xl object-cover border border-[#33221C]" />
                  <div>
                    <h4 className="font-bold text-white text-xs">{item.name}</h4>
                    <span className="text-[10px] text-zinc-500 font-mono block">ID do token: {item.tokenId || '#0042'}</span>
                  </div>
                </div>

                <div className="text-right font-mono text-xs">
                  <span className="text-zinc-500 text-[10px] mr-2">(x {item.qty || 1})</span>
                  <span className="font-extrabold text-[#E59866]">{item.totalEth || `${item.priceEth} ETH`}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setActiveModal('confirmation')}
            className="w-full py-4 bg-[#D47A3B] hover:bg-[#c26a2e] text-white font-black text-xs rounded-xl shadow-xl shadow-[#D47A3B]/20 transition-all uppercase tracking-widest mt-4 cursor-pointer"
          >
            Confirmar compra
          </button>
        </div>
      </div>
    </div>
  );
}