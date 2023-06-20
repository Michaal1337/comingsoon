const emailInput = document.querySelector('.container__form-email')
const errorText = document.querySelector('.container__error')
const submit = document.querySelector('.container__form-submit')

function checkEmail() {
	if (emailInput.value.includes('@') && emailInput.value.includes('.')) {
		errorText.textContent = 'Email Sent'
        console.log('elo');
	} else if (emailInput.value.includes('@') || emailInput.value.includes('.')){
        errorText.textContent = 'Please provide a valid email'
    } else {
        console.log('elo');
    }
}

submit.addEventListener('click', checkEmail)
//