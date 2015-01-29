import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createFragment('translation', {
    });
  },

  actions: {
    changeRule: function() {
      var newTranslation = this.controller.get('model');
      newTranslation.set('rule', null);
    },
    addRule: function(type) {
      var newTranslation = this.controller.get('model');
      newTranslation.set('rule', this.store.createFragment(type));
    },
    add: function() {
      var newTranslation = this.controller.get('model');
      var translations = this.controllerFor('translations').get('model');

      newTranslation.set('priority', translations.get('length'));
      translations.pushObject(newTranslation);
      this.transitionTo('translations');
    }
  }
});
