import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    addProfile: function() {
      var displayName = this.get('displayName');
      var profileId = this.get('profileId');
      var self = this;

      // Create new item
      var newProfile = this.store.createRecord('profile', {
        displayName: displayName,
        profileId: profileId,
        completedTracks: ''
      });

      // Save to Database
      newProfile.save();
      console.log('New Profile Added');
      // Clear Form
      this.setProperties({
        displayName: '',
        profileId: ''
      });

      // Redirect to track route
      self.transitionToRoute('track');

    }
  }

});
