import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { ProductService } from '../../../../core/services/product.service';
import { CategoryService } from '../../../../core/services/category.service';
import { BranchService } from '../../../../core/services/branch.service';
import { Category } from '../../../../core/models/category.interface';
import { Branch } from '../../../../core/models/branch.interface';
// import { CreateProductRequest } from '../../../../core/models/product.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  @Output() productoAgregado = new EventEmitter<void>();
  productForm: FormGroup;
  loading = false;
  categorias: Category[] = [];
  sucursales: Branch[] = [];
  // ofertas: Offer[] = [];
  mensajeExito: string | null = null;
  mensajeError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private branchService: BranchService,
    // private offerService: OfferService
  ) {
    this.productForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(0)]],
      imagenUrl: [''],
      categoriaId: [null, Validators.required],
      ofertaId: [null],
      sucursalesSeleccionadas: this.fb.array([])
    });

    this.cargarCategorias();
    this.cargarSucursales();
    // this.cargarOfertas();
  }

  cargarCategorias() {
    this.categoryService.obtenerCategorias().subscribe({
      next: (categorias) => {
        this.categorias = categorias.filter(cat => cat.estado?.toLowerCase() === 'activa');
      },
      error: (error) => {
        console.error('Error al cargar categorías:', error);
        this.mensajeError = 'Error al cargar las categorías';
      }
    });
  }

  cargarSucursales() {
    this.branchService.obtenerSucursal().subscribe({
      next: (sucursales) => {
        this.sucursales = sucursales;
      },
      error: (error) => {
        console.error('Error al cargar sucursales:', error);
        this.mensajeError = 'Error al cargar las sucursales';
      }
    });
  }

  // cargarOfertas() {
  //   this.offerService.obtenerOfertasActivas().subscribe({
  //     next: (ofertas) => {
  //       this.ofertas = ofertas;
  //     },
  //     error: (error) => {
  //       console.error('Error al cargar ofertas:', error);
  //       // No mostramos error porque las ofertas son opcionales
  //     }
  //   });
  // }

  // Getter para acceder fácilmente al FormArray
  get sucursalesSeleccionadas() {
    return this.productForm.get('sucursalesSeleccionadas') as FormArray;
  }

  // Método para agregar una sucursal al formulario
  agregarSucursal() {
    const sucursalForm = this.fb.group({
      sucursalId: [null, Validators.required],
      stock: [0, [Validators.required, Validators.min(0)]]
    });

    this.sucursalesSeleccionadas.push(sucursalForm);
  }

  // Método para remover una sucursal del formulario
  removerSucursal(index: number) {
    this.sucursalesSeleccionadas.removeAt(index);
  }

  // Método para obtener el nombre de una sucursal por ID
  obtenerNombreSucursal(sucursalId: number): string {
    const sucursal = this.sucursales.find(s => s.sucursalId === sucursalId);
    return sucursal ? sucursal.nombre : 'Sucursal no encontrada';
  }

  // Método para verificar si una sucursal ya está seleccionada
  sucursalYaSeleccionada(sucursalId: number, currentIndex: number): boolean {
    const sucursalesArray = this.sucursalesSeleccionadas.value;
    return sucursalesArray.some((item: any, index: number) =>
      item.sucursalId === sucursalId && index !== currentIndex
    );
  }

  onSubmit() {
    if (this.productForm.valid && this.sucursalesSeleccionadas.length > 0) {
      this.loading = true;
      this.mensajeError = null;
      this.mensajeExito = null;

      const formValue = this.productForm.value;

  //     // Preparar los datos según la estructura esperada por el backend
  //     const productoData: CreateProductRequest = {
  //       nombre: formValue.nombre,
  //       descripcion: formValue.descripcion,
  //       precio: formValue.precio,
  //       categoriaId: formValue.categoriaId,
  //       ofertaId: formValue.ofertaId || null,
  //       imagenUrl: formValue.imagenUrl,
  //       sucursales: formValue.sucursalesSeleccionadas.map((item: any) => ({
  //         id: item.sucursalId,
  //         stock: item.stock
  //       }))
  //     };

  //     this.productService.agregarProducto(productoData).subscribe({
  //       next: (response) => {
  //         this.mensajeExito = 'Producto agregado exitosamente';
  //         this.productForm.reset();
  //         this.sucursalesSeleccionadas.clear();
  //         this.productoAgregado.emit();
  //         this.loading = false;
  //       },
  //       error: (error) => {
  //         console.error('Error al agregar producto:', error);
  //         this.mensajeError = 'Error al agregar el producto. Inténtalo de nuevo.';
  //         this.loading = false;
  //       }
  //     });
  //   } else {
  //     this.mensajeError = 'Por favor, completa todos los campos requeridos y selecciona al menos una sucursal.';
  //   }
  }

  // Método para limpiar mensajes
  // limpiarMensajes() {
  //   this.mensajeError = null;
  //   this.mensajeExito = null;
   }
}
