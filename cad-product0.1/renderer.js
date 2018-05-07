// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
let loki = require ('lokijs')
let db = new loki('db.json')
let clientes = db.addCollection('clientes')
/* 
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
    document.querySelector('#salvar').addEventListener('click', function(e){
        e.preventDefault()
        let data = {
            nome:document.querySelector('#nome').value,
            tel:document.querySelector('#tel').value,
            bairro:document.querySelector('#bairro').value,
            servico:document.querySelector('#servico').value,
            produto:document.querySelector('#produto').value,
            obs:document.querySelector('#obs').value
        }
        clientes.insert(data)
        db.save()
        alert('Salvo com Sucesso!')
        document.querySelector('#cad-cliente').reset()
    })
})