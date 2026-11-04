import { Notyf } from "notyf";
import "notyf/notyf.min.css";

let instance: Notyf | null = null;

/** Lazily creates one shared Notyf instance (it needs `document`, so not at import time). */
function notyf(): Notyf {
  instance ??= new Notyf({ duration: 3000, position: { x: "right", y: "top" }, dismissible: true });
  return instance;
}

export const notify = {
  success: (message: string) => notyf().success(message),
  error: (message: string) => notyf().error(message),
};
