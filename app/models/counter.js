import Rule from './rule';
import DS from 'ember-data';
import Ember from 'ember';

export default Rule.extend({
  remaining: DS.attr('number'),

  valid: Ember.computed.bool('remaining'),

  active:(function() {
    return this.get('remaining') > 0;
  }).property('remaining'),
});
