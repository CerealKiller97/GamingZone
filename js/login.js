let deleteBtn = document.querySelector('#modalHide')
let loginBtn = document.querySelector('#loginBtn')
let loginMail = document.querySelector('#loginMail')
let loginPwd = document.querySelector('#loginPwd')
/* Helper */
let mailEnvelope = document.querySelector('#mailEnvelope')
let pwdLock = document.querySelector('#pwdLock')

window.onload = () => {
  loginMail.focus()
  loginBtn.addEventListener('click', loginNotification )
  deleteBtn.addEventListener('click', hideModal)
  loginMail.addEventListener('blur', mailBlur)
  loginPwd.addEventListener('blur', pwdBlur)
}

let hideModal = () => {
  console.log(1)
  let loginModal = document.querySelector('#loginModal')
  loginModal.classList.add('opacityAnimation')
}

let loginNotification = () => {
  let loginModal = document.querySelector('#loginModal')
  loginModal.classList.add('opacity1to0')
  // Add this here in if/else statement
  console.log(1)
  loginModal.classList.add('opacityAnimation')

  if ( (mailEnvelope.classList.contains('icon-success') ) && ( pwdLock.classList.contains('icon-success') ) ) {
    console.log('OK')
  } else {
    console.log('ERROR') 
  }
}

let mailBlur = () => {
  console.log('Mail blur');
  // Regular expression
  let regEmail = /^[a-zšđžćč]{4,}(\.)?[a-zšđžćč]{4,}([0-9]{0,5})?\@((gmail)|(outlook)|(msn)|(live)|(hotmail)|(yahoo)|\w)\.com$/

  // Checking e-mail input field 
  if (!regEmail.test(loginMail.value)) {
   mailEnvelope.classList.add('icon-danger')
   
 } else {
   mailEnvelope.classList.add('icon-success')
 }
}

let pwdBlur = () => {
  console.log('Password blur');
    // Regular Expressions
  let regPwd = /^[a-zšđžćč]{2,20}[0-9]{1,}$/ // prepraviti da mogu i velika slova doci u obzir

  // Checking password input
   if (!regPwd.test(loginPwd.value)) {
    pwdLock.classList.add('icon-danger')    
  } else {
    pwdLock.classList.add('icon-success')
  }
}
