import Rule from './rule';

export default Rule.extend({
  valid: true,

  active: (function() {
    return true;
  }).property(),
});

