import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import type { NFT } from '../context/CartContext';

export function NFTDetail() {
  const { id } = useParams<{ id: string }>();
  const [nft, setNft] = useState<NFT | null>(null);
  const [allNfts, setAllNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [selectedEdition, setSelectedEdition] = useState('1/50');
  const [activeTab, setActiveTab] = useState<'detalhes' | 'avaliacoes'>('detalhes');
  const [isFavorited, setIsFavorited] = useState(false);

  const { addToCart, cart } = useCart();

  useEffect(() => {
    axios.get('/api/nfts')
      .then((res) => {
        const items = res.data.items || [];
        setAllNfts(items);
        const found = items.find((item: NFT) => item.id === id);
        if (found) {
          setNft(found);
          setSelectedImage(found.imageUrl);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center py-20 text-zinc-500 font-mono">A carregar detalhes...</div>;
  if (!nft) return <div className="text-center py-20 text-red-400 font-medium">NFT não encontrado.</div>;

  const inCart = cart.some((item) => item.id === nft.id);
  const relatedNfts = allNfts.filter((item) => item.id !== nft.id).slice(0, 5);

  return (
    <div className="space-y-16">
      {/* 1. Breadcrumb de Navegação */}
      <div className="text-xs text-zinc-500 font-medium">
        <Link to="/" className="hover:text-white">Início</Link> / <Link to="/" className="hover:text-white">Mercado</Link>
      </div>

      {/* 2. Grid Principal de Detalhes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Coluna Esquerda: Miniaturas e Imagem Principal */}
        <div className="lg:col-span-6 flex gap-4">
          <div className="flex flex-col gap-3 shrink-0">
            {[nft.imageUrl, nft.imageUrl, nft.imageUrl, nft.imageUrl].map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(imgUrl)}
                className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                  selectedImage === imgUrl ? 'border-[#D47A3B]' : 'border-[#33221C] opacity-60 hover:opacity-100'
                }`}
              >
                <img src={imgUrl} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <div className="flex-1 aspect-square bg-[#1F1410] border border-[#33221C] rounded-3xl overflow-hidden relative group">
            <img src={selectedImage} alt={nft.name} className="w-full h-full object-cover" />
            <div className="absolute top-4 right-4 w-9 h-9 bg-[#140D0A]/80 backdrop-blur border border-[#33221C] rounded-full flex items-center justify-center text-xs text-white">
              🔍
            </div>
          </div>
        </div>

        {/* Coluna Direita: Informações, Edições e Compra */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h1 className="text-3xl font-black text-white">{nft.name}</h1>

            <div className="flex items-center gap-4">
              <span className="text-2xl font-black text-[#E59866] font-mono">{nft.priceEth} ETH</span>
              <span className="text-xs text-zinc-500">★★★★★ 19 avaliações de colecionadores</span>
            </div>

            <div className="space-y-1.5 pt-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Sobre este NFT:</span>
              <p className="text-xs text-zinc-400 leading-relaxed">{nft.description}</p>
            </div>

            {/* Seletor de Edição */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Edição:</span>
              <div className="flex gap-2">
                {['1/1', '1/10', '1/50', 'ABERTA'].map((ed) => (
                  <button
                    key={ed}
                    onClick={() => setSelectedEdition(ed)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${
                      selectedEdition === ed
                        ? 'bg-[#D47A3B] text-white border-[#D47A3B]'
                        : 'bg-[#1F1410] text-zinc-400 border-[#33221C] hover:text-white'
                    }`}
                  >
                    {ed}
                  </button>
                ))}
              </div>
            </div>

            {/* Seletor de Quantidade */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center bg-[#1F1410] border border-[#33221C] rounded-xl px-3 py-1.5 gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-zinc-400 hover:text-white font-bold text-sm"
                >
                  -
                </button>
                <span className="text-xs font-bold text-white font-mono w-4 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-zinc-400 hover:text-white font-bold text-sm"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => addToCart(nft)}
                disabled={inCart}
                className={`flex-1 py-3.5 text-xs font-black rounded-xl transition-all uppercase tracking-wider shadow-lg ${
                  inCart
                    ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed border border-[#33221C]'
                    : 'bg-[#D47A3B] hover:bg-[#c26a2e] text-white shadow-[#D47A3B]/20'
                }`}
              >
                {inCart ? 'No Carrinho' : 'COMPRAR'}
              </button>

              <button
                onClick={() => setIsFavorited(!isFavorited)}
                className={`px-4 py-3.5 border rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  isFavorited ? 'border-red-500 text-red-400 bg-red-500/10' : 'border-[#33221C] hover:border-[#D47A3B] text-zinc-300'
                }`}
              >
                <span>♡</span> Favoritar
              </button>
            </div>

            {/* Metadados */}
            <div className="space-y-1 text-xs text-zinc-400 pt-3 border-t border-[#33221C]">
              <div><strong className="text-white">ID do token:</strong> <span className="font-mono text-[#E59866]">{nft.tokenId || '#0042'}</span></div>
              <div><strong className="text-white">Coleção:</strong> Kurio Apes</div>
              <div><strong className="text-white">Atributos:</strong> Óculos, Esmeralda, Raro</div>
              <div className="pt-2 flex items-center gap-2">
                <strong className="text-white">Compartilhar este NFT:</strong>
                <span className="text-[#E59866] font-mono cursor-pointer">in ✉ y</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Abas Detalhes do NFT / Avaliações */}
      <div className="space-y-6 pt-10 border-t border-[#33221C]">
        <div className="flex gap-8 border-b border-[#33221C] pb-3 text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('detalhes')}
            className={`pb-2 border-b-2 transition-all ${
              activeTab === 'detalhes' ? 'border-[#D47A3B] text-white' : 'border-transparent text-zinc-500 hover:text-zinc-300'
            }`}
          >
            Detalhes do NFT
          </button>
          <button
            onClick={() => setActiveTab('avaliacoes')}
            className={`pb-2 border-b-2 transition-all ${
              activeTab === 'avaliacoes' ? 'border-[#D47A3B] text-white' : 'border-transparent text-zinc-500 hover:text-zinc-300'
            }`}
          >
            Avaliações de colecionadores (19)
          </button>
        </div>

        {activeTab === 'detalhes' ? (
          <div className="space-y-4 text-xs text-zinc-400 leading-relaxed bg-[#1F1410] border border-[#33221C] p-6 rounded-2xl">
            <p>
              <strong className="text-white">{nft.name}</strong> é uma obra digital {selectedEdition} finalizada à mão da coleção Kurio Editions. Cada atributo fica armazenado nos metadados do token e verificado na Ethereum. A obra explora identidade, movimento e luz em um mundo digital sem fronteiras.
            </p>
            <p>
              A propriedade inclui a arte em alta resolução, lançamentos exclusivos para colecionadores e um registro permanente de procedência registrada na rede. O criador recebe 5% de direitos autorais nas vendas secundárias, apoiando novos trabalhos e lançamentos da comunidade.
            </p>
            <div>
              <strong className="text-white block mt-3 mb-1">Rede:</strong>
              Cunhado na Ethereum com procedência imutável e metadados armazenados no IPFS.
            </div>
            <div>
              <strong className="text-white block mt-3 mb-1">Contrato:</strong>
              Direitos autorais do criador: 5% nas vendas secundárias, pagos automaticamente pelos mercados compatíveis.
            </div>
            <div>
              <strong className="text-white block mt-3 mb-1">Direitos autorais:</strong>
              <span className="font-mono text-[#E59866]">0x7A42...19E8</span> • Contrato inteligente ERC-721 verificado.
            </div>
          </div>
        ) : (
          <div className="space-y-3 bg-[#1F1410] border border-[#33221C] p-6 rounded-2xl text-xs text-zinc-300">
            <div className="border-b border-[#33221C] pb-3">
              <div className="flex justify-between font-bold text-white"><span>CryptoKing_Eth</span> <span className="text-amber-400">★★★★★</span></div>
              <p className="text-zinc-400 mt-1">Obra espetacular! Os detalhes dos óculos e a paleta verde superaram as expectativas no meu portfolio.</p>
            </div>
            <div className="pt-2">
              <div className="flex justify-between font-bold text-white"><span>ApeCollector_99</span> <span className="text-amber-400">★★★★★</span></div>
              <p className="text-zinc-400 mt-1">Procedência impecável na rede e transferência imediata para a MetaMask. Recomendo muito a coleção Kurio.</p>
            </div>
          </div>
        )}
      </div>

      {/* 4. Mais Desta Coleção */}
      <div className="space-y-6 pt-10 border-t border-[#33221C]">
        <h2 className="text-lg font-bold text-white uppercase tracking-wider">Mais desta coleção</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {relatedNfts.map((item) => (
            <Link
              key={item.id}
              to={`/nft/${item.id}`}
              className="bg-[#1F1410] border border-[#33221C] rounded-2xl overflow-hidden hover:border-[#D47A3B] transition-all p-3 space-y-2 group shadow-md"
            >
              <div className="aspect-square rounded-xl overflow-hidden">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <h4 className="font-bold text-white text-xs truncate">{item.name}</h4>
              <div className="text-[11px] font-mono text-[#E59866] font-extrabold">{item.priceEth} ETH</div>
            </Link>
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