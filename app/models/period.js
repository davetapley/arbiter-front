import DS from 'ember-data';
import Rule from './rule';

export default Rule.extend({
  init: function() {
    this._super();
    this.set('$type', 'Period');
  },

  first: DS.attr('date'),
  last: DS.attr('date')
});
