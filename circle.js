function Circle(x, y, r) {
  var options = {
    frictionAir: 1,
    restitution: 0,
    value: 0.25,
    poped: false
  };
  // var scores = {
  //   value: 0.25
  // };
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(world, this.body);

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    //translate(pos.x, pos.y);
    value: 0.25;
    poped: false;
    // circleMode(CENTER);
    //rectMode(CENTER);
    //image(quarterImg, 0, 0, 270);
    image(quarterImg, this.body.position.x, this.body.position.y, 100, 100);
    pop();
  };
}
