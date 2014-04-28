# Libprefix.js

This library allows you to parse and run polish notation expression with javascript.  

    var libprefix = require('./libprefix-node.js');
    libprefix.process("(and 1 1 (or 1 0))", {}, libprefix.operators); // returns 1

If you like, you can pass a context to the function to use variables in your expression

    var context = {a:1, b:0, c:1}
    libprefix.process("(and a b (and a c 1))", context, libprefix.operators); // returns 0

Simple boolean logic operators are implemented, but you can override them if you like. You can even create your own operators with simple javascript functions.

