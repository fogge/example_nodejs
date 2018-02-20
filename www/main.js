  $(document).on('keyup', '#search', function(e){
    let movieHTMLRendering = "";
    e.preventDefault();
    let searchField = $('#search').val();

    if ($('#searchSelect').val() == 'Titel') {
      $.getJSON("/films/title/" + searchField, function(result){
        for (let i = 0; i < result.length; i++) {
          movieHTMLRendering += movieRender(result[i]);
        }
        $('.movieRendering').html(movieHTMLRendering);
      })

    } else if ($('#searchSelect').val() == 'Genre') {
        $.getJSON("/films/genre/" + searchField, function(result){
          for (let i = 0; i < result.length; i++) {
            movieHTMLRendering += movieRender(result[i]);
        }
          $('.movieRendering').html(movieHTMLRendering);
      })
    }


    });





function movieRender(movie) {
  return `
  <div class="row bg-dark text-light">
    <div class="col-2 m-2"><img src="${movie.posterurl}" class="img-fluid"></div>
    <div class="col-8 p-2">
      <h2 class="col-12">${movie.title}</h2>
      <ul>
        <li>Inspelningsår: ${movie.year}</li>
        <li>Genrer:  ${renderGenres(movie)}</li>
        <li>Längd: ${movie.duration}</li>
        <li>Orginaltitel: ${movie.originalTitle}</li>
        <li>IMDB-betyg: ${movie.imdbRating}</li>
        <li>Skådespelare: ${renderActors(movie)}</li>
      </ul>
    </div>
  </div>
  `
}

function renderActors(movie){
  let html = '';
  for (let i = 0; i < movie.actors.length; i++){
    html += movie.actors[i] + ', '
  }
  return html.slice(0, -2);
}


function renderGenres(movie){
  let html = '';
  for (let i = 0; i < movie.genres.length; i++){
    html += movie.genres[i] + ', '
  }
  return html.slice(0, -2);
}
