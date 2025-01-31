const body = document.querySelector('body');
const display = document.getElementById('display');

function appendInput(input){
    display.value += input;
}

function clearSc(){
    display.value = '';
}

function calculate(){
    display.value = eval(display.value);
}