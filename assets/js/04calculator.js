class Calculator {
    constructor() {
        this.optField = document.querySelector('#oprationField output');
        this.resField = document.querySelector('#resultField output');
        this.tempString   = "";
        this.operator     = "";
        this.isFirstNum   = false;
        this.isSecondNum  = false;
        this.isOpratorSet = false;
        this.firstNum     = "";
        this.secondNum    = "";
        this.resault      = "";
    }

    resetDefaultValues() {
        this.optField.innerHTML = "";
        this.resField.innerHTML = "0";
        this.tempString   = "";
        this.operator     = "";
        this.isFirstNum   = false;
        this.isSecondNum  = false;
        this.isOpratorSet = false;
        this.firstNum     = "";
        this.secondNum    = "";
        this.resault      = "";
    }

    getDigits (btnValue) {
        if (this.tempString == "" && btnValue == 0) return 0;
        else this.tempString = this.tempString.concat(btnValue);
        console.log(this.tempString);
    }
    
    addDot () {
        console.log('--------------------');
        if ( !this.tempString.includes('.') && this.tempString.length < 8) {
            this.tempString = (this.tempString.length) ? this.tempString.concat('.') : this.tempString.concat('0.');
            console.log('tempString = ', this.tempString);
            this.optField.textContent = this.tempString;

        }
    }
    checkStatus () {
        //return this.tempString.length !== 0 ? Number(this.tempString) : 0;
        return  Number(this.tempString);
    }
    
    performOperationMPMD (operator) {
        let acceptedValue = this.checkStatus();

        if (this.firstNum === '' && this.operator === '') {
            this.firstNum = acceptedValue;
            this.operator = operator;
            this.tempString = '';
            console.log(`${this.firstNum} ${operator}`);
            this.optField.textContent = `${this.firstNum} ${operator}`;
            
        } else if (this.firstNum !== '' && this.secondNum === '') {
            this.secondNum = acceptedValue;
            this.firstNum = this.makeOperation(this.firstNum, this.operator, this.secondNum);
            this.operator = operator;
            this.tempString = '';
            this.secondNum = '';
            console.log(`${this.firstNum} ${operator} `);
            this.optField.textContent = `${this.firstNum} ${operator}`;
        } 
        
        else if (this.firstNum !== '' && this.secondNum !== '') {
            console.log('mamad');
            this.firstNum = this.result;
            this.secondNum = acceptedValue;
            this.result = this.makeOperation(this.firstNum, this.operator, this.secondNum);
            console.log(`sit3: ${this.firstNum} ${this.operator} ${this.secondNum} = ${this.result}`);
            this.optField.textContent = `${this.firstNum} ${this.operator} ${this.secondNum} = ${this.result}`;
            this.firstNum = this.result;
            this.tempString = '';
            this.secondNum = '';
            this.result = '';
            this.operator = operator;
            console.log(`${this.firstNum} ${operator} `);
            this.optField.textContent = `${this.firstNum} ${operator}`;
        }
    }
    
    makeOperation (firstNum,operator,secondNum) {
        let result = "";
        console.log(this);
        if      (operator == '+') result = firstNum + secondNum;
        else if (operator == '-') result = firstNum - secondNum;
        else if (operator == 'X') result = firstNum * secondNum;
        else if (operator == '÷') {
            if (secondNum != 0) {
                result = firstNum / secondNum;
            }
            else {
                console.log("Erreur");
                // throw new Error("Division by zero is not allowed.");
                result = "Error";
                this.resetDefaultValues();
                return 0;
            }
        }
        this.resField.textContent = result;
        return result;
    }

    toggleSign () {
        console.log(this);
        if (this.tempString != "") {
            let firstChar = this.tempString.charAt(0);
            (firstChar != '-') ? (this.tempString = '-' + this.tempString) : (this.tempString = this.tempString.slice(1, this.tempString.length).toString());
            console.log(this.tempString);
        }
    }
    calculate () {
        console.log(this);
        if (this.firstNum != "" && this.operator != "" && this.tempString != "") {
            let resault = this.makeOperation(Number(this.firstNum),this.operator,Number(this.tempString));
            console.log(`${this.firstNum} ${this.operator} ${this.tempString} = ${resault}`);
            let tempDisplay = `${this.firstNum} ${this.operator} ${this.tempString} = ${resault}`;
            this.resetDefaultValues();
            this.optField.innerHTML = tempDisplay;
            this.resField.textContent = resault;
            this.tempString = resault.toString();
            
        }
        console.log(this);

    }
    backSpas () {
        console.log(this);
        if (this.operator == "") {
            this.tempString = (this.tempString.length) ? this.tempString.slice(0, -1) : "" ;
        }
        else {
            this.operator = "";
            this.tempString = this.firstNum;
            this.firstNum = "";
        }
        console.log('tempString = ', this.tempString);
        this.optField.textContent = this.tempString;

    }

    radical() {
        // if (this.operator == "" && Number(this.tempString) >= 0) {
        if (Number(this.tempString) >= 0) {
            this.tempString = (Math.sqrt(Number(this.tempString))).toString();
        }
        console.log(this.tempString);
    }
}

export default Calculator;