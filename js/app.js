const slider = document.getElementById("infillSlider");
const number = document.getElementById("infillNumber");


slider.oninput = function(){

number.textContent = this.value;

};



const patterns = document.querySelectorAll(".pattern");


patterns.forEach(pattern => {

pattern.onclick = function(){

patterns.forEach(p => 
p.classList.remove("selected")
);


this.classList.add("selected");

};

});
