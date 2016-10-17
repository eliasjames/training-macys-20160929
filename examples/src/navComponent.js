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
    navAction: 'about',
    navBodyViewConf: 'About'
  },
  {
    navName: 'add a song',
    navAction: 'add-song',
    navBodyViewConf: {
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
    }
  },
  {
    navName: 'songs',
    navAction: 'list-songs',
    navBodyViewConf: 'SongsList'
  }
]);
app.navView = Marionette.View.extend({
  deleteModel: function() {
    this.model.destroy();
    this.remove();
  },
  tagName: 'li',
  template: '#nav-view-template',
  events: {
    'click a': 'navClick'
  },
  navClick: function navClick( e ) {
    e.preventDefault();
    var renderableConf = this.model.attributes.navBodyViewConf;
    var renderableView;

    if ( typeof renderableConf === 'string' ) {
      renderableView = new app.appViews[ renderableConf ]();
    } else if ( typeof renderableConf === 'object' ) {
      renderableView = new app.NavBodyView( this.model.attributes.navBodyViewConf ); 
    }
    app.appView.showChildView( 'navbody', renderableView );
  }
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
