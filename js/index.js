var convType = document.getElementById("convType");
var convTypeValue;
convType.addEventListener("change", typeSwitch);

function typeSwitch() {
    convTypeValue = convType.value;
    var sectionsToHide = document.getElementsByTagName("section");
    for (var i = 0; i < sectionsToHide.length; i++) {
        sectionsToHide[i].style.display = "none";
    }
    document.getElementById(convTypeValue).style.display = "block";
}

