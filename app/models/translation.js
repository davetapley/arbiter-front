import Ember from 'ember';
import DS from 'ember-data';

export default DS.ModelFragment.extend({
  priority: DS.attr('number'),
  target: DS.attr('string'),
  rule: DS.hasOneFragment('rule', { polymorphic: true, typeKey: '$type' }),

  hasRule: Ember.computed.bool('rule'),
  targetURL: Ember.computed.alias('target'),
});
