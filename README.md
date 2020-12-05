# Roomy Types

Contains declarations for [roomy](https://github.com/tesselode/roomy). A scene management library for LÖVE.

```ts
import * as roomy from "roomy";

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
```

## Install

```bash
yarn add -D roomy-types
# or npm install -D roomy-types
```
