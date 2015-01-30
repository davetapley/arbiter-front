import Ember from 'ember';

export default Ember.ObjectController.extend({
  actionsPartial: 'existingTranslationActions',

  isFirst: Ember.computed.equal('priority', 0),
  isRest: Ember.computed.not('isFirst'),

  actions: {
    changeRule: function() {
      this.set('rule', null);
    },

    addRule: function(type) {
      this.set('rule', this.store.createFragment(type));
    },
  }
});
