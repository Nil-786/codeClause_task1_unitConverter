var input = document.getElementById("inputT");
var output = document.getElementById("outputT");
var inputType = document.getElementById("inputTypeT");
var outputType = document.getElementById("outputTypeT");
var inputTypeValue, outputTypeValue;
input.addEventListener("keyup", operations);
inputType.addEventListener("change", operations);
outputType.addEventListener("change", operations);
function operations() {
    inputTypeValue = inputType.value;
    outputTypeValue = outputType.value;
    if (inputTypeValue == "hour") {
        switch (outputTypeValue) {
            case "hour":
                output.value = Number(input.value);
                break;
            case "minute":
                output.value = Number(input.value) *60;
                break;
            case "second":
                output.value =Number(input.value) * 3600 ;
                break;
        }
    } else if (inputTypeValue == "minute") {
        switch (outputTypeValue) {
            case "hour":
                output.value = Number(input.value)/60;
                break;
            case "minute":
                output.value = Number(input.value) ;
                break;
            case "second":
                output.value =Number(input.value) * 60 ;
                break;
        }
    } else if (inputTypeValue == "second") {
        switch (outputTypeValue) {
            case "hour":
                output.value = Number(input.value)/3600;
                break;
            case "minute":
                output.value = Number(input.value) /60;
                break;
            case "second":
                output.value =Number(input.value) ;
                break;
        }
    }

}