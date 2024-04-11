export function priceFormatter(value){
  let BRReal = new Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'})
  if(typeof value === "string"){
    let newValue = value.replace(/R\$\s/g,"").replace(",",".");
    newValue = Number(newValue)
    return ;
  }
  let newValue = BRReal.format(value);
  return newValue;
}