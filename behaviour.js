const remote = require("electron").remote;

function minimize() {
  var window = remote.getCurrentWindow();
  window.minimize();
}

function close_win(){
    var window = remote.getCurrentWindow();
    window.close();
}

function remotePythonExecution(){
    searchUsername = document.getElementById("username").value;
    console.log(searchUsername);
    const {PythonShell} = require("python-shell");
    var shell = new PythonShell('backend.py', { mode: 'text', args: [searchUsername] });
    shell.on('message', function (message) {
     console.table(message);
    });
}
