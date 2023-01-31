import { api } from './config';

function requestGet(url: string) {
  return api.get(url);
}

interface ICoordinates {
  adress: Array<number>;
  city: string;
}

function postToServer(location: Array<number>) {
  alert(`Данные на бек отправлены, координаты: ${location}`)
}

export { requestGet, postToServer };
