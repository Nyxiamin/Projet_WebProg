console.log("Je suis la console !");


/*The Advice page*/
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#Advice').addEventListener('submit',function(e){
        var myForm = document.forms.Advice;
        if (myForm.elements["lowercase"].checked || myForm.elements["uppercase"].checked || myForm.elements["number"].checked || myForm.elements["symbol"].checked){
            generateAdvice(); 
        }
        else{
            alert("Choisissez au moins un critère!"); 
        }
        document.Advice.reset();
    });
});    

function generateAdvice(){
    var myForm = document.forms.Advice;
}

/* The adoption page*/
function generateAdopt(){
    var myForm = document.forms.ajoutAdopt;
    
    var newLine = document.createElement("tr");
    var col1 = document.createElement("td");
    var col2 = document.createElement("td");
    var col3 = document.createElement("td");
    var col4 = document.createElement("td");
    var col5 = document.createElement("td");
    var col6 = document.createElement("td");

    col1.textContent = "";
    if (myForm.elements["Dog"].checked) {
        col1.textContent += "Dog";
    }
    if (myForm.elements["Cat"].checked) {
        if(col1.textContent != ""){
            col1.textContent += " and ";
        }
        col1.textContent += "Cat";
    }
    if (myForm.elements["Fish"].checked) {
        if(col1.textContent != ""){
            col1.textContent += " and ";
        }
        col1.textContent += "Fish";
    }
    if (myForm.elements["Bird"].checked) {
        if(col1.textContent != ""){
            col1.textContent += " and ";
        }
        col1.textContent += "Bird";
    }
    if (myForm.elements["Rodent"].checked) {
        if(col1.textContent != ""){
            col1.textContent += " and ";
        }
        col1.textContent += "Rodent";
    }
    if (myForm.elements["Horse"].checked) {
        if(col1.textContent != ""){
            col1.textContent += " and ";
        }
        col1.textContent += "Horse";
    }

    col2.textContent = myForm.elements["numberanimals"].value;
    col3.textContent = myForm.elements["disponibility"].value;
    col4.textContent = myForm.elements["category"].value;
    col5.textContent = myForm.elements["adress"].value;
    col6.textContent = "Waiting list";

    newLine.append(col1,col2,col3,col4,col5,col6);
    console.log(newLine);
    var myTable = document.getElementById("mytab");
    myTable.appendChild(newLine);
}

function supprimer() {
    if (confirm("Confirmez-vous la suppression de votre demande d'adoption?")) {
        var myTable = document.getElementById("mytab");
        var rowCount = myTable.rows.length;
        for (var i = rowCount - 1; i > 0; i--) {
            myTable.removeChild(myTable.lastChild);
        }
    }
}