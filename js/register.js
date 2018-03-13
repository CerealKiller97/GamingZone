/* GLOBAL SCOPE */
let name = document.querySelector('#regName')
let username = document.querySelector('#regUsername')
let email = document.querySelector('#regEmail')
let pwd = document.querySelector('#pwd')
let confirmPwd = document.querySelector('#confirmPwd')

let progress = document.querySelector('#progress')
let counter = 0
let alertModal = document.querySelector('#alertModal')
let registerBtn = document.querySelector('#registerBtn')
let msgNotification = document.querySelector('#messageNotification')
let notify = document.querySelector('#notify')
let isFormOK = true

/* REGULAR EXPRESSIONS */

let regName = /^([A-ZŠĐŽĆČ][a-zšđžćč]{2,20}\s)+([A-ZŠĐŽĆČ][a-zšđžćč]{2,20})+$/
let regUsername = /^[A-ZŠĐŽĆČ][a-zšđžćč]{2,20}((\_)|(\.))?[A-ZŠĐŽĆČ][a-zšđžćč]{2,20}[0-9]{0,5}$/
let regEmail = /^[a-zšđžćč]{4,}(\.)?[a-zšđžćč]{4,}([0-9]{0,5})?\@((gmail)|(outlook)|(msn)|(live)|(hotmail)|(yahoo)|\w)\.com$/
let regPwd = /^[a-zšđžćč]{2,20}[0-9]*$/

window.onload = () => {
  name.focus()

  name.addEventListener('blur', nameValid)
  username.addEventListener('blur', userValid)
  email.addEventListener('blur', emailValid)
  pwd.addEventListener('blur', pwdValid)
  confirmPwd.addEventListener('blur', confirmValid)

  name.addEventListener('focus', removeClasses)
  username.addEventListener('focus', removeClasses)
  email.addEventListener('focus', removeClasses)
  pwd.addEventListener('focus', removeClasses)
  confirmPwd.addEventListener('focus', removeClasses)
  /* name.addEventListener('blur',validName)  */
  registerBtn.addEventListener('click', registrationValidation)
}

let removeClasses = (e) => {
  if (e.target.classList.contains('is-danger')) {
    e.target.classList.remove('is-danger')
  } else if (e.target.classList.contains('is-success')) {
    e.target.classList.remove('is-success')
  }

}

let nameValid = () => {
  //console.log('Blur');

  /* Checking for name input */
  if (!regName.test(name.value)) {
    name.classList.add('is-danger')
    isFormOK = false
    progress.value -= 20
  } else {
    name.classList.add('is-success')
    isFormOK = true
    progress.value += 20
  }
  console.log('Name', isFormOK);
}

let userValid = () => {
  /* Checking username input */
  if (!regUsername.test(username.value)) {
    username.classList.add('is-danger')
    isFormOK = false
    progress.value -= 20
  } else {
    username.classList.add('is-success')
    isFormOK = true
    progress.value += 20
  }
  console.log('Username', isFormOK);
}

let emailValid = () => {
  /* Checking email input */
  if (!regEmail.test(email.value)) {
    email.classList.add('is-danger')
    isFormOK = false
    progress.value -= 20
  } else {
    email.classList.add('is-success')
    isFormOK = true
    progress.value += 20
  }
  console.log('Email', isFormOK);
}

let pwdValid = () => {
  /* Checking password input */
  if (!regPwd.test(pwd.value)) {
    pwd.classList.add('is-danger')
    isFormOK = false
    progress.value -= 20
  } else {
    pwd.classList.add('is-success')
    isFormOK = true
    progress.value += 20
  }
  console.log('Password', isFormOK);
}

let confirmValid = () => {
  /* Checking if password are matching */
  if (pwd.value) {
    if (pwd.value === confirmPwd.value) {
      confirmPwd.classList.add('is-success')
      isFormOK = true
      progress.value += 20
    }
  } else {
    confirmPwd.classList.add('is-danger')
    isFormOK = false
    progress.value -= 20
  }
  console.log('ConfirmPwd', isFormOK);
}

let registrationValidation = () => {
  /* GETTING INPUT FIEDLS */
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
    progress.value = 0
    console.log('Tacno');
    notify.textContent = 'You have been successfully logged in.Please check your mail to confirm your identity.'
  } else {
    notify.textContent = 'Something went wrong.Please try again.'
    console.log('Netacno');
  }

}
/* let nameValid = () => {
  let name = document.querySelector('#regName')
  // Testing for name field
  if (!name.value) {
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

} */

let alert = (msg) => {
  return
}

$(document).ready(() => {
  // Register button
  //$('#notify').addClass('opacity')

  $('#registerBtn').click(function () {
    if (isFormOK) {
      $('#notify').addClass('is-link')
    } else {
      $('#notify').addClass('is-danger')
    }
    $('#notify').addClass('opacityActive')

    setTimeout(function () {
      $('#notify').removeClass('opacityActive')
      if (isFormOK) {
        $('#notify').removeClass('is-link')
      } else {
        $('#notify').removeClass('is-danger')
      }

    }, 3000)

  })

  $('#deleteBtn').click(() => {
    $('#notify').animate({
      opacity: 0
    })
  })

})

/* animate({
      opacity: 1
    }) */