import Calculator from './04Calculator.js';

const ButtonCheck  = {
    async setup() {
        const allCalcBtnS = document.querySelectorAll('.calcBtn');
        const calculator = new Calculator();

        allCalcBtnS.forEach(calcBtn => {
            calcBtn.addEventListener('click', () => {
                let btnValue = calcBtn.id.substring(3);
                let maxLength = calculator.tempString.length;
                if (btnValue >= 0 && btnValue <= 9 && maxLength < 9) {
                    if (!maxLength && btnValue == 0) return 0;
                    else calculator.tempString = calculator.tempString.concat(btnValue);
                    console.log(calculator.tempString);
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
                                calculator.tempString = (maxLength) ? calculator.tempString.slice(0, -1) : "" ;
                                console.log('tempString = ', calculator.tempString);
                            break;
                        case 'Sqr':
                           break;
                        case 'Division':
                            this.performOperationMPMD('/', calculator);
                            break;
                        case 'Multiple':
                            this.performOperationMPMD('*', calculator);
                            break;
                        case 'Minus':
                            this.performOperationMPMD('-', calculator);
                            break;
                            case 'Plus':
                            this.performOperationMPMD('+', calculator);
                            break;
                        case 'Equal':
                            if (calculator.firstNum != "" && calculator.operator != "" && calculator.tempString != "") {
                                let resault = this.makeOperation(calculator.firstNum,calculator.operator,Number(calculator.tempString));
                                console.log(`${calculator.firstNum} ${calculator.operator} ${calculator.tempString} = ${resault}`);
                                calculator.resetDefaultValues();
                                calculator.tempString = resault.toString();
                                
                            }
                            break;
                            case 'PlusMinus':
                                console.log(calculator);
                                if (calculator.tempString != "") {
                                    let firstChar = calculator.tempString.charAt(0);
                                    (firstChar != '-') ? (calculator.tempString = '-' + calculator.tempString) : (calculator.tempString = calculator.tempString.slice(1, calculator.tempString.length).toString());
                                    console.log(calculator.tempString);
                                }
                            break;
  
                        default:
                          break;
                      }
                }
            })
             
            
        });
        // return { tempString, oprator, firstNumb, secondNumb, resetDefaultValues };

    },
    checkStatus (calculator) {
        return calculator.tempString.length !== 0 ? Number(calculator.tempString) : 0;
    },
    performOperationMPMD(operator, calculator) {
        let acceptedValue = this.checkStatus(calculator);
        if (calculator.firstNum === '' && calculator.operator === '') {
            calculator.firstNum = acceptedValue;
            calculator.operator = operator;
            calculator.tempString = '';
            console.log(`${calculator.firstNum} ${operator} `);
        } else if (calculator.firstNum !== '' && calculator.secondNum === '') {
            calculator.secondNum = acceptedValue;
            calculator.firstNum = this.makeOperation(calculator.firstNum, calculator.operator, calculator.secondNum);
            calculator.operator = operator;
            calculator.tempString = '';
            calculator.secondNum = '';
            console.log(`${calculator.firstNum} ${operator} `);
        } else if (calculator.firstNum !== '' && calculator.secondNum !== '') {
            calculator.firstNum = calculator.result;
            calculator.secondNum = acceptedValue;
            calculator.result = this.makeOperation(calculator.firstNum, calculator.operator, calculator.secondNum);
            console.log(`sit3: ${calculator.firstNum} ${calculator.operator} ${calculator.secondNum} = ${calculator.result}`);
            calculator.firstNum = calculator.result;
            calculator.tempString = '';
            calculator.secondNum = '';
            calculator.result = '';
            calculator.operator = operator;
            console.log(`${calculator.firstNum} ${operator} `);
        }
    },
    makeOperation (firstNum,operator,secondNum) {
        let result = "";
        if (operator == '+') result = firstNum + secondNum;
        else if (operator == '-') result = firstNum - secondNum;
        else if (operator == '*') result = firstNum * secondNum;
        else if (operator == '/' &&  secondNum) result = firstNum / secondNum;
        else if (operator == '/' && !secondNum) {console.log("Erreur"); return 0; }
        return result;
    }
    // ,
    // performOperation (operator, acceptedVal, calculator) {
    //     console.log(`jjjjjjjjjj ${acceptedVal} + `);
    // }
}

export default ButtonCheck;
