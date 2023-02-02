export interface IPoints extends IAllPoints {
  points: IAllPoints
}

export type ICurrentPoint = {
  id: string;
  name: string;
  adress: string;
  cityId: [
    {
      name: string;
      id: string;
    },
  ];
  image?: string;
};

export interface IAllPoints {
  data: Array<ICurrentPoint> | null;
  error?: string | null;
}
