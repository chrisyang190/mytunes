// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    var theSongs = this;
    // debugger;
    console.log('song collection outside of ajax', theSongs);
    $.ajax({

  // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',
      // http://parse.CAMPUS.hackreactor.com/mytunes/classes/songs
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {
        console.log('song fetched');
        console.log('data results', data.results);
        console.log('song collection INSIDE ajax', theSongs);
        data.results.forEach(function(obj) {
          theSongs.add(obj);
        });
        //this.trigger('update', theSongs);
        theSongs.reset(theSongs.models);
         // debugger;
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('errored out on fetch', data);
        // debugger;
      }
    });
  }

});