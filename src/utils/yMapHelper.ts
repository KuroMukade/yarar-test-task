import { YMapsApi } from "react-yandex-maps";

interface IGetGeocodeByNameArguments {
  city: string;
  ymap: YMapsApi | null;
}

export function getYmapCoordinates(ymapGeocodeRequest: YMapsApi) {
  return ymapGeocodeRequest.geoObjects.get(0).geometry.getCoordinates()
}

export async function getGeocodeByName({ ymap, city }: IGetGeocodeByNameArguments) {
  if (ymap) {
    return ymap.geocode(`${city}`);
  }
}