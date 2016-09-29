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
  SongViewClass: Backbone.View.extend({
    tagName: 'li',
    render: function() {
      this.$el.html( this.model.get( 'title' ) + ', ' +  this.model.get( 'artist' ) );
      return this;
    },
    initialize: function songClassInit() {
      this.listenTo( this.model, {
        'change': this.render
      })
    }
  }),
  songViewsArray: []
};

app.init = function appInit() {
  $( document ).ready( function docReady() {
    $( '#addSong' ).on('submit', function addSongSubmit() {
      var formArray,
        addSongConfig,
        newSongModel,
        $el,
        songView;

      event.preventDefault();

      formArray = $( this ).serializeArray();
      addSongConfig = {
        artist: formArray[0].value,
        genre: formArray[1].value,
        title: formArray[2].value,
      };
      newSongModel = new app.songs.SongClass( addSongConfig ); 
      songView = new app.songs.SongViewClass( { model: newSongModel } );
      $( '#songsList' ).append( songView.render().el );
      app.songs.songViewsArray.push( songView );
    });
  });
};
