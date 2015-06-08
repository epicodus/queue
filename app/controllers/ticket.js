import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    closeTicket: function() {
      this.get('model').setProperties({'closedAt': new Date(), 'open': false}).save();
    }
  }
});
