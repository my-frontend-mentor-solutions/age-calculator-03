let dayField = document.getElementById("day-field");
let monthField = document.getElementById("month-field");
let yearField = document.getElementById("year-field");

let allFields = document.getElementsByClassName("field");

var dateNow = new Date();

var currentDay = dateNow.getDate();
var currentMonth = 1 + dateNow.getMonth();
var currentYear = dateNow.getFullYear();

var allMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let button = document.getElementById("arrow");

let dayCount = document.getElementById("day-count");
let monthCount = document.getElementById("month-count");
let yearCount = document.getElementById("year-count");

dayField.addEventListener("input", () => {
    dayField.value = dayField.value.slice(0,2);
});

monthField.addEventListener("input", () => {
    monthField.value = monthField.value.slice(0,2);
});

yearField.addEventListener("input", () => {
    yearField.value = yearField.value.slice(0,4);
});

let showError = (errorElement, errorMessege) => {
    document.querySelector("#" + errorElement + "-label").style.color = "var(--light-red)";
    document.querySelector("#" + errorElement + "-field").style.borderColor = "var(--light-red)";
    document.querySelector("#" + errorElement + "-error").innerHTML = errorMessege;
    document.querySelector("#" + errorElement + "-error").classList.add("error");
}

let removeError = (errorElement, errorMessege) => {
    document.querySelector("#" + errorElement + "-label").style.color = "var(--smokey-grey)";
    document.querySelector("#" + errorElement + "-field").style.borderColor = "var(--light-grey)";
    document.querySelector("#" + errorElement + "-error").innerHTML = errorMessege;
    document.querySelector("#" + errorElement + "-error").classList.remove("error");
}

dayField.addEventListener("focusout", () => {
    
    if (dayField.value.trim() == "") {
        showError("day","This field is required");
    }
    else if (dayField.value > 31 || dayField.value == 0) {
        showError("day","Invalid input");
    }
    else {
        removeError("day","");
    }
});

monthField.addEventListener("focusout", () => {
    if (monthField.value.trim() == "") {
        showError("month","This field is required");
    }
    else if (monthField.value > 12 || monthField.value == 0) {
        showError("month","Invalid input");
    }
    else {
        removeError("month","");
    }
});

yearField.addEventListener("focusout", () => {
    if (yearField.value.trim() == "") {
        showError("year","This field is required");
    }
    else if (yearField.value > currentYear) {
        showError("year","Invalid input");
    }
    else {
        removeError("year","");
    }
});

button.addEventListener("click", () => {

    var inputDay = dayField.value;
    var inputMonth = monthField.value;
    var inputYear = yearField.value;

    if (inputDay > currentDay) {
        currentDay += allMonths[currentMonth - 1];
        currentMonth -= 1; 
    }
    
    if (inputMonth > currentMonth) {
        currentMonth += 12;
        currentYear -= 1;
    }
    
    var calcDay = currentDay - inputDay;
    var calcMonth = currentMonth - inputMonth;
    var calcYear = currentYear - inputYear;

    dayCount.innerHTML = calcDay;
    monthCount.innerHTML = calcMonth;
    yearCount.innerHTML = calcYear;
});