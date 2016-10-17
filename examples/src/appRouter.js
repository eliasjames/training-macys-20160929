app.AppRouter = Marionette.AppRouter.extend({
  controller: app.appView,
  appRoutes: {
    '': 'showAbout',
    'about': 'showAbout',
    'add-song': 'showAddSong',
    'songs': 'showSongs'
  }
});
app.appRouter = new app.AppRouter();
