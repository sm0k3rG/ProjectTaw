import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { RecoverPasswordComponent } from './recover-password.component';
import { AuthService } from '../../../core/services/auth.service';
import Swal from 'sweetalert2';

describe('RecoverPasswordComponent', () => {
  let component: RecoverPasswordComponent;
  let fixture: ComponentFixture<RecoverPasswordComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['solicitarRecuperacionContraseña']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [RecoverPasswordComponent, ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RecoverPasswordComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty form', () => {
    expect(component.recuperarForm.get('email')?.value).toBe('');
    expect(component.isLoading).toBeFalse();
    expect(component.emailEnviado).toBeFalse();
  });

  it('should validate email field as required', () => {
    const emailControl = component.recuperarForm.get('email');
    expect(emailControl?.errors?.['required']).toBeTruthy();
  });

  it('should validate email format', () => {
    const emailControl = component.recuperarForm.get('email');
    emailControl?.setValue('invalid-email');
    expect(emailControl?.errors?.['email']).toBeTruthy();
  });

  it('should accept valid email format', () => {
    const emailControl = component.recuperarForm.get('email');
    emailControl?.setValue('test@example.com');
    expect(emailControl?.errors).toBeNull();
  });

  it('should call solicitarRecuperacionContraseña when form is valid', () => {
    const testEmail = 'test@example.com';
    authService.solicitarRecuperacionContraseña.and.returnValue(of({}));

    component.recuperarForm.get('email')?.setValue(testEmail);
    component.enviarSolicitudRecuperacion();

    expect(authService.solicitarRecuperacionContraseña).toHaveBeenCalledWith(testEmail);
  });

  it('should set isLoading to true when sending request', () => {
    authService.solicitarRecuperacionContraseña.and.returnValue(of({}));

    component.recuperarForm.get('email')?.setValue('test@example.com');
    component.enviarSolicitudRecuperacion();

    expect(component.isLoading).toBeTrue();
  });

  it('should handle successful password recovery request', () => {
    spyOn(Swal, 'fire').and.returnValue(Promise.resolve({}));
    authService.solicitarRecuperacionContraseña.and.returnValue(of({}));

    component.recuperarForm.get('email')?.setValue('test@example.com');
    component.enviarSolicitudRecuperacion();

    expect(component.isLoading).toBeFalse();
    expect(component.emailEnviado).toBeTrue();
    expect(Swal.fire).toHaveBeenCalledWith({
      icon: 'success',
      title: '¡Solicitud enviada!',
      text: 'Se ha enviado un enlace de recuperación a tu correo electrónico.',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#0071ce'
    });
  });

  it('should handle 404 error (user not found)', () => {
    spyOn(Swal, 'fire').and.returnValue(Promise.resolve({}));
    const error = { status: 404 };
    authService.solicitarRecuperacionContraseña.and.returnValue(throwError(() => error));

    component.recuperarForm.get('email')?.setValue('test@example.com');
    component.enviarSolicitudRecuperacion();

    expect(component.isLoading).toBeFalse();
    expect(Swal.fire).toHaveBeenCalledWith({
      icon: 'error',
      title: 'Error',
      text: 'No se encontró una cuenta con este correo electrónico',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#dc3545'
    });
  });

  it('should handle 429 error (too many requests)', () => {
    spyOn(Swal, 'fire').and.returnValue(Promise.resolve({}));
    const error = { status: 429 };
    authService.solicitarRecuperacionContraseña.and.returnValue(throwError(() => error));

    component.recuperarForm.get('email')?.setValue('test@example.com');
    component.enviarSolicitudRecuperacion();

    expect(component.isLoading).toBeFalse();
    expect(Swal.fire).toHaveBeenCalledWith({
      icon: 'error',
      title: 'Error',
      text: 'Demasiadas solicitudes. Intenta nuevamente en unos minutos',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#dc3545'
    });
  });

  it('should handle generic error', () => {
    spyOn(Swal, 'fire').and.returnValue(Promise.resolve({}));
    const error = { status: 500 };
    authService.solicitarRecuperacionContraseña.and.returnValue(throwError(() => error));

    component.recuperarForm.get('email')?.setValue('test@example.com');
    component.enviarSolicitudRecuperacion();

    expect(component.isLoading).toBeFalse();
    expect(Swal.fire).toHaveBeenCalledWith({
      icon: 'error',
      title: 'Error',
      text: 'Error al enviar la solicitud de recuperación',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#dc3545'
    });
  });

  it('should show validation error when form is invalid', () => {
    spyOn(Swal, 'fire').and.returnValue(Promise.resolve({}));
    spyOn(component as any, 'marcarFormularioComoTocado');

    component.enviarSolicitudRecuperacion();

    expect(component['marcarFormularioComoTocado']).toHaveBeenCalled();
    expect(Swal.fire).toHaveBeenCalledWith({
      icon: 'error',
      title: 'Error de validación',
      text: 'Por favor, ingresa un correo electrónico válido',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#dc3545'
    });
  });

  it('should navigate to login page when volverAlLogin is called', () => {
    component.volverAlLogin();
    expect(router.navigate).toHaveBeenCalledWith(['/auth/login']);
  });

  it('should mark form as touched when marcarFormularioComoTocado is called', () => {
    const emailControl = component.recuperarForm.get('email');
    spyOn(emailControl!, 'markAsTouched');

    component['marcarFormularioComoTocado']();

    expect(emailControl?.markAsTouched).toHaveBeenCalled();
  });

  it('should return email control from getter', () => {
    const emailControl = component.email;
    expect(emailControl).toBe(component.recuperarForm.get('email'));
  });

  it('should disable form inputs when loading', () => {
    component.isLoading = true;
    fixture.detectChanges();

    const emailInput = fixture.nativeElement.querySelector('input[type="email"]');
    expect(emailInput.disabled).toBeTrue();
  });

  it('should show loading spinner when isLoading is true', () => {
    component.isLoading = true;
    fixture.detectChanges();

    const loadingText = fixture.nativeElement.textContent;
    expect(loadingText).toContain('Enviando...');
  });

  it('should show info section when emailEnviado is true', () => {
    component.emailEnviado = true;
    fixture.detectChanges();

    const infoSection = fixture.nativeElement.querySelector('.info-section');
    expect(infoSection).toBeTruthy();
  });

  it('should not show info section when emailEnviado is false', () => {
    component.emailEnviado = false;
    fixture.detectChanges();

    const infoSection = fixture.nativeElement.querySelector('.info-section');
    expect(infoSection).toBeFalsy();
  });
});
