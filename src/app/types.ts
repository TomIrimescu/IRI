export interface Product {
  name: string;
  category: string;
  description: string;
  price: number;
}

export interface Query {
  products: Product[];
}

export interface Mutation {
  updateProduct: Product;
}
