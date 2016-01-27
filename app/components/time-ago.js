/* globals moment */
import Ember from 'ember';

var TimeAgo = Ember.Component.extend({
  now: Date.now(),

  didInsertElement: function() {
    this.startGlobalTime();
  },

  willDestroyElement: function() {
    this._super.apply(this, arguments);
    return Ember.run.cancel(this.get('nextTime'));
  },

  startGlobalTime: function() {
    this.set('now', new Date());
    var nextTime = Ember.run.later(this, this.startGlobalTime, 2000);
    this.set('nextTime', nextTime);
  },

  timeAgo: function() {
    moment.relativeTimeThreshold('m', 999);
    moment.relativeTimeThreshold('s', 1);
    moment.locale('en', {
      relativeTime: {
          future: 'in %s',
          past: '%s',
          s: '1m',
          m: '1m',
          mm: '%dm',
          h: '1h',
          hh: '%dh',
          d: '1d',
          dd: '%dd',
          M: '1 month',
          MM: '%d months',
          y: '1 year',
          yy: '%d years'
      }
    });
    return moment(this.get('time')).fromNow();
  }.property('now'),

  formattedTime: function() {
    return moment(this.get('time')).calendar();
  }.property()
});

export default TimeAgo;
