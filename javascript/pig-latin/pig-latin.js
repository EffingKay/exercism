const pigLatin = function() {};

pigLatin.translate = function(str) {
  const words    = str.split(' ');
  let translated = '';
  const vowels   = /[aeiou]/gi;
  const result   = words.map( word => {
    const firstConsonant = word.indexOf(word.match(vowels)[0]);

    function vowel(word) {
      translated = word + 'ay';
      return translated;
    }

    function consonant(word) {
      // check is q is preceding a vowel (queen and sqaure example)
      if ( word[firstConsonant-1] === 'q' ) return word.substr(firstConsonant+1) + word.substr(0, firstConsonant+1) + 'ay';
      translated = word.substr(firstConsonant) + word.substr(0, firstConsonant) + 'ay';
      return translated;
    }

    return firstConsonant ? consonant(word) : vowel(word);
  });
  return result.join(' ');
};

module.exports = pigLatin;
