import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    editItem: function(id) {
      var self = this;
      var title = this.get('model.title');
      var description = this.get('model.description');

      this.store.findRecord('members', id).then(function(members) {
        members.set('title', title);
        members.set('description', description);

        members.save();
        self.transitionToRoute('members');
      });

    },

    completeItem: function(id) {
      var self = this;
      var complete = this.get('model.complete');

      this.store.findRecord('members', id).then(function(members) {
        if (complete === false) {
          members.set('complete', true);
        }
        else {
          members.set('complete', false);
        }

        members.save();
        self.transitionToRoute('members');

      });
    },

    deleteItem: function(id) {
      var self = this;

      this.store.findRecord('members', id).then(function(members) {

        members.deleteRecord();
        members.get('isDeleted');

        members.save();
        self.transitionToRoute('members');
      });

    }

  }

});
