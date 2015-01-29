import DS from 'ember-data';
import Ember from 'ember';

export default DS.ModelFragment.extend({
  type: Ember.computed(function() {
    return this.constructor.typeKey;
  }).property(),

  valid:(function() {
    return false;
  }).property(),
});
