let name = document.querySelector('#regName')
let progress = document.querySelector('#progress')
let counter = 0
let alertModal = document.querySelector('#alertModal')
let registerBtn = document.querySelector('#registerBtn')

document.addEventListener('DOMContentLoaded',() => {
  name.focus()
  name.addEventListener('keypress',nameValid)
  registerBtn.addEventListener('click',registrationValidation)
})

let registrationValidation = () => {
  let name = document.querySelector('#regName')
  let username = document.querySelector('#regUsername')
  let email = document.querySelector('#regEmail')
  
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

  $('#registerBtn').click(function () {
    $('#alert').slideToggle()

  })

  $('#deleteBtn').click(function () {
    $('#alert').fadeOut()
  })
 


})