export interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  url : string;
}
export let products: IProduct[] = [];
