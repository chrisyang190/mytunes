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
    // debugger;÷
    //SongQueueEntryView.prototype.render();
    //loop through models in collection and create entryview for each model
    // this.collection.models.forEach(function(model) {
    //   var SongQueueEntryViews = new SongQueueEntryView (model);
    // });
    this.$el.children().detach();

    this.$el.html('<th>SongQueue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
    return this.$el;
  }

});
