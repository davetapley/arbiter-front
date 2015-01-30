import Ember from 'ember';
import DS from 'ember-data';
import Rule from './rule';

export default Rule.extend({
  first: DS.attr('isodate'),
  last: DS.attr('isodate'),

  valid: Ember.computed.and('first', 'last'),

  active:(function() {
    var first = this.get('first');
    var last = this.get('last');
    var now = new Date();
    return first < now && now < last;
  }).property('first', 'last'),
});
