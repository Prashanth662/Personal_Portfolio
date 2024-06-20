const titles = ["Full Stack Web Developer", "Backend Developer", "Frontend Developer"];
        const titleElement = document.getElementById("title");
        let currentTitleIndex = 0;
        let currentCharIndex = 0;

        function showNextCharacter() {
            if (currentTitleIndex < titles.length) {
                if (currentCharIndex < titles[currentTitleIndex].length) {
                    titleElement.textContent += titles[currentTitleIndex].charAt(currentCharIndex);
                    currentCharIndex++;
                    setTimeout(showNextCharacter, 100); 
                } else {
                    currentCharIndex = 0;
                    currentTitleIndex++;
                    if (currentTitleIndex < titles.length) {
                        setTimeout(() => {
                            titleElement.textContent = ''; 
                            showNextCharacter();
                        }, 1000);
                    }
                }
            }
        }

        window.onload = showNextCharacter;

function btech(){
    var btech = document.getElementById("btech");
    if(btech.style.display === "none"){
        btech.style.display = "block";
    }
    else{
        btech.style.display = "none";
    }
}

function inter(){
    var inter = document.getElementById("inter");
    if(inter.style.display=== "none"){
        inter.style.display = "block";
    }
    else{
        inter.style.display = "none";
    }
}

function ssc(){
    var ssc = document.getElementById("ssc");
    if(ssc.style.display=== "none"){
        ssc.style.display = "block";
    }
    else{
        ssc.style.display = "none";
    }
}