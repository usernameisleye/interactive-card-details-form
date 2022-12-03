//value change on cardholder name
const cardName = document.querySelector('.name');
const cardNameInput = document.querySelector('.card-name input');

//value change on card number
const cardNumberMain = document.querySelector('.card-number');
const cardNumber = document.querySelector('.card-num');
const cardNumberInput = document.querySelector('.card-number input');

//value change on mm number
const MMMain = document.querySelector('.MM');
const MMNumber = document.querySelector('.mm');
const MMNumberInput = document.querySelector('.mm-num');

//value change on yy number
const YYMain = document.querySelector('.YY')
const YYNumber = document.querySelector('.yy');
const YYNumberInput = document.querySelector('.yy-num');

//value change on cvc name
const cvcMain = document.querySelector('.cvc');
const cvcInput = document.querySelector('.cvc input');
const cvcNum = document.querySelector('.card-back p');

const confirmBtn = document.querySelector('.card-inputs button');
const completeBtn = document.querySelector('.complete button')
const completePage = document.querySelector('.complete');
const cardInputs = document.querySelector('.card-inputs');
const allInputs = document.getElementsByTagName('input');

//creating error messages
const errorMsg = document.createElement('p');
const msg = document.createTextNode("Can't be blank");
errorMsg.appendChild(msg)

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
        cardNumberMain.removeChild(errorMsg);
    }
    else{
        cardNumber.innerHTML = '0000 0000 0000 0000'
        cardNumberInput.classList.add('error');
        cardNumberMain.appendChild(errorMsg);
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
        MMMain.removeChild(errorMsg);
    }else{
        MMNumber.innerHTML = '00';
        MMNumberInput.classList.add('error');
        MMMain.appendChild(errorMsg);
    }
}

function changeYY(){
    errorMsg.appendChild(msg)
    if(YYNumberInput.value != ''){
        if(isNaN(YYNumberInput.value)){
            YYNumberInput.value = '';
        }

        const num = YYNumberInput.value;
        YYNumber.innerText = num;
        YYNumberInput.classList.remove('error');
        YYMain.removeChild(errorMsg);
    }else{
        YYNumber.innerText = '00';
        YYNumberInput.classList.add('error');
        YYMain.appendChild(errorMsg);
    }
}

function changeCVC(){
    errorMsg.appendChild(msg)

        if(cvcInput.value != ''){
            if(isNaN(cvcInput.value)){
                cvcInput.value = '';
            }

            const num = cvcInput.value;
            cvcNum.innerText = num;
            cvcInput.classList.remove('error');
            cvcMain.removeChild(errorMsg);
        }else{
            cvcNum.innerHTML = '000';
            cvcInput.classList.add('error');
            cvcMain.appendChild(errorMsg);
    }
}

function completeInfo(){
    cardInputs.style.display = 'none';
    completePage.style.display = 'flex';


    for (let i = 0; i < allInputs.length; i++) {
        if(allInputs[i].type == 'text' || allInputs[i].type == 'number'){
            allInputs[i].value = '';
        }
    }
}

function completeReg(){
    completePage.style.display = 'none';
    cardInputs.style.display = 'flex';
}

//under maintenanace
for (let i = 0; i < allInputs.length; i++) {
    if(allInputs[i].focus()){
        allInputs[i].classList.toggle('active')
    }
}