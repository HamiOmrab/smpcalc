function performOperationMPM(operator, calculator) {
    let acceptedValue = checkStatus(calculator);
    let calcUpdate = calculator;
    if (calculator.firstNum === '' && calculator.operator === '') {
        calculator.firstNum = acceptedValue;
        calculator.operator = operator;
        calculator.tempString = '';
        calcUpdate = calculator;
        console.log(`${calculator.firstNum} ${operator} `);
        return calcUpdate;

    } else if (calculator.firstNum !== '' && calculator.secondNum === '') {
        calculator.secondNum = acceptedValue;
        calculator.firstNum = makeOperation(calculator.firstNum, calculator.operator, calculator.secondNum);
        calculator.operator = operator;
        calculator.tempString = '';
        calculator.secondNum = '';
        calcUpdate = calculator;
        console.log(`${calculator.firstNum} ${operator} `);
        return calcUpdate;

    } else if (calculator.firstNum !== '' && calculator.secondNum !== '') {
        calculator.firstNum = calculator.result;
        calculator.secondNum = acceptedValue;
        calculator.result = makeOperation(calculator.firstNum, calculator.operator, calculator.secondNum);
        console.log(`sit3: ${calculator.firstNum} ${calculator.operator} ${calculator.secondNum} = ${calculator.result}`);
        calculator.firstNum = calculator.result;
        calculator.tempString = '';
        calculator.secondNum = '';
        calculator.result = '';
        calculator.operator = operator;
        calcUpdate = calculator;
        console.log(`${calculator.firstNum} ${operator} `);
        return calcUpdate;

    }

    function makeOperation (firstNum,operator,secondNum) {
        let result = "";
        if (operator == '+') result = firstNum + secondNum;
        else if (operator == '-') result = firstNum - secondNum;
        else if (operator == '*') result = firstNum * secondNum;
        else if (operator == '/' && !secondNum) result = firstNum * secondNum;
        return result;
    }

    function checkStatus (calculator) {
        return calculator.tempString.length !== 0 ? Number(calculator.tempString) : 0;
    }

    // console.log(calcUpdate);
    // return calcUpdate;

}



export default performOperationMPM;