import LoadCalcSVG from './02loadCalcSVG.js';

document.addEventListener("DOMContentLoaded", async() => {
    await LoadCalcSVG.setup();
    
    document.addEventListener('keydown', (event) => {
        if (event.key === '+') {
            // اجرای عملیاتی که می‌خواهید
            console.log('Key + is pressed!');
            // اینجا می‌توانید کد دیگری برای انجام عملیات دلخواه بنویسید
        }
    });


})