import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    closeTicket: function() {
      this.get('model').setProperties({'closedAt': new Date(), 'open': false}).save();
    }
  }
});
