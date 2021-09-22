import { ALLOWED_OPERATORS, ORDER_RULE } from './config';
import OpertationManager, { Operator } from './Operation';

export default class Calculator {
  constructor() {
    this.operators = []
    this.inputs = []
    
    this.opManager = new OpertationManager();

    ALLOWED_OPERATORS.forEach(op => {
      const newOp = new Operator(op.name, op.handler);
      this.opManager.addOperator(newOp);
    });
  }

  addInput(num) {
    const lastIndex = this.inputs.length - 1;
    if (this.operators[lastIndex] === '-') {
      this.inputs.push(-Number(num))
      this.replaceOperator('+');
    } else {
      this.inputs.push(Number(num))
    }
  }

  addOperator(op) {
    this.operators.push(op)
  }

  replaceOperator(op) {
    this.operators = [...this.operators.slice(0, this.operators.length - 1), op]
  }

  calculate() {
    ORDER_RULE.forEach(op => {
      let opIndex = this.operators.indexOf(op)

      while(opIndex > -1) {
        // debugger;
        const operator = this.opManager.getOperator(op);
        const newInp = operator.doOperate(this.inputs[opIndex], this.inputs[opIndex + 1]);
        this.inputs = [...this.inputs.slice(0, opIndex), newInp, ...this.inputs.slice(opIndex + 2)];
        this.operators = [...this.operators.slice(0, opIndex), ...this.operators.slice(opIndex + 1)];
        
        opIndex = this.operators.indexOf(op);
      }
    });

    const res = this.inputs[0];
    this.inputs = [];
    return res;
  }
}