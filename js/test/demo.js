function turtledemo() {
  var canvas = document.getElementById('turtleCanvas');

  var turtle = new TurtleLib.Turtle({ canvas: canvas });
  turtle.reset();
  for(var x=0; x < 12; x++) {
    turtle.forward(50);
    turtle.turnRight(150);
  }
}
