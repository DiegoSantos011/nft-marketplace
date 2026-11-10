# Arquitetura e Decisões de Design — Kurio NFT Marketplace

## 1. Visão Geral
O **Kurio** é uma aplicação Single Page Application (SPA) construída em **React**, **TypeScript** e **Tailwind CSS**, focada na fidelidade ao Figma, performance e experiência de utilizador (UX) fluida no ecossistema Web3 simulado.

## 2. Pilha Tecnológica
* **Core**: React 18+, TypeScript
* **Estilização**: Tailwind CSS (Tema escuro customizado `#140D0A` e `#1F1410`)
* **Roteamento**: React Router DOM (v6) para navegação dinâmica e persistência de rotas (Market, Cart, Payment, Profile).
* **Gerenciamento de Estado**: React Context API (`CartContext`) para controle global do carrinho, autenticação simulada e modais.
* **Testes E2E**: Playwright para validação automatizada de fluxos de ponta a ponta.

## 3. Gestão de Estado e Sessão
* **Carrinho e Compras**: Gerenciado globalmente através do `CartContext`, permitindo adições, remoções, cálculo dinâmico de taxas em ETH e aplicação de cupões promocionais (`KURIO10`).
* **Autenticação Simulada**: Gerencia o estado da carteira conectada (ex: `0x71C...39a2`), permitindo alternar entre estados logado e não logado para liberar fluxos protegidos de checkout e perfil.

## 4. Desvios e Decisões de UX
* **Ativos Visuais**: Utilização de recursos locais (`src/assets/img/`) para os avatares de primatas, assegurando carregamento imediato e consistência visual independente de redes externas.
* **Responsividade**: Layout adaptado para resoluções mobile, tablet e desktop com menus retráteis e filtros laterais dinâmicos.