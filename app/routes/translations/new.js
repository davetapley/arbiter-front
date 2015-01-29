import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'translation',

  model: function() {
    return this.store.createFragment('translation', {
    });
  },

  actions: {
    add: function() {
      var newTranslation = this.controller.get('model');
      var translations = this.controllerFor('translations').get('model');

      newTranslation.set('priority', translations.get('length'));
      translations.pushObject(newTranslation);
      this.transitionTo('translations');
    }
  }
});
