import Ember from 'ember';

export default Ember.ObjectController.extend({
  actionsPartial: 'newTranslationActions',

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
