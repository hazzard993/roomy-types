import { Handlers } from "love-typescript-definitions/typings/love/handlers";

declare function newSceneManager(this: void): SceneManager;
export { newSceneManager as new };

export const _VERSION: string;
export const _DESCRIPTION: string;
export const _URL: string;
export const _LICENSE: string;

/**
 * Manages an active scene.
 *
 * Be sure to call SceneManager#hook in the love.load callback to hook into Love2D's events.
 */
export interface SceneManager {
  /**
   * Changes the currently active scene.
   *
   * @param scene The scene to enter
   * @param args Given to scene.enter
   */
  enter(scene: AnyScene, ...args: any[]): void;

  /**
   * Adds a scene to the scene stack making that scene the active scene.
   *
   * @param scene The scene to add and enter
   * @param args Given to scene.enter
   */
  push(scene: AnyScene, ...args: any[]): void;

  /**
   * Pops a scene from the scene stack entering the scene below.
   */
  pop(): void;

  /**
   * Calls scene.[event] on the active scene if that function exists. Additional arguments are passed to scene.event.
   */
  emit(event: any, ...args: any[]): void;

  /**
   * Adds code to the LÖVE callbacks to emit events for each callback
   *
   * @param opts Callbacks to include, exclude (default uses all callbacks).
   */
  hook(opts?: {
    /**
     * A list of callbacks to hook into. If this is defined, only these callbacks will be overridden.
     */
    include: HandlerKey[];
  } | {
    /**
     * A list of callbacks not to hook into. If this is defined, all of the callbacks except for these ones will be overridden.
     */
    exclude: HandlerKey[];
  }): void;
}

type HandlerKey = keyof Handlers;

export type AnyScene = Scene | {};

/**
 * A scene, callbacks yet to be defined.
 */
export interface Scene {
  /**
   * Called when a manager switches to this scene or if this scene is pushed on top of another scene.
   *
   * @param previous The previously active scene, or false if there was no previously active scene
   * @param args Additional arguments passed to manager.enter or manager.push
   */
  enter?: (previous: Scene | false, ...args: any[]) => void;

  /**
   * Called when a manager switches away from this scene or if this scene is popped from the stack.
   *
   * @param next The scene that will be active next
   * @param args Additional arguments passed to manager.enter or manager.pop
   */
  leave?: (next: Scene, ...args: any[]) => void;

  /**
   * Called when a scene is pushed on top of this scene.
   *
   * @param next The scene that was pushed on top of this scene
   * @param args Additional arguments passed to manager.push
   */
  pause?: (next: Scene, ...args: any[]) => void;

  /**
   * Called when a scene is popped and this scene becomes active again.
   *
   * @param previous The scene that was popped
   * @param args Additional arguments passed to manager.pop
   */
  resume?: (previous: Scene, ...args: any[]) => void;
}

/**
 * A scene that was hooked into Love2D's events
 */
export interface Love2DScene extends Scene, Handlers {}
