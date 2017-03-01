class HelloWorld

    def self.hello *name
      if name.empty?
        return "Hello, World!"
      end
      "Hello, #{name[0]}!"
    end

end
