
var x = false;
const Linha1 = document.getElementById("Linha1");
const Linha2 = document.getElementById("Linha2");
const Linha3 = document.getElementById("Linha3");



function Animacao(){
	if(x==false){
		Linha1.style.animation="Linha1_Animacao 2s normal forwards";
		Linha2.style.animation="Linha2_Animacao 2s normal forwards";
		Linha3.style.animation="Linha3_Animacao 2s normal forwards";
    
    Linha1.addEventListener("animationend", function(){
      this.style.animation="none";
      this.style.translate="0px 22px";
      this.style.rotate="45deg";
    });
        Linha2.addEventListener("animationend", function(){
      this.style.animation="none";
      this.style.transform="scale(0)";
      this.style.opacity="0";
    });
        Linha3.addEventListener("animationend", function(){
      this.style.animation="none";
      this.style.translate="0px -22px";
      this.style.rotate="135deg";
    });
		x=true
	}
	else{
		Linha1.style.animation="Linha1_Animacao 2s 1 reverse forwards";
		Linha2.style.animation="Linha2_Animacao 2s 1 reverse forwards";
		Linha3.style.animation="Linha3_Animacao 2s 1 reverse forwards";
    
        Linha1.addEventListener("animationend", function(){
      this.style.animation="none";
      this.style.translate="0px 0px";
      this.style.rotate="0deg";
    });
        Linha2.addEventListener("animationend", function(){
      this.style.animation="none";
      this.style.transform="scale(1)";
      this.style.opacity="1";
    });
        Linha3.addEventListener("animationend", function(){
      this.style.animation="none";
      this.style.translate="0px 0px";
      this.style.rotate="0deg";
    });
		x=false	
	}
}
