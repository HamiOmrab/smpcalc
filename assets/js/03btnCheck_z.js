import Calculator from './04calculator.js';
import performOperationMPM from './05operationMPN.js';


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
                            let a = performOperationMPM('*', calculator);
                            console.log(a);
                            break;
                        case 'Minus':
                            let b = performOperationMPM('-', calculator);
                            console.log(b);
                            break;
                        case 'Plus':
                            let c = performOperationMPM('+', calculator);
                            console.log(c);
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
    },
    
}

export default ButtonCheck;
