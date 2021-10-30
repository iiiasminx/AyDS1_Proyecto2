import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirBoletinComponent } from './subir-boletin.component';

describe('SubirBoletinComponent', () => {
  let component: SubirBoletinComponent;
  let fixture: ComponentFixture<SubirBoletinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirBoletinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirBoletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
