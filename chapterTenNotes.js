/**
 * Chapter 10: Modules
 */
const ordinal = require("ordinal");
const {days, months} = require("date-names");

let formatDate = function(date, format) {
    return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
        if (tag == "YYYY") return date.getFullYear();
        if (tag == "M") return date.getMonth();
        if (tag == "MMMM") return months[date.getMonth()];
        if (tag == "D") return date.getDate();
        if (tag == "Do") return ordinal(date.getDate());
        if (tag == "dddd") return days[date.getDay()];
    });
};

module.exports.formatDate = formatDate;

console.log(module.exports);

/**
 * How Does Require work?




function require(name){
    //If the name of the module is NOT in the cache
    if(!(name in require.cache)){
        let code = readFile(name);
        let module = {exports: {}};
        require.cache[name] = module;
        let wrapper = Function("require, exports, module", code);
        wrapper(require,module.exports,module);
    }
    return require.cache[name].exports;
}

function readFile(name){
    return "let jordanVar = 2;"
}
 */