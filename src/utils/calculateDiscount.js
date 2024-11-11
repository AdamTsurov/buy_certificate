export function calculateDiscount(originalPrice, discountRate) {
  if (discountRate < 0 || discountRate > 100) {
    throw new Error('Discount rate should be between 0 and 100');
  }
  return parseFloat(originalPrice * ((100 - discountRate) / 100)).toFixed(2);
}
