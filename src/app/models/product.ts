import { Inutriments } from './nutriments';

export interface Iproduct {
  name: string;
  thumbImmagine: string;
  smlImmagine: string;
  nutrimentsValues: Inutriments;
}
