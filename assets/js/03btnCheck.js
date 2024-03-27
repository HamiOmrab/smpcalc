const ButtonCheck  = {
    async setup() {
        const allCalcBtnS = document.querySelectorAll('.calcBtn');
        class Calculator {
            constructor() {
              this.tempString   = "";
              this.operator     = "";
              this.isFirstNum   = false;
              this.isSecondNum  = false;
              this.isOpratorSet = false;
              this.firstNum     = "";;
              this.secondNum    = "";
              this.resault      = "";
            }
            
            resetDefaultValues() {
                this.tempString   = "";
                this.operator     = "";
                this.isFirstNum   = false;
                this.isSecondNum  = false;
                this.isOpratorSet = false;
                this.firstNum     = "";;
                this.secondNum    = "";
                this.resault      = "";
            }
          }
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
                            ( !calculator.tempString.includes('.') && maxLength < 8) ? calculator.tempString = calculator.tempString.concat('.') : 0 ;
                            console.log('tempString = ', calculator.tempString);

                            
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
                            break;
                        case 'Multiple':
                            let acceptedValMult = this.checkStatus(calculator);
                            if (calculator.firstNum == "" && calculator.operator == "") {
                                calculator.firstNum   = acceptedValMult;
                                calculator.operator   = '*';
                                calculator.tempString = "";
                                console.log(`${calculator.firstNum} X `); 
                            }
                            else if (calculator.firstNum == "" && calculator.operator == "") {
                                calculator.operator   = '*';
                                console.log(`${calculator.firstNum} X `); 
                            }
                            else if (calculator.firstNum != "" && calculator.secondNum == "") {
                                calculator.secondNum = acceptedValMult;
                                calculator.firstNum   = this.makeOpration(calculator.firstNum, calculator.operator, calculator.secondNum);
                                calculator.operator   = '*';
                                calculator.tempString = "";
                                calculator.secondNum = ""
                                console.log(`${calculator.firstNum} X `);
                            }
                            else if (calculator.firstNum != "" && calculator.secondNum != "") {
                                calculator.firstNum  = calculator.resault;
                                calculator.secondNum = this.checkStatus(calculator);
                                calculator.resault   = this.makeOpration(calculator.firstNum, calculator.operator, calculator.secondNum);
                                console.log(`sit3: ${calculator.firstNum} ${calculator.operator} ${calculator.secondNum} = ${calculator.resault}`);
                                calculator.firstNum = calculator.resault;
                                calculator.tempString = "";
                                calculator.secondNum  = "";
                                calculator.resault    = "";
                                calculator.operator   = '*';
                                console.log(`${calculator.firstNum} X `); 
                            }
                            break;
                        case 'Minus':
                            break;
                        case 'Plus':
                           
                            let acceptedValPlus = this.checkStatus(calculator);
                            if (calculator.firstNum == "" && calculator.operator == "") {
                                calculator.firstNum   = acceptedValPlus;
                                calculator.operator   = '+';
                                calculator.tempString = "";
                                console.log(`${calculator.firstNum} + `); 
                            }
                            else if (calculator.firstNum == "" && calculator.operator == "") {
                                calculator.operator   = '+';
                                console.log(`${calculator.firstNum} + `); 
                            }
                            else if (calculator.firstNum != "" && calculator.secondNum == "") {
                                calculator.secondNum = acceptedValPlus;
                                calculator.firstNum   = this.makeOpration(calculator.firstNum, calculator.operator, calculator.secondNum);
                                calculator.operator   = '+';
                                calculator.tempString = "";
                                calculator.secondNum = ""
                                console.log(`${calculator.firstNum} + `);
                            }
                            else if (calculator.firstNum != "" && calculator.secondNum != "") {
                                calculator.firstNum  = calculator.resault;
                                calculator.secondNum = this.checkStatus(calculator);
                                calculator.resault   = this.makeOpration(calculator.firstNum, calculator.operator, calculator.secondNum);
                                console.log(`sit3: ${calculator.firstNum} ${calculator.operator} ${calculator.secondNum} = ${calculator.resault}`);
                                calculator.firstNum = calculator.resault;
                                calculator.tempString = "";
                                calculator.secondNum  = "";
                                calculator.resault    = "";
                                calculator.operator   = '+';
                                console.log(`${calculator.firstNum} + `); 
                            }
                            break;
                        case 'Equal':
                            // if (calculator.isFirstNum && )
                            break;
                        case 'PlusMinus':
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
        let retVal = 0;
       if (calculator.tempString.length != 0) {
            retVal = Number(calculator.tempString)
        }
        return retVal;
    },
    makeOpration (firstNum,operator,secondNum) {
        let result = "";
        if (operator == '+') result = firstNum + secondNum;
        else if (operator == '-') result = firstNum - secondNum;
        else if (operator == '*') result = firstNum * secondNum;
        else if (operator == '/' && !secondNum) result = firstNum * secondNum;
        return result;
    }
    // ,
    // performOperation (operator, acceptedVal, calculator) {
    //     console.log(`jjjjjjjjjj ${acceptedVal} + `);
    // }
}

export default ButtonCheck;
