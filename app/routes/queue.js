/* globals moment */
import Ember from 'ember';

var QueueRoute = Ember.Route.extend({
  init: function() {
    $('.page-header').css('background-color', 'rgb(0, 179, 180)');
  },
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
      var currentColor = $('.page-header').css('background-color');
      var newColor = currentColor === 'rgb(242, 0, 143)' ? 'rgb(0, 179, 180)' : 'rgb(242, 0, 143)';
      var minutes = moment().format('mm');
      if (minutes === '00' || minutes === '15' || minutes === '30' || minutes === '45') {
        $('.page-header').css('background-color', newColor);
      }
      this.currentTimeMetronome();
    }, interval);
  }.on('init')
});

export default QueueRoute;
