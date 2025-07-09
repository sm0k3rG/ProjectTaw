import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../core/services/category.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../../core/models/category.interface';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  categorias: Category[] = [];
  nuevaCategoria: string = '';
  loading = false;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias(): void {
    this.categoryService.obtenerCategorias().subscribe({
      next: (categoria: Category[]) => {
        this.categorias = categoria;
        console.log(this.categorias);
      }
    })
  }
}
