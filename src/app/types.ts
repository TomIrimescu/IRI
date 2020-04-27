export interface Product {
  name: string;
  category: string;
  description: string;
  price: number;
}

export interface Query {
  products: Product[];
}

export interface Query {
  product: Product;
}

export interface Mutation {
  createProduct: Product;
}

export interface Mutation {
  updateProduct: Product;
}

export interface Mutation {
  deleteProduct: Product;
}
