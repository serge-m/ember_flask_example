import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{"id": "4545", "info":"123"}];
    // return this.get('store').findAll('user');
  }
});
