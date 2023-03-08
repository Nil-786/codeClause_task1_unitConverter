var input = document.getElementById("inputTe");
var output = document.getElementById("outputTe");
var inputType = document.getElementById("inputTypeTe");
var outputType = document.getElementById("outputTypeTe");
var inputTypeValue, outputTypeValue;
input.addEventListener("keyup", operations);
inputType.addEventListener("change", operations);
outputType.addEventListener("change", operations);
function operations() {
    inputTypeValue = inputType.value;
    outputTypeValue = outputType.value;
    if (inputTypeValue == "Celsius") {
        switch (outputTypeValue) {
            case "Celsius":
                output.value = Number(input.value);
                break;
            case "Kelvin":
                output.value = Number(input.value) + 273.15;
                break;
            case "Fahrenheit":
                output.value =((Number(input.value)*9)/5) + 32 ;
                break;
        }
    } else if (inputTypeValue == "Kelvin") {
        switch (outputTypeValue) {
            case "Celsius":
                output.value = Number(input.value) - 273.15;
                break;
            case "Kelvin":
                output.value = Number(input.value);
                break;
            case "Fahrenheit":
                output.value =((Number(input.value)-273.15)*0.555556)+32 ;
                break;
        }
    } else if (inputTypeValue == "Fahrenheit") {
        switch (outputTypeValue) {
            case "Celsius":
                output.value = (Number(input.value)-32) * 0.555556;
                break;
            case "Kelvin":
                output.value = ((Number(input.value) - 32) * 0.555556) + 273.15 ;
                break;
            case "Fahrenheit":
                output.value =Number(input.value);
                break;
        }
    }

}