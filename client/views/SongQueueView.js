// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',
  
  initialize: function() {

    this.collection.on('add', function() {
      debugger;
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

    this.$el.html('<th>Song Queue</th>').append(
      //debugger;
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
    debugger;
    return this.$el;
  }

});
