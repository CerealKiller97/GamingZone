$(document).ready(() => {
  /* AJAX */
  alertify.notify('Welcome to Gaming Zone.', 'custom', 2)
  let servicesContainer = document.querySelector('.servicesContainer')
  let output = ``
  let BASE = 'https://cerealkiller97.github.io/GamingZone'
  $.ajax({
    type: 'GET',
    url: `${BASE}/assets/json/services.json`,
    dataType: 'json',
    success: (data) => {
      data.forEach(element => {
        output += `<div class="column">
                  <div class="box">
                    <figure class="image service-img is-128x128"> 
                      <img src="${element.icon}" alt="${element.heading}"/>
                    </figure>
                    <h3 class="title has-text-weight-light has-text-centered has-text-link">${element.heading}</h3>
                    <p class="has-text-centered">${element.desc}</p>
                  </div>
               </div>`
        servicesContainer.innerHTML = output
      })
    },
    error: (xhr, status, err) => console.log(err)
  })
  /* SCROLL TO TOP */
  $('.arrowToTop').click(() => {
    $('html,body').animate({
      scrollTop: 0
    }, 1000)
  })
  /* SHOW/HIDE SCROLL TO TOP */
  $(window).scroll(() => {
    if ($(this).scrollTop() > 400) {
      setTimeout(() => {
        $('.arrowToTop').addClass('opacityActive')
      }, 100)
      $('.arrowToTop').addClass('visible')
    } else {
      $('.arrowToTop').removeClass('visible')
    }
  })

  $('#about').click((e) => {
    e.preventDefault()   
    $('html').animate({
        scrollTop: $('#aboutSection').offset().top},1000)  
})

$('#contactLink').click((e) => {
  e.preventDefault()

  $('html').animate({
      scrollTop: $('#contactSection').offset().top},1000)
  
})


  $('#aboutLink').click(function(e){
    e.preventDefault();

    $('html').animate({
        scrollTop: $('#about').offset().top}, 2500);
    
})
  $('#subscribeBtn').click(()=> {
   if ($('#envelope').hasClass('icon-success')) {
     $('#newsletter').val('')
     $('#envelope').removeClass('icon-success')
     alertify.notify('Thank you for contacting us.', 'customSuccess', 2)
   } else if ($('#envelope').hasClass('icon-danger')) {
    $('#envelope').removeClass('icon-danger')
    alertify.notify('Invalid e-mail.', 'customDanger', 2)
   }
    
})

})
