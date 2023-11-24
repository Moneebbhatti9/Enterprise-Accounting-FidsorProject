export interface BillsDataType {
  vendorID: string;
  currencyID: number | null;
  billDate: string;
  dueDate: string;
  PoSo: number | null;
  billNumber: number | null;
  note: string;
  productTable: ProductTable[];
  subTotal: number | null;
  tax: number | null;
  total: number | null;
}

export interface ProductTable {
  itemID: number | null;
  expenseCategory: number | null;
  description: string;
  quantity: number | null;
  price: number | null;
  ammount: number | null;
}
