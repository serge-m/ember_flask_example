import Ember from 'ember';

import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
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
      update_progress_bar(e.percent);
      console.log("progress -> " + e.percent);

    });
  }
});