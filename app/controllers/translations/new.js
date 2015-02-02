import Ember from 'ember';
import Translation from '../translation';

export default Translation.extend({
  actionsPartial: 'newTranslationActions',

  valid: Ember.computed.and('hasRule', 'rule.valid', 'targetURL'),
  addDisabled: Ember.computed.not('valid'),

  actions: {
    add: function() {
      var translations = this.controllerFor('translations').get('model');

      this.set('priority', translations.get('length'));
      translations.pushObject(this.get('model'));
      this.transitionTo('translations');
    }
  }
});
