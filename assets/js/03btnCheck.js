const ButtonCheck  = {
    setup: async () => {
        const allCalcBtnS = document.querySelectorAll('.calcBtn');

        allCalcBtnS.forEach(calcBtn => {
            calcBtn.addEventListener('click', () => {
                console.log('Button: ',calcBtn.id);
            })
            
        });
    }
}

export default ButtonCheck;
