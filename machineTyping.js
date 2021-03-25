const box = document.querySelector(".typing");
const text = [
    "Cześć! Jak tam?!!", 
    "Mam na imię Marcin, jestem super ziomkiem, serio.",
    "Jedyne czego nie lubię to czekoladowy budyń. ^ Obrzydliwość!"
];
let wordIndex = 0;
let oldTime = 0;
let textIndex = 0;
const speed = 60; // czym większa wartość tym wolniejszy typing (higher value means slower typing)
let activeDomElement = box;

const typing = (newTime) => {
    if(newTime - oldTime > speed){
        const letter = text[textIndex].substr(wordIndex, 1);
        if(wordIndex === text[textIndex].length){
            if(textIndex === text.length - 1){
                return;
            }
            return setTimeout(()=> {
                box.textContent = "";
                textIndex++;
                wordIndex = 0; 
                requestAnimationFrame(typing);   
            },2500) //czas, po którym znika dany index z tablicy text (time when your index parameter disappear from the list text)
            
        } else if (wordIndex === 0 || letter === "^"){
            const p = document.createElement('p');
            box.appendChild(p);
            activeDomElement = p;
        };
        if(!(letter === "^")){
            activeDomElement.textContent += letter;
        }

        oldTime = newTime;
        wordIndex++;
    }
    requestAnimationFrame(typing);
}
typing()

//THIS CODE WAS WRITTEN WITH A HUGE HELP OF STACKOVERFLOW.COM community - i wanna thank you so much lads!