function logMessage() {
    console.log('Called logMessage()')
}

document.getElementById('logMessage').addEventListener('click', () => {
    logMessage()
})

const informationBtn = document.getElementById('information-dialog')

informationBtn.addEventListener('click', (event) => {
  window.ipc.sendShowDialogMessage()
})

/*
ipcRenderer.on('information-dialog-selection', (event, index) => {
  let message = 'You selected '
  if (index === 0) message += 'yes.'
  else message += 'no.'
  document.getElementById('info-selection').innerHTML = message
})
*/

function showHelloWorld() {
  document.getElementById("helloworld").innerHTML = "Hello World";
}
//document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('clickme')
    .addEventListener('click', showHelloWorld);
//});
