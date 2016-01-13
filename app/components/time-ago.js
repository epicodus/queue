/* globals moment */
import Ember from 'ember';

var TimeAgo = Ember.Component.extend({
  now: Date.now(),

  didInsertElement: function() {
    this.startGlobalTime();
  },

  startGlobalTime: function() {
    this.set('now', new Date());
    Ember.run.later(this, this.startGlobalTime, 2000);
  },

  timeAgo: function() {
    moment.relativeTimeThreshold('m', 999);
    moment.relativeTimeThreshold('s', 1);
    moment.locale('en', {
      relativeTime : {
          past:   "%s",
          s:  "1",
          m:  "1",
          mm: "%dm"
      }
    });
    return moment(this.get('time')).fromNow();
  }.property('now'),

  formattedTime: function() {
    return moment(this.get('time')).calendar();
  }.property()
});

export default TimeAgo;
