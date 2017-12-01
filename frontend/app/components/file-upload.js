import Ember from 'ember';

import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  value: 'default',
  set_upload_results: null,
  update_progress_bar: null,
  
  init() {
    this._super(...arguments);
    // this.get('filter')('').then((allResults) => {
    //   this.set('results', allResults.results);
    // });
  },

  filesDidChange: function(files) {
    const uploader = EmberUploader.Uploader.create({
      url: this.get('url')
    });

    if (!Ember.isEmpty(files)) {
      // this second argument is optional and can to be sent as extra data with the upload
      let res = uploader.upload(files[0], { "whatever": "something" });
      console.log(res);
      this.set('upload_results', [this.get('value')]);
    }

    uploader.on('progress', e => {
      let update_progress_bar = this.get('update_progress_bar');
      update_progress_bar(e.percent).then((filterResults) => console.log("got results" + filterResults.get('length')));
      console.log("progress -> " + e.percent);

    });

    uploader.on('didUpload', response => {
      let set_upload_results = this.get('set_upload_results');
      set_upload_results(response);
      console.log("didUpload -> ",  response['data']);
    });
  }
});