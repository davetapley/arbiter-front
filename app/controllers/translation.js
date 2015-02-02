import Ember from 'ember';

export default Ember.ObjectController.extend({
  actionsPartial: 'existingTranslationActions',

  isFirst: Ember.computed.equal('priority', 0),
  isRest: Ember.computed.not('isFirst'),

  ruleTypes: ['always', 'period'],
  newRuleType: null,

  init: function () {
    this._super();
    this.set('newRuleType', this.get('rule.type'));
  },

  updateRule: function() {
    var newType = this.get('newRuleType');
    if(newType) {
      this.set('rule', this.store.createFragment(newType));
    } else {
      this.set('rule', null);
    }
  }.observes('newRuleType')
});
