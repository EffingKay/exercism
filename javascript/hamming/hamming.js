const hamming = function() {};

hamming.prototype.compute = (string1, string2) => {
  if ( string1.length !== string2.length ) throw 'DNA strands must be of equal length.';
  const array1 = string1.split('');
  const array2 = string2.split('');
  let count = 0;
  for (var i = 0; i < array1.length; i++) {
    if ( array1[i] !== array2[i] ) count++;
  }
  return count;
};

module.exports = hamming;
