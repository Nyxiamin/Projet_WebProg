console.log("Je suis la console !");


/*The Advice page*/
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#Advice').addEventListener('submit',function(e){
        var myForm = document.forms.Advice;
        if (myForm.elements["Patience"].checked || myForm.elements["Money"].checked || myForm.elements["Time"].checked || myForm.elements["Calm"].checked || myForm.elements["Space"].checked || myForm.elements["Hugs"].checked){
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

    var None = 0;
    var Dog = 0;
    var Cat = 0;
    var Bird = 0;
    var Fish = 0;
    var Horse = 0;
    var Rodent = 0;
    var Result =document.createElement("h1");
    Result.className = "AdviceResult";
    var Comment =document.createElement("p");
    Comment.className = "AdviceComment";

    if (!(myForm.elements["Patience"].checked)){
        None +=1;
    }
    if (!(myForm.elements["Money"].checked)){
        None +=1;
    }
    if (None == 2){
        Result.textContent = "None.";
        Comment.textContent = "You should not have an animal if you don't have neither Patience nor Money..."
    }

    if (!(myForm.elements["Time"].checked)){
        Dog += 1;
        Bird += 1;
        Horse += 1;
    }
    if (!(myForm.elements["Calm"].checked)){
        Cat += 1;
        Fish += 1;
        Rodent += 1;
    }
    if (!(myForm.elements["Space"].checked)){
        Dog += 1;
        Bird += 1;
        Horse += 1;
        Fish +=1;
    }
    if (!(myForm.elements["Hugs"].checked)){
        Cat += 1;
        Rodent += 1;
    }
    if (myForm.elements["minkidage"].value !== 0){
        if (myForm.elements["minkidage"].value < 5){
            Dog += 1;
            Cat += 1;
        }
        if (myForm.elements["minkidage"].value > 5 && myForm.elements["minkidage"].value < 10){
            Fish += 1;
            Horse += 1;
        }
        if (myForm.elements["minkidage"].value > 10){
            Rodent += 1;
            Bird += 1;
        }
    }
    if (myForm.elements["life"].value == "Yes"){
        Dog += 1;
        Cat += 1;
        Horse += 1;
    }
    if (myForm.elements["life"].value == "No"){
        Bird += 1;
        Fish += 1;
        Rodent += 1;
    }
    if (myForm.elements["value"].value == "Loyalty"){
        Dog += 1;
    }
    if (myForm.elements["value"].value == "Freedom"){
        Bird += 1;
        Horse += 1;
    }
    if (myForm.elements["value"].value == "Calm"){
        Cat += 1;
        Fish += 1;
        Rodent += 1;
    }

    var ContentResult = document.createElement("div");

    if (Dog > Cat && Dog > Bird && Dog > Fish && Dog > Horse && Dog > Rodent){
        Result.textContent = "A dog!";
        Comment.textContent  = "Allow me to introduce you to the loyal and playful dog, a beloved member of many families, ready to shower you with love and bring endless joy and companionship.";
    }
    else{
        if (Cat > Bird && Cat > Fish && Cat > Horse && Cat > Rodent){
            Result.textContent  = "A cat!";
            Comment.textContent  = "Meet the charming and independent cat, a furry companion known for its grace, agility, and affectionate nature.";
        }
        else{
            if (Bird > Fish && Bird > Horse && Bird > Rodent){
                Result.textContent  = "A bird!";
                Comment.textContent  = "Say hello to the colorful and melodious bird, a feathered friend that will bring vibrant beauty and delightful tunes to your home.";
            }
            else{
                if (Fish > Horse && Fish > Rodent){
                    Result.textContent  = "A fish!";
                    Comment.textContent  = "Behold the serene and graceful fish, a captivating aquatic creature that adds a touch of tranquility and mesmerizing beauty to any tank or pond.";
                }
                else{
                    if (Horse > Rodent){
                        Result.textContent  = "A horse!";
                        Comment.textContent  = "Meet the majestic and powerful horse, a magnificent companion that embodies elegance, intelligence, and the spirit of adventure, ready to forge unforgettable bonds and embark on exciting journeys.";
                    }
                    else{
                        Result.textContent  = "A rodent!";
                        Comment.textContent  = "Introducing you to the small and curious rodent, a delightful and inquisitive friend that will bring a dash of energy and cuteness to your daily life.";
                    }
                }
            }
        }
    }

    ContentResult.append(Result, Comment);
    var myResult = document.getElementById("MyResult");
    myResult.removeChild(myResult.lastChild);
    myResult.appendChild(ContentResult);
    console.log(ContentResult);
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