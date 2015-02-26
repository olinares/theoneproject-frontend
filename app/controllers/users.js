import Ember from 'ember';

export default Ember.Controller.extend({
  videos: [
    {
      title: "Hello",
      description: "description"
    },
    {
      title: "Hello 1",
      description: "description 2"
    }
  ],
  actions: {
    search: function() {
      var qop = this.get('searchTerm');
      var request = gapi.client.youtube.search.list({
        q: qop,
        part: 'snippet'
      });

      request.execute(function(response) {

        console.log(response);
      });
    }
  }
});
