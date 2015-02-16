import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'translation',

  actions: {
    up: function(priority) {
      if(priority !== 0) {
        var translations = this.get('model');
        var swapped = translations.slice(priority - 1, priority + 1).reverseObjects();
        swapped[0].set('priority', priority - 1);
        swapped[1].set('priority', priority);
        translations.replaceContent(priority - 1, 2, swapped);
      }
    },

    down: function (priority) {
      var translations = this.get('model');
      if(priority !== translations.get('length') - 1) {
        var swapped = translations.slice(priority, priority + 2).reverseObjects();
        swapped[0].set('priority', priority);
        swapped[1].set('priority', priority + 1);
        translations.replaceContent(priority, 2, swapped);
      }
    }
  }
});
