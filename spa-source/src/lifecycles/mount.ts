import { MOUNTING, SKIP_BECAUSE_BROKEN } from "./../applications/app.helper";

export function toMountPromise(app) {
  app.status = MOUNTING;

  try {
    return app.mount();
  } catch (e) {
    console.log(e);
    app.status = SKIP_BECAUSE_BROKEN;
  }
}
