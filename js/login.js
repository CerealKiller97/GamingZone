let deleteBtn = document.querySelector('#modalHide')
let loginBtn = document.querySelector('#loginBtn')
let loginMail = document.querySelector('#loginMail')
let loginPwd = document.querySelector('#loginPwd')
/* Helper */
let mailEnvelope = document.querySelector('#mailEnvelope')
let pwdLock = document.querySelector('#pwdLock')

let hideModal = () => {
  let loginModal = document.querySelector('#loginModal')
  loginModal.classList.add('opacityHide')
}

let loginNotification = () => {
  let loginModal = document.querySelector('#loginModal')
  loginModal.classList.add('opacity1to0')
  // Add this here in if/else statement

  //loginModal.classList.add('opacityAnimation')


  if ((mailEnvelope.classList.contains('icon-danger')) || (pwdLock.classList.contains('icon-danger'))) {
    loginBtn.setAttribute('disabled',true)
  } else if ((mailEnvelope.classList.contains('icon-success')) && (pwdLock.classList.contains('icon-success'))) {
    //loginModal.classList.add('opacityAnimation')
    loginBtn.classList.add('is-loading')
    alertify.set('notifier','position', 'top-center')
    alertify.notify('You have been successfully logged in.', 'custom')
    setTimeout(() => {
      window.location.href = 'store.html'      
    }, 1500)
  }
}


let mailBlur = () => {
  // Regular expression
  let regEmail = /^[a-zšđžćč]{4,}(\.)?[a-zšđžćč]{4,}([0-9]{0,5})?\@((gmail)|(outlook)|(msn)|(live)|(hotmail)|(yahoo)|\w)\.com$/
  
  // Checking e-mail input field 
  if (!regEmail.test(loginMail.value)) {
    mailEnvelope.classList.add('icon-danger')
    loginBtn.setAttribute('disabled',true)
  } else {
    mailEnvelope.classList.add('icon-success')
    loginBtn.removeAttribute('disabled',true)
  }
}

let pwdBlur = () => {
  // Regular Expressions
  let regPwd = /^[a-zšđžćč]{2,20}[0-9]{1,}$/ // prepraviti da mogu i velika slova doci u obzir

  // Checking password input
  if (!regPwd.test(loginPwd.value)) {
    pwdLock.classList.add('icon-danger')
    loginBtn.setAttribute('disabled',true)
  } else {
    pwdLock.classList.add('icon-success')
    loginBtn.removeAttribute('disabled',true)
  }
}

window.onload = () => {
  loginMail.focus()
  loginBtn.addEventListener('click', loginNotification)
  deleteBtn.addEventListener('click', hideModal)
  loginMail.addEventListener('blur', mailBlur)
  loginPwd.addEventListener('blur', pwdBlur)
  loginMail.addEventListener('focus', removeClasses)
  loginPwd.addEventListener('focus', removeClasses)
}

let removeClasses = (e) => {
  if (e.target.classList.contains('icon-danger')) {
    e.target.classList.remove('icon-danger')
  } else if (e.target.classList.contains('icon-success')) {
    e.target.classList.remove('icon-success')
  }
  if ((mailEnvelope.classList.contains('icon-success')) && (pwdLock.classList.contains('icon-success'))) {
    if(loginBtn.hasAttribute('disabled')){
      loginBtn.removeAttribute('disabled')
    }   
  }
}