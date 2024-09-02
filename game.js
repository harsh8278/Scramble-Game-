
const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn')
let play = false;
let newWords = "";
let randomWords = "";
let sWords = ['python', 'javascript', 'c++', 'php', 'java', 'c#', 'html', 'css', 'reactjs', 'angular', 'swift', 'android', 'sql']


const createNewWords = () => {
    let Num = Math.floor(Math.random() * sWords.length);
    let newTemSwords = sWords[Num];
    return newTemSwords;
}

const scrambleWords = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i];

        let j = Math.floor(Math.random() * (i + 1))

        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}


btn.addEventListener('click', function () {

    if (!play) {
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        randomWords = scrambleWords(newWords.split("")).join("");
        msg.innerHTML = `Guess the Word: ${randomWords}`;
    }

    else {
        let tempWord = guess.value;
        if (tempWord === newWords) {
            // console.log('correct');
            play = false;
            msg.innerHTML = `Awesome It's Correct. it is ${newWords}`;
            btn.innerHTML = "Start Again"
            guess.classList.toggle('hidden');
            guess.value = "";
        }

        else {
            // console.log('incorrect');
            msg.innerHTML = `Sorry It's not  Correct. plz try again ${randomWords}`;
        }
    }
})