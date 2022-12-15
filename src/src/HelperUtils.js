export const randomGen = (max, min) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const titleCase = (str) => {
  return str.toString().toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
};

export const getRandomDate = () => {
  const maxDate = Date.now();
  const timestamp = Math.floor(Math.random() * maxDate);
  const genDate = new Date(timestamp)
  return genDate.getDate() + '_' + genDate.getMonth() + '_' + genDate.getFullYear();
}