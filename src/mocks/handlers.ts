import { http, HttpResponse } from 'msw';

const initialNfts = [
  {
    id: '1',
    name: 'Emerald Ape #042',
    description: 'Um colecionável digital finalizado à mão da coleção Kurio Editions, verificado na Ethereum, com arte desbloqueável e acesso para colecionadores.',
    creator: '0x71C...39a2',
    priceEth: '1.19',
    priceUsd: 3050,
    imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80',
    category: 'Arte digital',
    tokenId: '#042'
  },
  {
    id: '2',
    name: 'Sage Nomad #999',
    description: 'Edição limitada de primata digital integrado em redes descentralizadas.',
    creator: '0xA4F...89c1',
    priceEth: '1.69',
    priceUsd: 4300,
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    category: 'Fotografia',
    tokenId: '#999'
  },
  {
    id: '3',
    name: 'Neon Primate #552',
    description: 'Atributos cibernéticos de alta raridade com suporte a múltiplos utilitários.',
    creator: '0x3E2...11b9',
    priceEth: '1.99',
    priceUsd: 5100,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    category: 'Música',
    tokenId: '#552'
  },
  {
    id: '4',
    name: 'Cosmic Bloom #118',
    description: 'Ambiente digital imersivo associado a avatares exclusivos.',
    creator: '0x1A2...99b1',
    priceEth: '1.29',
    priceUsd: 3300,
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    category: 'Colecionáveis',
    tokenId: '#118'
  },
  {
    id: '5',
    name: 'Violet Nomad #314',
    description: 'Série especial voltada para circulação em galerias virtuais.',
    creator: '0x99C...11a2',
    priceEth: '1.39',
    priceUsd: 3550,
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
    category: 'Arte 3D',
    tokenId: '#314'
  },
  {
    id: '6',
    name: 'Ivory Baron #888',
    description: 'Classe executiva de primatas no metaverso.',
    creator: '0x88B...44c3',
    priceEth: '1.79',
    priceUsd: 4600,
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    category: 'Utilidade',
    tokenId: '#888'
  }
];

function getStoredNfts() {
  const stored = localStorage.getItem('kurio_nfts');
  if (!stored) {
    localStorage.setItem('kurio_nfts', JSON.stringify(initialNfts));
    return initialNfts;
  }
  return JSON.parse(stored);
}

export const handlers = [
  http.get('/api/nfts', () => {
    const items = getStoredNfts();
    return HttpResponse.json({ items });
  }),

  http.post('/api/mock/reset', () => {
    localStorage.setItem('kurio_nfts', JSON.stringify(initialNfts));
    return HttpResponse.json({ status: 'reset_successful' });
  }),
];