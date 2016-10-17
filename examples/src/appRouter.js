app.AppRouter = Marionette.AppRouter.extend({
  routes: {
    '': 'home',
    'about': 'about',
    'songs': 'songs'
  },
  about: function about() {
    $('body').html('<h2>about</h2>');
  },
  home: function home() {
    app.appView.render();
    $('body').html( app.appView.$el );
  },
  songs: function songs() {
    $('body').html( app.songsList.$el );
  }
});
app.appRouter = new app.AppRouter();
