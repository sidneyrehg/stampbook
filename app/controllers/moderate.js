import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    addItem: function() {
      var title = this.get('title');
      var email = this.get('email');
      var stamps = this.get('stamps');
      var description = this.get('description');
      var self = this;

      // Create new item
      var newItem = this.store.createRecord('members', {
        title: title,
        email: email,
        description: description,
        stamps: stamps
      });

      // Save to Database
      newItem.save();
      console.log('New Item Added');
      // Clear Form
      this.setProperties({
        title: '',
        description: '',
        email: '',
        stamps: ''
      });

      // Redirect to members route
      self.transitionToRoute('members');

    }
  }

});
