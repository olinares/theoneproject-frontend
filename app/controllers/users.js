import Ember from 'ember';

export default Ember.Controller.extend({
  videos: [],
  actions: {
    search: function() {

      var _this = this;
      var query = this.get('searchTerm');
      var request = gapi.client.youtube.search.list({
        q: query,
        part: 'snippet'
      });

      request.execute(function(response) {
        var videos = _this.get('videos')
        var newVideos = [{title:"hello 2", description:"description3"}]
        _this.set("videos", newVideos)
        console.log(_this.get("videos"))
        // console.log(response.items[0].snippet.description);
      });
    }
  }
});
