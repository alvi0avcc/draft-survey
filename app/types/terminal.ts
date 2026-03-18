export interface Terminal {
  name?: string;
  place?: {
    name?: string;
    country?: string;
    city?: string;
    geo?: string; //геопозиция
  };
  //оффициальная проходная осадка в порту
  pier?: {
    name?: string;
    //оффициальная максимальная глубина у пирса
    //оффициальная допустимая осадка у пирса
    comments?: string;
  };
  comments?: string;
}
