const userName = document.querySelector('#userName')
const cardName = document.querySelector('.cardName')
const cardNumber = document.querySelector('#cardNumber')
const code = document.querySelector('.code')
const month = document.querySelector('#mm')
const cardMonth = document.querySelector('.month')
const year = document.querySelector('#yy')
const cardYear = document.querySelector('.year')
const cvc = document.querySelector('#cvc')
const cardCvc = document.querySelector('.cardCvc')
const sec2 = document.querySelector('.section2')
const btn = document.querySelector('.btn')
const sec3 = document.querySelector('.section3')
const btn2 = document.querySelector('.btn2')
const input = document.querySelector('form')
const date = document.querySelector('.date')


// to compare between the inout value and a condition (regex)
function validateInput(input, regex) {
    if (regex.test(input.value)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        return true;
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
        return false;
    }
}


cardNumber.addEventListener('input', function() {
    cardNumber.value = cardNumber.value.replace(/\D/g, '')//to input only numbers
    code.textContent = cardNumber.value;
    if(!cardNumber.value){
        code.textContent = "0000 0000 0000 0000"
        
    }
    validateInput(cardNumber, /^\d{16}$/)//validated value length= 16
})
userName.addEventListener('input', function() {
    cardName.textContent = userName.value;
    validateInput(userName, /.+/)
    
})
month.addEventListener('input', function() {
    month.value = month.value.replace(/\D/g, '')
    cardMonth.textContent = month.value;
    validateInput(month, /^(0[1-9]|1[0-2])$/);
})
year.addEventListener('input', function() {
    year.value = year.value.replace(/\D/g, '')
    cardYear.textContent = year.value;
    validateInput(year, /^(2[1-9]|[3-9][0-9])$/)
})
cvc.addEventListener('input', function() {
    cvc.value = cvc.value.replace(/\D/g, '')
    cardCvc.textContent = cvc.value;
    validateInput(cvc, /^\d{3}$/);
    
})


btn.addEventListener('click', () => {
    const isNameValid = validateInput(userName, /.+/);
    const isCardNumberValid = validateInput(cardNumber, /^\d{16}$/);
    const isMonthValid = validateInput(month, /^(0[1-9]|1[0-2])$/);
    const isYearValid = validateInput(year, /^(2[1-9]|[3-9][0-9])$/);
    const isCvcValid = validateInput(cvc, /^\d{3}$/);

    if (isNameValid && isCardNumberValid && isMonthValid && isYearValid && isCvcValid) {
        sec2.style.display = 'none';
        sec3.style.display = 'flex';
    }
});


//return to the 1st page
btn2.addEventListener('click', () => {
    sec2.style.display = 'flex';
    sec3.style.display = 'none';
    input.reset();

    code.textContent = "0000 0000 0000 0000";
    cardName.textContent = "Jane Appleseed";
    date.textContent = "00/00";
    cardCvc.textContent = '000';

    const inputs = [userName, cardNumber, month, year, cvc];
    inputs.forEach(input => {
        input.classList.remove('valid');
        input.classList.remove('invalid');
    });
});


























