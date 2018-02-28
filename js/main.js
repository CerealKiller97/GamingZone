let newsletter = document.querySelector('#newsletterInput')
let dropdown = document.querySelector('#dropdown')
let newsletterBtn = document.querySelector('#newsletterBtn')
window.onload = () => {
  newsletter.addEventListener('blur', newsletterValidatation)
  dropdown.addEventListener('mouseenter', showDropdown)
  newsletterBtn.addEventListener('click', showNotification)
  /* name.addEventListener('blur', nameValid)  */
}

let newsletterValidatation = () => {
  let inputVal = newsletter.value
  let reEmail = /^[a-zšđžćč]{4,}(\.)?[a-zšđžćč]{4,}([0-9]{0,5})?\@((gmail)|(outlook)|\w)\.com$/
  let envelope = document.querySelector('#envelope')
  if (!reEmail.test(inputVal)) {
    envelope.classList.add('icon-success')
  } else {
    envelope.classList.add('icon-danger')
  }  
}

let showNotification = () => {
  if (envelope.classList.contains('icon-success')) {
    console.log('OK')  
  } else {
    console.log('ERROR')
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
