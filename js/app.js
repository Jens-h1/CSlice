const slider = document.getElementById("infillSlider");
const value = document.getElementById("infillValue");


slider.oninput = function(){

value.innerHTML = this.value + "%";

};
