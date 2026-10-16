/** Small elapsed-time animator; clip metadata must come from verified production assets. */
export class Animator {
  constructor(clips) {
    if (!clips || typeof clips !== "object") throw new TypeError("Verified clip metadata is required.");
    this.clips = clips;
    this.state = null;
    this.elapsed = 0;
  }

  setState(state, { restart = false } = {}) {
    const clip = this.clips[state];
    if (!clip || !Number.isInteger(clip.frames) || clip.frames < 1 ||
        !Number.isFinite(clip.fps) || clip.fps <= 0 || typeof clip.loop !== "boolean") {
      throw new Error("Missing or invalid verified clip metadata: " + state);
    }
    if (state !== this.state || restart) {
      this.state = state;
      this.elapsed = 0;
    }
    return this;
  }

  update(deltaSeconds) {
    if (Number.isFinite(deltaSeconds) && deltaSeconds > 0) this.elapsed += deltaSeconds;
    return this;
  }

  sample() {
    if (!this.state) throw new Error("Set an animation state before sampling.");
    const clip = this.clips[this.state];
    const duration = clip.frames / clip.fps;
    const time = clip.loop ? this.elapsed % duration : Math.min(this.elapsed, duration);
    const index = clip.loop
      ? Math.floor(time * clip.fps) % clip.frames
      : Math.min(clip.frames - 1, Math.floor(time * clip.fps));
    return Object.freeze({
      state: this.state,
      index,
      frames: clip.frames,
      done: !clip.loop && this.elapsed >= duration,
      elapsed: this.elapsed
    });
  }
}
