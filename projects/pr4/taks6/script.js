const phrase = "сьонодні гарний день";
let index = 0; 

function typeWriter() {
    if (index < phrase.length) {
        document.getElementById('output').innerText += phrase.charAt(index); 
        index++; 
    } else {
        clearInterval(intervalId); 
    }
}

document.getElementById('startButton').addEventListener('click', function() {
    index = 0; 
    document.getElementById('output').innerText = ''; 
    intervalId = setInterval(typeWriter, 100); 
});
