let myImage = document.querySelector('img');
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images/firefox-icon.jpg'){
        myImage.setAttribute('src','images/firefox2.jpg');
    }else{
        myImage.setAttribute('src','images/firefox-icon.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUseName(){
    let myName = prompt('请输入你的名字');
    if(!myName || myName === null){
        setUseName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.innerHTML = 'Mozilla酷毙了，' + myName;
    }
}
if(!localStorage.getItem('name')){
    setUseName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla酷毙了, ' + storedName;
}
myButton.onclick = function(){
    setUseName();
}