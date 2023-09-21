function add (a , b) {
    console.log(a)
    console.log(b)
    if (a === ""|| a === undefined) {
        a = 0;
    }
    const result = parseFloat(a) + parseFloat(b)
    return parseFloat(result.toFixed(5));
}
function subtract (a , b) {
    if (a === "" || a === undefined) {
        a = 0;
    }
    const result = parseFloat(a) - parseFloat(b)
    return parseFloat(result.toFixed(5));
}

function multiply (a, b) {
    if (a === "" || a === undefined) {
        a = 0;
    }
    const result = parseFloat(a) * parseFloat(b)
    return parseFloat(result.toFixed(5));
}

function divide (a,b) {
    if (a === "" || a === undefined) {
        a = 0;
    }
    if (b == 0) {
        alert("Man kann nicht durch 0 dividieren Dummi!")
        b = 1;
    }
    const result = parseFloat(a) / parseFloat(b)
    return parseFloat(result.toFixed(5));
}



let firstNumber;
let secondNumber;
let operator;
let numberResult;


function operate(operator, a, b) {
    if (operator == "+") {
        return add(a, b)
    } 
    else if (operator == "-") {
        return subtract(a, b)
    } 
    else if (operator == "x") {
        return multiply(a, b)
    } 
    else if (operator == "÷") {
        return divide(a, b)
    } 
    else {
        alert("Wrong Input")
    }
}

let displayNumber = document.querySelector('#display');
let displayNumberTwo = document.querySelector('#displayTwo')
let displayResult = document.querySelector('#displayResult')
let numberButtons = document.querySelectorAll(".numbers-button");
let operatorButtons = document.querySelectorAll(".operator-button")


numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (operator == undefined) {
        if (e.target.innerHTML === "." && firstNumber.includes(".")) {
            return; // Prevent adding another decimal point
        }
        if (firstNumber != undefined){
            displayResult.innerHTML = "";
            displayNumber.innerHTML = firstNumber;
        }
        
        displayResult.innerHTML = "";
        displayNumber.innerHTML += e.target.innerHTML;
        firstNumber = displayNumber.innerHTML
       
      }

     

      
      else {
        if (e.target.innerHTML === "." && secondNumber.includes(".")) {
            return;
        }
        displayResult.innerHTML = "";
        displayNumber.innerHTML = "";
        displayNumberTwo.innerHTML += e.target.innerHTML;
        secondNumber = displayNumberTwo.innerHTML;
      }

    });
});


operatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {

        if (secondNumber == undefined) {
            operator = e.target.innerHTML;
        }
        else {
            
            displayNumberTwo.innerHTML = "";
            numberResult = operate(operator, firstNumber, secondNumber);
            
           displayResult.innerHTML = calculateTotal(numberResult);
           let totalResult = displayResult.innerHTML;
           firstNumber = totalResult;
           secondNumber = undefined;
           operator = undefined;
            

        }

    });
});

oldResult = 0;
const results = []
function calculateTotal(newResult) {
    results.push(newResult);
    console.log(newResult)
    console.log(results)
    let totalValue = results.reduce((oldResult, newResult) => {
        
        
        return oldResult + newResult;
        
        
        
    }, 0);
    results.pop();
    console.log(results)
    return totalValue;

}
deleteButton = document.querySelector('#delete-button');
deleteButton.addEventListener('click', (e) => {
    deleteNumber();
})

function deleteNumber() {
    
    if (displayNumber.innerHTML !== "") {
        let currentNumber = displayNumber.innerHTML;
       
        console.log("hiiiii")
        if (!isNaN(currentNumber)) {
            
            const newStringValue = currentNumber.slice(0, -1); // Remove the last character
            
            displayNumber.innerHTML = newStringValue;
            firstNumber = newStringValue; // Update firstNumber as a number
        }
         
    }
    
    


    if (displayNumberTwo.innerHTML !== "") {
        const currentNumber = displayNumberTwo.innerHTML;
    
        if (!isNaN(currentNumber)) {
            const newStringValue = currentNumber.slice(0, -1); 
            displayNumberTwo.innerHTML = newStringValue;
            secondNumber = newStringValue; 
        }
    }
    

    if (displayResult.innerHTML !== "") {
        const currentNumber = displayResult.innerHTML;
        
        if (!isNaN(currentNumber)) {
            let newStringValue = currentNumber.slice(0, -1); 
            
            displayResult.innerHTML = newStringValue;
            firstNumber = newStringValue; 
        }
    }
    
}

clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearButtonClick);

function clearButtonClick() {
    displayResult.innerHTML = 0;
    displayNumberTwo.innerHTML = "";
    displayNumber.innerHTML = "";
    firstNumber = undefined;
    secondNumber = undefined;
    
 
}

function isFloat(number) {
    return !Number.isInteger(number);
}