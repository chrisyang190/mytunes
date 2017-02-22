// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
   
    this.on('add', function(e) {
      debugger;
      if (this.length < 2) {
        this.playFirst();
      } 

      // this.view.render();


      // e.enqueue();
    
    }, this);

    this.on('ended', function() {
      this.shift();
      if (this.length !== 0) {
        this.playFirst(); 
      }
    }, this);

    this.on('dequeue', function(event) {
      //console.log(event);
      debugger;
      this.remove(event);
    }, this);

    this.on('enqueue', function(event) {
      //console.log(event);
      // debugger;
      this.add(event);
    }, this);
  
  },


  playFirst: function(songData) {
    this.first().play();

  },


});