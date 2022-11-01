export const padNumber = (num, size = 3) => {
  let str = num.toString();
  while (str.length < size) {
    str = `0${str}`;
  }
  return str;
};

export const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
