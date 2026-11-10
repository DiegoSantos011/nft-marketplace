import { useState } from 'react';

export function ProfilePage() {
  const [activeMenu, setActiveMenu] = useState('Carteiras');
  const [nomeExibicao, setNomeExibicao] = useState('');
  const [apelidoCarteira, setApelidoCarteira] = useState('');
  const [rede, setRede] = useState('');
  const [nomePerfil, setNomePerfil] = useState('');
  const [enderecoCarteira, setEnderecoCarteira] = useState('');
  const [ensOpcional, setEnsOpcional] = useState('');
  const [tipoCarteira, setTipoCarteira] = useState('');
  const [codigoIndicacao, setCodigoIndicacao] = useState('');
  const [email, setEmail] = useState('');
  const [nomeEns, setNomeEns] = useState('');
  const [igualPrincipal, setIgualPrincipal] = useState(false);

  const menuItems = [
    { label: 'Dados do perfil', icon: '👤' },
    { label: 'Carteiras', icon: '💳' },
    { label: 'Atividade', icon: '🛒' },
    { label: 'Lista de interesse', icon: '♡' },
    { label: 'Ofertas', icon: '📈' },
    { label: 'Arquivos baixados', icon: '📥' },
    { label: 'Suporte', icon: '⚠️' },
    { label: 'Sair', icon: '🚪' },
  ];

  const handleSaveWallet = () => {
    alert('Carteira principal salva com sucesso!');
  };

  return (
    <div className="space-y-8">
      {/* Trilha de Navegação */}
      <div className="text-xs text-zinc-500 font-medium">
        Início / Meu perfil / <span className="text-white">Carteiras</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Menu Lateral Esquerdo ("Meu perfil") */}
        <div className="lg:col-span-3 bg-[#1F1410] border border-[#33221C] rounded-3xl p-4 h-fit space-y-1">
          <h3 className="font-bold text-white text-sm uppercase px-4 py-2 tracking-wider">Meu perfil</h3>
          <div className="space-y-1 pt-2">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveMenu(item.label)}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-semibold flex items-center gap-3 transition-all ${
                  activeMenu === item.label
                    ? 'bg-[#D47A3B] text-white shadow-lg'
                    : 'text-zinc-400 hover:text-white hover:bg-[#140D0A]/50'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Conteúdo Principal Direito ("Carteiras") */}
        <div className="lg:col-span-9 bg-[#1F1410] border border-[#33221C] p-8 md:p-10 rounded-3xl space-y-8 shadow-xl">
          {activeMenu === 'Carteiras' ? (
            <div className="space-y-8">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-black text-white uppercase tracking-wider">Carteira principal</h2>
                  <p className="text-xs text-zinc-400 mt-1">Estas carteiras ficam disponíveis no pagamento e para receber NFTs comprados.</p>
                </div>
                <button className="text-xs text-[#E59866] font-bold hover:underline">Adicionar</button>
              </div>

              {/* Formulário da Carteira Principal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="space-y-1.5">
                  <label className="text-zinc-400 block">Nome de exibição<span className="text-[#D47A3B]">*</span></label>
                  <input
                    type="text"
                    value={nomeExibicao}
                    onChange={(e) => setNomeExibicao(e.target.value)}
                    className="w-full px-4 py-3 bg-[#140D0A] border border-[#33221C] rounded-xl text-white focus:outline-none focus:border-[#D47A3B]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-400 block">Apelido da carteira<span className="text-[#D47A3B]">*</span></label>
                  <input
                    type="text"
                    value={apelidoCarteira}
                    onChange={(e) => setApelidoCarteira(e.target.value)}
                    className="w-full px-4 py-3 bg-[#140D0A] border border-[#33221C] rounded-xl text-white focus:outline-none focus:border-[#D47A3B]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-400 block">Rede<span className="text-[#D47A3B]">*</span></label>
                  <select
                    value={rede}
                    onChange={(e) => setRede(e.target.value)}
                    className="w-full px-4 py-3 bg-[#140D0A] border border-[#33221C] rounded-xl text-zinc-400 focus:outline-none focus:border-[#D47A3B]"
                  >
                    <option value="">Selecione uma rede</option>
                    <option value="Ethereum">Ethereum</option>
                    <option value="Polygon">Polygon</option>
                    <option value="Solana">Solana</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-400 block">Nome do perfil<span className="text-[#D47A3B]">*</span></label>
                  <input
                    type="text"
                    value={nomePerfil}
                    onChange={(e) => setNomePerfil(e.target.value)}
                    className="w-full px-4 py-3 bg-[#140D0A] border border-[#33221C] rounded-xl text-white focus:outline-none focus:border-[#D47A3B]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-400 block">Endereço da carteira<span className="text-[#D47A3B]">*</span></label>
                  <input
                    type="text"
                    placeholder="Endereço 0x da carteira"
                    value={enderecoCarteira}
                    onChange={(e) => setEnderecoCarteira(e.target.value)}
                    className="w-full px-4 py-3 bg-[#140D0A] border border-[#33221C] rounded-xl text-zinc-400 placeholder-zinc-600 focus:outline-none focus:border-[#D47A3B]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-transparent block">.</label>
                  <input
                    type="text"
                    placeholder="ENS ou carteira secundária (opcional)"
                    value={ensOpcional}
                    onChange={(e) => setEnsOpcional(e.target.value)}
                    className="w-full px-4 py-3 bg-[#140D0A] border border-[#33221C] rounded-xl text-zinc-400 placeholder-zinc-600 focus:outline-none focus:border-[#D47A3B]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-400 block">Tipo de carteira<span className="text-[#D47A3B]">*</span></label>
                  <select
                    value={tipoCarteira}
                    onChange={(e) => setTipoCarteira(e.target.value)}
                    className="w-full px-4 py-3 bg-[#140D0A] border border-[#33221C] rounded-xl text-zinc-400 focus:outline-none focus:border-[#D47A3B]"
                  >
                    <option value="">Selecione uma carteira</option>
                    <option value="MetaMask">MetaMask</option>
                    <option value="WalletConnect">WalletConnect</option>
                    <option value="Coinbase">Coinbase Wallet</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-400 block">Código de indicação<span className="text-[#D47A3B]">*</span></label>
                  <input
                    type="text"
                    value={codigoIndicacao}
                    onChange={(e) => setCodigoIndicacao(e.target.value)}
                    className="w-full px-4 py-3 bg-[#140D0A] border border-[#33221C] rounded-xl text-white focus:outline-none focus:border-[#D47A3B]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-400 block">E-mail<span className="text-[#D47A3B]">*</span></label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[#140D0A] border border-[#33221C] rounded-xl text-white focus:outline-none focus:border-[#D47A3B]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-400 block">Nome ENS<span className="text-[#D47A3B]">*</span></label>
                  <div className="flex gap-2">
                    <select className="px-3 py-3 bg-[#140D0A] border border-[#33221C] rounded-xl text-zinc-300 font-mono focus:outline-none">
                      <option>.eth</option>
                    </select>
                    <input
                      type="text"
                      value={nomeEns}
                      onChange={(e) => setNomeEns(e.target.value)}
                      className="flex-1 px-4 py-3 bg-[#140D0A] border border-[#33221C] rounded-xl text-white focus:outline-none focus:border-[#D47A3B]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={handleSaveWallet}
                  className="px-6 py-3.5 bg-[#D47A3B] hover:bg-[#c26a2e] text-white font-black text-xs rounded-xl shadow-xl shadow-[#D47A3B]/20 uppercase tracking-widest transition-all"
                >
                  Salvar carteira
                </button>
              </div>

              {/* Secção Carteira Secundária */}
              <div className="pt-8 border-t border-[#33221C] space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">Carteira secundária</h3>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <button
                      type="button"
                      onClick={() => setIgualPrincipal(!igualPrincipal)}
                      className="flex items-center gap-2"
                    >
                      <span className={`w-3.5 h-3.5 rounded-full border border-[#D47A3B] flex items-center justify-center ${igualPrincipal ? 'bg-[#D47A3B]' : ''}`}>
                        {igualPrincipal && <span className="w-1 h-1 rounded-full bg-white"></span>}
                      </span>
                      <span>Igual à carteira principal</span>
                    </button>
                    <span className="text-[#E59866] font-bold ml-2 cursor-pointer hover:underline">Adicionar</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-500">Você ainda não adicionou uma carteira secundária.</p>
              </div>
            </div>
          ) : (
            <div className="py-20 text-center space-y-3">
              <h2 className="text-lg font-bold text-white uppercase">{activeMenu}</h2>
              <p className="text-xs text-zinc-400">Conteúdo de {activeMenu.toLowerCase()} em desenvolvimento.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}