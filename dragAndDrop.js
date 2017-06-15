//this is the java script file. 
//name : dragandDrop.js

// Code goes here

var frndArr = document.getElementsByClassName('divContr');

for(var i=0; i < frndArr.length ; i++){
  	frndArr[i].addEventListener('dragstart',function(event){
  		event.dataTransfer.setData('id', this.id);
	});

}
document.getElementById('divSecond').addEventListener('dragover', function(event) {
	event.preventDefault();
});

document.getElementById('divSecond').addEventListener('drop', function(event) {
	var id = event.dataTransfer.getData('id'),
		imgSrc = document.getElementById('img_'+id).getAttribute('src'),
		imgCaption = document.getElementById('lbl_'+id).innerHTML,
		imgHTML = '<div id="imgCntr_'+id+'"><img src="'+imgSrc+'" style="width:100px;" />' + imgCaption + '<span style="color: red; font-size: 150%; padding: 2px; margin-left: 10px; border: 1px solid; cursor: pointer;" onclick="removeImg(\''+id+'\')">X</span></div>';

		this.insertAdjacentHTML('beforeend', imgHTML);
});

function removeImg(id) {
	document.getElementById('imgCntr_'+id).remove();
}