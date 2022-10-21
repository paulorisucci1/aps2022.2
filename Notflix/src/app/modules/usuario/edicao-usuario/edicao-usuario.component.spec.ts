import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoUsuarioComponent } from './edicao-usuario.component';

describe('EdicaoUsuarioComponent', () => {
  let component: EdicaoUsuarioComponent;
  let fixture: ComponentFixture<EdicaoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicaoUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicaoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
