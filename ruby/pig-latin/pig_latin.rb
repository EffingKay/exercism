
class PigLatin

  VOWELS = ['a', 'e', 'i', 'o', 'u', 'y']
  def self.translate sentence
    words = sentence.split(" ")
    words.map! do |word|
      result = word.split("")
      if VOWELS.index(result[0])
        result.join + "ay"
      elsif word.index("qu") == 0
        result.rotate!(2)
        result.join + "ay"
      else
        result.rotate!(1)
        if result.index("q") == 0 && result.index("u") == 1
          result.rotate!(2)
          result.join + "ay"
        end
        while VOWELS.index(result[0]) == nil
          result.rotate!(1)
        end
        result.join + "ay"
      end # if
    end # map
    words.join(" ")
  end # def

end # class
