export interface IProduct {
  id?: string;
  name?: string;
  category?: string;
  description?: string;
  price?: number;
}

export class Product implements IProduct {
  constructor(
    public id?: string,
    public name?: string,
    public category?: string,
    public description?: string,
    public price?: number) {
      this.id = id ? id : null;
      this.name = name ? name : null;
      this.category = category ? category : null;
      this.description = description ? description : null;
      this.price = price ? price : null;
  }
}
