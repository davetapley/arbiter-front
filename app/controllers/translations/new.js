import Ember from 'ember';

export default Ember.ObjectController.extend({
  actionsPartial: 'newTranslationActions',

  valid: Ember.computed.and('hasRule', 'rule.valid', 'target'),
  addDisabled: Ember.computed.not('valid'),

  actions: {
    changeRule: function() {
      this.set('rule', null);
    },

    addRule: function(type) {
      this.set('rule', this.store.createFragment(type));
    },

    add: function() {
      var translations = this.controllerFor('translations').get('model');

      this.set('priority', translations.get('length'));
      translations.pushObject(this.get('model'));
      this.transitionTo('translations');
    }
  }
});
