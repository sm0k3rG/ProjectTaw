import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../core/models/product.interface';
import { Category } from '../../../../core/models/category.interface';
import { Branch } from '../../../../core/models/branch.interface';
import { Offer } from '../../../../core/models/offer.interface';
import { CategoryService } from '../../../../core/services/category.service';
import { BranchService } from '../../../../core/services/branch.service';
import { ProductsService } from '../../../../services/products.service';
import { OfferService } from '../../../../core/services/offer.service';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnChanges {
  @Output() productoActualizado = new EventEmitter<void>();
  @Input() producto: Product | null = null;

  productForm: FormGroup;
  categorias: Category[] = [];
  sucursales: Branch[] = [];
  ofertas: Offer[] = [];
  loading = false;
  mensajeError: string | null = null;
  mensajeExito: string | null = null;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private branchService: BranchService,
    private productsService: ProductsService,
    private offerService: OfferService
  ) {
    this.productForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      categoriaId: ['', Validators.required],
      ofertaId: [null],
      imagenUrl: ['', this.validarUrlSiExiste],
      sucursalesSeleccionadas: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.cargarDatosRelacionados();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['producto'] && this.producto) {
      this.cargarDatosDelProducto();
    }
  }

  cargarDatosRelacionados(): void {
    this.categoryService.obtenerCategorias().subscribe(data => this.categorias = data);
    this.branchService.obtenerSucursal().subscribe(data => this.sucursales = data);
    this.offerService.obtenerOfertas().subscribe(data => this.ofertas = data);
  }

  cargarDatosDelProducto(): void {
    if (!this.producto) return;

    this.productForm.patchValue({
      nombre: this.producto.nombre,
      descripcion: this.producto.descripcion,
      precio: this.producto.precio,
      categoriaId: this.producto.categoria.id,
      ofertaId: this.producto.oferta?.id ?? null,
      imagenUrl: this.producto.imagenUrl,
    });

    this.sucursalesSeleccionadas.clear();
    this.producto.sucursales.forEach(sucursalProducto => {
      this.sucursalesSeleccionadas.push(this.fb.group({
        id: [sucursalProducto.sucursal.id, Validators.required],
        stock: [sucursalProducto.stock, [Validators.required, Validators.min(1)]]
      }));
    });
  }

  get sucursalesSeleccionadas() {
    return this.productForm.get('sucursalesSeleccionadas') as FormArray;
  }

  agregarSucursal() {
    const grupo = this.fb.group({
      id: [null, Validators.required],
      stock: [1, [Validators.required, Validators.min(1)]]
    });
    this.sucursalesSeleccionadas.push(grupo);
  }

  removerSucursal(index: number) {
    this.sucursalesSeleccionadas.removeAt(index);
  }

  obtenerSucursalesDisponiblesParaSelect(indexActual: number): Branch[] {
    const seleccionadas = this.sucursalesSeleccionadas.value
      .map((item: any, idx: number) => idx !== indexActual ? String(item.id) : null)
      .filter((id: string | null) => id !== null && id !== '');
    return this.sucursales.filter(s => !seleccionadas.includes(String(s.id)));
  }

  onSubmit() {
    if (this.productForm.invalid || !this.producto) {
      this.mensajeError = "El formulario contiene errores o no se ha seleccionado un producto.";
      return;
    }

    const formValue = this.productForm.value;

    const payload = {
      datosProducto: {
        nombre: formValue.nombre,
        descripcion: formValue.descripcion,
        precio: Number(formValue.precio),
        categoriaId: Number(formValue.categoriaId),
        ofertaId: formValue.ofertaId ? Number(formValue.ofertaId) : null,
        imagenUrl: formValue.imagenUrl
      },
      stockPorSucursal: formValue.sucursalesSeleccionadas.map((s: any) => ({
        sucursalId: Number(s.id),
        stock: Number(s.stock)
      }))
    };

    this.loading = true;
    this.mensajeError = null;
    this.mensajeExito = null;

    this.productsService.updateProduct(
  this.producto.id,
  payload.datosProducto,
  payload.stockPorSucursal
).subscribe({
  next: (res: any) => {
    console.log('Producto actualizado:', res);
    this.mensajeExito = 'Producto actualizado correctamente.';
    this.productoActualizado.emit();
    this.loading = false;
  },
  error: (err: any) => {
    console.error('Error actualizando:', err);
    this.mensajeError = 'Ocurrió un error al actualizar el producto.';
    this.loading = false;
  }
});
  }

  validarUrlSiExiste(control: AbstractControl): ValidationErrors | null {
    const valor = control.value;
    if (!valor || valor.trim() === '') {
      return null;
    }
    try {
      new URL(valor);
      return null;
    } catch {
      return { urlInvalida: true };
    }
  }
}
