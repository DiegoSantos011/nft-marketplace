export function formatETH(amount: string | number): string {
  const num = typeof amount === 'number' ? amount : parseFloat(amount);
  if (isNaN(num)) return '0.0000 ETH';
  return `${num.toFixed(4)} ETH`;
}

export function calculateEthTotal(priceEth: string, quantity: number): string {
  const price = parseFloat(priceEth) || 0;
  return (price * quantity).toFixed(4);
}