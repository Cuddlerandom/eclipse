import test from "node:test";
import assert from "node:assert/strict";
import { Animator } from "../src/animator.js";

const clips = {
  idle: { frames: 4, fps: 8, loop: true },
  attack: { frames: 3, fps: 10, loop: false }
};

test("looping clip advances from elapsed time and wraps", () => {
  const animator = new Animator(clips).setState("idle");
  animator.update(0.26);
  assert.equal(animator.sample().index, 2);
  animator.update(0.30);
  assert.equal(animator.sample().index, 0);
  assert.equal(animator.sample().done, false);
});

test("non-looping clip stops on its final frame", () => {
  const animator = new Animator(clips).setState("attack");
  animator.update(1);
  const frame = animator.sample();
  assert.equal(frame.index, 2);
  assert.equal(frame.done, true);
});

test("unknown and invalid clip metadata fail loudly", () => {
  const animator = new Animator(clips);
  assert.throws(() => animator.setState("missing"), /Missing or invalid/);
  assert.throws(() => new Animator({ broken: { frames: 0, fps: 0, loop: true } }).setState("broken"), /Missing or invalid/);
});

test("negative or invalid deltas do not move animation time", () => {
  const animator = new Animator(clips).setState("idle");
  animator.update(-2).update(Number.NaN);
  assert.equal(animator.sample().index, 0);
});
