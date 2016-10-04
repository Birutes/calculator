var Calculator = (function() {
		 var i = 0;	

		 var plus = function(j){
		 	i += j;
		 	return this;
		 };

		 var multiply = function(j){
		 	i *= j;
		 	return this;
		 };

		 var add = function(j){
		 	i += j;
		 	return this;
		 };

		 var minus = function(j){
		 	i -= j;
		 	return this;
		 };

		 var print = function(){
		 	console.log(i);
		 };

		 return {plus:plus, multiply:multiply, add:add, minus:minus, print:print};
		
})();

Calculator.plus(5).multiply(2).add(20).minus(3).print();
	
