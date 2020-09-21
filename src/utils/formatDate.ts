const formatDate = (date: string | Date): string => {
  let newDate: Date;

  if (typeof date === 'string') {
    newDate = new Date(date);
  } else {
    newDate = date;
  }

  const formattedDate = new Intl.DateTimeFormat('pt-BR').format(newDate);

  return formattedDate;
};

export default formatDate;
