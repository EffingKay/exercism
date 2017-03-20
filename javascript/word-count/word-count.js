// NOT FINISHED

const words = function() {};

words.prototype.count = (input) => {
  const words = input.toLowerCase().split(/\W/);
  return words.reduce((countObj, word) => {
    if (!countObj[word]) countObj[word] = 0;
    countObj[word]++;
    return countObj;
  }, {});
};

module.exports = words;
