import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('track', function() {});
  this.route('moderate');
  this.route('edit', {path: '/edit/:track_id'});
});

export default Router;
