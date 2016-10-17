var app = app || new Marionette.Application();

app.SongModel = Backbone.Model.extend({
  defaults: function songModelDefaults() {
    return {
      artist: 'empty artist',
      genre: 'empty genre',
      title: 'empty title'
    }
  },
  initialize: function initSongModel() {
    app.songsCollection.add( this );
  }
});
app.SongsCollection = Backbone.Collection;
app.songsCollection = new app.SongsCollection();
app.SongView = Marionette.View.extend({
    deleteModel: function() {
      this.model.destroy();
      this.remove();
    },
    tagName: 'li',
    template: '#song-view-template',
    events: {
      'click input.delete': 'deleteModel'
    }
  });
app.SongsList = Marionette.CollectionView.extend({
    tagName: 'ul',
    childView: app.SongView,
    collection: app.songsCollection
  });
app.songsList = new app.SongsList();

app.on('start', function appInit() {
  app.songsList.render();
});
