var appClass = Marionette.Application.extend({
  region: '#app-body',
  onStart: function() {
    var main = this.getRegion();
    main.show( app.appView );
  }
});
var app = new appClass();
var AppView = Marionette.View.extend({
  regions: {
    navbody: '#nav-body'
  },
  template: '#app-view-template'
});
app.appView = new AppView();


$( document ).ready( function docReady() {
  app.start();
});
