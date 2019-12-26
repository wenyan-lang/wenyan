# encoding: UTF-8
require 'forwardable'
	class Ctnr
		extend Forwardable
		attr_accessor :dict, :length, :it
		def initialize()
			@dict = {}
			@length = 0
			@it = -1
		end
		def push(*args)
			args.each do |arg|
				@dict[@length.to_s] = arg
				@length += 1
			end
		end
		def [](i)
			@dict[i.to_s]
		end
		def []=(i,x)
			@dict[i.to_s] = x
		end
		def slice(i)
			result = Ctnr.new;
			i.times {|index| result.push(self[index])}
			return result
		end
		def concat(other)
			other.length.times {|i| push(other[i]) }
			self
		end
		def values
			@dict.values
		end
		def to_s
			"[#{@dict.values.join(", ")}]"
		end
		def_delegators :values, :each
	end
	module Math
		def self.random(*args)
			rand(*args)
		end
		def self.floor(number)
			number.floor
		end
	end
#####
def jiao3gu3cai1xiang3(jia3)
	zhu4shou3 = proc {|yi3|	
		_ans1=yi3%2;
		ji1=_ans1;		if ji1!=0
			_ans2=3*yi3;
			ai1=_ans2;			_ans3=1+ai1;
			ai1=_ans3;		else
			_ans4=yi3/2;
			ai1=_ans4;		end 
		return ai1
	}
	hui2=Ctnr.new
	hui2.push(jia3)
	while true do
		if jia3==1
			break
		end 
		_ans5=zhu4shou3(jia3);		jia3=_ans5
		hui2.push(jia3)
	end 
	hui2.push(1)
	return hui2
end

_ans6=jiao3gu3cai1xiang3(12);p([_ans6].join)
_ans7=jiao3gu3cai1xiang3(19);p([_ans7].join)
_ans8=jiao3gu3cai1xiang3(27);p([_ans8].join)
