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
        var videos = _this.get('videos');
        var newVideos = [];
        for (var i = 0; i < response.items.length; i++) {
          newVideos.push({
            title: response.items[i].snippet.title,
            url: response.items[i].snippet.thumbnails.default.url,
            videoId: response.items[i].id.videoId,
            description: response.items[i].snippet.description
          });
        }
        _this.set("videos", newVideos);
        // console.log(_this.get("videos"))
        // console.log(response.items[0].snippet.thumbnails);
      });
    }
  }
});
