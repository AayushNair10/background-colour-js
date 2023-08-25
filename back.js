var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var head=document.querySelector("h3");
var body=document.getElementById("grad")
function color(){
	body.style.background ="linear-gradient(to right, "
    +color1.value
    +", "
    +color2.value
    +")"; 
    head.textContent=body.style.background+";";
}
color1.addEventListener("click",color);
color2.addEventListener("click",color);
