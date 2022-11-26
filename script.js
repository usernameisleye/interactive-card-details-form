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
const cvcInput = document.getElementById('cvc-input');
const cvcNum = document.querySelector('.card-back p');

cardNameInput.addEventListener('input', changeName);
cardNumberInput.addEventListener('input', changeNumber);
MMNumberInput.addEventListener('input', changeMM);
YYNumberInput.addEventListener('input', changeYY);
cvcInput.addEventListener('input', changeCVC);

function changeName(){
    if(cardNameInput.value != ''){
        const num = cardNameInput.value;
        cardName.innerText = num;
    }else{
        cardName.innerHTML = 'Mark Ruffalo'
    }
}

function changeNumber(){
    if(cardNumberInput.value != ''){
        const num = cardNumberInput.value;
        cardNumber.innerText = num;
    }else{
        cardNumber.innerHTML = '0000 0000 0000 0000'
    }
}

function changeMM(){
    if(MMNumberInput.value != ''){
        const num = MMNumberInput.value;
        MMNumber.innerText = num;
    }else{
        MMNumber.innerHTML = '00'
    }
}

function changeYY(){
    if(YYNumberInput.value != ''){
        const num = YYNumberInput.value;
        YYNumber.innerText = num;
    }else{
        YYNumber.innerText = '00';
    }
}

function changeCVC(){
    if(cvcInput.value != ''){
        const num = cvcInput.value;
        cvcNum.innerText = num;
    }else{
        cvcNum.innerHTML = '000';
        //under maintenance
        cvcInput.classList.toggle('error');
    }
}
