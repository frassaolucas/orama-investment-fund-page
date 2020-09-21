const stringIsEqual = (
  defaultValue: string,
  searchingValue: string,
): boolean => {
  if (!searchingValue.length) {
    return true;
  }

  const searchingValueToRegExp = new RegExp(searchingValue, 'gi');

  return !!defaultValue.match(searchingValueToRegExp)?.length;
};

export default stringIsEqual;
