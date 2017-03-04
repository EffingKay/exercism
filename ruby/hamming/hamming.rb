class Hamming

  def self.compute string1, string2
    throw ArgumentError if string1.length != string2.length
    array1 = string1.split('')
    array2 = string2.split('')
    count = 0
    array1.each_with_index do |letter,index|
      if (array1[index] != array2[index])
        count += 1
      end
    end
    count
  end

end
