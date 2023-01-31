import { YMapsApi } from "react-yandex-maps";

interface IGetGeocodeByNameArguments {
  city: string | null;
  adress?: string | null;
  ymap: YMapsApi | null;
}

export function getYmapCoordinates(ymapGeocodeRequest: YMapsApi) {
  return ymapGeocodeRequest.geoObjects.get(0).geometry.getCoordinates()
}

export async function getGeocodeByName({ ymap, adress = null, city = null}: IGetGeocodeByNameArguments) {
  if (ymap) {
    console.log(ymap.geocode(`${city}, ${adress}`))
    return ymap.geocode(`${city}, ${adress}`);
  }
}