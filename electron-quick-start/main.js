const electron = require('electron');
const url      = require('url');
const path     = require('path');
const app      = electron.app;
const dialog   = electron.dialog;
const Menu     = electron.Menu; 
const MenuItem = electron.MenuItem;

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

  // win.webContents.openDevTools();
  // win.on('closed', function(){
  //   console.log('Té mais manolo!!')//Evento com saída no console 
  // });
  // //Caixa de Dialogos
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
  // Salvar arquivo
  // dialog.showOpenDialog(win, {
  //   title: 'Salvar Arquivo',
  //   buttonLabel: 'Salvar'
  // })

  // Template Menu
  // let menuTemplate = [
  //   {
  //     label: 'Menu 1'
  //   },
  //   {
  //     label: 'Menu 2',
  //     submenu: [
  //       {
  //         label: 'Hello',
  //         // role: 'Sub' //Role ignora a propriedade de Click
  //         click: function(item, win, event){
  //           dialog.showMessageBox(win, {
  //             title: 'Opaaaa!!',
  //             message: 'Opaaa SubMenu'
  //           })
  //         }
  //       }
  //     ]
  //   }
  // ];
 

//   const menu = new Menu();
//   menu.append(new MenuItem({
//     label: 'Menu 1'
//   }));
//   menu.append(new MenuItem({
//     label: 'Menu 2',
//     click: function(){
//       dialog.showMessageBox(win, {
//         type: 'none',
//         message: 'Koé manolo!!!',
//         title: 'Avisos'
//       })
//     }
//   }));
//    // // const menu = Menu.buildFromTemplate(menuTemplate);
//   Menu.setApplicationMenu(menu);

 });
// app.on('before-quit', function(){
//   console.log('Fui manééé!!!')
// });