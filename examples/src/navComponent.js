var app = app || new Marionette.Application();

app.navModel = Backbone.Model.extend({
  initialize: function initNavModel() {
    app.navCollection.add( this );
  }
});
app.NavCollection = Backbone.Collection;
app.navCollection = new app.NavCollection();
app.NavBodyView = Marionette.View.extend({});
app.navCollection.add([
  {
    navName: 'about',
    navAction: 'about'
  },
  {
    navName: 'add a song',
    navAction: 'add-song'
  },
  {
    navName: 'songs',
    navAction: 'songs'
  }
]);
app.navView = Marionette.View.extend({
  deleteModel: function() {
    this.model.destroy();
    this.remove();
  },
  tagName: 'li',
  template: '#nav-view-template'
});
app.NavList = Marionette.CollectionView.extend({
  tagName: 'ul',
  childView: app.navView,
  collection: app.navCollection
});
app.navList = new app.NavList();

app.on('start', function appInit() {
  app.navList.render();
  $( 'nav' ).append( app.navList.$el );
});
