import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  email: DS.attr('string'),
  stamps: DS.attr('number'),
  description: DS.attr('string'),
  complete: DS.attr('boolean')
});
