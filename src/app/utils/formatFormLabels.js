export function formatFormLabels(text) {
  if (typeof text === "string") {
    return text.replace(/_/g, " ").toUpperCase();
  } else {
    return text;
  }
}
