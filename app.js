const inputName = document.querySelector('[data-name]')
const inputEmail = document.querySelector('[data-email]')
const inputCountry = document.querySelector('[data-country]')
const inputZipCode = document.querySelector('[data-zip-code]')
const inputPass = document.querySelector('[data-pass]')
const inputConfirmPass = document.querySelector('[data-confirm]')
console.log(inputConfirmPass);

const allInputs = document.querySelectorAll('[data-focus]')
const checkingDiv = document.querySelector('.checking')
const allSet = document.querySelector('[data-set-display]')


// focus input
allInputs.forEach(input => {
    input.addEventListener('focus', (e) => {
        e = event.target.value;
        input.classList.add('red-border')
    })
})

// focus out of the input
allInputs.forEach(input => {
    input.addEventListener('focusout', (e) => {
        e = event.target.value;
        input.classList.remove('red-border')
    })
})

// typing on input
allInputs.forEach(input => {
    input.addEventListener('input', (e) => {
        e = event.target.value;

        if (e.length > 0) {
            input.classList.remove('red-border')
        }
    })
})



// EMAIL validation
inputEmail.addEventListener('focus', (e) => {
    e = event.target.value;
    inputEmail.classList.add('red-border')
})

inputEmail.addEventListener('focusout', (e) => {
    e = event.target.value;
    inputEmail.classList.remove('red-border')
})

inputEmail.addEventListener('input', (e) => {
    e = event.target.value;
    if (e.length > 5 && e.includes('@') && e.includes('.')) {
        inputEmail.classList.remove('red-border')
    }

    else {
        inputEmail.classList.add('red-border')
    }
})


inputPass.addEventListener('focus', () => {
    let checkGet = checkingDiv.getAttribute('data-display')
    checkingDiv.setAttribute('data-display', 'false')
})

inputPass.addEventListener('focusout', () => {

    checkingDiv.setAttribute('data-display', 'true')
    allSet.setAttribute('data-set-display', 'false')
    checkingDiv.setAttribute('data-display', 'true')
})

inputPass.addEventListener('input', (e) => {
    e = event.target.value;

    if (e.length >= 0) {

        if (e.length >= 8) {
            document.querySelector('.eight').style.opacity = '.5'
            document.querySelector('.eight').style.color = 'white'
        }

        else {
            document.querySelector('.eight').style.opacity = '1'
            document.querySelector('.eight').style.color = 'brown'
        }
    }


    if (e.length > 0) {
        if (/[A-Z]/.test(e)) {
            document.querySelector('.upper').style.opacity = '.5'
            document.querySelector('.upper').style.color = 'white'
        }

        else {
            document.querySelector('.upper').style.opacity = '1'
            document.querySelector('.upper').style.color = 'brown'
        }
    }

    if (e.length > 0) {
        if (/[a-z]/.test(e)) {
            document.querySelector('.lower').style.opacity = '.5'
            document.querySelector('.lower').style.color = 'white'
        }

        else {
            document.querySelector('.lower').style.opacity = '1'
            document.querySelector('.lower').style.color = 'brown'
        }
    }

    if (e.length > 0) {
        if (e.includes('.') || e.includes('~') || e.includes('`')
            || e.includes('!') || e.includes('@') || e.includes('#') || e.includes('$') || e.includes('%') || e.includes('^')
            || e.includes('&') || e.includes('*') || e.includes('(') || e.includes(')') || e.includes('_') || e.includes('-')
            || e.includes('+') || e.includes('=') || e.includes('|') || e.includes(';') || e.includes('<') || e.includes('>')
            || e.includes(',') || e.includes('?')
        ) {
            document.querySelector('.special').style.opacity = '.5'
            document.querySelector('.special').style.color = 'white'
        }

        else {
            document.querySelector('.special').style.opacity = '1'
            document.querySelector('.special').style.color = 'brown'
        }
    }

    if (e.length > 0) {
        if (/\d/.test(e)) {
            document.querySelector('.one-number').style.opacity = '.5'
            document.querySelector('.one-number').style.color = 'white'
        }
        else {
            document.querySelector('.one-number').style.opacity = '1'
            document.querySelector('.one-number').style.color = 'brown'
        }
    }


    if (e.length > 0) {
        if (
            (/\d/.test(e)) && (e.includes('.') || e.includes('~') || e.includes('`')
                || e.includes('!') || e.includes('@') || e.includes('#') || e.includes('$') || e.includes('%') || e.includes('^')
                || e.includes('&') || e.includes('*') || e.includes('(') || e.includes(')') || e.includes('_') || e.includes('-')
                || e.includes('+') || e.includes('=') || e.includes('|') || e.includes(';') || e.includes('<') || e.includes('>')
                || e.includes(',') || e.includes('?')) && (/[a-z]/.test(e)) && (/[A-Z]/.test(e)) && (e.length >= 8)
        ) {
            console.log('all set');
            allSet.setAttribute('data-set-display', 'true')
            checkingDiv.setAttribute('data-display', 'true')
        }
        else {
            allSet.setAttribute('data-set-display', 'false')
            checkingDiv.setAttribute('data-display', 'false')
        }
    }


    else {
        document.querySelector('.lower').style.opacity = '1'
        document.querySelector('.lower').style.color = 'brown'

        document.querySelector('.upper').style.opacity = '1'
        document.querySelector('.upper').style.color = 'brown'

        document.querySelector('.special').style.opacity = '1'
        document.querySelector('.special').style.color = 'brown'

        document.querySelector('.one-number').style.opacity = '1'
        document.querySelector('.one-number').style.color = 'brown'
    }
})


// CONFIRM YOUR PASSWORD
inputConfirmPass.addEventListener('focus', ()=>{
    document.querySelector('[data-conf-pass]').classList.add('red-border')
})

inputConfirmPass.addEventListener('focusout', ()=>{
    document.querySelector('[data-conf-pass]').classList.remove('red-border')
    
    document.querySelector('[data-conf-pass]').classList.remove('green-border')
})

inputConfirmPass.addEventListener('input', (e)=>{
    e = event.target.value;

    if(e===inputPass.value){
        document.querySelector('[data-conf-pass]').classList.add('green-border')
    }
})