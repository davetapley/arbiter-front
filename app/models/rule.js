import DS from 'ember-data';

export default DS.ModelFragment.extend({
  $type: DS.attr(),
  partial: function() {
    return this.get('$type').replace(/Rule/, '').toLowerCase();
  }.property('$type')
});
