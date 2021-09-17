'use strict';
//targeting div's for displaying text validation
const validationDepartment = document.getElementById('validation-department');
const validationTitle = document.getElementById('validation-title');
const validationRealSavings = document.getElementById('validation-real-savings');
const validationPotentialSavings = document.getElementById('validation-potential-savings');
const validationContactPhone = document.getElementById('validation-number');
const validationProjectFile = document.getElementById('validation-file');

//targeting inputs separately
const inputDepartment = document.getElementById('department-select');
const inputTitle = document.getElementById('title');
const inputRealSavings = document.getElementById('real-savings');
const inputPotentialSavings = document.getElementById('potential-savings');
const inputContactPhone = document.getElementById('contact-phone');
const inputProjectFile = document.getElementById('file-input');

//Main form button
const mainFormButton = document.getElementById('register-button');

//all inputs
let formInputs = document.querySelectorAll('#department-select, #title, #real-savings, #potential-savings, #contact-phone, #file-input');
//------------------------------------------------------------------------------------



//Constructor for validation function --- Old way to make constructor (working in IE)
function Validation(input, output, text) {
    this.input = input;
    this.output = output;
    this.isCorrect = Boolean(false);
    this.text = text;
}

//Constructor for validation function --- New way to make constructor in JS (dosen't work in IE)
// class Validation{
//     constructor(input, output, text) {
//         this.input = input;
//         this.output = output;
//         this.isCorrect = Boolean(false);
//         this.text = text;
//     }
// }

Validation.prototype.validation = function(){
            if (this.input.value.length == 0) {
                this.output.style.color = "red";
                this.output.textContent = this.text;
                return this.isCorrect = false;
            }
            else if (this.input.value.length > 0) {
                this.output.style.color = "#3498db";
                this.output.textContent = 'ok';
                return this.isCorrect = true;
            }
    }

//Department checking-----------------------------------------------------------------
const department = new Validation(inputDepartment, validationDepartment, 'please choose department');

//add events for input Departmant
inputDepartment.addEventListener('change', function () { department.validation() });
inputDepartment.addEventListener('focus', function () { department.validation() });

//Title checking----------------------------------------------------------------------
const title = new Validation(inputTitle, validationTitle, 'please insert title');

//add events for input Title
inputTitle.addEventListener('input', function () { title.validation() });
inputTitle.addEventListener('focus', function () { title.validation() });

//Real Savings checking---------------------------------------------------------------
const realSaving = new Validation(inputRealSavings, validationRealSavings);

realSaving.validation = function(){
    if (this.input.value.length == 0 ) {
        this.output.style.color = "red";
        this.output.textContent = 'please insert correct value or 0';
        return this.isCorrect = false;
    }
    else if (this.input.value.length > 0 && Number(inputRealSavings.value) >= 0) {
        this.output.style.color = "#3498db";
        this.output.textContent = 'ok';
        return this.isCorrect = true;
    }
    else if (Number(this.input.value) < 0) {
        this.output.style.color = "red";
        this.output.textContent = "value can't be negative";
        return this.isCorrect = false;
    } else {
        this.output.style.color = "red";
        this.output.textContent = 'please insert correct value or 0';
        return this.isCorrect = false;
    }
}

//add events for input Real Savings
inputRealSavings.addEventListener('input', function() { realSaving.validation() });
inputRealSavings.addEventListener('focus', function() { realSaving.validation() });

//Potential Savings checking----------------------------------------------------------
const potentialSavings = new Validation(inputPotentialSavings, validationPotentialSavings);

potentialSavings.validation = function() {
    if (this.input.value.length == 0) {
        this.output.style.color = "red";
        this.output.textContent = 'please insert correct value or 0';
        return this.isCorrect = false;
    }
    else if (this.input.value.length > 0 && Number(inputPotentialSavings.value) >= 0) {
        this.output.style.color = "#3498db";
        this.output.textContent = 'ok';
        return this.isCorrect = true;
    }
    else if (Number(this.input.value) < 0) {
        this.output.style.color = "red";
        this.output.textContent = "value can't be nagative";
        return this.isCorrect = false;
    } else {
        this.output.style.color = "red";
        this.output.textContent = 'please insert correct value or 0';
        return this.isCorrect = false;
    }
}

//add events for input Potential Savings
inputPotentialSavings.addEventListener('input', function () { potentialSavings.validation() });
inputPotentialSavings.addEventListener('focus', function () { potentialSavings.validation() });

//Contact Phone checking-------------------------------------------------------------
const contactPhone = new Validation(inputContactPhone, validationContactPhone);

contactPhone.validation = function() {
    if (this.input.value.length == 0) {
        this.output.style.color = "red";
        this.output.textContent = 'please insert contact phone';
        return this.isCorrect = false;
    }
    else if (this.input.value.length == 4 && Number(inputContactPhone.value) >= 0) {
        this.output.style.color = "#3498db";
        this.output.textContent = 'ok';
        return this.isCorrect = true;
    }
    else if (this.input.value.length !== 4 || Number(inputContactPhone.value) < 0){
        this.output.style.color = "red";
        this.output.textContent = 'please insert correct phone number';
        return this.isCorrect = false;
    } else {
        this.output.style.color = "red";
        this.output.textContent = 'please insert contact phone';
        return this.isCorrect = false;
    }
}

//add events for input contact phone
inputContactPhone.addEventListener('input', function(){ contactPhone.validation() });
inputContactPhone.addEventListener('focus', function(){ contactPhone.validation() });

//Project file checking checking-----------------------------------------------------
const projectFile = new Validation(inputProjectFile, validationProjectFile, 'please insert file');

//add events for input file checking
inputProjectFile.addEventListener('input', function () { projectFile.validation() });
inputProjectFile.addEventListener('focus', function () { projectFile.validation() });
inputProjectFile.addEventListener('change', function () { projectFile.validation() });


//-----------------------------------------------------------------------------------

//---disable button and hover class----
mainFormButton.disabled = true;
mainFormButton.classList.remove('form__button--active');
//----length array for all inputs in form----
const elem = formInputs.length;

//Main Button checking---------------------------------------------------------------
function buttonCheck() {
        if (department.isCorrect &&
            title.isCorrect &&
            realSaving.isCorrect &&
            potentialSavings.isCorrect &&
            contactPhone.isCorrect &&
            projectFile.isCorrect) {
            mainFormButton.disabled = false;
            mainFormButton.classList.add('form__button--active');
        } else {
            mainFormButton.disabled = true;
            mainFormButton.classList.remove('form__button--active');
        }
    }
    
//add events for Main button 
for (let i = 0; i < elem; i++) {
    formInputs[i].addEventListener('change', buttonCheck);
    formInputs[i].addEventListener('focus', buttonCheck);
    formInputs[i].addEventListener('input', buttonCheck);
}

// IE can't recognize forEach ---old implementation
// formInputs.forEach(function (elem) {
//     elem.addEventListener('change', function () {
//         if (
//             inputDepartment.value.length > 0 &&
//             inputTitle.value.length > 0 &&
//             inputRealSavings.value.length > 0 &&
//             inputPotentialSavings.value.length > 0 &&
//             inputContactPhone.value.length > 0 &&
//             inputProjectFile.value.length > 0) {
//             mainFormButton.disabled = false;
//         } else {
//             console.log("checking...");
//         }
//     })
// }
// )

