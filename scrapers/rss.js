var request = require('request');
var async = require('async');
var cheerio = require('cheerio');
var _ = require('underscore');
_.str = require('underscore.string');
var moment = require('moment');
var htmlToText = require('html-to-text');

var SceneThinkEvent = require("./SceneThinkEvent");

request.get('http://www.thesoutherncville.com/events/rss',function(err,r,body){
  var $ = cheerio.load(body,{xmlMode:true});
  $("item").each(function(idx,elem){
    var e = new SceneThinkEvent({
      title: $(elem).find("title").text(),
      link: $(elem).find("link").text(),
      description: htmlToText.fromString($(elem).find("description").text()).replace(/(\r\n|\n|\r)/gm," "),
      startTime: moment($(elem).find("dc\\:date").text()).toString(),
      location: "The Southern"
    });
    e.save();
  });
});