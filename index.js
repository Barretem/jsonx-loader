
module.exports = function(source) {
  return `
    module.exports = eval(${source});
  `
}