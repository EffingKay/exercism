const Isogram = function(input) {
  Isogram.word = input;
};

Isogram.prototype.isIsogram = () => {
  const regex = / |-/g
  const word = Isogram.word.toLowerCase().replace(regex, '');
  const lettersObj = word
                  .split('')
                  .reduce((obj, letter) => {
                    if ( !obj[letter] ) { obj[letter] = 0 };
                    obj[letter]++;
                    return obj;
                  }, {});
  const values = Object.values(lettersObj).filter(value => value > 1);
  return !values.length;
};

module.exports = Isogram;
