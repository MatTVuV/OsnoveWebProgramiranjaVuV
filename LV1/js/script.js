function generirajBoju()
{
   var sZnakovi = '0123456789ABCDEF';
   var sBoja = '#';
for (var i = 0; i < 6; i++)
{
   sBoja += sZnakovi[Math.floor(Math.random() * 16)];
}
   return sBoja;
}

var prvaGodina = document.getElementById("prvaGodina");
var drugaGodina = document.getElementById("drugaGodina");
var trecaGodina = document.getElementById("trecaGodina");

document.getElementById('godina-1').style.color = generirajBoju();
document.getElementById('godina-2').style.color = generirajBoju();
document.getElementById('godina-3').style.color = generirajBoju();

var oPredmeti = document.getElementsByClassName('predmet');
 for (var i = 0; i < oPredmeti.length; i++)
 {
    oPredmeti[i].style.marginLeft = '25px';
 }
 
 function PrikaziRacunarstvo()
 {
    var prik = document.getElementById('racunarstvo');
    prik.style.display = "block";
 }
 
 function SakrijRacunarstvo()
 {
    var sakr = document.getElementById('racunarstvo');
    sakr.style.display = "none";
 }

 function PrikaziSakrij()
 {
    var priksak = document.getElementById('racunarstvo');
    if(priksak.style.display == "block")
    {
        SakrijRacunarstvo();
    }
    else
    {
        PrikaziRacunarstvo();
    }
 }

 
 function PromijeniFont()
 {
    var fontovi = ["Arial", "Serif", "Sans-serif", "Cursive", "Monospace"];
    var semestri = document.getElementsByClassName("semestar");
    for(var i = 0; i < semestri.length; i++)
    {
        semestri[i].style.fontFamily = fontovi[Math.floor(Math.random() * fontovi.length)];
    }
 }

 function PovecajSliku()
 {
    var trenutnih = parseInt(document.getElementById("logo").clientHeight);
    var trenutniw = parseInt(document.getElementById("logo").clientWidth);
    
    document.getElementById("logo").style.height = (trenutnih + 6) + "px";
    document.getElementById("logo").style.width = (trenutniw + 6) + "px";
 }