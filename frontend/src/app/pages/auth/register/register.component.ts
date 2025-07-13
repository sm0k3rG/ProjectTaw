import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import Swal from 'sweetalert2';

function validarRut(control: AbstractControl): ValidationErrors | null {
  const rut = control.value;
  if (!rut) return null;
  // Validación básica de RUT chileno
  const rutClean = rut.replace(/[^0-9kK]/g, '').toUpperCase();
  if (!/^\d{7,8}[0-9K]$/.test(rutClean)) return { invalidRut: true };
  let body = rutClean.slice(0, -1);
  let dv = rutClean.slice(-1);
  let sum = 0, mul = 2;
  for (let i = body.length - 1; i >= 0; i--) {
    sum += parseInt(body[i]) * mul;
    mul = mul === 7 ? 2 : mul + 1;
  }
  let expectedDvNum = 11 - (sum % 11);
  let expectedDv = expectedDvNum === 11 ? '0' : expectedDvNum === 10 ? 'K' : expectedDvNum.toString();
  if (dv !== expectedDv) return { invalidRut: true };
  return null;
}

function validarCoincidenciaContraseña(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password')?.value;
  const confirm = group.get('confirmPassword')?.value;
  return password === confirm ? null : { passwordMismatch: true };
}

const REGIONES_COMUNAS = [
  {
    nombre: 'Región de Arica y Parinacota',
    comunas: ['Arica', 'Camarones', 'Putre', 'General Lagos']
  },
  {
    nombre: 'Región de Tarapacá',
    comunas: ['Iquique', 'Alto Hospicio', 'Pozo Almonte', 'Camiña', 'Colchane', 'Huara', 'Pica']
  },
  {
    nombre: 'Región de Antofagasta',
    comunas: ['Antofagasta', 'Mejillones', 'Sierra Gorda', 'Taltal', 'Calama', 'Ollagüe', 'San Pedro de Atacama', 'Tocopilla', 'María Elena']
  },
  {
    nombre: 'Región de Atacama',
    comunas: ['Copiapó', 'Caldera', 'Tierra Amarilla', 'Chañaral', 'Diego de Almagro', 'Vallenar', 'Alto del Carmen', 'Freirina', 'Huasco']
  },
  {
    nombre: 'Región de Coquimbo',
    comunas: ['La Serena', 'Coquimbo', 'Andacollo', 'La Higuera', 'Paiguano', 'Vicuña', 'Illapel', 'Canela', 'Los Vilos', 'Salamanca', 'Ovalle', 'Combarbalá', 'Monte Patria', 'Punitaqui', 'Río Hurtado']
  },
  {
    nombre: 'Región de Valparaíso',
    comunas: [
      'Valparaíso', 'Casablanca', 'Concón', 'Juan Fernández', 'Puchuncaví', 'Quintero', 'Viña del Mar',
      'Isla de Pascua', 'Los Andes', 'Calle Larga', 'Rinconada', 'San Esteban', 'La Ligua', 'Cabildo',
      'Papudo', 'Petorca', 'Zapallar', 'Quillota', 'Calera', 'Hijuelas', 'La Cruz', 'Nogales',
      'San Antonio', 'Algarrobo', 'Cartagena', 'El Quisco', 'El Tabo', 'San Antonio', 'Santo Domingo',
      'San Felipe', 'Catemu', 'Llaillay', 'Panquehue', 'Putaendo', 'Santa María', 'Quilpué', 'Limache', 'Olmué', 'Villa Alemana'
    ]
  },
  {
    nombre: 'Región del Libertador General Bernardo O’Higgins',
    comunas: [
      'Rancagua', 'Codegua', 'Coinco', 'Coltauco', 'Doñihue', 'Graneros', 'Las Cabras', 'Machalí', 'Malloa', 'Mostazal', 'Olivar', 'Peumo', 'Pichidegua', 'Quinta de Tilcoco', 'Rengo', 'Requínoa', 'San Vicente',
      'Pichilemu', 'La Estrella', 'Litueche', 'Marchigüe', 'Navidad', 'Paredones', 'San Fernando', 'Chépica', 'Chimbarongo', 'Lolol', 'Nancagua', 'Palmilla', 'Peralillo', 'Placilla', 'Pumanque', 'Santa Cruz'
    ]
  },
  {
    nombre: 'Región del Maule',
    comunas: [
      'Talca', 'Constitución', 'Curepto', 'Empedrado', 'Maule', 'Pelarco', 'Pencahue', 'Río Claro', 'San Clemente', 'San Rafael',
      'Cauquenes', 'Chanco', 'Pelluhue', 'Curicó', 'Hualañé', 'Licantén', 'Molina', 'Rauco', 'Romeral', 'Sagrada Familia', 'Teno', 'Vichuquén',
      'Linares', 'Colbún', 'Longaví', 'Parral', 'Retiro', 'San Javier', 'Villa Alegre', 'Yerbas Buenas'
    ]
  },
  {
    nombre: 'Región de Ñuble',
    comunas: [
      'Chillán', 'Bulnes', 'Cobquecura', 'Coelemu', 'Coihueco', 'El Carmen', 'Ninhue', 'Ñiquén', 'Pemuco', 'Pinto', 'Portezuelo', 'Quillón', 'Quirihue', 'Ránquil', 'San Carlos', 'San Fabián', 'San Ignacio', 'San Nicolás', 'Treguaco', 'Yungay'
    ]
  },
  {
    nombre: 'Región del Biobío',
    comunas: [
      'Concepción', 'Coronel', 'Chiguayante', 'Florida', 'Hualpén', 'Hualqui', 'Lota', 'Penco', 'San Pedro de la Paz', 'Santa Juana', 'Talcahuano', 'Tomé',
      'Hualqui', 'Lota', 'Penco', 'San Pedro de la Paz', 'Santa Juana', 'Talcahuano', 'Tomé', 'Arauco', 'Cañete', 'Contulmo', 'Curanilahue', 'Lebu', 'Los Álamos', 'Tirúa',
      'Los Ángeles', 'Antuco', 'Cabrero', 'Laja', 'Mulchén', 'Nacimiento', 'Negrete', 'Quilaco', 'Quilleco', 'San Rosendo', 'Santa Bárbara', 'Tucapel', 'Yumbel', 'Alto Biobío'
    ]
  },
  {
    nombre: 'Región de La Araucanía',
    comunas: [
      'Temuco', 'Carahue', 'Cunco', 'Curarrehue', 'Freire', 'Galvarino', 'Gorbea', 'Lautaro', 'Loncoche', 'Melipeuco', 'Nueva Imperial', 'Padre Las Casas', 'Perquenco', 'Pitrufquén', 'Pucón', 'Saavedra', 'Teodoro Schmidt', 'Toltén', 'Vilcún', 'Villarrica',
      'Angol', 'Collipulli', 'Curacautín', 'Ercilla', 'Lonquimay', 'Los Sauces', 'Lumaco', 'Purén', 'Renaico', 'Traiguén', 'Victoria'
    ]
  },
  {
    nombre: 'Región de Los Ríos',
    comunas: [
      'Valdivia', 'Corral', 'Lanco', 'Los Lagos', 'Máfil', 'Mariquina', 'Paillaco', 'Panguipulli', 'La Unión', 'Futrono', 'Lago Ranco', 'Río Bueno'
    ]
  },
  {
    nombre: 'Región de Los Lagos',
    comunas: [
      'Puerto Montt', 'Calbuco', 'Cochamó', 'Fresia', 'Frutillar', 'Los Muermos', 'Llanquihue', 'Maullín', 'Puerto Varas',
      'Castro', 'Ancud', 'Chonchi', 'Curaco de Vélez', 'Dalcahue', 'Puqueldón', 'Queilén', 'Quellón', 'Quemchi', 'Quinchao',
      'Osorno', 'Puerto Octay', 'Purranque', 'Puyehue', 'Río Negro', 'San Juan de la Costa', 'San Pablo', 'Chaitén', 'Futaleufú', 'Hualaihué', 'Palena'
    ]
  },
  {
    nombre: 'Región de Aysén del General Carlos Ibáñez del Campo',
    comunas: [
      'Coyhaique', 'Lago Verde', 'Aysén', 'Cisnes', 'Guaitecas', 'Cochrane', 'O\'Higgins', 'Tortel', 'Chile Chico', 'Río Ibáñez'
    ]
  },
  {
    nombre: 'Región de Magallanes y de la Antártica Chilena',
    comunas: [
      'Punta Arenas', 'Laguna Blanca', 'Río Verde', 'San Gregorio', 'Cabo de Hornos', 'Antártica', 'Porvenir', 'Primavera', 'Timaukel', 'Natales', 'Torres del Paine'
    ]
  },
  {
    nombre: 'Región Metropolitana de Santiago',
    comunas: [
      'Cerrillos', 'Cerro Navia', 'Conchalí', 'El Bosque', 'Estación Central', 'Huechuraba', 'Independencia', 'La Cisterna', 'La Florida',
      'La Granja', 'La Pintana', 'La Reina', 'Las Condes', 'Lo Barnechea', 'Lo Espejo', 'Lo Prado', 'Macul', 'Maipú', 'Ñuñoa', 'Pedro Aguirre Cerda',
      'Peñalolén', 'Providencia', 'Pudahuel', 'Quilicura', 'Quinta Normal', 'Recoleta', 'Renca', 'San Joaquín', 'San Miguel', 'San Ramón',
      'Santiago', 'Vitacura', 'Puente Alto', 'Pirque', 'San José de Maipo', 'Colina', 'Lampa', 'Tiltil', 'San Bernardo', 'Buin', 'Calera de Tango',
      'Paine', 'Melipilla', 'Alhué', 'Curacaví', 'María Pinto', 'San Pedro', 'Talagante', 'El Monte', 'Isla de Maipo', 'Padre Hurtado', 'Peñaflor'
    ]
  }
];
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  isLoading = false;
  regiones = REGIONES_COMUNAS;
  comunasPorDireccion: string[][] = [[...REGIONES_COMUNAS[0].comunas]];

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      rut: ['', [Validators.required, validarRut]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      telefono: ['', Validators.required],
      tarjetas: ['', Validators.required],
      direcciones: this.fb.array([
        this.fb.group({
          calle: ['', Validators.required],
          numero: ['', Validators.required],
          comuna: ['', Validators.required],
          region: ['', Validators.required],
        })
      ])
    }, { validators: validarCoincidenciaContraseña });
  }

  get direcciones() {
    return this.registerForm.get('direcciones') as FormArray;
  }

  agregarDireccion() {
    this.direcciones.push(this.fb.group({
      calle: ['', Validators.required],
      numero: ['', Validators.required],
      comuna: ['', Validators.required],
      region: ['', Validators.required],
    }));
    this.comunasPorDireccion.push([]);
  }

  eliminarDireccion(index: number) {
    if (this.direcciones.length > 1) {
      this.direcciones.removeAt(index);
      this.comunasPorDireccion.splice(index, 1);
    }
  }

  alCambiarRegion(index: number) {
    const region = this.direcciones.at(index).get('region')?.value;
    const regionObj = this.regiones.find(r => r.nombre === region);
    this.comunasPorDireccion[index] = regionObj ? regionObj.comunas : [];
    // Limpiar comuna seleccionada si cambia la región
    this.direcciones.at(index).get('comuna')?.setValue('');
  }

  enviarFormulario() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      Swal.fire({ icon: 'error', title: 'Error', text: 'Completa todos los campos correctamente.' });
      return;
    }
    this.isLoading = true;
    const { nombre, rut, email, password, telefono, tarjetas, direcciones } = this.registerForm.value;
    this.authService.register({ nombre, rut, email, password, telefono, tarjetas, direcciones }).subscribe({
      next: () => {
        this.isLoading = false;
        Swal.fire({ icon: 'success', title: '¡Registro exitoso!', text: 'Ahora puedes iniciar sesión.' });
        this.registerForm.reset();
      },
      error: (err) => {
        this.isLoading = false;
        Swal.fire({ icon: 'error', title: 'Error', text: 'No se pudo registrar el usuario.' });
      }
    });
  }
}
