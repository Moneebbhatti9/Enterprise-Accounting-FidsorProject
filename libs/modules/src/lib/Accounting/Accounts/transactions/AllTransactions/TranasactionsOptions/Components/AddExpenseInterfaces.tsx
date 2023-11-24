export interface TransactionDetails {
  date: Date | null;
  description: string;
  account: string;
  categoryType: number;
  selectedVendor: string;
  originalAmount: string;
  splitTransactions: SplitTransaction[];
  salesTaxSelect: string;
  selectedCustomer: string;
  notes: string;
  file: File | null;
}

export interface SplitTransaction {
  splitAmount: string;
  splitCategory: string;
  customer: string;
  salesTaxAmount: string;
}
