const pigLatin = function() {};

pigLatin.translate = function(str) {
  let translated = '';
  const vowels   = /[aeiou]/gi;

  const firstConsonant = str.indexOf(str.match(vowels)[0]);

  function vowel(str) {
    translated = str + 'ay';
    return translated;
  }

  function consonant(str) {
    translated = str.substr(firstConsonant) + str.substr(0, firstConsonant) + 'ay';
    return translated;
  }

  return firstConsonant ? consonant(str) : vowel(str);
};

module.exports = pigLatin;
