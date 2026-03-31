import { Product } from '../interfaces/product.model';
import { Category } from '../interfaces/category.model';

function generateCategoryProducts(
  category: Category,
  startId: number,
  baseName: string,
  basePrice: number
): Product[] {

  const colors = ['Black', 'White', 'Beige', 'Navy', 'Grey'];
  const sizes = ['XS','S','M','L','XL'];

  return Array.from({ length: 15 }, (_, i) => ({
    id: startId + i,
    name: `${baseName} ${i + 1}`,
    description: `Premium quality ${baseName.toLowerCase()} designed for comfort and style.`,
    category,
    brand: 'MK Clothing',
    price: basePrice + (i * 40),
    oldPrice: basePrice + (i * 40) + 150,
    discountPercentage: 10,
    imageUrl: `assets/products/${category}-${i + 1}.jpg`,
    images: [
      `assets/products/${category}-${i + 1}.jpg`,
      `assets/products/${category}-${i + 1}-2.jpg`
    ],
    variants: [
      {
        color: colors[i % colors.length],
        sizes: sizes,
        stock: 10 + i
      }
    ],
    rating: 4 + (i % 2),
    reviewCount: 5 + i,
    isFeatured: i % 4 === 0,
    isNew: i % 5 === 0,
    createdAt: new Date()
  }));
}

export const PRODUCTS: Product[] = [
  ...generateCategoryProducts(Category.Women, 1, 'Women Fashion Item', 700),
  ...generateCategoryProducts(Category.Kids, 100, 'Kids Wear Item', 400),
  ...generateCategoryProducts(Category.Men, 200, 'Men Fashion Item', 800),
  ...generateCategoryProducts(Category.Jewelry, 300, 'Jewelry Piece', 300),
  ...generateCategoryProducts(Category.Tops, 400, 'Stylish Top', 450),
  ...generateCategoryProducts(Category.Sports, 500, 'Sportswear Item', 600),
  ...generateCategoryProducts(Category.Dresses, 600, 'Elegant Dress', 900),
  ...generateCategoryProducts(Category.Shoes, 700, 'Premium Shoes', 1200),
  ...generateCategoryProducts(Category.Bags, 800, 'Luxury Bag', 950),
  ...generateCategoryProducts(Category.Denim, 900, 'Denim Collection Item', 750),
  ...generateCategoryProducts(Category.Outerwear, 1000, 'Outerwear Piece', 1100),
];