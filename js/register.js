let name=document.querySelector('#regName'),username=document.querySelector('#regUsername'),email=document.querySelector('#regEmail'),pwd=document.querySelector('#pwd'),confirmPwd=document.querySelector('#confirmPwd'),progress=document.querySelector('#progress'),counter=0,alertModal=document.querySelector('#alertModal'),registerBtn=document.querySelector('#registerBtn'),msgNotification=document.querySelector('#messageNotification'),notify=document.querySelector('#notify'),isFormOK=!0,regName=/^([A-ZŠĐŽĆČ][a-zšđžćč]{2,20}\s)+([A-ZŠĐŽĆČ][a-zšđžćč]{2,20})+$/,regUsername=/^[A-ZŠĐŽĆČ][a-zšđžćč]{2,20}((\_)|(\.))?[A-ZŠĐŽĆČ][a-zšđžćč]{2,20}[0-9]{0,5}$/,regEmail=/^[a-zšđžćč]{4,}(\.)?([a-zšđžćč]{4,})*([0-9]{0,5})?\@((gmail)|(outlook)|(msn)|(live)|(hotmail)|(yahoo)|\w)\.com$/,regPwd=/^[a-zšđžćč]{2,20}[0-9]*$/;window.onload=()=>{name.focus(),name.addEventListener('blur',nameValid),username.addEventListener('blur',userValid),email.addEventListener('blur',emailValid),pwd.addEventListener('blur',pwdValid),confirmPwd.addEventListener('blur',confirmValid),name.addEventListener('focus',removeClasses),username.addEventListener('focus',removeClasses),email.addEventListener('focus',removeClasses),pwd.addEventListener('focus',removeClasses),confirmPwd.addEventListener('focus',removeClasses),registerBtn.addEventListener('click',registrationValidation)};let removeClasses=a=>{a.target.classList.contains('is-danger')?a.target.classList.remove('is-danger'):a.target.classList.contains('is-success')&&a.target.classList.remove('is-success')},nameValid=()=>{regName.test(name.value)?(name.classList.add('is-success'),isFormOK=!0,progress.value+=20):(name.classList.add('is-danger'),isFormOK=!1,progress.value-=20)},userValid=()=>{regUsername.test(username.value)?(username.classList.add('is-success'),isFormOK=!0,progress.value+=20):(username.classList.add('is-danger'),isFormOK=!1,progress.value-=20)},emailValid=()=>{regEmail.test(email.value)?(email.classList.add('is-success'),isFormOK=!0,progress.value+=20):(email.classList.add('is-danger'),isFormOK=!1,progress.value-=20)},pwdValid=()=>{regPwd.test(pwd.value)?(pwd.classList.add('is-success'),isFormOK=!0,progress.value+=20):(pwd.classList.add('is-danger'),isFormOK=!1,progress.value-=20)},confirmValid=()=>{pwd.value?pwd.value===confirmPwd.value&&(confirmPwd.classList.add('is-success'),isFormOK=!0,progress.value+=20):(confirmPwd.classList.add('is-danger'),isFormOK=!1,progress.value-=20)},registrationValidation=()=>{isFormOK?(name.classList.remove('is-success'),name.value='',username.classList.remove('is-success'),username.value='',email.classList.remove('is-success'),email.value='',pwd.classList.remove('is-success'),pwd.value='',confirmPwd.classList.remove('is-success'),confirmPwd.value='',progress.value=0,notify.textContent='You have been successfully logged in.Please check your mail to confirm your identity.'):notify.textContent='Something went wrong.Please try again.'};$(document).ready(()=>{$('#registerBtn').click(()=>{isFormOK?$('#notify').addClass('is-link'):$('#notify').addClass('is-danger'),$('#notify').addClass('opacityActive'),setTimeout(()=>{$('#notify').removeClass('opacityActive'),isFormOK?$('#notify').removeClass('is-link'):$('#notify').removeClass('is-danger')},3e3)}),$('#deleteBtn').click(()=>{$('#notify').animate({opacity:0})})});
