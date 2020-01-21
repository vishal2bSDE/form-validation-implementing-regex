//from Blur Event Listeners
document.getElementById('name').addEventListener('blur',validateName)
document.getElementById('zip').addEventListener('blur',validateZip)
document.getElementById('phone').addEventListener('blur',validatePhone)
document.getElementById('email').addEventListener('blur',validateEmail)

function validateName(event)
{
    const name = document.getElementById('name');
    const re=/^[a-zA-Z]{2,10}$/
    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    }else{
        name.classList.remove('is-invalid')
    }
}
function validateZip(event)
{
    const zip=document.getElementById('zip')
    const re=/^[0-7]{6}$/
    if(!re.test(zip.value)){
        zip.classList.add('is-invalid')
    }
    else{
        zip.classList.remove('is-invalid')
    }
}
function validateEmail(event)
{
 const email=document.getElementById('email')
 const re=/^([a-zA-Z0-9\.\_]+)@([a-zA-z0-9]+)\.([a-zA-Z]{2,5})/
 if(!re.test(email.value)){
     email.classList.add('is-invalid')
 }
 else{
     email.classList.remove('is-invalid')
 }
 
}
function validatePhone(event)
{
    const number=document.getElementById('phone')
    const re=/^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/
    if(!re.test(number.value))
    {
        number.classList.add('is-invalid')
    }
    else{
        number.classList.remove('is-invalid')
    }
}