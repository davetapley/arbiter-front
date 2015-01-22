import Rule from './rule';
import Ember from 'ember';

Ember.Inflector.inflector.uncountable('always');

export default Rule.extend({
  init: function() {
    this._super();
    this.set('$type', 'Always');
  }
});
