let newsletter = document.querySelector('#newsletterInput')
let dropdown = document.querySelector('#dropdown')

window.onload = () => {
  newsletter.addEventListener('blur', newsletterValidatation)
  dropdown.addEventListener('mouseenter',showDropdown)
  /* name.addEventListener('blur', nameValid)  */

}

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

let slider = () => {
  let xhr = new XMLHttpRequest()
  xhr.open('../assets/slider.json','GET',true)
  xhr.readyState = (data) => {
    if (this.status == 200) {
      document.createElement('img')
      let res = JSON.parse(data)
      console.log(res);
      
    }
  }
}

let createLayout = () => {
  //Napravi div sa klasom one-third i stiluzuj 
}
