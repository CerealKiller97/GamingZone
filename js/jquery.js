var _this=this;$(document).ready(()=>{alertify.notify('Welcome to Gaming Zone.','custom',2);let a=document.querySelector('.servicesContainer'),b=``;$.ajax({type:'GET',url:`${'https://cerealkiller97.github.io/GamingZone'}/assets/json/services.json`,dataType:'json',success:d=>{d.forEach(f=>{b+=`<div class="column">
                  <div class="box">
                    <figure class="image service-img is-128x128"> 
                      <img src="${f.icon}" alt="${f.heading}"/>
                    </figure>
                    <h3 class="title has-text-weight-light has-text-centered has-text-link">${f.heading}</h3>
                    <p class="has-text-justified">${f.desc}</p>
                  </div>
               </div>`,a.innerHTML=b})},error:(d,f,g)=>console.log(g)}),$('.arrowToTop').click(()=>{$('html,body').animate({scrollTop:0},1e3)}),$(window).scroll(()=>{400<$(_this).scrollTop()?(setTimeout(()=>{$('.arrowToTop').addClass('opacityActive')},100),$('.arrowToTop').addClass('visible')):$('.arrowToTop').removeClass('visible')}),$('#about').click(d=>{d.preventDefault(),$('html').animate({scrollTop:$('#aboutSection').offset().top},1e3)}),$('#contactLink').click(d=>{d.preventDefault(),$('html').animate({scrollTop:$('#contactSection').offset().top},1e3)}),$('#aboutLink').click(function(d){d.preventDefault(),$('html').animate({scrollTop:$('#about').offset().top},2500)}),$('#subscribeBtn').click(()=>{$('#envelope').hasClass('icon-success')?($('#newsletter').val(''),$('#envelope').removeClass('icon-success'),alertify.notify('Thank you for contacting us.','customSuccess',2)):$('#envelope').hasClass('icon-danger')&&($('#envelope').removeClass('icon-danger'),alertify.notify('Invalid e-mail.','customDanger',2))})});
