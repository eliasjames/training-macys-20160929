app.AppRouter = Marionette.AppRouter.extend({
  controller: app.appView,
  routes: {
    '': 'home',
    'about': 'showAbout',
    'songs': 'showSongs'
  },
  home: function home() {
    app.appView.render();
    $('body').html( app.appView.$el );
  },
});
app.appRouter = new app.AppRouter();
