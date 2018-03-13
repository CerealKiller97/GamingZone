$(document).ready(() => {
  /* AJAX */
  alertify.notify('Welcome to Gaming Zone.', 'custom', 2)
  let servicesContainer = document.querySelector('.servicesContainer')
  let output = ``
  $.ajax({
    type: 'GET',
    url: '../assets/json/services.json',
    dataType: 'json',
    success: (data) => {
      data.forEach(element => {
        output += `<div class="column">
                  <div class="box">
                    <figure class="image service-img is-128x128"> 
                      <img src="${element.icon}">
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
      $('.arrowToTop').addClass('visible')
    } else {
      $('.arrowToTop').removeClass('visible')
    }
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
