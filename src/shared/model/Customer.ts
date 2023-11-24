import { Order } from './Order';

export interface Customer {
  id: number;
  name: string;
  phoneNo: string;
  address: string;
  password:string;
  orders: Order[];
}
