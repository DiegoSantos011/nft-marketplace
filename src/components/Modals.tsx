import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export function Modals() {
  const { activeModal, setActiveModal, loginUser, clearCart } = useCart();
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const navigate = useNavigate();

  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#140D0A] border border-[#33221C] rounded-3xl p-6 md:p-8 max-w-md w-full relative shadow-2xl space-y-6 my-8">
        <button
          onClick={() => setActiveModal(null)}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white text-lg font-bold"
        >
          ✕
        </button>

        {(activeModal === 'login' || activeModal === 'register') && (
          <div className="space-y-6">
            {/* Abas Entrar | Criar conta fieis ao Figma */}
            <div className="flex justify-center gap-8 text-sm font-bold uppercase tracking-wider border-b border-[#33221C] pb-3">
              <button
                onClick={() => setTab('login')}
                className={`transition-colors ${tab === 'login' ? 'text-[#D47A3B]' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                Entrar
              </button>
              <button
                onClick={() => setTab('register')}
                className={`transition-colors ${tab === 'register' ? 'text-[#D47A3B]' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                Criar conta
              </button>
            </div>

            {tab === 'login' ? (
              <div className="space-y-4">
                <p className="text-xs text-zinc-400 text-center leading-relaxed">
                  Entre para gerenciar sua carteira, coleção e perfil de criador.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="space-y-1">
                    <input
                      type="email"
                      defaultValue="contato@email.com"
                      className="w-full px-4 py-3 bg-[#1F1410] border border-[#33221C] rounded-xl text-xs text-white focus:outline-none focus:border-[#D47A3B]"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      defaultValue="**************"
                      className="w-full px-4 py-3 bg-[#1F1410] border border-[#33221C] rounded-xl text-xs text-white focus:outline-none focus:border-[#D47A3B]"
                    />
                    <span className="absolute right-4 top-3.5 text-zinc-500 text-xs cursor-pointer">👁</span>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] text-[#E59866] hover:underline cursor-pointer">Esqueceu a senha?</span>
                  </div>

                  <button
                    onClick={() => loginUser('contato@email.com')}
                    className="w-full py-3.5 bg-[#D47A3B] hover:bg-[#c26a2e] text-white font-black text-xs rounded-xl shadow-xl shadow-[#D47A3B]/20 transition-all uppercase tracking-wider mt-2"
                  >
                    Entrar
                  </button>
                </div>

                <div className="relative flex py-2 items-center">
                  <div className="flex-grow border-t border-[#33221C]"></div>
                  <span className="flex-shrink mx-4 text-[11px] text-zinc-500">Ou continue com</span>
                  <div className="flex-grow border-t border-[#33221C]"></div>
                </div>

                <div className="space-y-2.5">
                  <button className="w-full py-3 bg-[#1F1410] hover:bg-[#2b1d18] border border-[#33221C] text-zinc-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all">
                    <span className="text-red-500 font-bold">G</span> Continuar com Google
                  </button>
                  <button className="w-full py-3 bg-[#1F1410] hover:bg-[#2b1d18] border border-[#33221C] text-zinc-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all">
                    <span className="text-blue-500 font-bold">f</span> Continuar com Facebook
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-xs text-zinc-400 text-center leading-relaxed">
                  Crie seu perfil de colecionador e conecte sua carteira digital.
                </p>

                <div className="space-y-3 pt-2">
                  <input type="text" placeholder="Nome de usuário" className="w-full px-4 py-3 bg-[#1F1410] border border-[#33221C] rounded-xl text-xs text-white focus:outline-none focus:border-[#D47A3B]" />
                  <input type="email" placeholder="Digite seu e-mail" className="w-full px-4 py-3 bg-[#1F1410] border border-[#33221C] rounded-xl text-xs text-white focus:outline-none focus:border-[#D47A3B]" />
                  <input type="password" placeholder="Senha" className="w-full px-4 py-3 bg-[#1F1410] border border-[#33221C] rounded-xl text-xs text-white focus:outline-none focus:border-[#D47A3B]" />
                  <input type="password" placeholder="Confirmar senha" className="w-full px-4 py-3 bg-[#1F1410] border border-[#33221C] rounded-xl text-xs text-white focus:outline-none focus:border-[#D47A3B]" />

                  <button
                    onClick={() => loginUser('novo@email.com')}
                    className="w-full py-3.5 bg-[#D47A3B] hover:bg-[#c26a2e] text-white font-black text-xs rounded-xl shadow-xl shadow-[#D47A3B]/20 transition-all uppercase tracking-wider mt-2"
                  >
                    Criar conta
                  </button>
                </div>

                <div className="relative flex py-2 items-center">
                  <div className="flex-grow border-t border-[#33221C]"></div>
                  <span className="flex-shrink mx-4 text-[11px] text-zinc-500">Ou continue com</span>
                  <div className="flex-grow border-t border-[#33221C]"></div>
                </div>

                <div className="space-y-2.5">
                  <button className="w-full py-3 bg-[#1F1410] hover:bg-[#2b1d18] border border-[#33221C] text-zinc-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all">
                    <span className="text-red-500 font-bold">G</span> Continuar com Google
                  </button>
                  <button className="w-full py-3 bg-[#1F1410] hover:bg-[#2b1d18] border border-[#33221C] text-zinc-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all">
                    <span className="text-blue-500 font-bold">f</span> Continuar com Facebook
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeModal === 'confirmation' && (
          <div className="space-y-6 text-center">
            <div className="w-16 h-16 mx-auto border-2 border-[#D47A3B] rounded-2xl flex flex-col items-center justify-center text-[#D47A3B] bg-[#1F1410] shadow-lg">
              <span className="text-xl">✉</span>
              <span className="text-[8px] font-black tracking-tighter uppercase">THANK YOU</span>
            </div>

            <h2 className="text-sm font-bold text-[#E59866] tracking-wide">
              Seus NFTs agora estão na sua carteira
            </h2>

            <div className="grid grid-cols-4 gap-2 pt-3 pb-3 border-y border-[#33221C] text-[10px] text-left font-mono">
              <div>
                <span className="text-zinc-500 block uppercase text-[9px]">ID da transação</span>
                <span className="text-white font-bold">0xA91F...E82C</span>
              </div>
              <div>
                <span className="text-zinc-500 block uppercase text-[9px]">Data</span>
                <span className="text-white font-bold">29 Jul, 2026</span>
              </div>
              <div>
                <span className="text-zinc-500 block uppercase text-[9px]">Total</span>
                <span className="text-[#E59866] font-bold">26.846 ETH</span>
              </div>
              <div>
                <span className="text-zinc-500 block uppercase text-[9px]">Carteira</span>
                <span className="text-white font-bold">MetaMask</span>
              </div>
            </div>

            <div className="space-y-3 text-left">
              <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Detalhes da transação</div>
              <div className="grid grid-cols-12 text-[10px] font-bold text-zinc-500 uppercase pb-1 border-b border-[#33221C]">
                <div className="col-span-6">NFTs</div>
                <div className="col-span-3 text-center">Edições</div>
                <div className="col-span-3 text-right">Subtotal</div>
              </div>

              <div className="space-y-2.5">
                {[
                  { name: 'Emerald Ape #042', token: '#0042', qty: 'x 2', price: '2.38 ETH', img: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=400&q=80' },
                  { name: 'Violet Nomad #314', token: '#0314', qty: 'x 6', price: '8.34 ETH', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80' },
                  { name: 'Ivory Baron #088', token: '#0088', qty: 'x 9', price: '16.11 ETH', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80' },
                ].map((item, idx) => (
                  <div key={idx} className="grid grid-cols-12 items-center text-xs">
                    <div className="col-span-6 flex items-center gap-2.5">
                      <img src={item.img} alt="" className="w-9 h-9 rounded-lg object-cover border border-[#33221C]" />
                      <div>
                        <div className="font-bold text-white text-[11px]">{item.name}</div>
                        <div className="text-[9px] text-zinc-500 font-mono">ID do token: {item.token}</div>
                      </div>
                    </div>
                    <div className="col-span-3 text-center text-zinc-400 font-mono text-[11px]">({item.qty})</div>
                    <div className="col-span-3 text-right font-mono text-[11px] font-extrabold text-[#E59866]">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#33221C] pt-3 space-y-1.5 text-xs font-mono">
              <div className="flex justify-between text-zinc-400 text-[11px]"><span>Taxa de rede</span><span>0.016 ETH</span></div>
              <div className="flex justify-between text-white font-bold text-sm">
                <span>Total</span>
                <span className="text-[#E59866]">26.846 ETH</span>
              </div>
            </div>

            <p className="text-[10px] text-zinc-400 leading-relaxed pt-2 border-t border-[#33221C]">
              Transação confirmada na Ethereum. A propriedade foi transferida para sua carteira conectada e registrada na rede.
            </p>

            <button
              onClick={() => {
                clearCart();
                setActiveModal(null);
                navigate('/');
              }}
              className="w-full py-3.5 bg-[#D47A3B] hover:bg-[#c26a2e] text-white font-black text-xs rounded-xl shadow-xl shadow-[#D47A3B]/20 uppercase tracking-widest transition-all"
            >
              Ver no Etherscan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}