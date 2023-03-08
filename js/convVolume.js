var input = document.getElementById("inputV");
var output = document.getElementById("outputV");
var inputType = document.getElementById("inputTypeV");
var outputType = document.getElementById("outputTypeV");
var inputTypeValue, outputTypeValue;
input.addEventListener("keyup", operations);
inputType.addEventListener("change", operations);
outputType.addEventListener("change", operations);
function operations() {
    inputTypeValue = inputType.value;
    outputTypeValue = outputType.value;
    if (inputTypeValue == "liter") {
        switch (outputTypeValue) {
            case "liter":
                output.value = Number(input.value);
                break;
            case "centimeter":
                output.value = Number(input.value) * 1000;
                break;
            case "meter":
                output.value = Number(input.value) /1000;
                break;
            case "mililiter":
                output.value = Number(input.value) * 1000;
                break;
        }
    } else if (inputTypeValue == "centimeter") {
        switch (outputTypeValue) {
            case "liter":
                output.value = Number(input.value)* 0.001;
                break;
            case "centimeter":
                output.value = Number(input.value) ;
                break;
            case "meter":
                output.value = Number(input.value) / 1000000 ;
                break;
            case "mililiter":
                output.value = Number(input.value);
                break;
        }
    } else if (inputTypeValue == "mililiter") {
        switch (outputTypeValue) {
            case "liter":
                output.value = Number(input.value)* 0.001;
                break;
            case "centimeter":
                output.value = Number(input.value) ;
                break;
            case "meter":
                output.value = Number(input.value)/ 1000000 ;
                break;
            case "mililiter":
                output.value = Number(input.value);
                break;
        }
    } else if (inputTypeValue == "meter") {
        switch (outputTypeValue) {
            case "liter":
                output.value = Number(input.value)* 1000;
                break;
            case "centimeter":
                output.value = Number(input.value) * 1000000;
                break;
            case "meter":
                output.value = Number(input.value);
                break;
            case "mililiter":
                output.value = Number(input.value) * 1000000;
                break;
        }
    }

}