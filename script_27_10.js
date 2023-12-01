f = document.getElementById("form");
w = document.getElementById("wypluwacz");
t = document.getElementById("tabela")
p = document.getElementById("plec")
b = "<br>";

f.name.addEventListener("change", function(e) { walid(this); });
f.surname.addEventListener("change", function(e) { walid(this); });
f.dob.addEventListener("change", function(e) { Data(this); });
f.dob.addEventListener("change", function(e) { pesel(this); });

function walid(v) {
    if(v.value.length >3) {
 w.innerHTML += v.name + ":";
 w.innerHTML += v.value +b;
 v.style.color="#fff";
 v.style.backgroundColor= "blue";
    } else {
        v.style.color="#fff";
        v.style.backgroundColor= "red";
    }
} 


function Data(d){
    dzis = new Date()
    datka = new Date (d.value)
    nowaData = datka - dzis
    nowaDataH = Math.floor(nowaData / (60*60*1000))
    nowaDataD = Math.floor(nowaData / (24*60*60*1000))+1
    nowaDataM = Math.floor(nowaData / (24*60*60*1000*31))+1
    nowaDataR = Math.floor(nowaData / (24*60*60*1000*365.25))+1
    datkaW = "H:" + nowaDataH + "D:" + nowaDataD + "M:" + nowaDataM + "R:" + nowaDataR
 
}


function pesel(da){
    let datka = da.value
    ck = Array(1,3,7,9,1,3,7,9,1,3)
    plec = f.gender.value
    pesel = datka[2]+datka[3]+datka[5]+datka[6]+datka[8]+datka[9]
    pesel += Math.floor(Math.random()*10000)
    lk = pesel[0]*ck[0]
    lk += pesel[1]*ck[0]
    sk = 0
    
    for(i=0;i < ck.length;i++){
        sk = ck[i]*(pesel[i]*1) + sk
        console.log(Math.floor(Math.random()*10000))
}
sk = ""+sk
sk = 10 - (sk[1]*1)
pesel += sk

    tabela(da,pesel)
}



function tabela(a,b){
    wiersz = t.insertRow(-1)
    w1 = wiersz.insertCell(0)
    w1.innerHTML = a.name
    w2 = wiersz.insertCell(1)
    w2.innerHTML = a.value
    w3 = wiersz.insertCell(2)
    w3.innerHTML = "plec: " + b
}