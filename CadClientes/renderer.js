var loki = require('lokijs');
var db = new loki('db.json');
var clientes = db.addCollection('clientes');

/* //Test
clientes.insert({
    name: 'Eduardo Alexandre',
    email: 'eduardotecnologo@hotmail.com'
});
db.save() */
function ready(fn){
    if(document.readyState != 'loading'){
        fn();
    }else{
        document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(function(){
    document.querySelector('#salvar').addEventListener('click', function(e){
        e.preventDefault();
        alert('ok Manolo');
    })
})