// const stala = "Bartek"
// console.log(stala)
// stala = "Kopytko"
// console.log(stala)
//============================================================================================


// zmienna = "kopytko1"
// console.log(zmienna)
// zmienna = "kopytko2"
// console.log(zmienna)
// funkcja()



// funkcja()
// function funkcja(){
//     let zmienna = "kopytko1"
//     console.log("funkcja")
// }
// console.log(zmienna)

// var zmienna

//============================================================================================

// TYPY ZMIENNYCH





// POBIERANIE DANYCH VALUE Z WPISANYCH 


document.body.innerHTML += "Podaj imię: <br>"
document.body.innerHTML += '<input type="text" id="name" name="name"><br>'
document.body.innerHTML += "Podaj nazwisko: <br>"
document.body.innerHTML += '<input type="text" id="surname" name="surname"><br>'
document.body.innerHTML += "Podaj datę urodzenia: <br>"
document.body.innerHTML += '<input type="date" id="data" name="data"><br>'
document.body.innerHTML += '<br><button onclick="funkcja()">przycisk</button><br>'
document.body.innerHTML += '<div id="wypluwacz">tu pluje</div>'


function funkcja(){
    name = document.getElementById("name").value
    surname = document.getElementById("surname").value
    data = document.getElementById("data").value
    wypluwacz = document.getElementById("wypluwacz")
    wypluwacz.innerHTML = name + "<br>" + surname + "<br>" + data + "<br>"
}



//===========================================================================================================
// WARUNKI

console.log(1===1)
console.log(1==1)