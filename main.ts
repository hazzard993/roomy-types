import * as roomy from "./roomy";

class MyScene implements roomy.Love2DScene {
  keypressed() {
    console.log("key was pressed");
  }
}

const manager = roomy.new();
manager.enter(new MyScene());

love.load = () => {
  manager.hook();
};
