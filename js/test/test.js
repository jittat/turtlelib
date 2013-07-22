
describe('Turtle', function() {

  var turtle;

  assertPositionCloseTo = function(turtle, x, y) {
    assert.closeTo(turtle.x, x, 0.01);
    assert.closeTo(turtle.y, y, 0.01);
  };

  beforeEach(function() {
    turtle = new TurtleLib.Turtle();
  });

  it('should be initialized at (0,0) heading North', function() {
    assert.deepEqual(turtle.position(), [0,0]);
    assert.equal(turtle.direction(),0);
  });

  it('should move forward', function() {
    turtle.forward(100);
    assertPositionCloseTo(turtle, 0, 100);
  });

  it('should move forward after turning right', function() {
    turtle.turnRight(30);
    turtle.forward(100);
    assertPositionCloseTo(turtle, 50, 86.602);
  });

  it('should move forward correctly after two turns', function() {
    turtle.turnLeft(60);
    turtle.forward(50);
    turtle.turnRight(30);
    turtle.forward(100);
    assertPositionCloseTo(turtle, -93.3012, 111.602);
  });

  it('should move correctly after cycling around the center', function() {
    turtle.forward(100);
    turtle.turnRight(90);
    for(var i=0; i<360; i++) {
      turtle.forward(1.745329);
      turtle.turnRight(1);
    }
    assertPositionCloseTo(turtle, 0, 100);
  });

});
