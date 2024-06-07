import { Engine, Actor, Color, CollisionType } from 'excalibur';

const game = new Engine({
  width: 800,
  height: 600,
});

const paddle = new Actor({
  x: 150,
  y: game.drawHeight - 40,
  width: 200,
  height: 20,
  color: Color.Chartreuse,
});

paddle.body.collisionType = CollisionType.Fixed;

game.add(paddle);

game.start()