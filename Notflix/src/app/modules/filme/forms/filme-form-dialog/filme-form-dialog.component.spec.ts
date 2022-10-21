import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeFormDialogComponent } from './filme-form-dialog.component';

describe('FilmeFormDialogComponent', () => {
  let component: FilmeFormDialogComponent;
  let fixture: ComponentFixture<FilmeFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmeFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmeFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
