# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: marketplace.spec.ts >> NFT Marketplace E2E Flow >> Deve adicionar item ao carrinho e simular login
- Location: e2e\marketplace.spec.ts:33:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /^Entrar$/ }).first()

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - link "KURIO" [ref=e5] [cursor=pointer]:
      - /url: /
    - navigation [ref=e7]:
      - button "Início" [ref=e8] [cursor=pointer]
      - button "Mercado" [ref=e9] [cursor=pointer]
      - link "Criadores" [ref=e10] [cursor=pointer]:
        - /url: /profile
      - button "Aprenda" [ref=e11] [cursor=pointer]
    - generic [ref=e12]:
      - button "🔍" [ref=e13] [cursor=pointer]
      - button "↪ Entrar" [ref=e14] [cursor=pointer]:
        - generic [ref=e15]: ↪
        - text: Entrar
      - button "🛒 0" [ref=e16] [cursor=pointer]:
        - generic [ref=e17]: 🛒
        - generic [ref=e18]: "0"
  - main [ref=e19]:
    - generic [ref=e20]:
      - generic [ref=e21]:
        - generic [ref=e22]:
          - text: Bem-vindo à Kurio
          - heading "Seja dono do futuro da arte digital" [level=1] [ref=e23]
          - paragraph [ref=e24]: Descubra NFTs selecionados de criadores emergentes e consagrados. Colecione arte digital rara, apoie artistas e tenha uma parte da cultura da internet.
          - link "EXPLORAR" [ref=e26] [cursor=pointer]:
            - /url: "#catalogo-nfts"
        - img "Hero Ape" [ref=e28]
      - generic [ref=e29]:
        - generic [ref=e31]:
          - heading "Coleções" [level=3] [ref=e32]
          - generic [ref=e33]:
            - button "Todas (6)" [ref=e34] [cursor=pointer]
            - button "Arte digital (33)" [ref=e35] [cursor=pointer]:
              - generic [ref=e36]: Arte digital
              - generic [ref=e37]: (33)
            - button "Fotografia (12)" [ref=e38] [cursor=pointer]:
              - generic [ref=e39]: Fotografia
              - generic [ref=e40]: (12)
            - button "Música (65)" [ref=e41] [cursor=pointer]:
              - generic [ref=e42]: Música
              - generic [ref=e43]: (65)
            - button "Arte 3D (39)" [ref=e44] [cursor=pointer]:
              - generic [ref=e45]: Arte 3D
              - generic [ref=e46]: (39)
            - button "Colecionáveis (23)" [ref=e47] [cursor=pointer]:
              - generic [ref=e48]: Colecionáveis
              - generic [ref=e49]: (23)
            - button "Generativa (17)" [ref=e50] [cursor=pointer]:
              - generic [ref=e51]: Generativa
              - generic [ref=e52]: (17)
            - button "Jogos (19)" [ref=e53] [cursor=pointer]:
              - generic [ref=e54]: Jogos
              - generic [ref=e55]: (19)
            - button "Assinaturas (13)" [ref=e56] [cursor=pointer]:
              - generic [ref=e57]: Assinaturas
              - generic [ref=e58]: (13)
            - button "Utilidade (18)" [ref=e59] [cursor=pointer]:
              - generic [ref=e60]: Utilidade
              - generic [ref=e61]: (18)
        - generic [ref=e62]:
          - generic [ref=e64]:
            - button "Todos os NFTs" [ref=e65] [cursor=pointer]
            - button "Novos lançamentos" [ref=e66] [cursor=pointer]
            - button "Em alta" [ref=e67] [cursor=pointer]
          - textbox "Pesquisar por nome ou descrição..." [ref=e69]
          - generic [ref=e70]:
            - generic [ref=e71]:
              - generic [ref=e72]:
                - 'img "Emerald Ape #042" [ref=e74]'
                - generic [ref=e75]:
                  - 'heading "Emerald Ape #042" [level=3] [ref=e76]'
                  - paragraph [ref=e77]: Um colecionável digital finalizado à mão da coleção Kurio Editions, verificado na Ethereum.
              - generic [ref=e78]:
                - generic [ref=e79]:
                  - generic [ref=e80]: Preço
                  - generic [ref=e81]: 1.19 ETH
                - generic [ref=e82]:
                  - link "Ver" [ref=e83] [cursor=pointer]:
                    - /url: /nft/1
                  - button "Comprar" [ref=e84] [cursor=pointer]
            - generic [ref=e85]:
              - generic [ref=e86]:
                - 'img "Sage Nomad #999" [ref=e88]'
                - generic [ref=e89]:
                  - 'heading "Sage Nomad #999" [level=3] [ref=e90]'
                  - paragraph [ref=e91]: Edição limitada de primata digital integrado em ambiente imersivo.
              - generic [ref=e92]:
                - generic [ref=e93]:
                  - generic [ref=e94]: Preço
                  - generic [ref=e95]: 1.69 ETH
                - generic [ref=e96]:
                  - link "Ver" [ref=e97] [cursor=pointer]:
                    - /url: /nft/2
                  - button "Comprar" [ref=e98] [cursor=pointer]
            - generic [ref=e99]:
              - generic [ref=e100]:
                - 'img "Neon Primate #552" [ref=e102]'
                - generic [ref=e103]:
                  - 'heading "Neon Primate #552" [level=3] [ref=e104]'
                  - paragraph [ref=e105]: Atributos cibernéticos de alta raridade com suporte a utilidade exclusiva.
              - generic [ref=e106]:
                - generic [ref=e107]:
                  - generic [ref=e108]: Preço
                  - generic [ref=e109]: 1.99 ETH
                - generic [ref=e110]:
                  - link "Ver" [ref=e111] [cursor=pointer]:
                    - /url: /nft/3
                  - button "Comprar" [ref=e112] [cursor=pointer]
            - generic [ref=e113]:
              - generic [ref=e114]:
                - 'img "Cosmic Bloom #118" [ref=e116]'
                - generic [ref=e117]:
                  - 'heading "Cosmic Bloom #118" [level=3] [ref=e118]'
                  - paragraph [ref=e119]: Ambiente digital imersivo associado à exploração do espaço e arte abstrata.
              - generic [ref=e120]:
                - generic [ref=e121]:
                  - generic [ref=e122]: Preço
                  - generic [ref=e123]: 1.29 ETH
                - generic [ref=e124]:
                  - link "Ver" [ref=e125] [cursor=pointer]:
                    - /url: /nft/4
                  - button "Comprar" [ref=e126] [cursor=pointer]
            - generic [ref=e127]:
              - generic [ref=e128]:
                - 'img "Violet Nomad #314" [ref=e130]'
                - generic [ref=e131]:
                  - 'heading "Violet Nomad #314" [level=3] [ref=e132]'
                  - paragraph [ref=e133]: Série especial voltada para circulação e estética moderna.
              - generic [ref=e134]:
                - generic [ref=e135]:
                  - generic [ref=e136]: Preço
                  - generic [ref=e137]: 1.39 ETH
                - generic [ref=e138]:
                  - link "Ver" [ref=e139] [cursor=pointer]:
                    - /url: /nft/5
                  - button "Comprar" [ref=e140] [cursor=pointer]
            - generic [ref=e141]:
              - generic [ref=e142]:
                - 'img "Ivory Baron #088" [ref=e144]'
                - generic [ref=e145]:
                  - 'heading "Ivory Baron #088" [level=3] [ref=e146]'
                  - paragraph [ref=e147]: Classe executiva de primatas no universo cyberpunk com atributos raros.
              - generic [ref=e148]:
                - generic [ref=e149]:
                  - generic [ref=e150]: Preço
                  - generic [ref=e151]: 1.79 ETH
                - generic [ref=e152]:
                  - link "Ver" [ref=e153] [cursor=pointer]:
                    - /url: /nft/6
                  - button "Comprar" [ref=e154] [cursor=pointer]
      - generic [ref=e155]:
        - generic [ref=e158]:
          - heading "Lançamentos gênesis de edição limitada" [level=3] [ref=e159]
          - paragraph [ref=e160]: Colecione edições escassas diretamente dos criadores antes da revelação pública.
        - generic [ref=e163]:
          - heading "Arte digital selecionada e muito mais" [level=3] [ref=e164]
          - paragraph [ref=e165]: Explore novos artistas, coleções verificadas e obras digitais que definem a cultura.
  - contentinfo [ref=e166]:
    - generic [ref=e167]:
      - generic [ref=e168]:
        - generic [ref=e169]:
          - generic [ref=e170]: W
          - heading "Segurança da carteira" [level=4] [ref=e171]
          - paragraph [ref=e172]: Proteja sua carteira e colecione arte digital verificada com confiança.
        - generic [ref=e173]:
          - generic [ref=e174]: C
          - heading "Criadores em destaque" [level=4] [ref=e175]
          - paragraph [ref=e176]: Conheça artistas, estúdios e comunidades que moldam a cultura digital na rede.
        - generic [ref=e177]:
          - generic [ref=e178]: D
          - heading "Alertas de lançamentos" [level=4] [ref=e179]
          - paragraph [ref=e180]: Receba calendários de cunhagem, novidades de listas de acesso e análises do mercado.
        - generic [ref=e181]:
          - heading "Antecipe-se ao próximo lançamento" [level=4] [ref=e182]
          - textbox "digite seu e-mail..." [ref=e183]
          - button "Enviar" [ref=e184] [cursor=pointer]
      - generic [ref=e185]:
        - generic [ref=e186]: KURIO
        - generic [ref=e187]: Feito para colecionadores, criadores e cultura
        - generic [ref=e188]: contato@email.com
        - generic [ref=e189]: +55 11 4002 8922
      - generic [ref=e190]:
        - generic [ref=e191]:
          - heading "Meu perfil" [level=5] [ref=e192]
          - generic [ref=e193]:
            - link "Meu perfil" [ref=e194] [cursor=pointer]:
              - /url: /profile
            - link "Minha coleção" [ref=e195] [cursor=pointer]:
              - /url: /profile
            - link "Atividade" [ref=e196] [cursor=pointer]:
              - /url: /profile
            - link "Estúdio do criador" [ref=e197] [cursor=pointer]:
              - /url: /profile
        - generic [ref=e198]:
          - heading "Central de ajuda" [level=5] [ref=e199]
          - generic [ref=e200]:
            - button "Central de ajuda" [ref=e201] [cursor=pointer]
            - button "Como comprar NFTs" [ref=e202] [cursor=pointer]
            - generic [ref=e203] [cursor=pointer]: Carteira e segurança
        - generic [ref=e204]:
          - heading "Coleções" [level=5] [ref=e205]
          - generic [ref=e206]:
            - button "Arte digital" [ref=e207] [cursor=pointer]
            - button "Fotografia" [ref=e208] [cursor=pointer]
            - button "Música" [ref=e209] [cursor=pointer]
        - generic [ref=e210]:
          - heading "Carteiras compatíveis" [level=5] [ref=e211]
          - generic [ref=e212]:
            - generic [ref=e213]: METAMASK
            - generic [ref=e214]: WALLETCONNECT
            - generic [ref=e215]: COINBASE
      - generic [ref=e216]: © 2026 Kurio. Propriedade digital para todos.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('NFT Marketplace E2E Flow', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     // Navega para a página inicial
  6  |     await page.goto('/');
  7  |   });
  8  | 
  9  |   test('Deve carregar o catálogo de NFTs com sucesso', async ({ page }) => {
  10 |     // Verifica título principal da Hero
  11 |     await expect(page.getByRole('heading', { name: /SEJA DONO DO FUTURO/i })).toBeVisible();
  12 |     
  13 |     // Verifica se os cards de NFT estão visíveis
  14 |     await expect(page.getByText('Emerald Ape #042')).toBeVisible();
  15 |   });
  16 | 
  17 |   test('Deve filtrar NFTs por barra de pesquisa', async ({ page }) => {
  18 |     const searchInput = page.getByPlaceholder('Pesquisar por nome ou descrição...');
  19 |     await searchInput.fill('Emerald');
  20 |     
  21 |     await expect(page.getByText('Emerald Ape #042')).toBeVisible();
  22 |     await expect(page.getByText('Cosmic Bloom #118')).not.toBeVisible();
  23 |   });
  24 | 
  25 |   test('Deve navegar para os detalhes do NFT e voltar', async ({ page }) => {
  26 |     // Clica no primeiro botão "Ver"
  27 |     await page.getByRole('link', { name: 'Ver' }).first().click();
  28 |     
  29 |     // Confirma que navegou para a rota do NFT
  30 |     await expect(page.url()).toContain('/nft/');
  31 |   });
  32 | 
  33 |   test('Deve adicionar item ao carrinho e simular login', async ({ page }) => {
  34 |     // 1. Clica no botão Entrar do Header
> 35 |     await page.getByRole('button', { name: /^Entrar$/ }).first().click();
     |                                                                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
  36 | 
  37 |     // 2. Clica no botão de submissão dentro do modal de login
  38 |     await page.locator('div.bg-\\[\\#140D0A\\]').getByRole('button', { name: /^Entrar$/ }).click();
  39 | 
  40 |     // 3. Verifica se o endereço da carteira aparece no Header
  41 |     await expect(page.getByText('0x71C...39a2')).toBeVisible();
  42 | 
  43 |     // 4. Adiciona o primeiro NFT ao carrinho
  44 |     await page.getByRole('button', { name: 'Comprar' }).first().click();
  45 | 
  46 |     // 5. Clica no carrinho no Header
  47 |     await page.locator('header').getByRole('button', { name: /🛒/ }).click();
  48 |     await expect(page.url()).toContain('/cart');
  49 |   });
  50 | });
```