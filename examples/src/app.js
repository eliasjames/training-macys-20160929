var app = app || {};

var SongsCollection = Backbone.Collection;

app.songs = {
  SongsCollection: SongsCollection,
  SongClass: Backbone.Model.extend({
    defaults: function songClassDefaults() {
      return {
        artist: 'empty artist',
        genre: 'empty genre',
        title: 'empty title'
      }
    },
    initialize: function initSongClass() {
      this.songView = new app.songs.SongViewClass( { model: this } );
      $( '#songsList' ).append( this.songView.render().$el );
      app.songs.collections['default'].add( this );
    }
  }),
  SongViewClass: Backbone.View.extend({
    tagName: 'li',
    render: function() {
      this.$el.html( this.model.get( 'title' ) + ', ' +  this.model.get( 'artist' ) );
      return this;
    },
    initialize: function songClassInit() {
      this.collection = app.songs.collections['default'];
      this.listenTo( this.model, {
        'change': this.render,
        'destroy': this.remove
      });
    }
  }),
  collections: { 'default': new SongsCollection()  }
};

app.init = function appInit() {
  $( document ).ready( function docReady() {
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
      newSongModel = new app.songs.SongClass( addSongConfig ); 
    });
  });
};
