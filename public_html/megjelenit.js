window.addEventListener("load",init);

function $(nev) {
    return document.querySelectorAll(nev);
}

var kep1= {
    eleresiut:"kepek/1.jpg",
    cim:"1. képcím",
    leiras:"1. képleírás"
    };
var kep2= {
    eleresiut:"kepek/2.jpg",
    cim:"2. képcím",
    leiras:"2. képleírás"
    };
var kep3= {
    eleresiut:"kepek/3.jpg",
    cim:"3. képcím",
    leiras:"3. képleírás"
    };

var kepTomb = [kep1,kep2,kep3];

var index = 0;

function init(){
    for (var i = 0; i < kepTomb.length; i++) {
    var elem='<div><h3></h3> <img id="'+i+'" src="" alt=""/><p></p></div>';
    $("article")[0].innerHTML+=elem;
}

    var kepElemTomb=$("article div img");
    var cimElemTomb=$("article div h3");
    var leirasElemTomb=$("article div p");
    
    
    
    for (var i = 0; i < kepElemTomb.length; i++){
        kepElemTomb[i].src=kepTomb[i].eleresiut;
        cimElemTomb[i].innerHTML=kepTomb[i].cim;
        leirasElemTomb[i].innerHTML=kepTomb[i].leiras;
    }
    for (var i = 0; i < kepElemTomb.length; i++) {
        kepElemTomb[i].addEventListener("click",kepCsere);
    }
    $("bal").addEventListener("click",elozo);
    $("jobb").addEventListener("click",next);
}
function elozo() {
    index--;
    if(index<0){
        index=kepTomb.length-1;
    }
    $("#nagykepTarolo img")[0].src=kepTomb[index].eleresiut;
    $("#nagykepTarolo h3")[0].innerHTML=kepTomb[index].cim;
    $("#nagykepTarolo p")[0].innerHTML=kepTomb[index].leiras;
}
function next() {
    index++;
    if(index>kepTomb.lenght-1){
        index=0;
    }
    $("#nagykepTarolo img")[0].src=kepTomb[index].eleresiut;
    $("#nagykepTarolo h3")[0].innerHTML=kepTomb[index].cim;
    $("#nagykepTarolo p")[0].innerHTML=kepTomb[index].leiras;
}

function kepCsere() {
    var i = this.id;
    $("#nagykepTarolo img")[0].src=kepTomb[i].eleresiut;
    $("#nagykepTarolo h3")[0].innerHTML=kepTomb[i].cim;
    $("#nagykepTarolo p")[0].innerHTML=kepTomb[i].leiras;
};