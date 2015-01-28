import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    changeRule: function() {
      this.set('rule', null);
    },

    addRule: function(type) {
      this.set('rule', this.store.createFragment(type));
    },
  }
});
