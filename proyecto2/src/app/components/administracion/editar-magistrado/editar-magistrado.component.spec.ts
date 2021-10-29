import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMagistradoComponent } from './editar-magistrado.component';

describe('EditarMagistradoComponent', () => {
  let component: EditarMagistradoComponent;
  let fixture: ComponentFixture<EditarMagistradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarMagistradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMagistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
