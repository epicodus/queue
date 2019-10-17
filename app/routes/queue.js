/* globals moment */
import Ember from 'ember';

var QueueRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('ticket', {
      orderBy: 'createdAt',
      startAt: moment().startOf('day').valueOf()
    }, function(ticket) {
      return ticket.get('open');
    });
  },

  currentTimeMetronome: function() {
    var interval = 60000; // check once per minute
    Ember.run.later(this, function() {
      var minutes = parseInt(moment().format('mm'));
      if (minutes < 15 || (minutes >= 30 && minutes < 45)) {
        $('.page-header').css('background-color', 'rgb(0, 179, 180)');
      }  else {
        $('.page-header').css('background-color', 'rgb(242, 0, 143)');
      }
      this.currentTimeMetronome();
    }, interval);
  }.on('init')
});

export default QueueRoute;
