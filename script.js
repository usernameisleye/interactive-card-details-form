//value change on cardholder name
const cardName = document.querySelector('.name');
const cardNameInput = document.querySelector('.card-name input');

//value change on card number
const cardNumber = document.querySelector('.card-num');
const cardNumberInput = document.querySelector('.card-number input');

//value change on mm number
const MMNumber = document.querySelector('.mm');
const MMNumberInput = document.querySelector('.mm-num');

//value change on yy number
const YYNumber = document.querySelector('.yy');
const YYNumberInput = document.querySelector('.yy-num');

//value change on cvc name
const cvcMain = document.querySelector('.cvc');
const cvcInput = document.getElementById('cvc-input');
const cvcNum = document.querySelector('.card-back p');

const confirmBtn = document.querySelector('.card-inputs button');
const completeBtn = document.querySelector('.complete button')
const completePage = document.getElementById('complete');
const cardInputs = document.querySelector('.card-inputs');
const allInputs = document.getElementsByTagName('input');
const errorMsg = document.getElementById('errorMsg');

cardNameInput.addEventListener('input', changeName);
cardNumberInput.addEventListener('input', changeNumber);
MMNumberInput.addEventListener('input', changeMM);
YYNumberInput.addEventListener('input', changeYY);
cvcInput.addEventListener('input', changeCVC);
confirmBtn.addEventListener('click', completeInfo)
completeBtn.addEventListener('click', completeReg)

function changeName(){
    if(cardNameInput.value != ''){
        const num = cardNameInput.value;
        let savedNum = num.charAt(0).toUpperCase() + num.slice(1);
        cardName.innerHTML = savedNum;

        const letterSpace = cardName.innerHTML.split(' ');

        for (let i = 0; i < letterSpace.length; i++) {
            letterSpace[i] = letterSpace[i].charAt(0).toLocaleUpperCase(0) + letterSpace[i].slice(1);
        }

        const savedLetter = letterSpace.join(' ');
        cardName.innerHTML = savedLetter;
        cardNameInput.classList.remove('error');
    }else{
        cardName.innerHTML = 'Mark Ruffalo'

        cardNameInput.classList.add('error');
    }
}

function changeNumber(e){
    // let allLetters = /^[A-Za-z]+$/;
    if(cardNumberInput.value != ''){
        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
        const num = cardNumberInput.value;
        cardNumber.innerText = num;
        cardNumberInput.classList.remove('error');
    }
    else{
        cardNumber.innerHTML = '0000 0000 0000 0000'
        cardNumberInput.classList.add('error');
    }
}

function changeMM(){
    if(MMNumberInput.value != ''){
        if(isNaN(MMNumberInput.value)){
            MMNumberInput.value = '';
        }

        const num = MMNumberInput.value;
        MMNumber.innerText = num;
        MMNumberInput.classList.remove('error');
    }else{
        MMNumber.innerHTML = '00';
        MMNumberInput.classList.add('error');
    }
}

function changeYY(){
    if(YYNumberInput.value != ''){
        if(isNaN(YYNumberInput.value)){
            YYNumberInput.value = '';
        }

        const num = YYNumberInput.value;
        YYNumber.innerText = num;
        YYNumberInput.classList.remove('error');
    }else{
        YYNumber.innerText = '00';
        YYNumberInput.classList.add('error');
    }
}

function changeCVC(){
        if(cvcInput.value != ''){
            if(isNaN(cvcInput.value)){
                cvcInput.value = '';
            }

            const num = cvcInput.value;
            cvcNum.innerText = num;
            cvcInput.classList.remove('error');
            // cvcMain.innerHTML = "<p></p>";
        }else{
            cvcNum.innerHTML = '000';
            cvcInput.classList.add('error');
            // cvcMain.innerHTML += "<p>Can't be blank</p>";
    }
}

function completeInfo(){
    completePage.style.display = 'flex';

    for (let i = 0; i < allInputs.length; i++) {
        if(allInputs[i].type == 'text' || allInputs[i].type == 'number'){
            allInputs[i].value = '';
        }
    }
}

function completeReg(){
    completePage.style.display = 'none';
}