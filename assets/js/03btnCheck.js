import Calculator from './04Calculator.js';

const ButtonCheck  = {
    async setup() {
        const allCalcBtnS = document.querySelectorAll('.calcBtn');
        const calculator = new Calculator();
        
        allCalcBtnS.forEach(calcBtn => {
            calcBtn.addEventListener('click', () => {
                let btnValue = calcBtn.id.substring(3);
                if (btnValue >= 0 && btnValue <= 9 && calculator.tempString.length < 9) {
                    calculator.getDigits(btnValue);
                    calculator.optField.textContent = (calculator.firstNum == "") ? calculator.tempString: calculator.optField.textContent += ` ${calculator.tempString}`;

                }
                else {
                    switch (btnValue) {
                        case 'Dot':
                            calculator.addDot();
                            break;
                        case 'Clear':
                            calculator.resetDefaultValues();
                            break;
                        case 'Back':
                            calculator.backSpas();
                            break;
                        case 'Sqr':
                            calculator.radical();
                           break;
                        case 'Division':
                            calculator.performOperationMPMD('/');
                            break;
                        case 'Multiple':
                            calculator.performOperationMPMD('*');
                            break;
                        case 'Minus':
                            calculator.performOperationMPMD('-');
                            break;
                            case 'Plus':
                            calculator.performOperationMPMD('+');
                            break;
                        case 'Equal':
                            calculator.calculate();
                            break;
                        case 'PlusMinus':
                            calculator.toggleSign();
                            break;
  
                        default:
                          break;
                      }
                }
            })
        });

        document.addEventListener('keydown', (event) => {
            if (event.key >= 0 && event.key <= 9 && calculator.tempString.length < 9) {
                calculator.getDigits(event.key);
                calculator.optField.textContent = (calculator.firstNum == "") ? calculator.tempString: calculator.optField.textContent += ` ${calculator.tempString}`;


            }
            else {
                switch (event.key) {
                    case '.':
                        calculator.addDot();
                        break;
                    case 'Escape':
                        calculator.resetDefaultValues();
                        break;
                    case 'Backspace':
                        calculator.backSpas();
                        break;
                    case '/':
                        calculator.performOperationMPMD('/');
                        break;
                    case '*':
                        calculator.performOperationMPMD('*');
                        break;
                    case '-':
                        calculator.performOperationMPMD('-');
                        break;
                        case '+':
                        calculator.performOperationMPMD('+');
                        break;
                    case '=':
                        calculator.calculate();
                        break;
                    case 'Enter':
                        calculator.calculate();
                        break;
                    default:
                        break;
                  }
            }
        });
    },

}

export default ButtonCheck;
