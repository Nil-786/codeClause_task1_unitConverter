var convType = document.getElementById("convType");
var convTypeValue;
convType.addEventListener("change", typeSwitch);
document.addEventListener('DOMContentLoaded', function() {
    var script = document.createElement('script');
    script.src = 'js/'+'convLength'+'.js';
    document.head.appendChild(script);
  });
  

function typeSwitch() {
    convTypeValue = convType.value;
    var sectionsToHide = document.getElementsByTagName("section");
    for (var i = 0; i < sectionsToHide.length; i++) {
        sectionsToHide[i].style.display = "none";
    }
    document.getElementById(convTypeValue).style.display = "block";
    var script = document.createElement('script');
    script.src = 'js/'+convTypeValue+'.js';
    document.head.appendChild(script);
}

