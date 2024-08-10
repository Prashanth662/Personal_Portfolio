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
