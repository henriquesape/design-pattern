const photoFile = document.getElementbyId('photo-file')
let photoPreview = document.getElementById('photo-preview')
let image;
let photoName;


// Select & Preview Image
document.getElementById('select-image')
.onclick = function(){ 

}

window.addEventListener('DOMContentLoaded'), () =>{

}

// Selection tool
const selection = document.getElementById('selection-tool')

let startX, startY, relativeStartX, relativeStartY
endX, endY, relativeEndX, relativeEndY;
let startSelection = false;
const events = {

}


Object.keys(events)
.forEach(eventName => {
    //addEventListener('mouseover', events.mouseover)
    photoPreview.addEventListener(eventName, events[eventName])

})



//Canvas

let Canvas= document.createElement('canvas')
let ctx = canvas.getContext('2d')
function onLoadImage(){

}

// Cortar Imagem
const cropButton = document.getElementById('crop-image')
cropButton.onclick = () => {

}


// Download
const downloadButton = document.getElementById('download')
downloadButton.onclick = function(){
    const a = document.createElement('a')
    a.download = photoName + '-cropped.png';
    a.href = canvas.toDataURL();
    a.click()
}