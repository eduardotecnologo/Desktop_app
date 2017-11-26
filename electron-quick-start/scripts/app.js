// import { spawn } from "child_process";

// function onClick(){
//     alert('Opa!!!')
// }
function generate(){
    var inputTxt = document.getElementById('txt');
    if(!inputTxt.value){
        alert('Please input something');
        return;
    }
    var base64 = btoa(inputTxt.value);
    var span = document.createElement('span');

    span.innerHTML = base64;
    var result = document.getElementById('result');
    result.appendChild(span);
}
function decode(){
    var inputTxt = document.getElementById('txt');
    if(!inputTxt.value){
        alert('Please input something');
        return;
    }
    var resultBase64 = atob(inputTxt.value);
    var span = document.createElement(span);
    var result = document.getElementById('result');
    span.innerHTML = resultBase64;
    result.appendChild(span);
}