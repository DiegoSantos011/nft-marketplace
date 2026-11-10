import { useState } from 'react';
import { Link, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Modals } from './Modals';

export function MainLayout() {
  const { cart, walletAddress, disconnectWallet, setActiveModal, isLoggedIn } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState<'inicio' | 'mercado' | 'criadores' | 'aprenda'>('inicio');

  return (
    <div className="min-h-screen w-full bg-[#140D0A] text-zinc-100 flex flex-col font-sans selection:bg-[#D47A3B] selection:text-white">
      {/* Header Fixo Global */}
      <header className="border-b border-[#33221C] bg-[#140D0A]/95 backdrop-blur sticky top-0 z-40 px-6 md:px-12 py-4 flex items-center justify-between w-full">
        <Link 
          to="/" 
          onClick={() => setActiveTab('inicio')} 
          className="flex items-center gap-2 text-lg font-black tracking-widest text-white uppercase"
        >
          <span>KURIO</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold">
          <button
            onClick={() => {
              setActiveTab('inicio');
              navigate('/');
            }}
            className={`transition-colors pb-1 border-b-2 ${
              activeTab === 'inicio' && location.pathname === '/' ? 'text-white border-[#D47A3B] font-bold' : 'text-zinc-400 border-transparent hover:text-white'
            }`}
          >
            Início
          </button>

          <button
            onClick={() => {
              setActiveTab('mercado');
              navigate('/market');
            }}
            className={`transition-colors pb-1 border-b-2 ${
              activeTab === 'mercado' || location.pathname === '/market' ? 'text-white border-[#D47A3B] font-bold' : 'text-zinc-400 border-transparent hover:text-white'
            }`}
          >
            Mercado
          </button>

          <Link
            to="/profile"
            onClick={() => setActiveTab('criadores')}
            className={`transition-colors pb-1 border-b-2 ${
              location.pathname === '/profile' ? 'text-white border-[#D47A3B] font-bold' : 'text-zinc-400 border-transparent hover:text-white'
            }`}
          >
            Criadores
          </Link>

          <button
            onClick={() => {
              setActiveTab('aprenda');
              navigate('/');
              setTimeout(() => {
                document.getElementById('diario-cunhagem')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className={`transition-colors pb-1 border-b-2 ${
              activeTab === 'aprenda' ? 'text-white border-[#D47A3B] font-bold' : 'text-zinc-400 border-transparent hover:text-white'
            }`}
          >
            Aprenda
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-zinc-400 hover:text-white text-sm" title="Pesquisar">🔍</button>

          {walletAddress || isLoggedIn ? (
            <div className="flex items-center gap-2 bg-[#1F1410] border border-[#33221C] px-3 py-1.5 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <Link to="/profile" className="text-[11px] font-mono text-zinc-300 hover:underline">{walletAddress}</Link>
              <button 
                onClick={disconnectWallet} 
                className="text-[10px] text-red-400 hover:text-red-300 ml-1 font-semibold"
              >
                Sair
              </button>
            </div>
          ) : (
            <button
              onClick={() => setActiveModal('login')}
              className="px-4 py-2 bg-[#D47A3B] hover:bg-[#c26a2e] text-white text-xs font-bold rounded-xl transition-all shadow-lg flex items-center gap-1.5 cursor-pointer"
            >
              <span>↪</span> Entrar
            </button>
          )}

          <button
            onClick={() => navigate('/cart')}
            className="px-3 py-2 bg-[#1F1410] hover:bg-[#2d1e17] text-zinc-200 border border-[#33221C] text-xs font-semibold rounded-xl transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>🛒</span>
            <span className="bg-[#D47A3B] text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold">
              {cart.length}
            </span>
          </button>
        </div>
      </header>

      {/* Conteúdo Dinâmico */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-10">
        <Outlet />
      </main>

      {/* Único Footer Global */}
      <footer className="max-w-7xl w-full mx-auto px-4 md:px-8 pb-10">
        <div className="bg-[#1F1410] border border-[#33221C] rounded-3xl p-8 md:p-12 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#D47A3B] text-white flex items-center justify-center font-bold text-base">W</div>
              <h4 className="font-bold text-white text-xs uppercase">Segurança da carteira</h4>
              <p className="text-[11px] text-zinc-400 leading-relaxed">Proteja sua carteira e colecione arte digital verificada com confiança.</p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#D47A3B] text-white flex items-center justify-center font-bold text-base">C</div>
              <h4 className="font-bold text-white text-xs uppercase">Criadores em destaque</h4>
              <p className="text-[11px] text-zinc-400 leading-relaxed">Conheça artistas, estúdios e comunidades que moldam a cultura digital na rede.</p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#D47A3B] text-white flex items-center justify-center font-bold text-base">D</div>
              <h4 className="font-bold text-white text-xs uppercase">Alertas de lançamentos</h4>
              <p className="text-[11px] text-zinc-400 leading-relaxed">Receba calendários de cunhagem, novidades de listas de acesso e análises do mercado.</p>
            </div>
            <div className="space-y-3 bg-[#140D0A] p-5 rounded-2xl border border-[#33221C]">
              <h4 className="font-bold text-white text-xs uppercase">Antecipe-se ao próximo lançamento</h4>
              <input type="email" placeholder="digite seu e-mail..." className="w-full px-3 py-2 bg-[#1F1410] border border-[#33221C] rounded-xl text-xs text-white" />
              <button onClick={() => alert('E-mail cadastrado!')} className="w-full py-2 bg-[#D47A3B] text-white text-xs font-bold rounded-xl cursor-pointer">Enviar</button>
            </div>
          </div>

          <div className="border-t border-[#33221C] pt-8 flex flex-col md:flex-row justify-between text-xs text-zinc-400 gap-4">
            <div className="font-black text-white tracking-widest uppercase">KURIO</div>
            <div>Feito para colecionadores, criadores e cultura</div>
            <div>contato@email.com</div>
            <div>+55 11 4002 8922</div>
          </div>

          <div className="border-t border-[#33221C] pt-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
            <div className="space-y-2">
              <h5 className="font-bold text-white uppercase text-[11px]">Meu perfil</h5>
              <div className="space-y-1 text-zinc-400">
                <Link to="/profile" className="hover:text-white block">Meu perfil</Link>
                <Link to="/profile" className="hover:text-white block">Minha coleção</Link>
                <Link to="/profile" className="hover:text-white block">Atividade</Link>
                <Link to="/profile" className="hover:text-white block">Estúdio do criador</Link>
              </div>
            </div>
            <div className="space-y-2">
              <h5 className="font-bold text-white uppercase text-[11px]">Central de ajuda</h5>
              <div className="space-y-1 text-zinc-400">
                <button onClick={() => navigate('/market')} className="hover:text-white text-left block">Central de ajuda</button>
                <button onClick={() => navigate('/market')} className="hover:text-white text-left block">Como comprar NFTs</button>
                <div className="cursor-pointer hover:text-white">Carteira e segurança</div>
              </div>
            </div>
            <div className="space-y-2">
              <h5 className="font-bold text-white uppercase text-[11px]">Coleções</h5>
              <div className="space-y-1 text-zinc-400">
                <button onClick={() => navigate('/market')} className="hover:text-white text-left block">Arte digital</button>
                <button onClick={() => navigate('/market')} className="hover:text-white text-left block">Fotografia</button>
                <button onClick={() => navigate('/market')} className="hover:text-white text-left block">Música</button>
              </div>
            </div>
            <div className="space-y-2">
              <h5 className="font-bold text-white uppercase text-[11px]">Carteiras compatíveis</h5>
              <div className="flex gap-2 text-[10px] font-mono text-[#E59866]">
                <span className="bg-[#140D0A] px-2 py-1 rounded border border-[#33221C]">METAMASK</span>
                <span className="bg-[#140D0A] px-2 py-1 rounded border border-[#33221C]">WALLETCONNECT</span>
                <span className="bg-[#140D0A] px-2 py-1 rounded border border-[#33221C]">COINBASE</span>
              </div>
            </div>
          </div>

          <div className="text-center text-[10px] text-zinc-600 pt-4 border-t border-[#33221C]">
            © 2026 Kurio. Propriedade digital para todos.
          </div>
        </div>
      </footer>

      <Modals />
    </div>
  );
}