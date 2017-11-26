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
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(span);
}
function decode(){

}