var appClass = Marionette.Application.extend({
  region: '#app-body',
  onStart: function() {
    var main = this.getRegion();
    main.show( app.appView );
    Backbone.history.start();
  }
});
var app = new appClass();
var AppView = Marionette.View.extend({
  regions: {
    navbody: '#nav-body'
  },
  showAbout: function showAbout() {
    this.showChildView( 'navbody', new app.appViews.About() );
  },
  showAddSong: function showAddSong() {
    this.showChildView( 'navbody', new app.appViews.AddSong() );
  },
  showSongs: function showSongs() {
    this.showChildView( 'navbody', new app.appViews.SongsList() );
  },
  template: '#app-view-template'
});
app.appView = new AppView();

$( document ).ready( function docReady() {
  app.start();
});
