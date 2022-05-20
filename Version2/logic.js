const wordDiv = document.querySelector('.word-div');
const letterDiv = document.querySelector(".letter-div")
const noticeDiv = document.querySelector(".notice-div")

const animals = ['lion','tiger','dog','cat','ferret','monkey','donkey','snake','elephant','fish'];
const countries = ['america', 'singapore','france','china','india','cambodia','australia','brazil'];
const random = ['broom','comma','jumbo',]
const sports=['basketball'];
const car = ['tesla'];
const vegetables = ['tomato','potato'];


let wordArr;
let guessedArr ;
let tries = 6;

function generateWord(x){
    let chosen ;
    switch(x){
        case 1:
            chosen = animals[Math.floor(Math.random() * animals.length)];
            break;
        case 2:
            chosen = countries[Math.floor(Math.random() * countries.length)];
            break;
        case 3:
            chosen = random[Math.floor(Math.random() * random.length)];
            break;
        case 4:
            chosen = sports[Math.floor(Math.random() * sports.length)];
            break;
        case 5:
            chosen = car[Math.floor(Math.random() * car.length)];
            break;
        case 6:
            chosen = vegetables[Math.floor(Math.random() * vegetables.length)];
            break;

    }
    sessionStorage.setItem("chosen", chosen);
    sessionStorage.setItem("theme",x);
    
}

function updateHangMan(){
    let mistakes = 6-tries;
    document.getElementById('hangmanPic').src = 'Img'+mistakes + '.png';

   

}

function getDash(){
    let chosen = sessionStorage.getItem('chosen');
    let x = sessionStorage.getItem('theme');
    wordArr = chosen.split("");
    guessedArr = chosen.split("");
    for(let i =0; i<chosen.length;i++){
        guessedArr[i] = "_";
    }
    printDash();

    
}

function printDash(){

    document.getElementById('guess').innerHTML = '';
    let str = guessedArr.join(' ')
    document.getElementById('guess').innerHTML = str;
    

}



function generateButtons(){
    
    document.getElementById('letter').innerHTML = '';
    for (const i of 'abcdefghijklmnopqrstuvwxyz') {
        const html = `<button  id='` + i + `' class="btn btn-dark btn-circle btn-xl col-lg-2" onClick ={handleGuess('` + i + `')}>${i.toUpperCase()}</button>`;
        letterDiv.insertAdjacentHTML('beforeend', html);
      }

}

function handleGuess(letter){
    if(tries!=0){

        document.getElementById(letter).setAttribute('disabled', true);

        if(wordArr.indexOf(letter)!= -1){
            document.getElementById(letter).style.backgroundColor = "green";
            for(i=0;i<wordArr.length;i++){
                if(letter == wordArr[i])guessedArr[i] = letter.toUpperCase();
            }
            printDash();
            checkIfWon();
            
        }

        else{
            document.getElementById(letter).style.backgroundColor = "red";
            tries--;
            checkIfWon();
            updateHangMan();
        }

    }

    else{
        checkIfWon();
        updateHangMan();
        
    }
}

function checkIfWon(){
    let noticeHtml;
    if(guessedArr.indexOf("_") == -1){
        document.getElementById('notice').style.visibility = "visible";
        noticeHtml = '<h1> You WON &#128513!!! </h1>';
        document.getElementById('guess').style.color = "green";
    }
    else if(tries ==0){
        noticeHtml = '<h1> You LOST &#128532 </h1>';
        guessedArr = wordArr.map(letter => letter.toUpperCase());
        printDash();
        document.getElementById('guess').style.color = "red";

    }
    else {return;}
    document.getElementById('notice').style.visibility = "visible";
    document.getElementById('notice').innerHTML = noticeHtml;
}

function reset(){
    let y = sessionStorage.getItem('theme');
    let z =  parseInt(y);
    document.getElementById('notice').style.visibility = "hidden";
    document.getElementById('guess').style.color = "black";
    generateButtons();
    generateWord(z);
    getDash();
    tries=6;
    updateHangMan();

}

generateButtons();
getDash();
updateHangMan();
