const formatNumber = (value: string | number, multiply = 1): string => {
  let toNumber: number;

  if (typeof value === 'string') {
    toNumber = Number(value);
  } else {
    toNumber = value;
  }

  const timesHundred = toNumber * multiply;

  const formatedNumber = new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: 2,
  }).format(timesHundred);

  console.log(formatedNumber);

  return formatedNumber;
};

export default formatNumber;
