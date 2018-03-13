/**
 * SIDEBAR
 */

const toggle = document.querySelector('.navbar-burger')
const sidebar = document.querySelector('.sidebar')
const arrowToTop = document.querySelector('.arrowToTop')
const newsletter = document.querySelector('#newsletter')
const subscribeBtn = document.querySelector('#subscribeBtn')

window.onload = () => {
  toggle.addEventListener('click',showSideBar )
  newsletter.addEventListener('blur', newsletterValidatation)
  subscribeBtn.addEventListener('click',newsletterNotification )
}

let showSideBar = () => {
  sidebar.classList.toggle('sidebar-active')
  toggle.classList.toggle('is-active')
}

let newsletterValidatation = () => {
  let inputVal = newsletter.value
  let reEmail = /^[a-zšđžćč]{4,}(\.)?[a-zšđžćč]{4,}([0-9]{0,5})?\@((gmail)|(outlook)|(msn)|(live)|(hotmail)|(yahoo)|\w)\.com$/
  let envelope = document.querySelector('#envelope')
  if (!reEmail.test(inputVal)) {
    envelope.classList.add('icon-danger')
  } else {
    envelope.classList.add('icon-success')
  }
}

let newsletterNotification = () => {
  if (envelope.classList.contains('icon-success')) {
    //console.log('OK')    
  } else {
    //console.log('ERR')   
  }
}