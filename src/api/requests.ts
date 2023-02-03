import { api } from './config';
import { CurrentLocation } from '../components/MapBoard/MapBoard';

function requestGet(url: string) {
  return api.get(url);
}

function postToServer(location: CurrentLocation) {
  alert(`Данные на бек отправлены, город: ${location.city}, адрес: ${location.adress}`)
}

export { requestGet, postToServer };
