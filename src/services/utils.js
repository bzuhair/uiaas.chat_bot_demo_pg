export default {
  capitalizeOnlyFirstChar: (str) => {
    str = str.toLowerCase();
    return str.split(' ').filter(Boolean).map(word => (
      word[0].toUpperCase() + word.slice(1)
    )).join(' ');
  },
  getRandomInt: max => Math.floor(Math.random() * Math.floor(max))
};
