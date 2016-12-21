import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    editItem: function(id) {
      var self = this;
      var title = this.get('model.title');
      var description = this.get('model.description');

      this.store.findRecord('track', id).then(function(track) {
        track.set('title', title);
        track.set('description', description);

        track.save();
        self.transitionToRoute('track');
      });

    },

    completeItem: function(id) {
      var self = this;
      var complete = this.get('model.complete');

      this.store.findRecord('track', id).then(function(track) {
        if (complete === false) {
          track.set('complete', true);
        }
        else {
          track.set('complete', false);
        }

        track.save();
        self.transitionToRoute('track');

      });
    },

    deleteItem: function(id) {
      var self = this;

      this.store.findRecord('track', id).then(function(track) {

        track.deleteRecord();
        track.get('isDeleted');

        track.save();
        self.transitionToRoute('track');
      });

    }

  }

});
