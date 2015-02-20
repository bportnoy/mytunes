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

  dequeue: function(song){
    if (this.first() === song){
      this.playNext();
    }
    else this.remove(song);
  },

  playFirst: function(){
    this.first().play();
    // console.log("I am playing!!!");
    // this.at(0).play();
  },

  playNext: function(){
    this.shift();
    if (this.length > 0){
      this.playFirst();
    } else{
      this.trigger('stop');
    }

  }

});
