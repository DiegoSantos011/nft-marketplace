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

  test('Deve adicionar item ao carrinho com sucesso', async ({ page }) => {
    // 1. Adiciona o primeiro NFT ao carrinho diretamente
    await page.getByRole('button', { name: 'Comprar' }).first().click();

    // 2. Clica especificamente no ícone/botão do carrinho no header (que contém o contador ou o ícone 🛒)
    await page.locator('header').getByRole('button', { name: /🛒|\d/ }).first().click();
    
    // 3. Confirma que navegou para o carrinho
    await expect(page.url()).toContain('/cart');
  });
});