function funkcja() {

    imie = document.getElementById("imie").value
    nazwisko = document.getElementById("nazwisko").value
    data = document.getElementById("data").value
    plec = document.getElementById("gender").value
    dzieci = document.getElementById("dzieci").value
    rozmiar = document.getElementById("rozmiar").value
    poziom = document.getElementById("level").value
    kolor = document.getElementById("color").value
    wypluwacz = document.getElementById("wypluwacz")
    wali = Walidator(imie,2)
    wali = Walidator(nazwisko,3)
    wali = Walidator(data,  10)
    wali = Walidator(nazwisko,3)



    var dane1 = ['imie','nazwisko','data','dzieci','rozmiar','poziom','kolor']
    var dane2 = [imie, nazwisko, data, dzieci, rozmiar, poziom, kolor]
    if(imie.length <= 3) {error = true} else {error = false}
    if(error) {document.getElementById}

    for(var i = 0; i < dane1.length; i++){
        console.log(dane1[i] + ":" + dane2[i])
    }

    Walidator(imie,2)
    jakaZmienna = "ilość znaków"
    jakaZmienna += "imie"
    wali = Walidator(nazwisko,3)
    wypluwacz.innerHTML = "Ilość znaków" + jakaZmienna + wali

    function plujka(jakaZmienna, Walidator) {
        jakaZmiennaArray += jakaZmienna
        wypluwacz.innerHTML = "Ilość znaków w imieniu: " + Walidator(name,2)
        plujka(jakaZmiennaArray)
    
    }

    function Walidator(imie,ile){
        if(imie.length < ile) {return true;} else {return false;}
}
}


