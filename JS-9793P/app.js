let count = 0;

document.getElementById('incrementButton').addEventListener('click', function() {
    count++;
    updateCounterText();
});

document.getElementById('resetButton').addEventListener('click', function() {
    count = 0;
    updateCounterText();
});


function updateCounterText() {
    document.getElementById('counter').innerText = 'Dikkatin dağıtma, dersine odaklan! Telefona ' + count + ' kez baktın. Fark etmedim sanma!!!';
}

    const audio = document.getElementById('background-audio');
    const incrementButton = document.getElementById('incrementButton');
    const resetButton = document.getElementById('resetButton');
    let timeoutId; 

    function playMusic() {
        if (audio.paused) {
            audio.currentTime = 0; 
            audio.play() 
                .then(() => {
                    timeoutId = setTimeout(() => {
                        audio.pause(); 
                    }, 10000); 
                })
                .catch(function(error) {
                    console.log("Müzik çalma hatası:", error);
                });
        }
    }

    incrementButton.addEventListener('click', playMusic);

    resetButton.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0; 
        clearTimeout(timeoutId); 
    });