function velicinaTeksta(v){
    document.getElementById("quoteText").style.fontSize = v + "px";
}

function razmakSlova(v){
    document.getElementById("quoteText").style.letterSpacing = v + "px";
}

function debljinaObruba(v){
    document.querySelector(".quote").style.borderWidth = v + "px";
}

function prikaziDatumHR(){
    let el=document.getElementById("datumHR");
    el.hidden=!el.hidden;
    let mjeseci = [
        "siječnja", "veljače", "ožujka", "travnja", "svibnja", "lipnja",
        "srpnja", "kolovoza", "rujna", "listopada", "studenoga", "prosinca"
    ];

    let d = new Date();

    document.getElementById("datumHR").innerHTML =
        d.getDate() + ". " +
        mjeseci[d.getMonth()] + " " +
        d.getFullYear() + ". " +
        d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds();
}

let skraceniTekst = "Future isn't waiting…";
let cijeliTekst = "...we're building it.";

function pokaziCijeli(){
    document.getElementById("quoteText").innerText = cijeliTekst;
}

function pokaziMali(){
    document.getElementById("quoteText").innerText = skraceniTekst;
}




