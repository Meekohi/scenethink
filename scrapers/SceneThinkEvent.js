// Constructor
var SceneThinkEvent = function(json) {
  this.title = json.title || null;
  this.description = json.description || null;
  this.link = json.link || null;
  this.startTime = json.startTime || null;
  this.endTime = json.endTime || null;
  this.location = json.location || null;
};
// properties and methods
SceneThinkEvent.prototype = {
  title: null,
  description: null,
  link: null,
  startTime: null,
  endTime: null,
  location: null,
  save: function() {
    console.error("  [!] Not implemented.");
    console.log(this);
  }
};
// node.js module export
module.exports = SceneThinkEvent;