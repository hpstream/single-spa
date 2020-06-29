import { UNMOUNTING, SKIP_BECAUSE_BROKEN } from "./../applications/app.helper";

export function toUnmountPromise(app) {
 
  app.status = UNMOUNTING;

  try {
    return app.unmount();
  } catch (e) {
    console.log(e)
     app.status = SKIP_BECAUSE_BROKEN;
  }
  
}
