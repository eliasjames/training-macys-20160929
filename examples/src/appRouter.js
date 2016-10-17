app.AppRouter = Marionette.AppRouter.extend({
  controller: app.appView,
  appRoutes: {
    '': 'showAbout',
    'about': 'showAbout',
    'songs': 'showSongs'
  }
});
app.appRouter = new app.AppRouter();
