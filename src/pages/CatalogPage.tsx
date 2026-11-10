import { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { mockNFTs } from '../mocks/data';
import { Link } from 'react-router-dom';

import image1 from '../assets/img/image.png';
import image2 from '../assets/img/image2.jpg';
import image3 from '../assets/img/image3.jpg';

export function CatalogPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [activeTab, setActiveTab] = useState('Todos os NFTs');

  const { addToCart, cart } = useCart();

  const categories = [
    { name: 'Arte digital', count: 33 },
    { name: 'Fotografia', count: 12 },
    { name: 'Música', count: 65 },
    { name: 'Arte 3D', count: 39 },
    { name: 'Colecionáveis', count: 23 },
    { name: 'Generativa', count: 17 },
    { name: 'Jogos', count: 19 },
    { name: 'Assinaturas', count: 13 },
    { name: 'Utilidade', count: 18 },
  ];

  const filteredNfts = useMemo(() => {
    return mockNFTs.filter((nft) => {
      const matchesSearch = nft.name.toLowerCase().includes(search.toLowerCase()) ||
                            nft.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === 'Todas' || nft.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <div className="space-y-16 w-full">
      {/* 1. Banner Hero */}
      <div className="bg-[#1F1410] border border-[#33221C] rounded-3xl p-8 md:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-xl">
          <span className="text-xs text-[#D47A3B] font-semibold tracking-wider">Bem-vindo à Kurio</span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase">
            Seja dono do futuro <br />da arte digital
          </h1>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
            Descubra NFTs selecionados de criadores emergentes e consagrados. Colecione arte digital rara, apoie artistas e tenha uma parte da cultura da internet.
          </p>
          <div className="pt-2">
            <a href="#catalogo-nfts" className="inline-block px-6 py-3 bg-[#D47A3B] hover:bg-[#c26a2e] text-white text-xs font-black rounded-xl transition-all shadow-lg tracking-wider">
              EXPLORAR
            </a>
          </div>
        </div>

        <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-[#33221C] shadow-2xl shrink-0">
          <img 
            src={image1} 
            alt="Hero Ape" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 2. Vitrine de NFTs */}
      <div id="catalogo-nfts" className="grid grid-cols-1 lg:grid-cols-12 gap-8 scroll-mt-24">
        <div className="lg:col-span-3 space-y-8 bg-[#1F1410] border border-[#33221C] p-6 rounded-3xl h-fit">
          <div className="space-y-4">
            <h3 className="font-bold text-white text-xs tracking-widest uppercase">Coleções</h3>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedCategory('Todas')}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === 'Todas' ? 'bg-[#D47A3B] text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Todas ({mockNFTs.length})
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex justify-between items-center transition-all cursor-pointer ${
                    selectedCategory === cat.name ? 'bg-[#D47A3B] text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className="text-[10px] opacity-60">({cat.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-9 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-[#33221C] pb-4 gap-4">
            <div className="flex gap-6 text-xs font-semibold">
              {['Todos os NFTs', 'Novos lançamentos', 'Em alta'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 border-b-2 transition-all cursor-pointer ${
                    activeTab === tab ? 'border-[#D47A3B] text-white font-bold' : 'border-transparent text-zinc-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div>
            <input
              type="text"
              placeholder="Pesquisar por nome ou descrição..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-80 px-4 py-2.5 bg-[#1F1410] border border-[#33221C] rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D47A3B]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredNfts.map((nft) => {
              const inCart = cart.some((item) => item.id === nft.id);
              return (
                <div 
                  key={nft.id} 
                  className="bg-[#1F1410] border border-[#33221C] rounded-2xl overflow-hidden hover:border-[#D47A3B] transition-all flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="aspect-square overflow-hidden relative">
                      <img 
                        src={nft.imageUrl} 
                        alt={nft.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-4 space-y-1">
                      <h3 className="font-bold text-white text-xs">{nft.name}</h3>
                      <p className="text-[11px] text-zinc-400 line-clamp-1">{nft.description}</p>
                    </div>
                  </div>

                  <div className="p-4 pt-0 border-t border-[#33221C]/50 mt-2 flex items-center justify-between bg-[#140D0A]/30">
                    <div>
                      <span className="text-[10px] text-zinc-500 block uppercase font-semibold">Preço</span>
                      <span className="text-xs font-extrabold text-[#E59866] font-mono">{nft.priceEth} ETH</span>
                    </div>
                    <div className="flex gap-1.5">
                      <Link
                        to={`/nft/${nft.id}`}
                        className="px-2.5 py-1.5 bg-[#33221C] hover:bg-[#442f27] text-zinc-200 text-[11px] font-semibold rounded-lg transition-colors"
                      >
                        Ver
                      </Link>
                      <button
                        onClick={() => addToCart(nft)}
                        disabled={inCart}
                        className={`px-3 py-1.5 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                          inCart
                            ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                            : 'bg-[#D47A3B] hover:bg-[#c26a2e] text-white shadow-lg'
                        }`}
                      >
                        {inCart ? 'No Carrinho' : 'Comprar'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Banners Inferiores */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
        <div className="bg-[#1F1410] border border-[#33221C] p-8 rounded-3xl flex items-center gap-6">
          <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
            <img src={image2} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-white text-sm">Lançamentos gênesis de edição limitada</h3>
            <p className="text-xs text-zinc-400">Colecione edições escassas diretamente dos criadores antes da revelação pública.</p>
          </div>
        </div>

        <div className="bg-[#1F1410] border border-[#33221C] p-8 rounded-3xl flex items-center gap-6">
          <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
            <img src={image3} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-white text-sm">Arte digital selecionada e muito mais</h3>
            <p className="text-xs text-zinc-400">Explore novos artistas, coleções verificadas e obras digitais que definem a cultura.</p>
          </div>
        </div>
      </div>
    </div>
  );
}