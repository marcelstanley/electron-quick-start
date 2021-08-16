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

function showHelloWorld() {
  document.getElementById("helloworld").innerHTML = "Hello World!";
}

document.getElementById('showHWBtn')
    .addEventListener('click', showHelloWorld);
