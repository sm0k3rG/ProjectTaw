import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Laptop HP Pavilion',
      image: 'https://via.placeholder.com/300x200/007bff/ffffff?text=Laptop+HP',
      price: 899.99,
      description: 'Laptop HP Pavilion con procesador Intel i5, 8GB RAM, 256GB SSD'
    },
    {
      id: 2,
      name: 'iPhone 15 Pro',
      image: 'https://via.placeholder.com/300x200/28a745/ffffff?text=iPhone+15+Pro',
      price: 999.99,
      description: 'iPhone 15 Pro con cámara triple, chip A17 Pro, 128GB'
    },
    {
      id: 3,
      name: 'Samsung Galaxy S24',
      image: 'https://via.placeholder.com/300x200/dc3545/ffffff?text=Galaxy+S24',
      price: 899.99,
      description: 'Samsung Galaxy S24 con cámara de 200MP, 8GB RAM, 256GB'
    },
    {
      id: 4,
      name: 'MacBook Air M2',
      image: 'https://via.placeholder.com/300x200/ffc107/000000?text=MacBook+Air',
      price: 1199.99,
      description: 'MacBook Air con chip M2, 8GB RAM, 256GB SSD'
    },
    {
      id: 5,
      name: 'iPad Pro 12.9"',
      image: 'https://via.placeholder.com/300x200/17a2b8/ffffff?text=iPad+Pro',
      price: 1099.99,
      description: 'iPad Pro 12.9" con chip M2, 128GB, Wi-Fi'
    },
    {
      id: 6,
      name: 'Sony WH-1000XM5',
      image: 'https://via.placeholder.com/300x200/6f42c1/ffffff?text=Sony+Headphones',
      price: 349.99,
      description: 'Auriculares inalámbricos Sony con cancelación de ruido'
    }
  ];

  constructor() { }

  // Obtener todos los productos
  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  // Obtener un producto por ID
  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }
}
