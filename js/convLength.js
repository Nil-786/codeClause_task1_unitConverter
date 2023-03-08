
var input = document.getElementById("input");
var output = document.getElementById("output");
var inputType = document.getElementById("inputType");
var outputType = document.getElementById("outputType");
var inputTypeValue, outputTypeValue;
input.addEventListener("keyup", operations);
inputType.addEventListener("change", operations);
outputType.addEventListener("change", operations);
function operations() {
    inputTypeValue = inputType.value;
    outputTypeValue = outputType.value;
    if (inputTypeValue == "kilometer") {
        switch (outputTypeValue) {
            case "kilometer":
                output.value = Number(input.value);
                break;
            case "meter":
                output.value = Number(input.value) * 1000;
                break;
            case "centimeter":
                output.value = Number(input.value) * 1000 * 100;
                break;
            case "millimeter":
                output.value = Number(input.value) * 1000 * 1000;
                break;
        }
    } else if (inputTypeValue == "meter") {
        switch (outputTypeValue) {
            case "kilometer":
                output.value = Number(input.value) / 1000;
                break;
            case "meter":
                output.value = Number(input.value);
                break;
            case "centimeter":
                output.value = Number(input.value) * 100;
                break;
            case "millimeter":
                output.value = Number(input.value) * 1000;
                break;
        }
    } else if (inputTypeValue == "centimeter") {
        switch (outputTypeValue) {
            case "kilometer":
                output.value = Number(input.value) / 10000;
                break;
            case "meter":
                output.value = Number(input.value) / 100;
                break;
            case "centimeter":
                output.value = Number(input.value);
                break;
            case "millimeter":
                output.value = Number(input.value) * 10;
                break;
        }
    } else if (inputTypeValue == "millimeter") {
        switch (outputTypeValue) {
            case "kilometer":
                output.value = Number(input.value) / 100000;
                break;
            case "meter":
                output.value = Number(input.value) / 1000;
                break;
            case "centimeter":
                output.value = Number(input.value) / 10;
                break;
            case "millimeter":
                output.value = Number(input.value);
                break;
        }
    }

}