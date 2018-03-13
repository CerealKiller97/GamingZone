const BASE = 'https://cerealkiller97.github.io/GamingZone'
const container = document.getElementById('gameContainer')

$(document).ready(function () {
  setTimeout(() => {
    alertify.prompt('Gaming Zone Survey', 'What is your favourite game?', '', (evt, value) => {
      if (value != "") {
        alertify.notify('Thank you.', 'customSuccess', 2)
      } else {
        alertify.notify('Ahhh.Ok.Next time.', 'customDanger', 2)
      }

    }, () => {
      alertify.notify('Ahhh.Ok.Next time.', 'customDanger', 2)
    })
  }, 10000)

  /*  let showModal = (id) => {
     alert(id)
   } */

  $.ajax({
    url: `${BASE}/assets/json/games.json`,
    dataType: 'json',
    success: (data) => {
      let content = ``
      container.innerHTML = ''
      data.forEach(game => {
        let parsedDate = new Date(game.released) //image is-16by9 figure
        container.innerHTML += `
          <div class="column game is-one-fifth">
            <div class="card">
              <div class="card-image">
                <figure>
                  <img class="equal" src="${game.image}" alt="${game.title}">
                </figure>
              </div>
              <div class="card-content has-text-centered">
                <h1 class="title is-size-6">${game.title}</h1>
                <h2 class="subtitle is-size-6">${game.devStudio}</h2>
                <span class="tag is-link">${game.released}</span>
                <span class="tag is-warning">${game.genre}</span>
                <span class="tag is-primary price is-rounded">${game.price}</span>
              </div>
              <div class="content has-text-centered">
                <a class="button forModal is-uppercase is-info is-inverted is-small has-text-weight-bold" data-game-id="${game.id}" >Read more</a>
                <a class="button cart is-uppercase is-primary is-inverted is-small has-text-weight-bold">Add to cart</a>
              </div>
            </div>
          </div>
          `
      })
      /*  $('#gameContainer').append(content) */
    }
  })
})
/** FILTERS */

const platformChecks = document.querySelectorAll('.checkboxGenre')
let filters = []
platformChecks.forEach(check => {
  filters.push({
    param: check.value,
    checked: check.checked // OMILJENA LINIJA
  })
})

platformChecks.forEach(check => {
  check.addEventListener('change', () => {
    // Nadjemo odgovarajuci objekat u filters[]
    const filter = filters.filter(filter => check.value === filter.param)[0] // NAJOMILJENIJA LINIJA
    filter.checked = !filter.checked // promenimmo njegov status

    // AJAX sa PROMENJENIM filtersima
    $.ajax({
      url: `${BASE}/assets/json/games.json`,
      dataType: 'json',
      success: (data) => {
        let content = ``
        container.innerHTML = ''
        let parsedData = []
        // PARSIRANJE PODATAKA
        filters.forEach(filter => {
          if (filter.checked) {
            let res = data.filter(game => game.platform === filter.param)
            res.forEach(game => {
              parsedData.push(game)
            })
          }
        })
        let checkedFilters = filters.filter(filter => filter.checked)
        if (checkedFilters.length) {
          parsedData.forEach(game => {
            container.innerHTML += `
                <div class="column game is-one-fifth">
                  <div class="card">
                    <div class="card-image">
                      <figure class="">
                        <img class="equal" src="${game.image}" alt="${game.title}">
                      </figure>
                    </div>
                    <div class="card-content has-text-centered">
                      <h1 class="title is-size-6">${game.title}</h1>
                      <h2 class="subtitle is-size-6">${game.devStudio}</h2>
                      <span class="tag is-link">${game.released}</span>
                      <span class="tag is-warning">${game.genre}</span>
                      <span class="tag is-primary price is-rounded">${game.price}</span>
                    </div>
                    <div class="content has-text-centered">
                      <a class="button forModal is-uppercase is-info is-inverted is-small has-text-weight-bold" data-game-id="${game.id}" >Read more</a>
                      <a class="button cart is-uppercase is-primary is-inverted is-small has-text-weight-bold">Add to cart</a>
                    </div>
                  </div>
                </div>
                `
          })
        } else {
          data.forEach(game => {
            container.innerHTML += `
                <div class="column game is-one-fifth">
                  <div class="card">
                    <div class="card-image">
                      <figure class="">
                        <img class="equal" src="${game.image}" alt="${game.title}">
                      </figure>
                    </div>
                    <div class="card-content has-text-centered">
                      <h1 class="title is-size-6">${game.title}</h1>
                      <h2 class="subtitle is-size-6">${game.devStudio}</h2>
                      <span class="tag is-link">${game.released}</span>
                      <span class="tag is-warning">${game.genre}</span>
                      <span class="tag is-primary price is-rounded">${game.price}</span>
                    </div>
                    <div class="content has-text-centered">
                      <a class="button forModal is-uppercase is-info is-inverted is-small has-text-weight-bold" data-game-id="${game.id}" >Read more</a>
                      <a class="button cart is-uppercase is-primary is-inverted is-small has-text-weight-bold">Add to cart</a>
                    </div>
                  </div>
                </div>
                `
          })
        }

        /*  $('#gameContainer').append(content) */
      }
    })
  })
})

/* SEARCH */
let searchBtn = document.querySelector('#searchBtn')
let searchGames = () => {
  let searchTerm = document.querySelector('#searchField')
  if (searchTerm.value.toLowerCase()) {
    $.ajax({
      url: `${BASE}/assets/json/games.json`,
      dataType: 'json',
      success: (data) => {
        let result = data.filter(game => game.title.toLowerCase().startsWith(searchTerm.value.toLowerCase()))
        console.log(result)

        let content = ``
        container.innerHTML = ''

        result.forEach(game => {
          container.innerHTML += `
            <div class="column game is-one-fifth">
              <div class="card">
                <div class="card-image">
                  <figure class="">
                    <img class="equal" src="${game.image}" alt="${game.title}">
                  </figure>
                </div>
                <div class="card-content has-text-centered">
                  <h1 class="title is-size-6">${game.title}</h1>
                  <h2 class="subtitle is-size-6">${game.devStudio}</h2>
                  <span class="tag is-link">${game.released}</span>
                  <span class="tag is-warning">${game.genre}</span>
                  <span class="tag is-primary price is-rounded">${game.price}</span>
                </div>
                <div class="content has-text-centered">
                  <a class="button forModal is-uppercase is-info is-inverted is-small has-text-weight-bold" data-game-id="${game.id}" >Read more</a>
                  <a class="button cart is-uppercase is-primary is-inverted is-small has-text-weight-bold">Add to cart</a>
                </div>
              </div>
            </div>
            `
        })
      }
    })
  } else {
    alertify.set('notifier', 'position', 'top-center');
    alertify.notify('No result.Please try again', 'customDanger', 2)
    data.forEach(game => {
      container.innerHTML += `
        <div class="column game is-one-fifth">
          <div class="card">
            <div class="card-image">
              <figure class="">
                <img class="equal" src="${game.image}" alt="${game.title}">
              </figure>
            </div>
            <div class="card-content has-text-centered">
              <h1 class="title is-size-6">${game.title}</h1>
              <h2 class="subtitle is-size-6">${game.devStudio}</h2>
              <span class="tag is-link">${game.released}</span>
              <span class="tag is-warning">${game.genre}</span>
              <span class="tag is-primary price is-rounded">${game.price}</span>
            </div>
            <div class="content has-text-centered">
              <a class="button forModal is-uppercase is-info is-inverted is-small has-text-weight-bold" data-game-id="${game.id}" >Read more</a>
              <a class="button cart is-uppercase is-primary is-inverted is-small has-text-weight-bold">Add to cart</a>
            </div>
          </div>
        </div>
        `
    })
  }

}

window.onload = () => {
  searchBtn.addEventListener('click', searchGames)
}