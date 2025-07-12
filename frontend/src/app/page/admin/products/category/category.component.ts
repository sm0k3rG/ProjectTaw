import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../core/services/category.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Category } from '../../../../core/models/category.interface';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  categorias: Category[] = [];
  categoriaForm: FormGroup;
  loading = false;
  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder
  ) {
    this.categoriaForm = this.fb.group({
      nuevaCategoria: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
      ]]
    });
  }

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

  agregarCategoria(): void {
    this.mensajeExito = '';
    this.mensajeError = '';
    
    if (this.categoriaForm.invalid) {
      this.mensajeError = 'Por favor, ingresa un nombre válido (solo letras y espacios).';
      return;
    }

    const nombre = this.categoriaForm.get('nuevaCategoria')?.value.trim();
    if (!nombre) {
      this.mensajeError = 'El nombre de la categoría no puede estar vacío.';
      return;
    }

    this.loading = true;
    this.categoryService.agregarCategoria({ nombre, estado: 'Activa' }).subscribe({
      next: (categoria) => {
        this.mensajeExito = '¡Categoría creada exitosamente!';
        this.categoriaForm.reset();
        this.obtenerCategorias();
        this.loading = false;
      },
      error: (err) => {
        this.mensajeError = 'Error al crear la categoría.';
        this.loading = false;
      }
    });
  }

  // Getter para facilitar el acceso al campo en el template
  get nuevaCategoriaField() {
    return this.categoriaForm.get('nuevaCategoria');
  }

  // Método para verificar si el campo tiene errores
  hasError(fieldName: string, errorType: string): boolean {
    const field = this.categoriaForm.get(fieldName);
    return field ? field.hasError(errorType) && field.touched : false;
  }


   eliminarCategoria(id: number): void {
    this.mensajeExito = '';
    this.mensajeError = '';
    if (!confirm('¿Estás seguro de que deseas eliminar esta categoría?')) {
      return;
    }
    this.loading = true;
    this.categoryService.eliminarCategoria(id).subscribe({
      next: () => {
        this.mensajeExito = '¡Categoría eliminada exitosamente!';
        this.obtenerCategorias();
        this.loading = false;
      },
      error: (err) => {
        this.mensajeError = 'Error al eliminar la categoría.';
        this.loading = false;
      }
    });
  }

  cambiarEstado(categoria: Category): void {
    this.mensajeExito = '';
    this.mensajeError = '';
    
    const nuevoEstado = categoria.estado === 'Activa' ? 'Inactiva' : 'Activa';
    const mensajeConfirmacion = `¿Estás seguro de que deseas cambiar el estado de "${categoria.nombre}" a ${nuevoEstado}?`;
    console.log('ID recibido para actualizar:', categoria.id);

    if (!confirm(mensajeConfirmacion)) {
      return;
    }

    this.loading = true;
    this.categoryService.actualizarCategoria(categoria.id, { 
      nombre: categoria.nombre, 
      estado: nuevoEstado 
    }).subscribe({
      next: () => {
        this.mensajeExito = `¡Estado de categoría cambiado exitosamente a ${nuevoEstado}!`;
        this.obtenerCategorias();
        this.loading = false;
      },
      error: (err) => {
        this.mensajeError = 'Error al cambiar el estado de la categoría.';
        this.loading = false;
      }
    });
  }
}
