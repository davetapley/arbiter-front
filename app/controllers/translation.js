import Ember from 'ember';

export default Ember.ObjectController.extend({
  actionsPartial: 'existingTranslationActions',

  actions: {
    changeRule: function() {
      this.set('rule', null);
    },

    addRule: function(type) {
      this.set('rule', this.store.createFragment(type));
    },
  }
});
