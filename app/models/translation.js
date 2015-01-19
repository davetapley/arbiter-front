import DS from 'ember-data';

export default DS.ModelFragment.extend({
  priority: DS.attr('number'),
  target: DS.attr(),
  active: DS.attr('boolean'),
  rule: DS.hasOneFragment('rule', { polymorphic: true, typeKey: '$type' }),
});
