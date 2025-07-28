import { Component, OnInit } from '@angular/core';
import { CommonModule }      from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductsService }  from '../../../../services/products.service';
import { Product }          from '../../../../models/product.model';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule], // ← RouterModule opcional
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  loading = false;
  error   = false;
  success = false;  // bandera de confirmación
  private id!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,           // ← inyectamos Router por si quieres redirigir
    private productsService: ProductsService
  ) {
    this.form = this.fb.nonNullable.group({
      name:        ['', Validators.required],
      image:       ['', Validators.required],
      price:       [0,  [Validators.required, Validators.min(0)]],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadProduct();
  }

  /* Carga los datos y precarga el formulario */
  loadProduct(): void {
    this.loading = true;
    this.error   = false;

    this.productsService.getProductById(this.id).subscribe({
      next: (p: Product) => {
        this.form.patchValue({
          name:        p.nombre,
          image:       p.imagenUrl,
          price:       p.precio,
          description: p.descripcion ?? ''
        });
        this.loading = false;
      },
      error: () => {
        this.error   = true;
        this.loading = false;
      }
    });
  }

  /* Envía los cambios */
  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error   = false;

    this.productsService.updateProduct(this.id, this.form.value).subscribe({
      next: () => {
        this.success = true;
        this.loading = false;

        /** Oculta el banner y opcionalmente redirige */
        setTimeout(() => {
          this.success = false;
          // Descomenta si deseas volver a la lista de productos admin:
          // this.router.navigate(['/admin/products']);
        }, 3000);
      },
      error: () => {
        this.error   = true;
        this.loading = false;
      }
    });
  }
}


