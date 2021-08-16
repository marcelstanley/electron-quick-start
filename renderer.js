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

document.getElementById('compBtn').addEventListener('click', compress);
function compress() {
  let original = document.getElementById("origText").value;
  let compressedText = window.brotli.compress(original);
  console.log("Compressed: ", compressedText.toString('base64'));
  document.getElementById("compressed").innerHTML = compressedText.toString('base64');
}

document.getElementById('decBtn').addEventListener('click', decompress);
function decompress() {
  let text = window.brotli.compress(compressedText);
  console.log("Decompressed: ", text.toString('utf-8'));
  document.getElementById("decompressed").innerHTML = text.toString('utf-8');
}

document.getElementById('brotliBtn').addEventListener('click', testBrotli);
function testBrotli() {
  console.log("////////////////////////////////////////////////");
  console.log(">> Test from RENDERER LACKS PROPER ENCONDING <<<");
  text = "Mussum Ipsum, cacilds vidis litro abertis."
  text = window.brotli.compress(text);
  console.log("Compressed: ", text.toString('base64'));
  text = window.brotli.decompress(text);
  console.log("Uncompressed: ", text.toString('utf-8'));
  console.log("////////////////////////////////////////////////");
}
