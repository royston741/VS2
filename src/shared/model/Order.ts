import { Item } from './Item';

export interface Order {
  orderTotal: number;
  orderItem: Item[];
}
