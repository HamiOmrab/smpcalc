class Calculator {
    constructor() {
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
        this.tempString   = "";
        this.operator     = "";
        this.isFirstNum   = false;
        this.isSecondNum  = false;
        this.isOpratorSet = false;
        this.firstNum     = "";
        this.secondNum    = "";
        this.resault      = "";
    }
}

export default Calculator;