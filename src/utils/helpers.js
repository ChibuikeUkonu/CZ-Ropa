// Helper functions

export const formatPrice = (price) => {
  const num = Number(price);
  return isNaN(num) ? '$0.00' : `$${num.toFixed(2)}`;
};

export const calculateTotal = (items) => {
  if (!Array.isArray(items)) return 0;

  return items.reduce((total, item) => {
    const price = Number(item.price) || 0;
    return total + price;
  }, 0);
};