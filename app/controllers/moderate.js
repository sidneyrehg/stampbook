import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    addItem: function() {
      var title = this.get('title');
      var email = this.get('email');
      var description = this.get('description');
      var self = this;

      // Create new item
      var newItem = this.store.createRecord('members', {
        title: title,
        description: description,
        email: email
      });

      // Save to Database
      newItem.save();
      console.log('New Item Added');
      // Clear Form
      this.setProperties({
        title: '',
        description: '',
        email: ''
      });

      // Redirect to members route
      self.transitionToRoute('members');

    }
  }

});
