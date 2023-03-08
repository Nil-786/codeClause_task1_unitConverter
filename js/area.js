var input = document.getElementById("inputA");
var output = document.getElementById("outputA");
var inputType = document.getElementById("inputTypeA");
var outputType = document.getElementById("outputTypeA");
var inputTypeValue, outputTypeValue;
input.addEventListener("keyup", operations);
inputType.addEventListener("change", operations);
outputType.addEventListener("change", operations);
function operations() {
    inputTypeValue = inputType.value;
    outputTypeValue = outputType.value;
    if (inputTypeValue == "meter") {
        switch (outputTypeValue) {
            case "centimeter":
                output.value = Number(input.value) * 1000;
                break;
            case "kilometer":
                output.value = Number(input.value) * 0.000001;
                break;
            case "meter":
                output.value = Number(input.value);
                break;
            case "inch":
                output.value = Number(input.value) * 1550;
                break;
            case "feet":
                output.value = Number(input.value) * 10.764;
                break;
        }
    } else if (inputTypeValue == "centimeter") {
        switch (outputTypeValue) {
            case "meter":
                output.value = Number(input.value) * 0.0001;
                break;
            case "kilometer":
                output.value = Number(input.value) * 0.0000000001;
                break;
            case "centimeter":
                output.value = Number(input.value);
                break;
            case "inch":
                output.value = Number(input.value) / 6.4516;
                break;
            case "feet":
                output.value = Number(input.value) * 0.00108;
                break;
        }
    } else if (inputTypeValue == "kilometer") {
        switch (outputTypeValue) {
            case "meter":
                output.value = Number(input.value) * 1000000;
                break;
            case "kilometer":
                output.value = Number(input.value);
                break;
            case "centimeter":
                output.value = Number(input.value) * 10000000000;
                break;
            case "inch":
                output.value = Number(input.value) * 1, 550, 003, 100.0062;
                break;
            case "feet":
                output.value = Number(input.value) * 10763915;
                break;
        }
    } else if (inputTypeValue == "inch") {
        switch (outputTypeValue) {
            case "meter":
                output.value = Number(input.value) * 0.00064516;;
                break;
            case "kilometer":
                output.value = Number(input.value)/1550003100.0062;
                break;
            case "centimeter":
                output.value = Number(input.value) * 6.4516;
                break;
            case "inch":
                output.value = Number(input.value);
                break;
            case "feet":
                output.value = Number(input.value) /0.007; 
                break;
        }
    } else if (inputTypeValue == "feet") {
        switch (outputTypeValue) {
            case "meter":
                output.value = Number(input.value) * 0.09290304;
                break;
            case "kilometer":
                output.value = Number(input.value)* 0.0000000929;
                break;
            case "centimeter":
                output.value = Number(input.value)  * 929.03;
                break;
            case "inch":
                output.value = Number(input.value) * 144;
                break;
            case "feet":
                output.value = Number(input.value);
                break;
        }
    }

}