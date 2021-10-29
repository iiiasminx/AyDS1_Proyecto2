import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMagistradoComponent } from './form-magistrado.component';

describe('FormMagistradoComponent', () => {
  let component: FormMagistradoComponent;
  let fixture: ComponentFixture<FormMagistradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMagistradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMagistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
