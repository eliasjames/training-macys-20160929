var AppRouter = Marionette.AppRouter.extend({
  routes: {
    '': 'home',
    'about': 'about',
    'songs': 'songs'
  },
  about: function about() {
    $('body').html('<h2>about</h2>');
  },
  home: function home() {
    $('body').html('<h2>home</h2>');
  },
  songs: function songs() {
    $('body').html( app.songsList.$el );
  }
});
var appRouter = new AppRouter();

Backbone.history.start();
