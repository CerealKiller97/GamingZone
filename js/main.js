let toggle=document.querySelector('.navbar-burger'),sidebar=document.querySelector('.sidebar'),arrowToTop=document.querySelector('.arrowToTop'),newsletter=document.querySelector('#newsletter'),subscribeBtn=document.querySelector('#subscribeBtn');window.onload=()=>{toggle.addEventListener('click',showSideBar),newsletter.addEventListener('blur',newsletterValidatation),subscribeBtn.addEventListener('click',newsletterNotification)};let showSideBar=()=>{sidebar.classList.toggle('sidebar-active'),toggle.classList.toggle('is-active')},newsletterValidatation=()=>{let a=newsletter.value,b=/^[a-zšđžćč]{4,}(\.)?[a-zšđžćč]{4,}([0-9]{0,5})?\@((gmail)|(outlook)|(msn)|(live)|(hotmail)|(yahoo)|\w)\.com$/,c=document.querySelector('#envelope');b.test(a)?c.classList.add('icon-success'):c.classList.add('icon-danger')};
