// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   imageUrl: string;
// }
export interface ProductVariant {
  color: string;
  sizes: string[];
  stock: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  brand?: string;

  price: number;
  oldPrice?: number;
  discountPercentage?: number;

  imageUrl: string;
  images?: string[];

  variants: ProductVariant[];

  rating?: number;
  reviewCount?: number;

  isFeatured?: boolean;
  isNew?: boolean;

  createdAt: Date;
}