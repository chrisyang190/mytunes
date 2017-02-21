// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  
  initialize: function() {
    this.model.on('change', function() {
      this.render();
    }, this);

  },
  render: function() {
    return this.$el;
  }
});

