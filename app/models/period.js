import DS from 'ember-data';
import Rule from './rule';

export default Rule.extend({
  first: DS.attr('date'),
  last: DS.attr('date')
});
