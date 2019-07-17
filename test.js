const { trueCasePath, trueCasePathSync } = require('true-case-path')

let x = trueCasePathSync('./test.txt')
console.log(x)