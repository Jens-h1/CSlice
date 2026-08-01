const uploadButton = document.getElementById("uploadButton");
const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("fileName");


uploadButton.onclick = function(){

fileInput.click();

};



fileInput.onchange = function(){

if(fileInput.files.length > 0){

fileName.innerHTML =
fileInput.files[0].name;

}

};
