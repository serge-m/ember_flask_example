import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
  },
  actions: {
    handleFilterEntry() {
      // let filterInputValue = this.get('value');
      // let filterAction = this.get('filter');
      // filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults));
      // filterAction(filterInputValue).then((filterResults) => {
      //   if (filterResults.query === this.get('value')) {
      //     this.set('results', filterResults.results);
      //   }
      // });
    },
    filterByCity(param) {

      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');
      //filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults));
      console.log("bla")
      return param;
    },
    // filterByCity(param) {
    //   if (param !== '') {
    //     return this.get('store').query('rental', { city: param });
    //     return this.get('store')
    //       .query('rental', { city: param }).then((results) => {
    //         return { query: param, results: results };
    //       });
    //   } else {
    //     return this.get('store').findAll('rental');
    //     return this.get('store')
    //       .findAll('rental').then((results) => {
    //         return { query: param, results: results };
    //       });
    //   }
    // }
  }
});
