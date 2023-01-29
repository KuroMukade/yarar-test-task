export interface ICities {
  cities: ICityData
}

export type ICurrentCity = {
  id: string,
  name: string,
  adress: string,
  cityId: {
    name: string;
    id: string;
  }
}

export interface ICityData {
  current: ICurrentCity | null,
  all: IAllCities
}

export interface IAllCities {
  data: Array<ICurrentCity> | null,
  isLoading: boolean,
  error: string | null
}