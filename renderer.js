const app = require('electron').remote.app;

document.getElementById('app-ver-id').innerHTML = app.getVersion();
