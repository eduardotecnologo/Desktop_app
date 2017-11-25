const electron = require('electron');
const url      = require('url');
const path     = require('path');
const app      = electron.app;
const dialog   = electron.dialog;

let win
app.on('ready', function(){
  win = new electron.BrowserWindow({
    width: 1300,
    height: 1000
  });
  // win.loadURL("http://ctksolucoes.com.br/")Render app web
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:'
  }));
  //Janela de informação

  win.webContents.openDevTools();
  win.on('closed', function(){
    console.log('Té mais manolo!!')//Evento com saída no console 
  });
  //Caixa de Dialogos
  // dialog.showMessageBox(win, {
  //   type: 'none',
  //   message: 'Opaaa!!!',
  //   title: 'AVISO!',
  //   buttons: []
  // });
  // dialog.showOpenDialog(win, {
  //   title: 'Selecione um arquivo!',
  //   buttonLabel: 'Selecionar!'
  // });
  //Error Box
  // dialog.showErrorBox('Title Error', 'Contet')
  dialog.showOpenDialog(win, {
    title: 'Salvar Arquivo',
    buttonLabel: 'Salvar'
  })
});
app.on('before-quit', function(){
  console.log('Fui manééé!!!')
});