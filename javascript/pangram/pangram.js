// NOT FINISHED

const Pangram = function(input) {
  Pangram.word = input;
};

Pangram.prototype.isPangram = () => {
  const word    = Pangram.word;
  // const letters = word.toLowerCase().split(/ |_|/);
  // const result  = [];
  // letters.map(letter => {
  //   if (result.indexOf(letter) === -1) {
  //     result.push(letter);
  //   }
  // });
  // return result.length === 26;
};

module.exports = Pangram;
