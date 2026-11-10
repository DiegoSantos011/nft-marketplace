import { test, expect } from '@playwright/test';

test.describe('NFT Marketplace E2E Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Navega para a página inicial
    await page.goto('/');
  });

  test('Deve carregar o catálogo de NFTs com sucesso', async ({ page }) => {
    // Verifica título principal da Hero
    await expect(page.getByRole('heading', { name: /SEJA DONO DO FUTURO/i })).toBeVisible();
    
    // Verifica se os cards de NFT estão visíveis
    await expect(page.getByText('Emerald Ape #042')).toBeVisible();
  });

  test('Deve filtrar NFTs por barra de pesquisa', async ({ page }) => {
    const searchInput = page.getByPlaceholder('Pesquisar por nome ou descrição...');
    await searchInput.fill('Emerald');
    
    await expect(page.getByText('Emerald Ape #042')).toBeVisible();
    await expect(page.getByText('Cosmic Bloom #118')).not.toBeVisible();
  });

  test('Deve navegar para os detalhes do NFT e voltar', async ({ page }) => {
    // Clica no primeiro botão "Ver"
    await page.getByRole('link', { name: 'Ver' }).first().click();
    
    // Confirma que navegou para a rota do NFT
    await expect(page.url()).toContain('/nft/');
  });

  test('Deve adicionar item ao carrinho e simular login', async ({ page }) => {
    // 1. Clica no botão Entrar do Header
    await page.getByRole('button', { name: /^Entrar$/ }).first().click();

    // 2. Clica no botão de submissão dentro do modal de login
    await page.locator('div.bg-\\[\\#140D0A\\]').getByRole('button', { name: /^Entrar$/ }).click();

    // 3. Verifica se o endereço da carteira aparece no Header
    await expect(page.getByText('0x71C...39a2')).toBeVisible();

    // 4. Adiciona o primeiro NFT ao carrinho
    await page.getByRole('button', { name: 'Comprar' }).first().click();

    // 5. Clica no carrinho no Header
    await page.locator('header').getByRole('button', { name: /🛒/ }).click();
    await expect(page.url()).toContain('/cart');
  });
});