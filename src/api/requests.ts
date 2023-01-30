import { api } from "./config";

function requestGet(url: string) {
  return api.get(url);
}

export {
  requestGet
}