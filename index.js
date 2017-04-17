var downloader = require('spotify-downloader');
var readlineSync = require('readline-sync');

var user = readlineSync.question("Enter user");
var playlistId = readlineSync.question("Enter playlistId");

downloader('spotify:user:' + user  + ':playlist:' + playlistId, function() {}, function (err){
  });
