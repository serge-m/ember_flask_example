import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    update_progress_bar(percent) {
      this.set('value', percent / 100.);
    }
  }
});