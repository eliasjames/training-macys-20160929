app.appViews = {
  About: Marionette.View.extend({
    template: '#about-template'
  }),
  Home: Marionette.View.extend({
    template: '#home-template'
  }),
  AddSong: Marionette.View.extend({
    events: {
    'click #submit': function addSong( e ) {
      var formArray,
        addSongConfig,
        newSongModel,
        songView;

      e.preventDefault();

      formArray = $( '#add-song' ).serializeArray();
      addSongConfig = {
        artist: formArray[0].value,
        genre: formArray[1].value,
        title: formArray[2].value,
      };
      new app.SongModel( addSongConfig );
      app.appView.showSongs();
    },
    'submit': function() { debugger; }
    },
    template: '#add-song-template'
  })
};
