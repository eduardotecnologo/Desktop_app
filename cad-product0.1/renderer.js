// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
let loki = require ('lokijs')
let db = new loki('db.json')
/* let clientes = db.addCollection('clientes')

clientes.insert({
    nome:'Eduardo Alexandre',
    email:'eduardotecnologo@hotmail.com'
})
db.save() */
function ready(fn){
    if(document.readyState != 'loading'){
        fn()
    }else{
        document.addEventListener('DOMContentLoaded', fn)
    }
}
ready(function(){
    
})