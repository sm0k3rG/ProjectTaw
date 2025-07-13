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
  @Output() productoAgregado = new EventEmitter<void>();
  productForm: FormGroup;
  categorias: Category[] = [];
  sucursales: Branch[] = [];
  loading = false;
  mensajeError: string | null = null;
  mensajeExito: string | null = null;

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
      imagenUrl: [''],
      sucursalesSeleccionadas: this.fb.array([])
    });

    this.cargarCategorias();
    this.cargarSucursales();
  }

  cargarCategorias() {
    this.categoryService.obtenerCategorias().subscribe({
      next: (categorias) => this.categorias = categorias,
      error: () => this.mensajeError = 'Error al cargar categorías'
    });
  }

  cargarSucursales() {
    this.branchService.obtenerSucursal().subscribe({
      next: (sucursales) => {
        console.log(sucursales);
      this.sucursales = sucursales;
      },
      error: () => this.mensajeError = 'Error al cargar sucursales'
    });
  }

  get sucursalesSeleccionadas() {
    return this.productForm.get('sucursalesSeleccionadas') as FormArray;
  }

  // Devuelve las sucursales disponibles para un select específico
  obtenerSucursalesDisponiblesParaSelect(indexActual: number): Branch[] {
    const seleccionadas = this.sucursalesSeleccionadas.value
      .map((item: any, idx: number) => idx !== indexActual ? String(item.sucursalId) : null)
      .filter((id: string | null) => id !== null && id !== undefined && id !== '');
    return this.sucursales.filter(sucursal => !seleccionadas.includes(String(sucursal.sucursalId)));
  }
  
  agregarSucursal() {
    const grupo = this.fb.group({
      sucursalId: [null, Validators.required],
      stock: [0, [Validators.required, Validators.min(0)]]
    });
    this.sucursalesSeleccionadas.push(grupo);
  }

  removerSucursal(index: number) {
    this.sucursalesSeleccionadas.removeAt(index);
  }

  onSubmit() {
    console.log(this.sucursalesSeleccionadas.value);
    if (this.productForm.invalid) {
      this.mensajeError = 'Por favor completa todos los campos obligatorios.';
      return;
    }
    const formValue = this.productForm.value;
    // Validar que todas las sucursales tengan id válido
    const sucursalesValidas = formValue.sucursalesSeleccionadas.every(
      (s: any) => s.sucursalId !== null && s.sucursalId !== '' && !isNaN(Number(s.sucursalId))
    );
    if (!sucursalesValidas) {
      this.mensajeError = 'Debes seleccionar una sucursal válida en cada campo.';
      return;
    }
    const productoData = {
      nombre: formValue.nombre,
      descripcion: formValue.descripcion,
      precio: formValue.precio,
      categoriaId: formValue.categoriaId,
      ofertaId: formValue.ofertaId,
      imagenUrl: formValue.imagenUrl,
      sucursales: formValue.sucursalesSeleccionadas.map((s: any) => ({
        id: Number(s.sucursalId),
        stock: Number(s.stock)
      }))
    };
    this.loading = true;
    this.productService.agregarProducto(productoData).subscribe({
      next: () => {
        this.mensajeExito = 'Producto agregado con éxito';
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
