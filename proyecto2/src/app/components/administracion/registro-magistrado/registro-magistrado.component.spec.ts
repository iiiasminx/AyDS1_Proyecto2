import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMagistradoComponent } from './registro-magistrado.component';

describe('RegistroMagistradoComponent', () => {
  let component: RegistroMagistradoComponent;
  let fixture: ComponentFixture<RegistroMagistradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroMagistradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMagistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
