//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
  Year.year = input;
};

Year.prototype.isLeap = function() {
  const year = Year.year;
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

module.exports = Year;