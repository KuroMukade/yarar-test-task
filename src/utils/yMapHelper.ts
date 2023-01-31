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
    return ymap.geocode(`${city}, ${adress}`);
  }
}

export async function getAddress(ymap: YMapsApi | null, adress: string) {
  adress = adress.trim();
  if (isNaN(+adress[0])) {
    return adress;
  } else {
    const res = await ymap?.geocode(adress);
    const firstGeoObject = res.geoObjects.get(0);
    return firstGeoObject.getThoroughfare();
  }
  
}