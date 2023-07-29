export interface ItemCart {
    id: React.Key | string;
    nameProduct: string | null;
    imagesCover?: string;
    price: React.ReactNode | number | null;
    amount: number | null;
  }