// use strategy design pattern
export default class OpertationManager {
  constructor() {
    this._operators = [];
  }

  addOperator(operator) {
    this._operators = [...this._operators, operator];
  }

  getOperator(name) {
    return this._operators.find(operator => operator._name === name);
  }
}

export class Operator {
  constructor(name, handler) {
    this._name = name;
    this._handler = handler;
  }

  doOperate(num1, num2) {
    return this._handler(num1, num2)
  }
}