const song = function() {};

song.prototype.verse = function(verseCount) {

  const zeroBottles = `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`;
  const oneBottle   = `1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`;
  const twoBottles  = `2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n`;
  let result        = '';
  if (verseCount > 2) {
    result += `${verseCount} bottles of beer on the wall, ${verseCount} bottles of beer.\nTake one down and pass it around, ${verseCount - 1} bottles of beer on the wall.\n`;
  } else if (verseCount === 2) {
    result += twoBottles;
  } else if (verseCount === 1){
    result += oneBottle;
  } else {
    result += zeroBottles;
  }
  return result;
};


// two one and zero bottles not appending
song.prototype.sing = (startingVerse, endVerse) => {
  endVerse === undefined ? 0 : endVerse;
  let result = '';
  do {
    result += song.prototype.verse(startingVerse) + '\n';
    startingVerse--;
  } while (startingVerse > endVerse-1);
  result = result.slice(0, -1);
  return result;
};

module.exports = song;
