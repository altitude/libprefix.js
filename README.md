# Libprefix.js

This library allows you to parse and run polish notation expression with javascript.  

    var libprefix = require('./libprefix-node.js');
    libprefix.process("(and 1 1 (or 1 0))", {}, libprefix.operators); // returns 1

Simple boolean logic operators are implemented, but you can override them if you like. You can even create your own operators with simple javascript functions.

