import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['search-form'],
  value: 'default',

  init() {
    this._super(...arguments);
    // this.get('filter')('').then((allResults) => {
    //   this.set('results', allResults.results);
    // });
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
    toggleBody() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');
      //console.log('==' + filterInputValue + '==');
      //filterAction(filterInputValue);
      // return this.get('store').query('user', { city: filterInputValue });
      filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults));
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
