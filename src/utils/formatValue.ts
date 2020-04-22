const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value); // TODO

export default formatValue;
