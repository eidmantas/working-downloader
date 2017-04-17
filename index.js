var downloader = require('spotify-downloader');
var readlineSync = require('readline-sync');

var user = readlineSync.question("Enter user ");
var playlistId = readlineSync.question("Enter playlistId ");
var magicalHackeryTimeout = readlineSync.question("Delay between downloads. Try 0 or 5000 ");

downloader('spotify:user:' + user  + ':playlist:' + playlistId, function() {}, function (err){
  }, magicalHackeryTimeout);
