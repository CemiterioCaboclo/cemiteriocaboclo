function scrollToH1() {
    document.getElementById('titulo1').scrollIntoView({ behavior: 'smooth' });
}

function scrollToStart() {
    document.getElementById('navbar').scrollIntoView({ behavior: 'smooth' });
}


function fecharCards() {
    document.getElementById("card1").style.display = "none"
    document.getElementById("card2").style.display = "none"
    document.getElementById("card3").style.display = "none"
    document.getElementById("card4").style.display = "none"
    document.getElementById("card5").style.display = "none"
    document.getElementById("card6").style.display = "none"
    document.getElementById("card7").style.display = "none"
    document.getElementById("card8").style.display = "none"
}

function abrirCard(num_card){
    if (document.getElementById("card"+num_card).style.display == "block"){
        document.getElementById("card"+num_card).style.display = "none"  
    }
    else{
        fecharCards()
        document.getElementById("card"+num_card).style.display = "block"  
        var div = document.getElementById("card"+num_card);
        div.scrollTop = 0;
    }
}

function dropDown(){
    if (document.getElementById("dropDown").innerHTML == "▲ Cemitério caboclo"){
        document.getElementById("dropDown").innerHTML = "▼ Cemitério caboclo"
    }
    else {
        document.getElementById("dropDown").innerHTML = "▲ Cemitério caboclo"
    }
}

function fecharArtigos() {
    document.getElementById("art1").style.display = "none"
    document.getElementById("art2").style.display = "none"
    document.getElementById("art3").style.display = "none"
}


function abrirArtigo(num_art){
    if (document.getElementById("art"+num_art).style.display == "block"){
        document.getElementById("art"+num_art).style.display = "none"  
    }
    else{
        fecharArtigos()
        document.getElementById("art"+num_art).style.display = "block"  
        var div = document.getElementById("art"+num_art);
        div.scrollTop = 0;
    }
}