import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('help', { path: '/' });
  this.route('ticket', { path: '/ticket/:ticket_id' });
  this.route('queue', function() {
    this.resource('ticket-details', { path: '/ticket-details/:ticket_id' });
  });
  this.route('statistics');
});

export default Router;
