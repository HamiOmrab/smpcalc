import {calcBoxContainer} from './01variables.js'
import ButtonCheck from './03btnCheck.js';

const LoadCalcSVG = {
    setup: async () => {
        try{
            fetch('./assets/images/svg/calculator.svg')
            .then(response => response.text())
            .then(svg => {
                calcBoxContainer.innerHTML = svg;
                ButtonCheck.setup();
            })
        } catch (error) {
                console.error('Error loading SVG:', error);
            }
    }
        
}

export default LoadCalcSVG;