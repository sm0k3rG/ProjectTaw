import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../core/services/category.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Category } from '../../../../core/models/category.interface';

/**
 * Componente para la gestión de categorías de productos.
 * Permite agregar, eliminar y cambiar el estado de las categorías.
 * 
 * @description
 * Este componente proporciona una interfaz completa para administrar categorías:
 * - Agregar nuevas categorías con validación de solo letras
 * - Eliminar categorías existentes
 * - Cambiar el estado de categorías (Activa/Inactiva)
 * - Visualización de todas las categorías en una tabla
 * 
 */
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

  /**
   * Constructor del componente.
   * Inicializa el formulario reactivo con las validaciones necesarias.
   * 
   * @param {CategoryService} categoryService - Servicio para operaciones CRUD de categorías
   * @param {FormBuilder} fb - Constructor de formularios reactivos
   */
  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder
  ) {
    // Inicializar el formulario con validaciones
    this.categoriaForm = this.fb.group({
      nuevaCategoria: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
      ]]
    });
  }

  /**
   * Método del ciclo de vida que se ejecuta al inicializar el componente.
   * Carga la lista inicial de categorías desde el backend.
   */
  ngOnInit(): void {
    this.obtenerCategorias();
  }

  /**
   * Obtiene todas las categorías desde el backend y las asigna a la variable local.
   * Se ejecuta al inicializar el componente y después de cada operación CRUD.
   */
  obtenerCategorias(): void {
    this.categoryService.obtenerCategorias().subscribe({
      next: (categoria: Category[]) => {
        this.categorias = categoria;
        console.log(this.categorias);
      }
    })
  }

  /**
   * Agrega una nueva categoría al sistema.
   * Valida el formulario antes de enviar la petición al backend. 
   */
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

  /**
   * Getter para facilitar el acceso al campo 'nuevaCategoria' en el template.
   * Proporciona una forma más limpia de acceder al control del formulario.
   */
  get nuevaCategoriaField() {
    return this.categoriaForm.get('nuevaCategoria');
  }

  /**
   * Verifica si un campo específico del formulario tiene un error particular.
   * Se usa para mostrar mensajes de validación en el template.
   */
  hasError(fieldName: string, errorType: string): boolean {
    const field = this.categoriaForm.get(fieldName);
    return field ? field.hasError(errorType) && field.touched : false;
  }

  /**
   * Elimina una categoría del sistema.
   * Muestra una confirmación antes de proceder con la eliminación.
   */
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

  /**
   * Cambia el estado de una categoría entre 'Activa' e 'Inactiva'.
   * Muestra una confirmación antes de proceder con el cambio.
   */
  cambiarEstado(categoria: Category): void {
    this.mensajeExito = '';
    this.mensajeError = '';
    
    const nuevoEstado = categoria.estado === 'Activa' ? 'Inactiva' : 'Activa';
    const mensajeConfirmacion = `¿Estás seguro de que deseas cambiar el estado de "${categoria.nombre}" a ${nuevoEstado}?`;

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
