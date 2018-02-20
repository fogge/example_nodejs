let arrayOfMovies = [];

$(document).on('submit', '.form-inline', function(e){
  e.preventDefault();
  let searchField = $('#search').val();
  $.getJSON("/films/title/" + searchField, function(result){
    for (let i = 0; i < result.length; i++) {
      arrayOfMovies.push(result[i]);
    }
  });
})
