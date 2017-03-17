// NOT FINISHED

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
    // check is q is preceding a vowel (queen and sqaure example)
    if ( str[firstConsonant-1] === 'q' ) return str.substr(firstConsonant+1) + str.substr(0, firstConsonant+1) + 'ay';
    translated = str.substr(firstConsonant) + str.substr(0, firstConsonant) + 'ay';
    return translated;
  }

  return firstConsonant ? consonant(str) : vowel(str);
};

module.exports = pigLatin;
