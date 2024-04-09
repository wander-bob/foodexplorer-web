export function priceFormatter(value){
  return `R$ ${String(value.toFixed(2)).replace(".", ",")}`;
}