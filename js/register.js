let name = document.querySelector('#regName')
let progress = document.querySelector('#progress')
let counter = 0
let alertModal = document.querySelector('#alertModal')
let registerBtn = document.querySelector('#registerBtn')
let msgNotification = document.querySelector('#messageNotification')
let notify = document.querySelector('#notify')

document.addEventListener('DOMContentLoaded',() => {
  name.focus()
  name.addEventListener('keypress',nameValid)
  registerBtn.addEventListener('click',registrationValidation)
})

let registrationValidation = () => {
  let name = document.querySelector('#regName')
  let username = document.querySelector('#regUsername')
  let email = document.querySelector('#regEmail')
  /* Ispis teksta da li je dobro se registrovao ili ne */
  /*IF => Ako je ok ona ovo */
  if (!name.value) {
    document.querySelector('#regName').classList.add('is-danger')
    let messages = ['You have been successfully registered.', 'Please check your e-mail to confirm your identity.']
    let lis = ``
    for (let i in messages) {
      lis += `<li> <strong>${messages[i]} </strong></li>`
    }
  notify.classList.add('is-link')
  msgNotification.innerHTML = lis
  } /* else {
    let errors = ['You must.', 'aaa.']
    let liErr = ``
    for (let i in errors) {
      liErr += `<li> <strong>${errors[i]} </strong></li>`
    }
    notify.classList.add('is-danger')
    msgNotification.innerHTML = liErr
  } */
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

$(document).ready(function () {
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

  $('#deleteBtn').click(function () {
    $('#notify').animate({
      opacity: 0
    })
  })
 
 


})
