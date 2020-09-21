const formatNumber = (value: string | number, multiply = 1): string => {
  let toNumber: number;

  if (typeof value === 'string') {
    toNumber = Number(value);
  } else {
    toNumber = value;
  }

  const timesHundred = toNumber * multiply;

  const formatedNumber = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(timesHundred);

  return formatedNumber;
};

export default formatNumber;
