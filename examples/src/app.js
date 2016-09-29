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
  }),
  songModelsArray: []
};

app.init = function appInit() {
  $( document ).ready( function docReady() {
    $( '#addSong' ).on('submit', function addSongSubmit() {
      var formArray,
        addSongConfig,
        newSongModel,
        $el,
        songIndex;

      event.preventDefault();

      formArray = $( this ).serializeArray();
      addSongConfig = {
        artist: formArray[0].value,
        genre: formArray[1].value,
        title: formArray[2].value,
      };
      newSongModel = new app.songs.SongClass( addSongConfig ); 
      songIndex = app.songs.songModelsArray.push( newSongModel );

      $el = $( '<li/>', {
        id: newSongModel.cid,
        html: newSongModel.get('title') + ', ' + newSongModel.get('artist')
      }).appendTo( '#songsList' );
      console.log( songIndex, app.songs.songModelsArray );
      app.songs.songModelsArray[ songIndex - 1 ].set( { $el: $el } );

    });
  });
};
