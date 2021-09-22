export const buttons = [{
  val: '1',
  type: 'num'
}, {
  val: '2',
  type: 'num'
}, {
  val: '3',
  type: 'num'
}, {
  val: '+',
  type: 'op'
}, {
  val: '4',
  type: 'num'
}, {
  val: '5',
  type: 'num'
}, {
  val: '6',
  type: 'num'
}, {
  type: 'op',
  val: '-'
}, {
  type: 'num',
  val: '7'
}, {
  type: 'num',
  val: '8'
}, {
  type: 'num',
  val: '9'
}, {
  type: 'op',
  val: '*'
}, {
  type: 'op',
  val: '/'
}, {
  type: 'num',
  val: '0'
}, {
  type: 'num',
  val: '.'
}, {
  type: 'sub',
  val: '='
}];

export const ALLOWED_OPERATORS = [{
  name: '+',
  handler: (num1, num2) => num1 + num2
}, {
  name: '-',
  handler: (num1, num2) => num1 - num2
}, {
  name: '*',
  handler: (num1, num2) => num1 * num2
}, {
  name: '/',
  handler: (num1, num2) => num1 / num2
}];

export const ORDER_RULE = ['/', '*', '+'];