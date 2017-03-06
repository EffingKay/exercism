class Complement

  def self.of_dna string
    return '' if string.index(/[BD-FH-SU-Z]/) != nil
    string.gsub!(/[GCTA]/, 'G' => 'C', 'C' => 'G', 'T' => 'A', 'A' => 'U')
  end

end
