var nameField = document.myForm.Name;
var PhoneField = document.myForm.Phone_Number;
var EmailField = document.myForm.Email;
var legal_check = document.myForm.legal;
var position = document.myForm.Position;
var job_type = document.myForm.Job_Type;
var previous_company = document.myForm.Previous_company;
var department = document.myForm.Department;
var college = document.myForm.College;
var company = document.myForm.Company;
var pos = document.myForm.Pos;

//address values
var A_city = document.myForm.City;
var A_state = document.myForm.State;
var A_code = document.myForm.Post_code;


var message = "This field is required";  //default message
var format_message = "not in proper format"; //invalid format message
var firstErrorField = null;

function validate() {
    firstErrorField = null;
    var valid = true;
    
    //name field
    const name = nameField.value.trim();
    if (name === ""){
        displayError(nameField,message);
        valid = false;
        activateFocus(nameField,firstErrorField);
    } else if (!/^[a-zA-Z]+$/.test(name)){
        displayError(nameField,"only letters allowed");
        valid = false;
        activateFocus(nameField,firstErrorField);
    }else{
        displayNone(nameField);
    }

    //Phone_number field
    const phone = PhoneField.value.trim();
    const format = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone === ""){
        displayError(PhoneField,message);
        valid = false;
        activateFocus(PhoneField,firstErrorField);
    }else if(!phone.match(format)) {
        displayError(PhoneField,format_message);
        valid = false;
        activateFocus(PhoneField,firstErrorField);
    }else{
        displayNone(PhoneField);
    }    

    //Email field
    const email = EmailField.value.trim();
    const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email === ""){
        displayError(EmailField,message);
        valid = false;
        activateFocus(EmailField,firstErrorField);
    }else if(!emailFormat.test(email)){
        displayError(EmailField,format_message);
        valid = false;
        activateFocus(EmailField,firstErrorField);
    }else{
        displayNone(EmailField);
    }    

    //Address fields
    if (A_city.value.trim() === ""){
        displayError(A_city,message);
        valid = false;
        activateFocus(A_city,firstErrorField);
    }else{
        displayNone(A_city);
    }

    if (A_state.value.trim() === ""){
        displayError(A_state,message);
        valid = false;
        activateFocus(A_state,firstErrorField);
    }else{
        displayNone(A_state);
    }

    if (A_code.value.trim() === ""){
        displayError(A_code,message);
        valid = false;
        activateFocus(A_code,firstErrorField);
    }else{
        displayNone(A_code);
    }


    //legal_check
    var isChecked = false;

    for (var i = 0; i < legal_check.length; i++) {
        if (legal_check[i].checked) {
            isChecked = true;
            break; 
        }
    }
       
    if (!isChecked) {
            displayError(legal_check[0], message);
            valid = false;
    } else {
            displayNone(legal_check[0]);
    }

    //other fields
    checkEmpty(position);
    
    checkEmpty(job_type);
  
    checkEmpty(previous_company);
  
    checkEmpty(department);
  
    checkEmpty(college);

    checkEmpty(company);

    checkEmpty(pos);



   
    redirect(valid);


}




//display error message
function displayError(input,message){
    var formcontrol = input.parentElement;
    var error = formcontrol.querySelector('small'); 
    var icon = formcontrol.querySelector('i');
    var con = formcontrol.querySelector('div');
    error.innerText = message;
    icon.className = "uil uil-exclamation";
    con.style.display = "inline-flex";
    input.style.border = "1px solid red";
    input.style.boxShadow = "0 0 0 0"; 
}

//remove error message
function displayNone(input){
    var formcontrol = input.parentElement;
    var error = formcontrol.querySelector('small'); 
    var icon = formcontrol.querySelector('i');
    var con = formcontrol.querySelector('div');
    error.innerText = "";
    icon.className = "";
    con.style.display = "";
    input.style.border = "";
    input.style.boxShadow = ""; 
}

//check only empty value
function checkEmpty(input){
    if (input.value === "") {
        displayError(input,message);
        valid = false;
    } else {
        displayNone(input);
    }
}

//activate focus on first error input field
function activateFocus(input,error_field){
    if (error_field === null) {
        firstErrorField = input; 
        firstErrorField.focus();         
    }
}



//redirect to success page
function redirect(validationSuccess){
    if(validationSuccess === true){
        document.myForm.reset();
        window.location.href = "submit.html";
    } 
}

const num_1 = document.getElementsByClassName("sd-1");
const num_2 = document.getElementsByClassName("sd-2");
const num_3 = document.getElementsByClassName("sd-3");

for(const num of num_1){
    for (let i = 1; i <= 30; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        num.appendChild(option);
    }
}

for(const num of num_2){
    for (let i = 1; i <= 12; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        num.appendChild(option);
    }
}

for(const num of num_3){
    for (let i = 2000; i <= 2021; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        num.appendChild(option);
    }
}

