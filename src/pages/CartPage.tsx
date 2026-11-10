import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export function CartPage() {
  const { cart, removeFromCart, totalEth, setActiveModal, walletAddress } = useCart();
  const navigate = useNavigate();

  // Estados locais para quantidades de cada item simulando o Figma
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({
    '1': 2,
    '2': 6,
    '3': 9,
  });

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const updateQuantity = (id: string, delta: number) => {
    const current = quantities[id] || 1;
    const updated = Math.max(1, current + delta);
    setQuantities({ ...quantities, [id]: updated });
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'KURIO10') {
      setDiscount(2.0);
      alert('Código promocional aplicado com sucesso!');
    } else {
      alert('Código promocional inválido (tente KURIO10)');
    }
  };

  // Cálculo financeiro detalhado
  const subtotal = cart.reduce((sum, item) => {
    const qty = quantities[item.id] || 1;
    return sum + parseFloat(item.priceEth) * qty;
  }, 0);

  const taxaRede = 0.016;
  const totalGeral = Math.max(0, subtotal - discount + taxaRede).toFixed(3);

  return (
    <div className="space-y-16">
      {/* 1. Trilha de Navegação */}
      <div className="text-xs text-zinc-500 font-medium">
        <Link to="/" className="hover:text-white">Início</Link> / <Link to="/" className="hover:text-white">Mercado</Link> / <span className="text-white">Carrinho</span>
      </div>

      {/* 2. Grid Principal do Carrinho */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Coluna Esquerda: Tabela de NFTs */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-12 text-xs font-bold text-zinc-400 uppercase tracking-wider pb-3 border-b border-[#33221C]">
            <div className="col-span-6">NFTs</div>
            <div className="col-span-2 text-center">Preço</div>
            <div className="col-span-2 text-center">Edições</div>
            <div className="col-span-2 text-right">Total</div>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-20 space-y-4 bg-[#1F1410] border border-[#33221C] rounded-3xl">
              <p className="text-zinc-400 text-xs">O seu carrinho está vazio.</p>
              <Link to="/" className="inline-block px-6 py-2.5 bg-[#D47A3B] text-white text-xs font-bold rounded-xl shadow-lg hover:bg-[#c26a2e]">
                Explorar Catálogo
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => {
                const qty = quantities[item.id] || 1;
                const itemTotal = (parseFloat(item.priceEth) * qty).toFixed(2);
                return (
                  <div key={item.id} className="grid grid-cols-12 items-center bg-[#1F1410] border border-[#33221C] p-4 rounded-2xl">
                    <div className="col-span-6 flex items-center gap-4">
                      <img src={item.imageUrl} alt={item.name} className="w-16 h-16 rounded-xl object-cover border border-[#33221C]" />
                      <div>
                        <h3 className="font-bold text-white text-sm">{item.name}</h3>
                        <span className="text-[10px] text-zinc-500 font-mono block">ID do token: {item.tokenId || '#0042'}</span>
                      </div>
                    </div>

                    <div className="col-span-2 text-center font-mono text-xs font-bold text-white">
                      {item.priceEth} ETH
                    </div>

                    <div className="col-span-2 flex items-center justify-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 bg-[#140D0A] border border-[#33221C] rounded-lg text-[#E59866] font-bold text-xs flex items-center justify-center hover:bg-[#33221C]"
                      >
                        -
                      </button>
                      <span className="font-mono text-xs font-bold text-white w-4 text-center">{qty}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 bg-[#140D0A] border border-[#33221C] rounded-lg text-[#E59866] font-bold text-xs flex items-center justify-center hover:bg-[#33221C]"
                      >
                        +
                      </button>
                    </div>

                    <div className="col-span-2 flex items-center justify-end gap-3 font-mono text-xs font-extrabold text-[#E59866]">
                      <span>{itemTotal} ETH</span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-zinc-500 hover:text-red-400 transition-colors"
                        title="Remover"
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Coluna Direita: Resumo da Carteira */}
        <div className="lg:col-span-4 bg-[#1F1410] border border-[#33221C] p-6 rounded-3xl space-y-6 h-fit shadow-xl">
          <h3 className="font-bold text-white text-sm uppercase tracking-wider">Resumo da carteira</h3>

          {/* Código Promocional */}
          <div className="space-y-2">
            <label className="text-[11px] text-zinc-400 block">Código promocional</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Digite o código promocional..."
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 px-3 py-2 bg-[#140D0A] border border-[#33221C] rounded-xl text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#D47A3B]"
              />
              <button
                onClick={handleApplyPromo}
                className="px-4 py-2 bg-[#D47A3B] hover:bg-[#c26a2e] text-white text-xs font-bold rounded-xl transition-all"
              >
                Aplicar
              </button>
            </div>
          </div>

          {/* Valores Financeiros */}
          <div className="space-y-2 pt-2 border-t border-[#33221C] text-xs">
            <div className="flex justify-between text-zinc-400"><span>Subtotal</span><span className="font-mono text-white">{subtotal.toFixed(3)} ETH</span></div>
            <div className="flex justify-between text-zinc-400"><span>Desconto do lançamento</span><span className="font-mono text-emerald-400">(-) {discount.toFixed(3)} ETH</span></div>
            <div className="flex justify-between text-zinc-400">
              <span>Taxa de rede <span className="text-[9px] block text-zinc-600">Taxa estimada</span></span>
              <span className="font-mono text-white">{taxaRede} ETH</span>
            </div>
            <div className="flex justify-between text-white font-bold text-sm pt-3 border-t border-[#33221C]">
              <span>Total</span>
              <span className="text-[#E59866] font-mono text-base">{totalGeral} ETH</span>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <button
              onClick={() => {
                if (walletAddress) {
                  navigate('/payment');
                } else {
                  setActiveModal('login');
                }
              }}
              disabled={cart.length === 0}
              className={`w-full py-4 text-white font-bold text-xs rounded-xl shadow-xl transition-all uppercase tracking-wider ${
                cart.length === 0 ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed' : 'bg-[#D47A3B] hover:bg-[#c26a2e] shadow-[#D47A3B]/20'
              }`}
            >
              Conectar e finalizar
            </button>
            <Link
              to="/"
              className="block text-center text-xs text-zinc-400 hover:text-white font-semibold transition-colors"
            >
              Continuar explorando
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Secção Inferior: Colecionadores também viram */}
      <div className="space-y-6 pt-12 border-t border-[#33221C]">
        <h2 className="text-lg font-bold text-white uppercase tracking-wider">Colecionadores também viram</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { name: 'Cosmic Bloom #118', price: '1.29 ETH', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
            { name: 'Violet Nomad #314', price: '1.39 ETH', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80' },
            { name: 'Ivory Baron #088', price: '1.79 ETH', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80' },
            { name: 'Golden Beat #207', price: '0.99 ETH', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
            { name: 'Golden Signal #160', price: '0.39 ETH', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' },
          ].map((item, idx) => (
            <div key={idx} className="bg-[#1F1410] border border-[#33221C] rounded-2xl p-3 space-y-2 group">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img src={item.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <h4 className="font-bold text-white text-xs truncate">{item.name}</h4>
              <div className="text-[11px] font-mono text-[#E59866] font-extrabold">{item.price}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-1.5 pt-2">
          <span className="w-2 h-2 rounded-full bg-zinc-600"></span>
          <span className="w-2 h-2 rounded-full bg-[#D47A3B]"></span>
          <span className="w-2 h-2 rounded-full bg-zinc-600"></span>
        </div>
      </div>
    </div>
  );
}