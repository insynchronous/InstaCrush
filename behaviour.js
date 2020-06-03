const remote = require("electron").remote;


function minimize() {
  var window = remote.getCurrentWindow();
  window.minimize();
}

function close_win(){
    var window = remote.getCurrentWindow();
    window.close();
}
