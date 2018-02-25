let newsletter = document.querySelector('#newsletterInput')
let dropdown = document.querySelector('#dropdown')

document.body,addEventListener('load', () => {
  newsletter.addEventListener('blur', newsletterValidatation)
  dropdown.addEventListener('mouseenter',showDropdown)
  
})

let newsletterValidatation = () => {
  let inputVal = newsletter.value
  let reEmail = /^$/
  let span = document.querySelector('#res')
  if (inputVal) {
    span.classList.add('is-danger')
    span.textContent = 'This email is invalid'
  } else {
    span.classList.add('is-success')
    span.textContent = 'This email is valid'
  }
  
}

let showDropdown = () => {
  dropdown.parentElement.classList.add('is-hoverable')
}



/* VALIDATION */
function validation() {
   // let reName = / /
   // let reLastName = / /
   // let reName = / /
   // let reName = / /
   // let reName = / /


}
