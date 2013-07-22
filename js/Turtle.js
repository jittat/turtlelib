(function() {

  var root = this;

  TurtleLib = root.TurtleLib = {};

  TurtleLib.Turtle = function(options) {
    this.init(options);
  };

  TurtleLib.Turtle.prototype = {
    position: function() {
      return [this.x, this.y];
    },

    direction: function() {
      return this.dir;
    },

    reset: function() {
      this.x = 0;
      this.y = 0;
      this.dir = 0;
    },

    turnRight: function(angle) {
      this.dir += angle;
      this.dir %= 360;
    },

    turnLeft: function(angle) {
      this.dir = this.dir - angle + 360;
      this.dir %= 360;
    },

    forward: function(distance) {
      var rad = this.dir * Math.PI / 180.0;
      this.y += distance * Math.cos(rad);
      this.x += distance * Math.sin(rad);
    },

    init: function(options) {
      this.reset();
      if(options == undefined)
        options = {};
      
      this.engine = new TurtleLib.TurtleEngine(options.canvas);
    }
  };

  TurtleLib.TurtleEngine = function() {
  };

}).call(this);
