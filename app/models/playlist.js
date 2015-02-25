import DS from 'ember-data';

export default DS.Model.extend({
  playlist_name: DS.attr('string'),
  song_list: DS.attr('string')
});
