export function priceFormatter(value){
  return `R$ ${String(value).replace(".", ",")}`;
}