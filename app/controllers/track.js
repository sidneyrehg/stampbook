import Ember from 'ember';

export default Ember.Controller.extend({

  sortProperties: ['title:asc'],
  sortedItems: Ember.computed.sort('model', 'sortProperties'),
  
  totalCount: Ember.computed.alias('model.length'),
  completeCount: Ember.computed('model.@each.complete', function() {
    return this.get('model').filterBy('complete', true).get('length');
  }),

});
