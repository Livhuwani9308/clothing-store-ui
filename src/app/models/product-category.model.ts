export interface Category {
  id: number;
  name: string;
  imageUrl: string;
  route: string;
}

export const categories: Category[] = [
  { id: 1, name: 'Women', imageUrl: '/assets/categories/women.png', route: 'women' },
  { id: 2, name: 'Kids', imageUrl: '/assets/categories/kids.png', route: 'kids' },
  { id: 3, name: 'Men', imageUrl: '/assets/categories/men.png', route: 'men' },
  { id: 4, name: 'Jewelry & Accessories', imageUrl: '/assets/categories/jewelry.png', route: 'jewelry' },
  { id: 5, name: 'Tops', imageUrl: '/assets/categories/tops.png', route: 'tops' },
  { id: 6, name: 'Sports & Outdoor', imageUrl: '/assets/categories/sports.png', route: 'sports' },
  { id: 7, name: 'Dresses', imageUrl: '/assets/categories/dresses.png', route: 'dresses' },
  { id: 8, name: 'Shoes', imageUrl: '/assets/categories/shoes.png', route: 'shoes' },
  { id: 9, name: 'Bags & Luggage', imageUrl: '/assets/categories/bags.png', route: 'bags' },
  { id: 10, name: 'Outerwear & Suits', imageUrl: '/assets/categories/outerwear.png', route: 'outerwear' },
];