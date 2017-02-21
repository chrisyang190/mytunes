// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', function() {
      this.render();
    }, this);

    this.collection.on('remove', function() {
      this.render();
    }, this);
  },

  render: function() {
    //SongQueueEntryView.prototype.render();
    //loop through models in collection and create entryview for each model
    return this.$el;
  }

});
