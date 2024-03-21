const ButtonCheck  = {
    setup: async () => {
        const allCalcBtnS = document.querySelectorAll('.calcBtn');
        class Calculator {
            constructor() {
              this.tempString = "";
              this.operator   = "";
              this.firstNum   = 0;
              this.secondNum  = 0;
              this.resault    ="";
            }
          
            resetDefaultValues() {
              this.tempString = "";
              this.operator   = "";
              this.firstNum   = 0;
              this.secondNum  = 0;
            }
          }
        const calculator = new Calculator();
        allCalcBtnS.forEach(calcBtn => {
            calcBtn.addEventListener('click', () => {
                let btnValue = calcBtn.id.substring(3);
                let maxLength = calculator.tempString.length;
                console.log(btnValue);
                if (btnValue >= 0 && btnValue <= 9 && maxLength < 9) {
                    if (!maxLength && btnValue == 0) return 0;
                    else calculator.tempString = calculator.tempString.concat(btnValue);
                    console.log('tempString = ', calculator.tempString);
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
                            break;
                        case 'Minus':
                            break;
                        case 'Plus':
                            break;
                        case 'Equal':
                            break;
                        case 'PlusMinus':
                            break;
  
                        default:
                          // در صورتی که calcBtn.id با هیچ کدام از موارد بالا مطابقت نداشته باشد
                          break;
                      }
                }
            })
            
        });
        // return { tempString, oprator, firstNumb, secondNumb, resetDefaultValues };

    }

}

export default ButtonCheck;
