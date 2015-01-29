import Rule from './rule';
import Ember from 'ember';

Ember.Inflector.inflector.uncountable('always');

export default Rule.extend({
  valid:(function() {
    return true;
  }).property(),
});
