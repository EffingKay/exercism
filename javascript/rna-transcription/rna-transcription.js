const dnaTranscriber = function() {};

dnaTranscriber.prototype.toRna = (string) => {
  const dna = string.split('');
  const rna = [];
  const nucleotides = ['G', 'C', 'T', 'A'];
  dna.map(nucleotide => {
    if (nucleotides.indexOf(nucleotide) == -1 ) throw 'Invalid input';
    if (nucleotide === 'G') rna.push('C');
    if (nucleotide === 'C') rna.push('G');
    if (nucleotide === 'T') rna.push('A');
    if (nucleotide === 'A') rna.push('U');
  });
  return rna.join('');
};

module.exports = dnaTranscriber;
