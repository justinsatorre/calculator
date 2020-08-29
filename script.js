let stored = document.getElementById('stored');
let current = document.getElementById('current');
let currentVal = '';
let storedVal = '';
let operator = '';
//operable by mouse input
document.addEventListener('click', (e) => {
  let value = e.target.getAttribute('id');
  if (value >= 0 && value <=9) {
  buttonClick(value);
  } else if (value == 'add'){
    add();
  } else if (value == 'subtract'){
    subtract();
  } else if (value == 'multiply'){
    multiply();
  } else if (value == 'divide'){
    divide();
  } else if (value == 'equal'){
    operate();
  }else if (value == 'clear'){
    clear();
  } else if (value == 'backspace'){
    if (currentVal == 0){
      operator = '';
      stored.textContent = storedVal;
    } else {
      currentVal = currentVal.substring(0, currentVal.length - 1);
      current.textContent = currentVal;
    }
  } else if (value == 'decimal'){
    let n = currentVal.indexOf('.');
      if (n<0) {
        buttonClick('.');
      };
  }
});
//operable by keyboard input
document.addEventListener('keydown', (e) => {
  let number = e.key;
  if (e.key >= 0 && e.key <= 9) {
    buttonClick(number);
  } else if (e.key == '+'){
    add();
  } else if (e.key == '-'){
    subtract();
  } else if (e.key == '*'){
    multiply();
  } else if (e.key == '/'){
    divide();
  } else if (e.key == '.'){
    let n = currentVal.indexOf('.');
    if (n<0) {
      buttonClick('.');
    }
  } else if (e.key == 'Backspace'){
    if (currentVal == 0){
      operator = '';
      stored.textContent = storedVal;
    } else {
      currentVal = currentVal.substring(0, currentVal.length - 1);
      current.textContent = currentVal;
    }
  } else if (e.key == '=' || e.key == 'Enter'){
      operate();
  } else {
      return;
    }
});
//button functions
function buttonClick (number) {
  if (currentVal.length > 8){
    return;
  } else {
    if (operator == ''){
      storedVal = '';
      stored.textContent = '';
      currentVal += number;
      current.textContent = currentVal;
    } else {
    currentVal += number;
    current.textContent = currentVal;
    }
  }
};
function clear (){
  storedVal = '';
  currentVal = '';
  operator = '';
  current.textContent = '';
  stored.textContent = '';
}
//operator functions
function add(){
  if (operator == '') {
    if (storedVal == ''){
      storedVal = currentVal;
      currentVal = '';
      operator = '+';
      stored.textContent = storedVal + '+';
      current.textContent = '';
    } else {
        operator = '+';
        stored.textContent = storedVal + '+';
    }
} else {
  if (currentVal == ''){
    return;
  } else {
      storedVal = operate();
      currentVal = '';
      operator = '+';
      stored.textContent = storedVal + '+';
      current.textContent = '';
      return storedVal;
    }
  };
}
function subtract(){
  if (operator == '') {
    if (storedVal == ''){
    storedVal = currentVal;
    currentVal = '';
    operator = '-';
    stored.textContent = storedVal + '-';
    current.textContent = '';
  } else {
      operator = '-';
      stored.textContent = storedVal + '-';
  }
} else {
  if (currentVal == ''){
    return;
  } else {
      storedVal = operate();
      currentVal = '';
      operator = '-';
      stored.textContent = storedVal + '-';
      current.textContent = '';
      return storedVal;
    }  
  };
}
function multiply(){
  if (operator == '') {
    if (storedVal == ''){
      storedVal = currentVal;
      currentVal = '';
      operator = '*';
      stored.textContent = storedVal + 'x';
      current.textContent = '';
  } else {
      operator = '*';
      stored.textContent = storedVal + 'x';
  }
} else {
    if (currentVal == ""){
      return;
    } else {
      storedVal = operate();
      currentVal = '';
      operator = '*';
      stored.textContent = storedVal + 'x';
      current.textContent = '';
      return storedVal;
    }
  };
}
function divide(){
  if (operator == '') {
    if (storedVal == ''){
      storedVal = currentVal;
      currentVal = '';
      operator = '/';
      stored.textContent = storedVal + '÷';
      current.textContent = '';
    } else {
        operator = '/';
        stored.textContent = storedVal + '÷';
    }
} else {
    if (currentVal == '') {
      return;
    } else {
      storedVal = operate();
      currentVal = '';
      operator = '/';
      stored.textContent = storedVal + '÷';
      current.textContent = '';
      return storedVal;
    }
  };
}
//reference function for operate
function calculate(){
    storedVal = storedVal.toString();
    stored.textContent = storedVal;
    current.textContent = '';
    currentVal = '';
    operator = '';
    return storedVal;
}
//operate function
function operate () {
  if (storedVal == ''||currentVal == ''){
    current.textContent = "ಠ_ಠ";
    stored.textContent = '';
    storedVal = '';
    currentVal = '';
    operator = '';
  } else {
    if (operator == '+'){
      storedVal = parseFloat(storedVal) + parseFloat(currentVal);
      calculate(storedVal);
      return storedVal;
    } else if (operator == '-') {
      storedVal = parseFloat(storedVal) - parseFloat(currentVal);
      calculate(storedVal);
      return storedVal;
    } else if (operator == '*') {
      storedVal = parseFloat(storedVal) * parseFloat(currentVal);
      calculate(storedVal);
      return storedVal;
    } else if (operator == '/') {
      if (currentVal == 0) {
        current.textContent = "ಠ_ಠ";
      } else {
      storedVal = parseFloat(storedVal) / parseFloat(currentVal);
      calculate(storedVal);
      return storedVal;
      }
    } else {
      current.textContent = "ಠ_ಠ";
      currentVal = '';
      return;
    }
  }
};