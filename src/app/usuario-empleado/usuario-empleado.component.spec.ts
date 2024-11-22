import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEmpleadoComponent } from './usuario-empleado.component';

describe('UsuarioEmpleadoComponent', () => {
  let component: UsuarioEmpleadoComponent;
  let fixture: ComponentFixture<UsuarioEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioEmpleadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
