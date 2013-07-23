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

      if(this.engine)
        this.engine.reset();
    },

    turnRight: function(angle) {
      this.dir += angle;
      this.dir %= 360;

      if(this.engine)
        this.engine.turnTo(this.dir);
    },

    turnLeft: function(angle) {
      this.dir = this.dir - angle + 360;
      this.dir %= 360;

      if(this.engine)
        this.engine.turnTo(this.dir);
    },

    forward: function(distance) {
      var rad = this.dir * Math.PI / 180.0;
      this.y += distance * Math.cos(rad);
      this.x += distance * Math.sin(rad);

      if(this.engine)
        this.engine.moveTo(this.x, this.y);
    },

    init: function(options) {
      if(options == undefined)
        options = {};

      if(options.engine != undefined) {
        this.engine = options.engine;
        this.engine.canvas = options.canvas;
      } else {
        this.engine = new TurtleLib.TurtleEngine(options.canvas);
      }

      this.reset();
    }
  };

  TurtleLib.TurtleEngine = function() {
  };

  TurtleLib.TurtleEngine.prototype = {
    reset: function() {
    },

    moveTo: function(x,y) {
    },

    turnTo: function(d) {
    }
  };

}).call(this);
