import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    addItem: function() {
      var title = this.get('title');
      var description = this.get('description');
      var self = this;

      // Create new item
      var newItem = this.store.createRecord('track', {
        title: title,
        description: description
      });

      // Save to Database
      newItem.save();
      console.log('New Item Added');
      // Clear Form
      this.setProperties({
        title: '',
        description: ''
      });

      // Redirect to track route
      self.transitionToRoute('track');

    }
  }

});
