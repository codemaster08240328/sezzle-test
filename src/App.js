import './App.css';
import { useState } from 'react';
import Calculator from './util/Calculator';
import { validateInp } from './util/validation';
import { buttons } from './util/config';

let calculator = new Calculator();

function App() {
  const [expression, setExpression] = useState('');
  const [inpNum, setInpNum] = useState(null);
  const [operator, setoperator]  = useState(null);
  const [res, setRes] = useState(null);

  const handleClick = (btn) => {
    if (btn.type === 'sub') {
      handleCalculate();
      return;
    }

    let newExpression = expression;

    if (btn.type === 'num' && res !== null && res === expression) {
      
      newExpression = '';
      setRes(null)
    }

    if (!validateInp(inpNum, btn.val)) {
      return
    }

    if (btn.type === 'op') {
      if (inpNum !== null) {
        calculator.addInput(inpNum);
        setInpNum(null);
      }
      setoperator(btn.val);

      if (!operator) {
        calculator.addOperator(btn.val);
        newExpression += btn.val;
      } else {
        calculator.replaceOperator(btn.val);
        newExpression = newExpression.slice(0, newExpression.length - 1) + btn.val;
      }
    }

    

    if (btn.type === 'num') {
      if (operator) {
        setoperator(null)
      }

      if (!inpNum || !newExpression) {
        setInpNum(btn.val);
      } else {
        setInpNum(inpNum + btn.val);
      }

      newExpression += btn.val;
    }

    setExpression(newExpression);
  };

  const handleCalculate = () => {
    if (operator) {
      return
    }

    if (inpNum) {
      calculator.addInput(inpNum)
    }
    
    const result = calculator.calculate();
    setExpression(result);
    setRes(result);
    setInpNum(result);
    setoperator(null);
  }

  const handleClear = () => {
    calculator = new Calculator()
    setExpression('');
    setInpNum(null);
    setoperator(null);
  }

  return (
    <div className="App">
      <h1>Fancy Calculator</h1>
      <div className="calculator-wrapper">
        <input className="calculator-res" value={expression} disabled />
        <div className="calculator-pan">
          {
            buttons.map(btn => (
              <button className="calculator-btn" key={btn.val} onClick={() => handleClick(btn)}>{btn.val}</button>
            ))
          }
        </div>
        <div>
          <button className="calculator-btn-clear" onClick={handleClear}>Clear All</button>
        </div>
      </div>
    </div>
  );
}

export default App;
