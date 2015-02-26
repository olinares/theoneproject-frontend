import Ember from 'ember';

export default Ember.Controller.extend({
  queryResponse: null,
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
      var _this = this;
      var query = this.get('searchTerm');
      var request = gapi.client.youtube.search.list({
        q: query,
        part: 'snippet'
      });

      request.execute(function(response) {
        _this.set('queryResponse');
        console.log(response);
        console.log(response.items[0].snippet.description);
      });
    }
  }
});
