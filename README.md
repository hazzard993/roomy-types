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

1. Add from NPMJS.

```bash
yarn add -D roomy-types
# or npm install -D roomy-types
```

2. Link to `tsconfig.json`. See `baseUrl`, `types` and `paths` used here.

- love-typescript-definitions is a dependency
- "paths" allows import * as roomy from "roomy";

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "types": [
      "roomy-types",
      "love-typescript-definitions"
    ],
    "paths": {
      "roomy": ["./node_modules/roomy-types/roomy.d.ts"]
    }
  }
}
```

3. Add [roomy](https://github.com/tesselode/roomy) Lua file to your project. In this case we want `require("roomy")` to import roomy so we could put the Lua file in our output directory.

There are other methods too:

```bash
yarn add tesselode/roomy
# adds roomy from github, may need to fix up module resolution
```
