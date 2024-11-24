function add(a, b) {return a + b;}
function subtract(a, b) {return a - b;}
function multiply(a, b) {return a * b;}
function divide(a, b) {return a / b;}

let n1 = null;
let n2 = null;
let operator = null;
let clearOnNextNumPress = true;

function operate(n1, n2, operator)
{
    switch(operator)
    {
        case "+": return add(n1, n2); break;
        case "-": return subtract(n1, n2); break;
        case "*": return multiply(n1, n2); break;
        case "/": return divide(n1, n2); break;
        default: alert("operator not recognised!");
    }
    return 0;
}

function clearDisplay()
{
    display.textContent = "";
}

function resetDisplay()
{
    display.textContent = "0";
    clearOnNextNumPress = true;
}

function resetValues()
{
    n1 = null;
    n2 = null;
    operator = null;
}

function checkClear()
{
    if (clearOnNextNumPress == true)
    {
        clearDisplay();
        clearOnNextNumPress = false;
    }
}

function storeOperator(n, _operator)
{
    if (n1 == null)
    {
        storeFirstNumber(n);
        clearOnNextNumPress = true;
    }
    else 
    {
        n2 = Number(display.textContent);
        display.textContent = operate(n1, n2, operator);
        storeFirstNumber(operate(n1, n2, operator));
        clearOnNextNumPress = true;
    }   
    operator = _operator;
}

function storeFirstNumber(n)
{
    n1 = Number(n);
}

let container = document.querySelector("#container");
let display = document.querySelector(".display");

container.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON")
        return;
    console.log(event.target.id);
    switch(event.target.id)
    {
        case "clear":resetValues(); resetDisplay(); break;
        case "0":checkClear(); display.textContent+= "0"; break;
        case "1":checkClear(); display.textContent+= "1"; break;
        case "2":checkClear(); display.textContent+= "2"; break;
        case "3":checkClear(); display.textContent+= "3"; break;
        case "4":checkClear(); display.textContent+= "4"; break;
        case "5":checkClear(); display.textContent+= "5"; break;
        case "6":checkClear(); display.textContent+= "6"; break;
        case "7":checkClear(); display.textContent+= "7"; break;
        case "8":checkClear(); display.textContent+= "8"; break;
        case "9":checkClear(); display.textContent+= "9"; break;
        case "decimal":checkClear(); display.textContent+= "."; break;
        case "add":storeOperator(display.textContent, "+"); break;
        case "subtract":storeOperator(display.textContent, "-"); break;
        case "multiply":storeOperator(display.textContent, "*"); break;
        case "divide":storeOperator(display.textContent, "/"); break;
        case "equals":n2 = Number(display.textContent);display.textContent = operate(n1, n2, operator); resetValues(); break;
    }
    let test = event.target.id;
})