console.log("Je suis la console !");

/*
function bienvenue(){
    alert("Ceci est une fenêtre pop-up!");
    setTimeout(bienvenue, 1000);
    bienvenue();
    setInterval(bienvenue, 5000);
}*/

var minuscule = "abcdefghijklmnopqrstuvwxyz";
var majuscule = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var chiffre = "0123456789";
var carspecial = "%!&*^()#$:";

function generate(){
    var myForm = document.forms.ajoutPWD;
    var listecar ="";
    //console.log(myForm);
    
    var newLine = document.createElement("tr");
    var col1 = document.createElement("td");
    var col2 = document.createElement("td");
    var col3 = document.createElement("td");
    var col4 = document.createElement("td");
    var col5 = document.createElement("td");
    
    if (myForm.elements["lowercase"].checked){
        listecar+=minuscule;
    }
    if (myForm.elements["uppercase"].checked){
        listecar+=majuscule;
    }
    if (myForm.elements["number"].checked){
        listecar+=chiffre;
    }
    if (myForm.elements["symbol"].checked){
        listecar+=carspecial;
    }

    var goodpassword = true;

    while (goodpassword){
        var password ="";
        for (var i=1;i<= myForm.elements["numberchar"].value; i++){
            var randomNumber = Math.floor(Math.random() * listecar.length);
            password += listecar.substring(randomNumber,randomNumber +1);
        }
        console.log(password);
        var goodminuscule = false;
        var goodmajuscule = false;
        var goodnumber = false;
        var goodsymbol = false;

        for (var i=0; i <= minuscule.length; i++){
            if (password.indexOf(minuscule[i]) != -1){
                goodminuscule = true;
            }
        }
        for (var i=0; i <= majuscule.length; i++){
            if (password.indexOf(majuscule[i]) != -1){
                goodmajuscule = true;
            }
        }
        for (var i=0; i <= chiffre.length; i++){
            if (password.indexOf(chiffre[i]) != -1){
                goodnumber = true;
            }
        }
        for (var i=0; i <= carspecial.length; i++){
            if (password.indexOf(carspecial[i]) != -1){
                goodsymbol = true;
            }
        }

        if(goodminuscule && goodmajuscule && goodnumber && goodsymbol){
            goodpassword = false;
        }
    }
    //console.log(password);

    col1.textContent = myForm.elements["numberchar"].value;
    col2.textContent = myForm.elements["validitydate"].value;
    col3.textContent = myForm.elements["category"].value;
    col4.textContent = myForm.elements["site"].value;
    col5.textContent = password;

    newLine.append(col1,col2,col3,col4,col5);

    var myTable = document.getElementById("mytab");
    myTable.appendChild(newLine);
}