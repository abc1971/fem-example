let displayElement, equalButton, buttonType;
let result, arg1, arg2;
let operator;
let digitsStarted = false;

function changeimage(show) {
    if(digitsStarted)
        displayElement.textContent += show;
    else
    
    displayElement.textContent = show;            
}
function processDigit(digit) {
    changeimage(digit);
    digitsStarted = true;  
}

function processClear() {
    arg1, arg2 =0;
    changeimage(0);
    digitsStarted = false;
   
}

function processbackspace() {
    if (digitsStarted) 
        displayElement.textContent = displayElement.textContent.slice(0, -1); 
    else
        processClear();  
}

function processSign(sign) {
    operator = sign;
    arg1 = parseInt(displayElement.textContent);    
    digitsStarted = false; 
}

function processEqual() {
    arg2 = parseInt(displayElement.textContent);
    switch (operator) {
        case "+":
            result = arg1 + arg2; 
          break;
        case "-":
            result = arg1 - arg2; 
            break;
        case "×":
            result = arg1 * arg2; 
            break;
        case "÷":
            result = arg1 / arg2; 
            break;        
        default:  
            break;
    }
    digitsStarted = false;
    changeimage(result);
    arg1 = result;  
}
function main () {
    window.addEventListener("load", function() 
    {   
        let elements = document.getElementsByClassName('quad');
        displayElement = elements[0];
        changeimage(0);
        elements = document.getElementsByClassName('container');
        container = elements[0];
        container.addEventListener('click', event => {
            let btn = event.target;
            buttonType = btn.className;
            if (buttonType.includes("equal"))     
                processEqual();   
            else if (buttonType.includes("digit"))
                processDigit(btn.textContent);
            else if (buttonType.includes("sign"))     
                processSign(btn.textContent); 
            else if (buttonType.includes("backspace"))     
                processbackspace();                  
            else if (buttonType.includes("clear"))     
                processClear();             
        });
    });
}

main();
