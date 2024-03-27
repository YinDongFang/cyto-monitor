const isOddNumber = require('./isOddNumber')
const factorial = require('./factorial')
const toLowerCase = require('./toLowerCase')

module.exports = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }