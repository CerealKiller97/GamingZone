$(document).ready(function () {
  $(document).on("click", ".forModal" , showModal)
  var count = 1
  $(document).on("click", ".cart" , () => {
    

      $('.badge').attr('data-value', count)
      count++
    alertify.notify('Added to cart. <i class="fas fa-shopping-cart"></i>', 'custom', 2)
  })
}) 
const BASE_URL = 'http://127.0.0.1:5500'
let modal = document.querySelector('.gameModal')
let hideModal = () => {
  modal.classList.remove('is-active')
  modal.classList.remove('opacityActive')
}
let showModal = (e) => {
  let id = parseInt(e.target.attributes[1].textContent)
   // ajax call 
  // jquery aktivirati modal is-active
 // filter => id
  $.ajax({
    type: 'GET',
    url: '../assets/json/dataJson.json',
    dataType: 'json',
    success:  (data) =>  {
      //filter
      console.log(data)
    let game = data.filter(game => id === game.id)[0]
    let gallery = ''
    game.screens.forEach(screen => {
      gallery += `<a data-fancybox="gallery" href="${screen}"><img src="${screen}"/></a>`
    })
      // ispisati kroz modal
      let content = 
                    `   
                    <div class="modal-background" onclick="hideModal()"></div>
                    <div class="modal-card">
                    <section class="modal-card-body">

                      <button class="delete modal-delete" onclick="hideModal()" aria-label="close"></button>
                      <div class="top">
                        <div>
                            <h1 class="title">${game.title}</h1>
                            <h2 class="subtitle">${game.devStudio}</h2>
                        </div>
                        <div>
                            <span class="tag is-link">${game.released}</span>
                            <span class="tag is-warning">${game.genre}</span>
                            <span class="tag is-primary price is-rounded">${game.price}</span>
                        </div>
                      </div>
                      <div class="content has-text-justified">
                        <p>${game.description}</p>
                      </div>
                      <hr>
                      <div>
                          <h1 class="title">Game Modes</h1>
                          <h2 class="subtitle">${game.modes}</h2>
                      </div>
                      <hr>
                      <div>
                          <h1 class="title">Publisher</h1>
                          <h2 class="subtitle">${game.publisher}</h2>
                      </div>
                      <hr>
                      <h1 class="title">Screenshots</h1>
                      <div class="game-gallery">
                          ${gallery}
                      </div>
                    </section>
                  </div>
                      `
                      modal.innerHTML = content
                      modal.classList.add('is-active')
                      setTimeout(() => {
                        modal.classList.add('opacityActive')
                      }, 100)
                      
                      // pop up modal is active
    }
  })

}
/*  */