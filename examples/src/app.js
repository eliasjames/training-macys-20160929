var app = new Marionette.Application();

$( document ).ready( function docReady() {
  app.start();
  $( '#addSong' ).on('submit', function addSongSubmit() {
    var formArray,
      addSongConfig,
      newSongModel,
      songView;

    event.preventDefault();

    formArray = $( this ).serializeArray();
    addSongConfig = {
      artist: formArray[0].value,
      genre: formArray[1].value,
      title: formArray[2].value,
    };
    newSongModel = new app.SongModel( addSongConfig ); 
  });
});
