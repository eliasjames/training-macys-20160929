app.AppRouter = Marionette.AppRouter.extend({
  routes: {
    '': 'home',
    'about': 'about',
    'songs': 'songs'
  },
  about: function about() {
    app.appView.showAbout();
  },
  home: function home() {
    app.appView.render();
    $('body').html( app.appView.$el );
  },
  songs: function songs() {
    app.appView.showSongs();
  }
});
app.appRouter = new app.AppRouter();
