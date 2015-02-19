// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var EnqueueButtonView = Backbone.View.extend({

  // tagName: 'tr',
  tagName: 'div',
  className: 'enqueueButton',

  // template: _.template('+'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html('+');
  }

});
