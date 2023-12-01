// document.body.innerHTML += "Podaj imię: <br>"
// document.body.innerHTML += '<input type="text" id="name" name="name"><br>'
// document.body.innerHTML += "Podaj nazwisko: <br>"
// document.body.innerHTML += '<input type="text" id="surname" name="surname"><br>'
// document.body.innerHTML += "Podaj datę urodzenia: <br>"
// document.body.innerHTML += '<input type="date" id="data" name="data"><br>'
// document.body.innerHTML += '<br><button onclick="funkcja()">przycisk</button><br>'
// document.body.innerHTML += '<div id="wypluwacz">tu pluje</div>'


// function funkcja(){
//     name = document.getElementById("name").value
//     surname = document.getElementById("surname").value
//     data = document.getElementById("data").value
//     wypluwacz = document.getElementById("wypluwacz")
//     wypluwacz.innerHTML = name + "<br>" + surname + "<br>" + data + "<br>"
// }



function funkcja() {
    name = document.getElementById("name").value;
    surname = document.getElementById("surname").value;
    dob = document.getElementById("date").value;
    gender = document.getElementById("gender").value;
    children = document.getElementById("children").value;
    shoe_size = document.getElementById("shoe_size").value;
    color = document.getElementById("color").value;
    var error;
    error = { name:false,surname:false };
    rexNumber = /^[0-9]+$/.test(name);
    rexTekst = /^[a-zA-Z]+$/.test(name);
    rexTekstNumber = /^[a-z0-9]+$/.test(name);


    if(name.length <= 3 ) { error["name"] =  true; }
    if(surname.length <= 3) {  error["surname"] =  true;}

    

console.log("rexNumber " + rexNumber);
console.log("rexTekst " + rexTekst);
console.log("rexTekstNumber " + rexTekstNumber);
console.log(error);

}
