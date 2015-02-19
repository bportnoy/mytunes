// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add',this.playFirst,this);
  },

  playFirst: function(){
    if (this.first()) this.first().play();
  }

});
