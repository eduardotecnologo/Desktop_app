$(document).ready(function(){
    const app = require('electron').remote.app;
    const { remote } = require('electron');

    $('#btnMinus').click(function(){
        remote.BrowserWindow.getFocusedWindow().minimize();
    });
    $('#btnPlus').click(function(){
        if(remote.BrowserWindow.getFocusedWindow().isMaximized()){
            remote.BrowserWindow.getFocusedWindow().unmaximize();
        }else{
            remote.BrowserWindow.getFocusedWindow().maximize();
        }
        
    });
    $('#btnCancel').click(function(){
        remote.BrowserWindow.getFocusedWindow().close();
    });
    
});