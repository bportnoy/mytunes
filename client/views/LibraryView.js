// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'div',
  className: 'library',

  initialize: function() {
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<div class="libraryHeader">Library</div>').append(this.collection.map(function(song){
        return $('<div class="libraryRow"></div>').append(((new LibraryEntryView({model: song}).render()).add(new EnqueueButtonView({model: song}).render())));
        // return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
