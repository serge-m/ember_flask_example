import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByCity(param) {
      if (param !== '') {
        return this.get('store').query('user', { city: param });
        // return this.get('store')
        //   .query('rental', { city: param }).then((results) => {
        //     return { query: param, results: results };
        //   });
      } else {
        return this.get('store').findAll('user');
        // return this.get('store')
        //   .findAll('rental').then((results) => {
        //     return { query: param, results: results };
        //   });
      }
    }
  }
});