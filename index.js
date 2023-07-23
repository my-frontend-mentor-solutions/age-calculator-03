// let dayLabel = document.getElementById("day-label");
// let monthLabel = document.getElementById("month-label");
// let yearLabel = document.getElementById("year-label");
let dayField = document.getElementById("day-field");
let monthField = document.getElementById("month-field");
let yearField = document.getElementById("year-field");
// let dayError = document.getElementById("day-error");
// let monthError = document.getElementById("month-error");
// let yearError = document.getElementById("year-error");
// let errorClass = document.getElementsByClassName("error");

let allFields = document.getElementsByClassName("field");

var currentYear = new Date().getFullYear();

dayField.addEventListener("input", () => {
    dayField.value = dayField.value.slice(0,2);
});

monthField.addEventListener("input", () => {
    monthField.value = monthField.value.slice(0,2);
});

yearField.addEventListener("input", () => {
    yearField.value = yearField.value.slice(0,4);
});

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


let showError = (errorElement, errorMessege) => {
    document.querySelector("#" + errorElement + "-label").style.color = "var(--light-red)";
    document.querySelector("#" + errorElement + "-field").style.borderColor = "var(--light-red)";
    document.querySelector("#" + errorElement + "-error").innerHTML = errorMessege;
    document.querySelector("#" + errorElement + "-error").classList.add("error");
}

let removeError = (errorElement, errorMessege) => {
    document.querySelector("#" + errorElement + "-label").style.color = "var(--smokey-grey)";
    document.querySelector("#" + errorElement + "-field").style.borderColor = "var(--purple)";
    document.querySelector("#" + errorElement + "-error").innerHTML = errorMessege;
    document.querySelector("#" + errorElement + "-error").classList.remove("error");
}