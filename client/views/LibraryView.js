// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    console.log('COLLECTION IN LIBRARY', this.collection);

    this.collection.on('reset', function(model) {
      this.render();
      // debugger;
    }, this);
  //   $.ajax({
  // // This is the url you should use to communicate with the parse API server.
  //     url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',
  //     type: 'GET',
  //     data: {},
  //     contentType: 'application/json',
  //     success: function (data) {
  //       console.log('fetched');
  //       debugger;
  //       libraryViewContext.render();
  //     },
  //     error: function (data) {
  //       // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
  //       console.error('errored out on fetch', data);
  //       console.log('failed in library view');
  //     }
  //   });

   // this.fetch();
    


  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    );
  },

  /*fetch: function() {
    debugger;
    var libraryViewContext = this; 
    $.ajax({
  // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',
      type: 'GET',
      data: {},
      contentType: 'application/json',
      success: function (data) {
        console.log('fetched library here');
        debugger;
        libraryViewContext.render();
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('errored out on fetch', data);
        console.log('failed in library view');
      }
    });
  }*/
});
