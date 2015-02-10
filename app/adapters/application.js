import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: this.__env.application_host
});
