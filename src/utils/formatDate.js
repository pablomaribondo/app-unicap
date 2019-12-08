export default function(firstDate, secondDate) {
  if (firstDate && firstDate !== '--' && secondDate && secondDate !== '--') {
    // Tem as duas datas
    return `${firstDate.slice(0, -5)} ou ${secondDate.slice(0, -5)}`;
  }
  if (firstDate && firstDate !== '--' && (!secondDate || secondDate === '--')) {
    // Tem apenas first date
    return firstDate.slice(0, -5);
  }
  if (secondDate && secondDate !== '--' && (!firstDate || firstDate === '--')) {
    // Tem apenas second date
    return secondDate.slice(0, -5);
  }
  // Nao tem datas
  return undefined;
}
