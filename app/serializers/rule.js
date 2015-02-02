import DS from 'ember-data';
import Always from '../models/always';
import Mobile from '../models/mobile';
import Period from '../models/period';

export default DS.RESTSerializer.extend({
  serialize: function(record, options) {
    var json = this._super(record, options);

    if (record instanceof Always) {
      json.$type = 'Always';
    } else if (record instanceof Mobile) {
      json.$type = 'Mobile';
    } else if (record instanceof Period) {
      json.$type = 'Period';
    }

    return json;
  }
});
