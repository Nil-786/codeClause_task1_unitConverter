var input = document.getElementById("inputW");
var output = document.getElementById("outputW");
var inputType = document.getElementById("inputTypeW");
var outputType = document.getElementById("outputTypeW");
var inputTypeValue, outputTypeValue;
input.addEventListener("keyup", operations);
inputType.addEventListener("change", operations);
outputType.addEventListener("change", operations);
function operations() {
    inputTypeValue = inputType.value;
    outputTypeValue = outputType.value;
    if (inputTypeValue == "kilogram") {
        switch (outputTypeValue) {
            case "kilogram":
                output.value = Number(input.value);
                break;
            case "gram":
                output.value = Number(input.value) * 1000;
                break;
            case "miligram":
                output.value = Number(input.value) * 1000 * 1000;
                break;
            case "pounds":
                output.value = Number(input.value) * 2.2;
                break;
        }
    } else if (inputTypeValue == "gram") {
        switch (outputTypeValue) {
            case "kilogram":
                output.value = Number(input.value) / 1000;
                break;
            case "gram":
                output.value = Number(input.value);
                break;
            case "miligram":
                output.value = Number(input.value) * 1000;
                break;
            case "pounds":
                output.value = Number(input.value) * 0.0022;
                break;
        }
    } else if (inputTypeValue == "pounds") {
        switch (outputTypeValue) {
            case "kilogram":
                output.value = Number(input.value)*0.45359237;
                break;
            case "gram":
                output.value = Number(input.value) * 453.592;
                break;
            case "pounds":
                output.value = Number(input.value);
                break;
            case "miligram":
                output.value = Number(input.value) * 453,592.37;
                break;
        }
    } else if (inputTypeValue == "miligram") {
        switch (outputTypeValue) {
            case "kilogram":
                output.value = Number(input.value) / 1000000;
                break;
            case "gram":
                output.value = Number(input.value) / 1000;
                break;
            case "miligram":
                output.value = Number(input.value);
                break;
            case "pounds":
                output.value = Number(input.value)/453592.37;
                break;
        }
    }

}