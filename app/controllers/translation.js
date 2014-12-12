import Ember from 'ember';

export default Ember.ObjectController.extend({
  rulePartial: function() {
    return this.get('rule_type').toLowerCase();
  }.property('model'),

  targetURL: function() {
    return this.get('model.target');
  }.property('model.target'),
});
