import image1 from '../assets/img/image.png';
import image2 from '../assets/img/image2.jpg';
import image3 from '../assets/img/image3.jpg';
import image4 from '../assets/img/image4.jpg';

export interface NFTItem {
  id: string;
  name: string;
  description: string;
  priceEth: string;
  imageUrl: string;
  category: string;
  tokenId: string;
  creator: string;
}

export const mockNFTs: NFTItem[] = [
  {
    id: '1',
    name: 'Emerald Ape #042',
    description: 'Um colecionável digital finalizado à mão da coleção Kurio Editions, verificado na Ethereum.',
    priceEth: '1.19',
    imageUrl: image1,
    category: 'Arte digital',
    tokenId: '#0042',
    creator: 'Nova Sato',
  },
  {
    id: '2',
    name: 'Sage Nomad #999',
    description: 'Edição limitada de primata digital integrado em ambiente imersivo.',
    priceEth: '1.69',
    imageUrl: image2,
    category: 'Colecionáveis',
    tokenId: '#0999',
    creator: 'Elias Vance',
  },
  {
    id: '3',
    name: 'Neon Primate #552',
    description: 'Atributos cibernéticos de alta raridade com suporte a utilidade exclusiva.',
    priceEth: '1.99',
    imageUrl: image3,
    category: 'Arte 3D',
    tokenId: '#0552',
    creator: 'Aria Thorne',
  },
  {
    id: '4',
    name: 'Cosmic Bloom #118',
    description: 'Ambiente digital imersivo associado à exploração do espaço e arte abstrata.',
    priceEth: '1.29',
    imageUrl: image4,
    category: 'Generativa',
    tokenId: '#0118',
    creator: 'Kaelen Voss',
  },
  {
    id: '5',
    name: 'Violet Nomad #314',
    description: 'Série especial voltada para circulação e estética moderna.',
    priceEth: '1.39',
    imageUrl: image2,
    category: 'Música',
    tokenId: '#0314',
    creator: 'Sora Kim',
  },
  {
    id: '6',
    name: 'Ivory Baron #088',
    description: 'Classe executiva de primatas no universo cyberpunk com atributos raros.',
    priceEth: '1.79',
    imageUrl: image3,
    category: 'Fotografia',
    tokenId: '#0088',
    creator: 'Nova Sato',
  },
];