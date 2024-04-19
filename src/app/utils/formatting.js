export function formatDate(dateString) {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleString("en-US");

  return formattedDate;
}

export function formatCurrency(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(number);
}

export function formatFormLabels(text) {
  if (typeof text === "string") {
    return text.replace(/_/g, " ").toUpperCase();
  } else {
    return text;
  }
}
