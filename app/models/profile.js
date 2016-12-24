import DS from 'ember-data';

export default DS.Model.extend({
  displayName: DS.attr('string'),
  profileId: DS.attr('number'),
  completedTracks: DS.attr()
});
