// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add',this.enqueue,this);
    this.on('dequeue',this.dequeue,this);
    this.on('ended',this.playNext,this);
    // this.on('remove',this.playFirst,this);
  },

  enqueue: function(song){
    if (this.length === 1){
      this.playFirst(song);
    }
  },

  playFirst: function(){
    // this.first().play();
    // console.log("I am playing!!!");
    this.at(0).play();
  },

  playNext: function(){

  }

});
