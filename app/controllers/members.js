import Ember from 'ember';
import computedFilterByQuery from 'ember-cli-filter-by-query';

export default Ember.Controller.extend({

  actions: {
    resetPage: function() {
      this.set('page', 1);
    }
  },

  sortProperties: ['title:asc'],
  sortedItems: Ember.computed.sort('model', 'sortProperties'),

  query: null,
  filteredContent: computedFilterByQuery(
      'sortedItems',
      ['title', 'email', 'description', 'stamps'],
      'query',
      { conjunction: 'and', sort: false}
    ),

  totalCount: Ember.computed.alias('model.length'),
  completeCount: Ember.computed('model.@each.complete', function() {
    return this.get('model').filterBy('complete', true).get('length');
  }),

});
