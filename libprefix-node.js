module.exports = function(){
	return {
		operators: operators,
		process: process,
	};
}


/**
* Declare Operators
*/

var operators = {};

operators.and = function (){
	for(var i = 0; i < arguments.length; i+=1){
		if(arguments[i] == 0) return 0;
	}
	return 1;
};

operators.or = function (){
	for(var i = 0; i < arguments.length; i+=1){
		if(arguments[i] == 1) return 1;
	}
	return 0;
};

operators.not = function(){
	return 1 - arguments[0];
}

operators["*"] = operators.and;
operators["+"] = operators.or;
operators["!"] = operators.not;


/**
* Parse & Exec Function
*/

function process(expression, context, operators){

	var expression_pattern = /\([\w+*/!]+ (\w+ ?)+\)/g;
	
	var e;
	while(e = expression.match(expression_pattern), e){
		e = e[0];
		var stack = e.replace("(","").replace(")","").split(" ");
		var operator = operators[stack.shift()];
		stack = stack.map(function(el){
			var value = parseInt(el);
			if(!isNaN(value))
				return value;
			return context[el];
		});
		expression = expression.replace(e, operator.apply(context, stack));
	}

	return parseInt(expression);
}