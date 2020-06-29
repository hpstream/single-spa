import {
  BOOTSTRAPPING,
  SKIP_BECAUSE_BROKEN,
} from "./../applications/app.helper";

export function toBootstrapPromise(app) {
  app.status = BOOTSTRAPPING;

  try {
    return app.bootstrap();
  } catch (e) {
    console.log(e);
    app.status = SKIP_BECAUSE_BROKEN;
  }
}
