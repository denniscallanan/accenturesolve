
var id = 1;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


function setButtonClick(elem){
    console.log(this);
    if(elem.style.opacity == "1"){
        elem.style.opacity = "0.5";
    }else{
        elem.style.opacity="1.0";
    }
}

function clickedFace(){

    console.log("clicking face");

    var newid =  parseInt(getRandomArbitrary(1,4));
    while(newid == id)
        newid =  parseInt(getRandomArbitrary(1,4));
    id = newid;

    document.getElementById("imgdesk").style="height:300px;background: url('../static/images/office"+newid+".jpg') center / cover;";

    return true;

}