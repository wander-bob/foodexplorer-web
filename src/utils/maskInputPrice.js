export function maskInputPrice(value){
  let newValue = String(value).replace(/R\$\s/,"").replace(/\,/,".");
  //Limpa qualquer não número
  newValue = newValue.replace(/([^0-9])/g,"");
  //Formata a exibição dos valores que serão exibidos no input
  newValue = newValue.replace(/(\d)/,"R$ $1");
  //Adiciona os números seguintes após o R$ e espaço,
  // e após dois números seguidos, adiciona uma vírgula
  // e os demais números após a vírgula
  newValue = newValue.replace(/(R\$\s\d)(\d)(\d{1,2})/,"$1$2,$3");
  // Limita o input para no máximo 99,99;
  newValue = newValue.replace(/(?<=^R\$\s\d{1,2}\,\d{2})(\d+)/,"");
  //Padroniza o valor para Float para ser inserido no price.
  const newPrice = newValue.replace(/R\$\s/,"").replace(/\,/,".");
  return {maskedValue: newValue, value: Number(newPrice).toFixed(2)};
}