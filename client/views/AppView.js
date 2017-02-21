// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    // this.model.on('ended:currentSong', function(model) {
    //   // obtain index of current song
    //   debugger;
    //   var index = this.collection.indexOf('currentSong');
    //   // set index ++ 
    //   // get new current song using library.at(index +1)
    //   var newSong = this.libraryView.at(index + 1);
    //   this.playerView.setSong(model.set('currentSong', newSong));
    // }, this);
  },

  render: function() {
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el
    ]);
  }

});
