const riskIsEqual = (defaultValue: number, searchingValue: number): boolean => {
  if (searchingValue === 0) {
    return true;
  }

  return defaultValue <= searchingValue;
};

export default riskIsEqual;
