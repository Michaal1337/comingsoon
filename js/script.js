const emailInput = document.querySelector('.container__form-email')
const errorText = document.querySelector('.container__error')
const submit = document.querySelector('.container__form-submit')

function checkEmail() {
	if (emailInput.value.includes('@') && emailInput.value.includes('.')) {
		errorText.textContent = 'Email Sent'
        emailInput.style.border = ''
	// } else if (emailInput.value.includes('@') || emailInput.value.includes('.')){
    //     errorText.textContent = 'Please provide a valid email'
    } else {
        errorText.textContent = 'Please provide a valid email'
        emailInput.style.border = '2px solid red'
        
        

    }
}

submit.addEventListener('click', checkEmail)
//