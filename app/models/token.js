import DS from 'ember-data';

export default DS.Model.extend({
  translations: DS.hasManyFragments('translation'),
});
