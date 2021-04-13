export const formatCurrency = (
  amount = 0,
  currency = "NPR",
  language = "np-NP"
) => {
  if (amount)
    try {
      return new Intl.NumberFormat(language, {
        style: "currency",
        currency,
        minimumFractionDigits: 0,
      }).format(amount);
    } catch {
      return new Intl.NumberFormat(language, {
        style: "currency",
        currency,
        minimumFractionDigits: 0,
      }).format(amount);
    }
  else return "N/A";
};
