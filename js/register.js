/* GLOBAL SCOPE */
let name = document.querySelector('#regName')
let progress = document.querySelector('#progress')
let counter = 0
let alertModal = document.querySelector('#alertModal')
let registerBtn = document.querySelector('#registerBtn')
let msgNotification = document.querySelector('#messageNotification')
let notify = document.querySelector('#notify')

document.addEventListener('DOMContentLoaded',() => {
  name.focus()
  /* name.addEventListener('keypress',nameValid) */
  /* name.addEventListener('blur',validName)  */
  registerBtn.addEventListener('click',registrationValidation)
})

let registrationValidation = () => {
  /* GETTING INPUT FIEDLS */
  let name = document.querySelector('#regName')
  let username = document.querySelector('#regUsername')
  let email = document.querySelector('#regEmail')
  let pwd = document.querySelector('#pwd')
  let confirmPwd = document.querySelector('#confirmPwd')
  let isFormOK = true

  /* REGULAR EXPRESSIONS */

  let regName = /^([A-ZŠĐŽĆČ][a-zšđžćč]{2,20}\s)+([A-ZŠĐŽĆČ][a-zšđžćč]{2,20})+$/
  let regUsername = /^[A-ZŠĐŽĆČ][a-zšđžćč]{2,20}((\_)|(\.))?[A-ZŠĐŽĆČ][a-zšđžćč]{2,20}[0-9]{0,5}$/
  let regEmail = /^[a-zšđžćč]{4,}(\.)?[a-zšđžćč]{4,}([0-9]{0,5})?\@((gmail)|(outlook)|(msn)|(live)|(hotmail)|(yahoo)|\w)\.com$/
  let regPwd = /^[a-zšđžćč]{2,20}[0-9]{1,}$/

 let nameValid = () => { 

    /* Checking for name input */
    if (!regName.test(name.value)) {
      name.classList.add('is-danger')
      isFormOK = false
    } else {
      name.classList.add('is-success')
    }
}



  /* Checking username input */
  if (!regUsername.test(username.value)) {
    username.classList.add('is-danger')
    isFormOK = false
  } else {
    username.classList.add('is-success')
  }

  /* Checking email input */
  if (!regEmail.test(email.value)) {
    email.classList.add('is-danger')
    isFormOK = false
  } else {
    email.classList.add('is-success')
  }

  /* Checking password input */
  if (!regPwd.test(pwd.value)) {
    pwd.classList.add('is-danger')
    isFormOK = false
  } else {
    pwd.classList.add('is-success')
  }

  /* Checking if password are matching */
  if (pwd.value === confirmPwd.value) {
    confirmPwd.classList.add('is-success')
  } else {
    confirmPwd.classList.add('is-danger')
    isFormOK = false
  }

  /* Checking if there is conditon to show notification */
  if (isFormOK) {
    name.classList.remove('is-success')
    name.value = ''
    username.classList.remove('is-success')
    username.value = ''
    email.classList.remove('is-success')
    email.value = ''
    pwd.classList.remove('is-success')
    pwd.value = ''
    confirmPwd.classList.remove('is-success')    
    confirmPwd.value = ''
    console.log('Tacno');
    
  } else {
    console.log('Netacno')
  }

}
let nameValid = () => {
  let name = document.querySelector('#regName')
  // Testing for name field
  if(!name.value) {
    name.classList.add('is-danger')
  } else {
    name.classList.add('is-success')
    progress.value = counter
    counter++
    //animate za progress value
  }
  if (counter === 20) {
    progress.value = 20
  }

  if (progress.value === 100) {
    progress.classList.add('is-success')
  }
 
}

let alert = (msg) => {
  return 
}

$(document).ready( () => {
  // Register button
  $('#notify').addClass('opacity')

  $('#registerBtn').click(function () {
    $('#notify').animate({
      opacity: 1
    })

    setTimeout(function () {
      $('#notify').animate({
        opacity: 0
      })
    },3000)

  })

  $('#deleteBtn').click( () => {
    $('#notify').animate({
      opacity: 0
    })
  })
 
})
