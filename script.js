function changeColor () {
    const color = ["#ff9999", "#99ff99", "#9999ff", "#ffff99", "#ff99ff"];

    document.body.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
}

//Counter
let count = 0;
const counterElement = document.getElementById("counter");

function increase() {
    count++;
    counterElement.textContent = count;
}

function decrease() {
    count--;
    counterElement.textContent = count;
}

function reset() {
    count = 0;
    counterElement.textContent = count;
}

//To-do list

//DOM Elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

//Add Task Function
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
})

//Function to add task to the list 
function addTask (taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;


//Add complete button
const completeBtn = document.createElement('button');
completeBtn.textContent = "Complete";
completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed')
});

//Add delete button
const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
});

//Add buttons to list item
li.appendChild(completeBtn);
li.appendChild(deleteBtn);

//Add List item to task list
taskList.appendChild(li);
}

//Simple Calculater

//Function to add value to display
function appendToDisplay ( value ) {
    const display = document.getElementById('display');
    display.value += value;
}

//Clear the display
function clearDisplay () {
    const display = document.getElementById('display');
    display.value = '';
}

//Calculate Result
function calculateResult () {
    const display = document.getElementById('display');

    try{
        display.value = eval(display.value);
    }
    catch (error) {
        //Exception handling {Invalid Expression}
        display.value = 'Error in Computation!!!';
    }
}

//Password generater logic
 
//DOM elements
const passwordElement = document.getElementById('password');
const copyBtn = document.getElementById('copyBtn');
const generateBtn = document.getElementById('generateBtn');
const lenghthInput = document.getElementById('length');
const uppercaseInput = document.getElementById('uppercase');
const lowercaseInput = document.getElementById('lowercase');
const numbersInput = document.getElementById('numbers');
const symbolsInput = document.getElementById('symbols');

//Character sets
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+{}:"<>?[];,./';

//Generate password
    function generatePassword () {
    let characters = '';

    if (uppercaseInput.checked) characters += uppercaseLetters;
    if (lowercaseInput.checked) characters += lowercaseLetters;
    if (numbers.checked) characters += numbers;
    if (symbols.checked) characters += symbols;

    //Validation Check
    if (!characters) {
        alert('Please select at least one character type');
        return;
    }

    //Randomize password
    let password = '';
    const length = parseInt(lenghthInput.value);
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    passwordElement.value = password;    
}
 //Copy password
 function copyPassword() {
    passwordElement.select();
    document.execCommand('copy');
    alert('Password copied to clipboard')
 }

 //Event Listeners
   generateBtn.addEventListener('click', generatePassword);
   copyBtn.addEventListener('click', copyPassword);

   //Generate password onload
   generatePassword();

   //Countdown timer

   //DOM Elements
   const hoursInput = document.getElementById('hours');
   const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const resetBtn = document.getElementById('resetBtn');
    const countdownDisplay = document.getElementById('countdown');

    //Variables
    let countdownTime = 0;
    let timeInterval;

    //Start Countdown
    function startTimer () {
        const hours = parseInt(hoursInput.value) || 0;
        const minutes = parseInt(minutesInput.value) || 0;
        const seconds = parseInt(secondsInput.value) || 0;

        countdownTime = hours * 3600 + minutes * 60 + seconds;

        if (countdownTime <= 0) {
            alert('Please enter a valid time');
            return;
        }

        timeInterval = setInterval(updateTime, 1000);
        startBtn.disabled = true; 
    }

    //Update Time
    function updateTime () {
        if (countdownTime <= 0) {
            clearInterval(timeInterval);
            countdownDisplay.textContent = 'Time is up!';
            startBtn.disabled = false;
            return;
        }

        const hours = Math.floor(countdownTime / 3600);
        const minutes = Math.floor((countdownTime % 3600) / 60);
        const seconds = countdownTime % 60;

        countdownDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:
        ${String(seconds).padStart(2, '0')}`;

        countdownTime--;
    }

    //Pause Countdown
    function pauseTimer () {
        clearInterval(timeInterval);
        startBtn.disabled = false;
    }

    //Reset Countdown
    function resetTimer () {
        clearInterval(timeInterval);
        countdownDisplay.textContent = '';
        hoursInput.value = '';
        minutesInput.value = '';
        secondsInput.value = '';
        startBtn.disabled = false;
    }


    //Event Listeners
    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);
