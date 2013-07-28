
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

  it('should move to (0,0) heading North after reset', function() {
    turtle.forward(100);
    assert.notEqual(turtle.y,0);

    turtle.reset();
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

describe('Turtle, interacting with TurtleEngine', function() {

  var engine,
      turtle;

  assertCallPosCloseTo = function(spyCall, x, y) {
    assert.closeTo(spyCall.args[0], x, 0.1);
    assert.closeTo(spyCall.args[1], y, 0.1);
  };

  beforeEach(function() {
    engine = new TurtleLib.TurtleEngine();
    turtle = new TurtleLib.Turtle({ engine: engine });
  });

  it('should reset the turtle engine', function() {
    var stub = sinon.stub(engine, "reset");

    turtle.reset();

    assert.ok(stub.called);
  });

  it('should move forward', function() {
    var stub = sinon.stub(engine, "moveTo");

    turtle.forward(100);
    turtle.forward(200);

    assert.ok(stub.called);
    assertCallPosCloseTo(stub.getCall(0), 0, 100);
    assertCallPosCloseTo(stub.getCall(1), 0, 300);
  });

  it('should turn left and right', function() {
    var turnStub = sinon.stub(engine, "turnTo");
    var moveStub = sinon.stub(engine, "moveTo");

    turtle.forward(100);
    turtle.turnRight(90);
    turtle.forward(100);
    turtle.turnLeft(30);

    assert.ok(turnStub.called);
    assert.ok(turnStub.getCall(0).calledWith(90));
    assert.ok(turnStub.getCall(1).calledWith(60));

    assertCallPosCloseTo(moveStub.getCall(1), 100, 100);
  });

});
