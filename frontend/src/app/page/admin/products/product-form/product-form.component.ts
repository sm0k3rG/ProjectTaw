import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from '../../../../core/services/category.service';
import { BranchService } from '../../../../core/services/branch.service';
import { ProductService } from '../../../../core/services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../../core/models/category.interface';
import { Branch } from '../../../../core/models/branch.interface';

@Component({
  selector: 'app-product-form',
  standalone: true,
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  imports: [ReactiveFormsModule, CommonModule, FormsModule]
})
export class ProductFormComponent {
  /**
   * Evento emitido cuando se agrega un producto exitosamente.
   */
  @Output() productoAgregado = new EventEmitter<void>();

  /**
   * Formulario reactivo principal del producto.
   */
  productForm: FormGroup;

  /**
   * Lista de categorías disponibles para seleccionar.
   */
  categorias: Category[] = [];

  /**
   * Lista de sucursales disponibles para asociar stock.
   */
  sucursales: Branch[] = [];

  /**
   * Indica si el formulario está en estado de carga (enviando datos).
   */
  loading = false;

  /**
   * Mensaje de error mostrado al usuario.
   */
  mensajeError: string | null = null;

  /**
   * Mensaje de éxito mostrado al usuario.
   */
  mensajeExito: string | null = null;

  /**
   * Constructor: inicializa el formulario y carga categorías y sucursales.
   */
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private branchService: BranchService,
    private productService: ProductService
  ) {
    this.productForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: [null, [Validators.required, Validators.min(1)]],
      categoriaId: [null, Validators.required],
      ofertaId: [null],
      oferta: [''], // Campo de oferta opcional
      imagenUrl: [''],
      sucursalesSeleccionadas: this.fb.array([])
    });

    this.cargarCategorias();
    this.cargarSucursales();
  }

  /**
   * Carga las categorías disponibles desde el servicio.
   */
  cargarCategorias() {
    this.categoryService.obtenerCategorias().subscribe({
      next: (categorias) => this.categorias = categorias,
      error: () => this.mensajeError = 'Error al cargar categorías'
    });
  }

  /**
   * Carga las sucursales disponibles desde el servicio.
   */
  cargarSucursales() {
    this.branchService.obtenerSucursal().subscribe({
      next: (sucursales) => {
      this.sucursales = sucursales;
      },
      error: () => this.mensajeError = 'Error al cargar sucursales'
    });
  }

  /**
   * Devuelve el FormArray de sucursales seleccionadas.
   */
  get sucursalesSeleccionadas() {
    return this.productForm.get('sucursalesSeleccionadas') as FormArray;
  }

  /**
   * Devuelve las sucursales disponibles para un select específico,
   * excluyendo las ya seleccionadas en otros campos.
   * @param indexActual Índice del select actual en el FormArray
   */
  obtenerSucursalesDisponiblesParaSelect(indexActual: number): Branch[] {
    const seleccionadas = this.sucursalesSeleccionadas.value
      .map((item: any, idx: number) => idx !== indexActual ? String(item.id) : null)
      .filter((id: string | null) => id !== null && id !== undefined && id !== '');
    return this.sucursales.filter(sucursal => !seleccionadas.includes(String(sucursal.id)));
  }
  
  /**
   * Agrega un nuevo grupo de sucursal y stock al FormArray.
   */
  agregarSucursal() {
    const grupo = this.fb.group({
      id: [null, Validators.required],
      stock: [0, [Validators.required, Validators.min(0)]]
    });
    this.sucursalesSeleccionadas.push(grupo);
  }

  /**
   * Elimina una sucursal del FormArray por índice.
   * @param index Índice del grupo a eliminar
   */
  removerSucursal(index: number) {
    this.sucursalesSeleccionadas.removeAt(index);
  }

  /**
   * Envía el formulario al backend para crear el producto.
   * Realiza validaciones y muestra mensajes de éxito o error.
   */
  onSubmit() {
    if (this.productForm.invalid) {
      this.mensajeError = 'Por favor completa todos los campos obligatorios.';
      return;
    }
    const formValue = this.productForm.value;
    // Validar que todas las sucursales tengan id válido
    const sucursalesValidas = formValue.sucursalesSeleccionadas.every(
      (sucursales: any) => sucursales.id !== null && sucursales.id !== '' && !isNaN(Number(sucursales.id))
    );
    if (!sucursalesValidas) {
      this.mensajeError = 'Debes seleccionar una sucursal válida en cada campo.';
      return;
    }
    const productoData = {
      nombre: formValue.nombre,
      descripcion: formValue.descripcion,
      precio: formValue.precio,
      categoriaId: Number(formValue.categoriaId),
      ofertaId: formValue.ofertaId,
      oferta: formValue.oferta ? formValue.oferta : undefined, // Solo enviar si se proporciona
      imagenUrl: formValue.imagenUrl,
      sucursales: formValue.sucursalesSeleccionadas.map((sucursales: any) => ({
        id: Number(sucursales.id),
        stock: Number(sucursales.stock)
      }))
    };
    this.loading = true;
    this.productService.agregarProducto(productoData).subscribe({
      next: () => {
        this.mensajeExito = 'Producto agregado con éxito';
        setTimeout(() => {
          this.mensajeExito = null;
        }, 3000);
        this.productForm.reset();
        this.sucursalesSeleccionadas.clear();
        this.productoAgregado.emit();
        this.loading = false;
      },
      error: () => {
        this.mensajeError = 'Error al agregar el producto';
        this.loading = false;
      }
    });
  }
}
