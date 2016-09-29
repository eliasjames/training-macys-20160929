var app = app || {};

app.songs = {
  SongClass: Backbone.Model.extend({
    defaults: function songClassDefaults() {
      return {
        artist: 'empty artist',
        genre: 'empty genre',
        title: 'empty title'
      }
    }
  })
};

app.init = function appInit() {
  $( document ).ready( function docReady() {
    $( '#addSong' ).on('submit', function addSongSubmit() {
      var formArray,
        addSongConfig,
        newSongModel;

      event.preventDefault();

      formArray = $( this ).serializeArray();
      addSongConfig = {
        artist: formArray[0].value,
        genre: formArray[1].value,
        title: formArray[2].value,
      };
      newSongModel = new app.songs.SongClass( addSongConfig ); 
      console.log( newSongModel );
    });
  });
};
