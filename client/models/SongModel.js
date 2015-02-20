// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    console.log("I have been called damnit");
    this.trigger('play', this);
  },

  enqueue: function(){
    // console.log("in the queue!");
    this.trigger('enqueue',this);
  },

  dequeue: function(){
    this.trigger('dequeue',this);
  },

  ended: function(){
    this.trigger('ended',this);
  }

});
