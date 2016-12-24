import Ember from 'ember';

export default Ember.Controller.extend({

  sortProperties: ['title:asc'],
  sortedItems: Ember.computed.sort('model', 'sortProperties'),

});
