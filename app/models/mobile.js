import Rule from './rule';

export default Rule.extend({
  valid: true,

  active: (function() {
    return navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/);
  }).property(),
});

